# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **single-page static repository gallery** for GitHub Pages (`TimInTech/Web`). The entire application is implemented in a single `index.html` file with no backend, no build tooling, and no external dependencies. It displays a filterable/searchable grid of GitHub repositories with German UI.

**Key constraints:**
- Pure HTML/CSS/vanilla JavaScript only
- No API calls to GitHub or other services
- Repository data is manually maintained in the `REPOS` array inside `index.html`
- UI language is German

## Architecture

The application consists of:

1. **Sticky header** - Minimal branding and GitHub link
2. **Control bar** - Search input, sort dropdown, and result count
3. **Topic filter chips** - Auto-generated from repository topics
4. **Card grid** - Repository cards rendered from `REPOS` array
5. **Footer** - License and GitHub link

### JavaScript Architecture

The entire application logic lives in the inline `<script>` block in `index.html`:

- **State management** - Simple `state` object tracking `query`, `chip` (active topic filter), and `sort`
- **Rendering pipeline** - `apply()` function filters, sorts, and renders the grid
- **Helper functions:**
  - `placeholderSvg(name)` - Generates lightweight SVG preview images
  - `relTime(iso)` - Converts ISO dates to German relative time strings
  - `card(repo)` - Returns HTML string for a repository card
  - `renderChips()` - Generates topic filter buttons
  - `apply()` - Main filter/sort/render pipeline

### CSS Architecture

All styles are in the inline `<style>` block:

- **CSS custom properties** for theming: `--bg`, `--fg`, `--muted`, `--accent`, `--surface`, `--radius`, `--gap`
- **Dark minimalistic design** with accent green (`#00d27a`)
- **CSS Grid** for responsive card layout: `repeat(auto-fill, minmax(320px, 1fr))`
- **Mobile-first** with `@media(min-width: ...)` for desktop overrides
- **Accessibility features**: `:focus-visible` styles, `@media(prefers-reduced-motion)`, semantic HTML

## Common Development Tasks

### Viewing the site locally
Open `index.html` directly in a browser. No build step required.

### Adding a new repository
1. Edit the `REPOS` array in `index.html`
2. Add a new object with these required fields:
   ```javascript
   {
     name: 'repo-name',
     description: 'Description in German',
     language: 'JavaScript',
     stars: 0,
     forks: 0,
     topics: ['topic1', 'topic2'],
     license: 'MIT',
     updated: '2025-01-01T00:00:00.000Z',
     codeUrl: 'https://github.com/TimInTech/repo-name',
     demoUrl: 'https://example.com'
   }
   ```
3. Refresh the page

### Changing the default sort order
1. Locate the `state` object in the `<script>` block
2. Change `sort: 'updated'` to `sort: 'stars'` or `sort: 'name'`
3. Update the `<select id="sort">` default `selected` attribute to match

### Adjusting topic filter chips
Topic chips are auto-generated from the most frequent topics in `REPOS`. To show more or fewer:
- Find `.slice(0,8)` in the `renderChips()` function
- Change `8` to desired number

## Important Implementation Rules

### Performance
- Keep the page lightweight - no heavy dependencies, fonts, or frameworks
- Use SVG placeholders (from `placeholderSvg`) instead of large images
- Keep DOM structure flat - avoid unnecessary wrappers
- Consider lazy rendering for long lists of low-priority repos

### Repository Prioritization
- Important repos should appear first in the default view
- Default sort should be by stars (descending) with updated date as tie-breaker
- Less important/rarely updated repos should be de-emphasized
- Use data-driven logic (stars + updated date) rather than hard-coding specific repo names

### Code Style
- Use modern but widely-supported JavaScript: `const/let`, arrow functions, array methods
- No TypeScript, no bundler-specific features
- Keep functions pure where possible: pass data in, return new values, then render
- Maintain existing state management pattern with the `apply()` pipeline

### Keyboard Shortcuts
- `/` focuses search input (when not in another input)
- `Escape` clears search when focus is in search field

### Styling Conventions
- Reuse existing CSS custom properties for consistency
- Follow BEM-like naming for components (`.card`, `.card-body`, `.card-title`)
- Mobile-first with desktop overrides
- Maintain accessibility: semantic HTML, ARIA attributes, focus styles, reduced motion support

### Language
- All user-facing text must be in German
- Maintain consistent tone with existing UI copy

## File Structure

```
/
├── index.html          # Entire application (HTML + CSS + JS)
├── .github/
│   ├── copilot-instructions.md  # Detailed AI agent instructions
│   └── workflows/      # GitHub Pages workflows
└── README.md           # GitHub learning course content
```

## Zusätzlicher Kontext

Die Datei `.github/copilot-instructions.md` enthält detailliertere Implementierungsrichtlinien und sollte bei spezifischen Fragen konsultiert werden zu:
- Layout und responsivem Verhalten
- JavaScript-Mustern und State-Management
- CSS-Konventionen und Custom Properties
- Performance-Überlegungen
- Beispiel-Workflows

Dieses Repository war ursprünglich ein GitHub Pages Lernkurs, wurde aber zu einer persönlichen Repository-Galerie umfunktioniert.
