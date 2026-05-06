/* ─── Formation Prototyping Showcase — Navigation & Video ─────────────────── */

const TOTAL = 10;

const SECTIONS = [
  { id: 'section-1',  label: 'Cover',                    video: null },
  { id: 'section-2',  label: 'FM · Template',            video: 'videos/02-figma-make-template.mov' },
  { id: 'section-3',  label: 'FM · From design file',    video: 'videos/03-figma-make-from-design.mov' },
  { id: 'section-4',  label: 'FM · Natural language',    video: 'videos/04-figma-make-natural-language.mov' },
  { id: 'section-5',  label: 'FM · Net-new',             video: 'videos/05-figma-make-net-new.mov' },
  { id: 'section-6',  label: 'Chapter — Lovable',        video: null },
  { id: 'section-7',  label: 'LV · Template',            video: 'videos/07-lovable-template.mov' },
  { id: 'section-8',  label: 'LV · From design file',    video: 'videos/08-lovable-from-design.mov' },
  { id: 'section-9',  label: 'LV · Net-new',             video: 'videos/09-lovable-net-new.mov' },
  { id: 'section-10', label: 'Close',                    video: null },
];

let current = 0;

/* ─── DOM refs ────────────────────────────────────────────────────────────── */
const $sections = document.getElementById('sections');
const $dotsContainer = document.getElementById('nav-dots');
const $toc = document.getElementById('toc');
const $btnPrev = document.getElementById('btn-prev');
const $btnNext = document.getElementById('btn-next');

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
  video.autoplay = true;
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

  /* Animate leaving section */
  const $leaving = document.querySelector(`[data-index="${leaving}"]`);
  const $entering = document.querySelector(`[data-index="${next}"]`);

  if ($entering) {
    $entering.classList.add(dir > 0 ? 'entering-from-right' : 'entering-from-left');
    /* Force reflow so class is recognized before transition starts */
    void $entering.offsetWidth;
  }

  current = next;

  /* Slide the container */
  $sections.style.transform = `translateX(${-current * 100}vw)`;

  /* Trigger enter animation on the new section */
  requestAnimationFrame(() => {
    if ($entering) {
      $entering.classList.remove('entering-from-right', 'entering-from-left');
    }
  });

  deactivateVideo(leaving);
  activateVideo(next);
  updateUI();
  pushHash(next);
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

  /* Prev/Next buttons */
  $btnPrev.disabled = current === 0;
  $btnNext.disabled = current === TOTAL - 1;
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

/* ─── goTo exposed to inline HTML ────────────────────────────────────────── */
window.goTo = goTo;

/* ─── TOC hover — delayed close so labels (outside #toc's box) stay open ── */
let tocCloseTimer = null;

function tocOpen()  { clearTimeout(tocCloseTimer); $toc.classList.add('toc--expanded'); }
function tocClose() { tocCloseTimer = setTimeout(() => $toc.classList.remove('toc--expanded'), 3000); }

$toc.addEventListener('mouseenter', tocOpen);
$toc.addEventListener('mousemove',  tocOpen);
$toc.addEventListener('mouseleave', tocClose);

/* Labels are positioned outside #toc's bounding box — attach directly */
function bindLabelHover() {
  document.querySelectorAll('.toc-label').forEach(label => {
    label.addEventListener('mouseenter', tocOpen);
    label.addEventListener('mouseleave', tocClose);
  });
}
/* Run after TOC items are built (same tick) */
requestAnimationFrame(bindLabelHover);

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
  });
})();
