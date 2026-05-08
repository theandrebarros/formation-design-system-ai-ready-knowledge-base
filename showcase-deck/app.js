/* ─── Formation Prototyping Showcase — Navigation & Video ─────────────────── */

const TOTAL = 11;

const SECTIONS = [
  { id: 'section-1',        label: 'Cover',                    video: null },
  { id: 'section-overview', label: 'Overview',                 video: null },
  { id: 'section-2',        label: 'FM · Template',            video: 'videos/02-figma-make-template.mp4' },
  { id: 'section-3',  label: 'FM · From design file',    video: 'videos/03-figma-make-from-design.mp4' },
  { id: 'section-4',  label: 'FM · Natural language',    video: 'videos/04-figma-make-natural-language.mp4' },
  { id: 'section-5',  label: 'FM · Net-new',             video: 'videos/05-figma-make-net-new.mp4' },
  { id: 'section-6',  label: 'Chapter — Lovable',        video: null },
  { id: 'section-7',  label: 'LV · Template',            video: 'videos/07-lovable-template.mp4' },
  { id: 'section-8',  label: 'LV · From design file',    video: 'videos/08-lovable-from-design.mp4' },
  { id: 'section-9',  label: 'LV · Net-new',             video: 'videos/09-lovable-net-new.mp4' },
  { id: 'section-10', label: 'Close',                    video: null },
];

let current = 0;

/* ─── DOM refs ────────────────────────────────────────────────────────────── */
const $sections = document.getElementById('sections');
const $dotsContainer = document.getElementById('nav-dots');
const $toc = document.getElementById('toc');
const $btnPrev = document.getElementById('btn-prev');
const $btnNext = document.getElementById('btn-next');
const $fabPrev = document.getElementById('fab-prev');
const $fabNext = document.getElementById('fab-next');

const mobileQuery = window.matchMedia('(max-width: 900px)');
const coverVid = document.querySelector('.cover-bg-video');

/* ─── Build nav dots ─────────────────────────────────────────────────────── */
SECTIONS.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.className = 'nav-dot';
  dot.setAttribute('role', 'tab');
  dot.setAttribute('aria-label', `Section ${i + 1}`);
  dot.addEventListener('click', () => goTo(i));
  $dotsContainer.appendChild(dot);
});

/* ─── Build TOC ──────────────────────────────────────────────────────────── */
SECTIONS.forEach((s, i) => {
  const item = document.createElement('div');
  item.className = 'toc-item';
  item.setAttribute('role', 'button');
  item.setAttribute('tabindex', '0');
  item.setAttribute('aria-label', s.label);
  item.innerHTML = `<span class="toc-dot"></span><span class="toc-label">${s.label}</span>`;
  item.addEventListener('click', () => goTo(i));
  item.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') goTo(i); });
  $toc.appendChild(item);
});

/* ─── SVG icons ──────────────────────────────────────────────────────────── */
const ICON_PAUSE = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="4" height="18" rx="1"/><rect x="15" y="3" width="4" height="18" rx="1"/></svg>`;
const ICON_PLAY  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg>`;
const ICON_FS    = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`;
const ICON_EXIT  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/></svg>`;

