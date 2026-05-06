# 🤖 AI Automation

## Overview

The **FanDuel Development Knowledge Base** is a centralized, reusable repository of Formation Design System tokens, company patterns, approved tools, and project documentation. This knowledge base powers AI-driven development workflows by providing consistent, authoritative context across all FanDuel projects.

## Purpose

This knowledge base serves as:

- **Single Source of Truth** for Formation Design System tokens and specifications
- **Centralized Documentation** for company architecture patterns and standards
- **Reference Library** for approved MCP tools and Figma plugin patterns
- **Reusable Context** that reduces AI token usage by 60-70% across projects

## Structure

```
fanduel-ds-knowledge/
├── formation-ds/           # Formation Design System
│   ├── core/              # Colors, spacing, typography, radius
│   └── business-units/    # Casino, Sportsbook, Picks, etc.
├── company-patterns/      # Architecture patterns
│   └── architecture/      # Clean architecture, command pattern
├── approved-tools/        # Security-reviewed MCP servers
├── figma-specific/        # Figma plugin development
├── fanduel-projects/      # Project documentation
└── templates/            # Reusable templates
```

## Key Benefits

### Token Efficiency
- **60-70% reduction** in documentation token usage
- Essential context always available via `.cursorrules`
- Detailed documentation loaded only when needed

### Consistency
- Single source of truth for Formation Design System
- Same architecture patterns across all projects
- Standardized coding practices company-wide

### Maintainability
- Update once, apply everywhere
- Clear documentation structure
- Easy to find information

### Scalability
- Add 10 projects, shared knowledge loaded once
- New projects set up in 10 minutes
- No duplication of documentation

## How It Works

### 1. Centralized Repository
All shared knowledge lives in a single repository:
```
~/Documents/GitHub/fanduel-ds-knowledge/
```

### 2. Project Integration
Projects reference the knowledge base via `.cursorrules`:
```markdown
## Formation Design System
**Colors:** ~/Documents/GitHub/fanduel-ds-knowledge/formation-ds/core/colors.md
**Spacing:** ~/Documents/GitHub/fanduel-ds-knowledge/formation-ds/core/spacing.md
```

### 3. On-Demand Loading
AI agents load specific documentation only when needed, keeping token usage minimal while maintaining access to complete context.

### 4. Global Agent Skill
A Cursor agent skill provides instant access to all knowledge from any project:
```
~/.cursor/skills/fanduel-projects/SKILL.md
```

## Who Should Use This

### Frontend Developers
- Access Formation Design System tokens
- Validate design system compliance
- Build UI components with correct spacing, colors, typography

### Figma Plugin Developers
- Reference plugin architecture patterns
- Access reusable utilities from existing plugins
- Follow established Figma API patterns

### Full-Stack Developers
- Follow company architecture patterns
- Use approved MCP tools securely
- Apply consistent coding standards

### DevOps & Tools Teams
- Understand approved tooling
- Access MCP server configurations
- Reference security requirements

## Getting Started

See the following pages for detailed information:
- **[What It Contains](#)** - Complete inventory of knowledge base content
- **[How to Use It](#)** - Integration guide for projects
- **[Projects Using It](#)** - Real-world examples

## Related Resources

- **GitHub Repository**: `~/Documents/GitHub/fanduel-ds-knowledge/`
- **Formation Confluence**: https://fanduel.atlassian.net/wiki/spaces/FOR/pages/307655180988/Foundations

---

**Last Updated**: January 2026  
**Maintained by**: Formation Design System Team  
**Repository**: Formation Design System AI-Ready Knowledge Base