/* ─── Inject controls into every scenario video frame ────────────────────── */
function injectControls(frame, index) {
  const ctrl = document.createElement('div');
  ctrl.className = 'video-controls';

  const ppBtn = document.createElement('button');
  ppBtn.className = 'video-ctrl-btn';
  ppBtn.title = 'Play / Pause';
  ppBtn.innerHTML = ICON_PAUSE; /* starts paused until video loads / plays */

  const fsBtn = document.createElement('button');
  fsBtn.className = 'video-ctrl-btn';
  fsBtn.title = 'Fullscreen';
  fsBtn.innerHTML = ICON_FS;

  ppBtn.addEventListener('click', () => {
    const vid = videoEls[index];
    if (!vid) return;
    if (vid.paused) { vid.play(); ppBtn.innerHTML = ICON_PAUSE; }
    else            { vid.pause(); ppBtn.innerHTML = ICON_PLAY; }
  });

  fsBtn.addEventListener('click', () => {
    const target = frame;
    if (!document.fullscreenElement) {
      target.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    fsBtn.innerHTML = document.fullscreenElement ? ICON_EXIT : ICON_FS;
    fsBtn.title = document.fullscreenElement ? 'Exit fullscreen' : 'Fullscreen';
  });

  ctrl.appendChild(ppBtn);
  ctrl.appendChild(fsBtn);
  frame.appendChild(ctrl);
  return { ppBtn };
}

/* keep ppBtn refs so we can sync the icon when video state changes externally */
const controlRefs = {};

/* ─── Video element cache ────────────────────────────────────────────────── */
const videoEls = {};

function getOrCreateVideo(index) {
  if (videoEls[index]) return videoEls[index];
  const src = SECTIONS[index].video;
  if (!src) return null;

  const frame = document.getElementById(`video-frame-${index}`);
  if (!frame) return null;

  /* Inject controls once per frame (before the video element) */
  if (!controlRefs[index]) {
    controlRefs[index] = injectControls(frame, index);
  }

  const video = document.createElement('video');
  video.src = src;
  video.autoplay = false;
  video.preload = 'metadata';
  video.muted = true;
  video.loop = true;
  video.playsInline = true;

  video.addEventListener('error', () => {
    video.remove();
    delete videoEls[index];
  });

  video.addEventListener('canplay', () => {
    const placeholder = document.getElementById(`placeholder-${index}`);
    if (placeholder) placeholder.style.display = 'none';
    /* Insert before controls so controls stay on top */
    frame.insertBefore(video, frame.querySelector('.video-controls'));
  });

  /* Sync play/pause icon with actual video state */
  video.addEventListener('play',  () => { if (controlRefs[index]) controlRefs[index].ppBtn.innerHTML = ICON_PAUSE; });
  video.addEventListener('pause', () => { if (controlRefs[index]) controlRefs[index].ppBtn.innerHTML = ICON_PLAY; });

  video.load();
  videoEls[index] = video;
  return video;
}

function activateVideo(index) {
  const vid = getOrCreateVideo(index);
  if (vid && vid.paused) vid.play().catch(() => {});
}

function deactivateVideo(index) {
  const vid = videoEls[index];
  if (vid && !vid.paused) vid.pause();
}

/* ─── Core navigation ────────────────────────────────────────────────────── */
function goTo(next, direction) {
  if (next < 0 || next >= TOTAL || next === current) return;

  const dir = direction !== undefined ? direction : (next > current ? 1 : -1);
  const leaving = current;

  const $entering = document.querySelector(`[data-index="${next}"]`);

  current = next;

  /* Preload adjacent slides so first-visit doesn't flash a placeholder */
  [next - 1, next + 1].forEach(i => {
    if (i >= 0 && i < TOTAL && SECTIONS[i].video) getOrCreateVideo(i);
  });

  /* Cover bg video: only decode while slide 0 is visible */
  if (coverVid) {
    if (next === 0) coverVid.play().catch(() => {});
    else if (leaving === 0) coverVid.pause();
  }

  if (mobileQuery.matches) {
    /* On mobile sections are stacked — scroll the target into view.
       Lock the observer so mid-scroll intersection callbacks don't
       revert `current` to the section that's still filling the screen. */
    isScrolling = true;
    clearTimeout(scrollLockTimer);
    scrollLockTimer = setTimeout(() => { isScrolling = false; }, 900);
    if ($entering) $entering.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    /* Desktop: animate enter class then slide the container */
    if ($entering) {
      $entering.classList.add(dir > 0 ? 'entering-from-right' : 'entering-from-left');
      void $entering.offsetWidth;
    }
    $sections.style.willChange = 'transform';
    $sections.style.transform = `translateX(${-current * 100}vw)`;
    $sections.addEventListener('transitionend', () => {
      $sections.style.willChange = '';
    }, { once: true });
    requestAnimationFrame(() => {
      if ($entering) $entering.classList.remove('entering-from-right', 'entering-from-left');
    });
  }

  deactivateVideo(leaving);
  activateVideo(next);
  updateUI();
  pushHash(next);
  if (next === TOTAL - 1) launchConfetti();
}

/* ─── UI sync ────────────────────────────────────────────────────────────── */
function updateUI() {
  /* Dots */
  document.querySelectorAll('.nav-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === current);
  });

  /* TOC */
  document.querySelectorAll('.toc-item').forEach((item, i) => {
    item.classList.toggle('active', i === current);
  });

  /* Prev/Next buttons (desktop nav bar) */
  $btnPrev.disabled = current === 0;
  $btnNext.disabled = current === TOTAL - 1;

  /* Mobile FAB */
  if ($fabPrev) $fabPrev.disabled = current === 0;
  if ($fabNext) $fabNext.disabled = current === TOTAL - 1;
}

/* ─── Hash sync ──────────────────────────────────────────────────────────── */
function pushHash(index) {
  const id = SECTIONS[index].id;
  history.replaceState(null, '', `#${id}`);
}

function readHash() {
  const hash = location.hash.replace('#', '');
  if (!hash) return 0;
  const idx = SECTIONS.findIndex(s => s.id === hash);
  return idx >= 0 ? idx : 0;
}

/* ─── Keyboard ───────────────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    goTo(current + 1, 1);
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    goTo(current - 1, -1);
  } else if (e.key >= '1' && e.key <= '9') {
    goTo(parseInt(e.key, 10) - 1);
  } else if (e.key === '0') {
    goTo(9); /* 0 jumps to section 10 */
  }
});

/* ─── Button listeners ───────────────────────────────────────────────────── */
$btnPrev.addEventListener('click', () => goTo(current - 1, -1));
$btnNext.addEventListener('click', () => goTo(current + 1, 1));

/* ─── Mobile FAB listeners ───────────────────────────────────────────────── */
if ($fabPrev) $fabPrev.addEventListener('click', () => goTo(current - 1, -1));
if ($fabNext) $fabNext.addEventListener('click', () => goTo(current + 1, 1));

/* ─── Scroll-lock flag: prevents the observer overriding `current` mid-scroll */
let isScrolling = false;
let scrollLockTimer = null;

/* ─── IntersectionObserver: keep `current` in sync with scroll on mobile ── */
const sectionEls = Array.from(document.querySelectorAll('.section[data-index]'));

/* Track each section's current intersection ratio so we can always find the winner */
const sectionRatios = new Map(sectionEls.map(el => [el, 0]));

const visibilityObserver = new IntersectionObserver(entries => {
  if (!mobileQuery.matches) return;
  if (isScrolling) return;  /* goTo is in control — don't clobber current */

  /* Update ratios for any section whose visibility just changed */
  entries.forEach(entry => sectionRatios.set(entry.target, entry.intersectionRatio));

  /* Find the section with the most screen real-estate */
  let bestEl = null;
  let bestRatio = 0;
  sectionRatios.forEach((ratio, el) => {
    if (ratio > bestRatio) { bestRatio = ratio; bestEl = el; }
  });

  if (bestEl && bestRatio > 0.25) {
    const idx = parseInt(bestEl.dataset.index, 10);
    if (!isNaN(idx) && idx !== current) {
      current = idx;
      updateUI();
    }
  }
}, {
  threshold: [0, 0.25, 0.5, 0.75, 1],
});

sectionEls.forEach(el => visibilityObserver.observe(el));

/* ─── Touch swipe handler (mobile only) ─────────────────────────────────── */
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX;
  touchStartY = e.changedTouches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', e => {
  if (!mobileQuery.matches) return;
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;
  /* Only trigger if horizontal swipe dominates and exceeds threshold */
  if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
    goTo(dx < 0 ? current + 1 : current - 1, dx < 0 ? 1 : -1);
  }
}, { passive: true });

/* ─── Confetti ───────────────────────────────────────────────────────────── */
function launchConfetti() {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const COLORS = ['#0070EB','#128000','#F5C842','#ffffff','#0098FF','#FFDC2E'];
  const COUNT  = 110;
  const GRAVITY = 0.35;
  const DURATION = 3200; // ms

  const particles = Array.from({ length: COUNT }, () => ({
    x:    Math.random() * canvas.width,
    y:    Math.random() * canvas.height * -0.5,
    vx:   (Math.random() - 0.5) * 6,
    vy:   Math.random() * 4 + 2,
    w:    Math.random() * 8 + 5,
    h:    Math.random() * 4 + 3,
    rot:  Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.18,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    opacity: 1,
  }));

  const start = performance.now();

  function draw(now) {
    const elapsed = now - start;
    const progress = elapsed / DURATION;
    if (elapsed > DURATION) { canvas.remove(); return; }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += GRAVITY;
      p.rot += p.spin;
      p.opacity = Math.max(0, 1 - Math.pow(progress * 1.2, 2));

      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);
}

/* ─── goTo exposed to inline HTML ────────────────────────────────────────── */
window.goTo = goTo;

/* ─── TOC hover — delayed close so labels (outside #toc's box) stay open ── */
let tocCloseTimer = null;

function tocOpen()  { clearTimeout(tocCloseTimer); $toc.classList.add('toc--expanded'); }
function tocClose() { tocCloseTimer = setTimeout(() => $toc.classList.remove('toc--expanded'), 3000); }

$toc.addEventListener('mouseenter', tocOpen);
$toc.addEventListener('mousemove',  tocOpen);
$toc.addEventListener('mouseleave', tocClose);

document.addEventListener('click', e => {
  if ($toc.classList.contains('toc--expanded') && !$toc.contains(e.target)) {
    clearTimeout(tocCloseTimer);
    $toc.classList.remove('toc--expanded');
  }
});

/* Labels are positioned outside #toc's bounding box — attach directly */
function bindLabelHover() {
  document.querySelectorAll('.toc-label').forEach(label => {
    label.addEventListener('mouseenter', tocOpen);
    label.addEventListener('mouseleave', tocClose);
  });
}
/* Run after TOC items are built (same tick) */
requestAnimationFrame(bindLabelHover);

/* ─── Guidelines.md disclosure (Overview slide) ─────────────────────────── */
(function setupGuidelinesDisclosure() {
  const disclosure = document.querySelector('.guidelines-disclosure');
  if (!disclosure) return;

  const codeEl = document.getElementById('guidelines-code');
  const copyBtn = document.getElementById('guidelines-copy');
  const copyLabel = document.getElementById('guidelines-copy-label');
  const metaEl = document.getElementById('guidelines-meta');
  const hintEl = document.getElementById('guidelines-hint');
  const tabs = disclosure.querySelectorAll('.guidelines-tab');

  const HINTS = {
    'figma-make': 'Paste into <strong>Figma Make</strong> → <code>...</code> menu → <strong>Adjust guidelines</strong>',
    'lovable':    'Paste into <strong>Lovable</strong> → project settings → <strong>Knowledge</strong> (or system prompt)<span class="hint-note">Same Formation rules — only the injection point differs.</span>',
  };

  function activateTab(tool) {
    tabs.forEach(btn => {
      const active = btn.dataset.tool === tool;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });
    if (hintEl) hintEl.innerHTML = HINTS[tool] || '';
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn.dataset.tool));
  });

  /* Set default hint on first paint */
  activateTab('figma-make');

  let loaded = false;
  let raw = '';

  function applyContent(text) {
    raw = text;
    codeEl.textContent = text;
    const sizeKb = (new Blob([text]).size / 1024).toFixed(1);
    const lineCount = text.split('\n').length;
    if (metaEl) metaEl.textContent = `${sizeKb} KB · ${lineCount} lines · Markdown`;
  }

  function readInline() {
    const inline = document.getElementById('guidelines-source');
    if (!inline) return null;
    let text = inline.textContent || '';
    text = text
      .replace(/^\s*<!--\s*GUIDELINES_BEGIN\s*-->\s*\n?/, '')
      .replace(/\n?\s*<!--\s*GUIDELINES_END\s*-->\s*$/, '')
      .replace(/<\\\/script>/g, '</script>');
    return text.trim() ? text : null;
  }

  function loadOnce() {
    if (loaded) return;
    loaded = true;

    const inline = readInline();
    if (inline) { applyContent(inline); return; }

    fetch('guidelines.md')
      .then(r => { if (!r.ok) throw new Error(r.status); return r.text(); })
      .then(applyContent)
      .catch(() => {
        codeEl.textContent = 'Could not load guidelines.md. Use the "Download raw file" link instead.';
      });
  }

  disclosure.addEventListener('toggle', () => { if (disclosure.open) loadOnce(); });

  copyBtn.addEventListener('click', async () => {
    if (!raw) { loadOnce(); return; }
    try {
      await navigator.clipboard.writeText(raw);
      copyBtn.classList.add('is-copied');
      copyLabel.textContent = 'Copied!';
      setTimeout(() => {
        copyBtn.classList.remove('is-copied');
        copyLabel.textContent = 'Copy to clipboard';
      }, 1800);
    } catch {
      copyLabel.textContent = 'Copy failed — use Download';
    }
  });
})();

/* ─── Animated guidelines disclosure ────────────────────────────────────── */
(function () {
  const disclosure = document.querySelector('.guidelines-disclosure');
  if (!disclosure) return;
  const panel = disclosure.querySelector('.guidelines-disclosure__panel');
  const summary = disclosure.querySelector('summary');

  function openDisclosure() {
    disclosure.setAttribute('open', '');
    panel.style.height = '0px';
    requestAnimationFrame(() => {
      panel.style.height = panel.scrollHeight + 'px';
      panel.addEventListener('transitionend', () => { panel.style.height = ''; }, { once: true });
    });
  }

  function closeDisclosure() {
    panel.style.height = panel.scrollHeight + 'px';
    panel.offsetHeight; // force reflow so browser commits the height before transitioning
    panel.style.height = '0px';
    panel.addEventListener('transitionend', () => {
      disclosure.removeAttribute('open');
      panel.style.height = '';
    }, { once: true });
  }

  summary.addEventListener('click', (e) => {
    e.preventDefault();
    disclosure.open ? closeDisclosure() : openDisclosure();
  });

  window.toggleGuidelinesDisclosure = function () {
    disclosure.open ? closeDisclosure() : openDisclosure();
  };
})();

/* ─── Init ───────────────────────────────────────────────────────────────── */
(function init() {
  const startIndex = readHash();

  /* Position container without animation on first load */
  $sections.style.transition = 'none';
  $sections.style.transform = `translateX(${-startIndex * 100}vw)`;
  current = startIndex;

  requestAnimationFrame(() => {
    $sections.style.transition = '';
    updateUI();
    activateVideo(startIndex);
    /* Preload adjacent slides so nav feels instant */
    [startIndex - 1, startIndex + 1].forEach(i => {
      if (i >= 0 && i < TOTAL && SECTIONS[i].video) getOrCreateVideo(i);
    });
    /* Cover bg video: pause immediately if not starting on slide 0 */
    if (coverVid && startIndex !== 0) coverVid.pause();
  });
})();
