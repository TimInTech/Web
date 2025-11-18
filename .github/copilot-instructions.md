# GitHub Copilot Instructions for this repository

These instructions are for AI coding agents working in this repo (`TimInTech/Web`).

## Project overview

- Single-page **static repo gallery** for GitHub Pages, implemented entirely in `index.html`.
- No backend, no build tooling – assume **plain HTML/CSS/vanilla JS**.
- Repository data is **manually maintained** in a `REPOS` array inside the inline `<script>` in `index.html`.  
  - **Do not add API calls** to GitHub or other services.
- UI language is **German**; keep all visible texts in German unless you are explicitly asked to change that.

## Existing AI / prompt conventions

- `codex_prompt.txt` contains project-specific rules and design goals (minimalistic, fast, single-file, no API calls).
  - **Always read and respect `codex_prompt.txt` first.**
  - If there is any conflict, `codex_prompt.txt` is the **source of truth**.
- This file (`.github/copilot-instructions.md`) adds **implementation details** for working with `index.html`.

## Architecture & layout

- The page consists of:
  - A **minimal sticky header** with the brand and a GitHub link.
  - A **control bar** with search, sort dropdown and result count.
  - Optional **topic filter chips** below the controls.
  - A **card grid** that renders repositories from `REPOS`.
- The JS logic builds everything client-side from `REPOS` using helper functions like:
  - `placeholderSvg(name)` for lightweight SVG previews.
  - `relTime(iso)` for relative time strings.
  - `card(repo)` which returns the HTML string for a repo card.
  - `apply()` to filter, sort and render the grid.

## Top projects vs. "other" projects

- **Important requirement:** The visible layout should highlight **important repos first**:
  - Default sort for the main listing should be **by stars** (descending), with updated date as tie-breaker.
  - Less important / rarely updated / zero-star repos should **not dominate the top of the page**.
- When you introduce or adjust sectioning:
  - Use a **primary section** for "wichtige Projekte" (e.g. top N by stars/recency).
  - Put "unwichtige" or rarely touched repos behind **explicit user interaction** (e.g. `<details>` / "Mehr Repositories anzeigen" / dropdown).
  - Keep the logic for what is "important" derivable from the data in `REPOS` (stars + updated), not hard-coded by name.

## Performance & loading behaviour

- The page must **load quickly**, even on slower mobile devices:
  - Do not add heavy dependencies, fonts, or frameworks (no React/Vue, no external CSS frameworks).
  - Prefer **SVG placeholders** (from `placeholderSvg`) over large screenshot images.
  - Keep the DOM light: avoid unnecessary wrapper elements and deeply nested structures.
  - If you add sections (e.g. "wichtige Projekte" + "weitere Repos"), consider:
    - Rendering only the most important repos initially.
    - Rendering long tails of low-priority repos only when the user expands a section.
- Keep all CSS in the single `<style>` block and all JS in the single `<script>` block unless `codex_prompt.txt` says otherwise.

## JavaScript patterns

- Use the existing **state object** (`query`, `chip`, `sort`) and the `apply()` pipeline:
  - Extend `apply()` if you change how sorting or splitting into sections works.
  - Keep functions **pure where possible**: pass data in, return new arrays, then render.
- Use modern, but widely supported JS:
  - `const`/`let`, arrow functions, array methods (`map/filter/reduce/sort`).
  - No TypeScript, no bundler-specific features.
- Keep keyboard shortcuts:
  - `/` focuses search input (when not in another input).
  - `Escape` clears the search when focus is in the search field.

## Layout & responsive behaviour

- Layout is **CSS Grid** based:
  - `.grid` uses `repeat(auto-fill, minmax(...))` for responsive cards.
  - On narrow viewports (mobile), the grid collapses to a **single column**.
- Ensure any new sections (e.g. top projects vs. "all others") are:
  - Fully responsive (test ~360–420px width and desktop widths).
  - Keyboard and screen-reader friendly (use `<section>`, `<h2>`, `aria-*` where appropriate).

## Style & content changes

- Dark, minimalistic design with accent green (`#00d27a`) should be preserved:
  - Avoid introducing many new colors; reuse existing CSS variables where possible.
  - Cards should stay **clean and airy**: generous padding, few borders, subtle shadows only on hover.
- When changing copy/text, keep the **tone and terminology** consistent with existing German UI text.
- Prefer **small, incremental changes**:
  - If you want to redesign a larger area (e.g. new "wichtige Projekte" section), first introduce it behind a flag or in a separate block so behaviour can be tested easily.

## CSS conventions

- Use existing **CSS custom properties** (`--bg`, `--fg`, `--muted`, `--surface`, `--border`, `--accent`) for consistency.
- Follow the current **naming pattern**:
  - BEM-like for components (`.card`, `.card-body`, `.card-title`).
  - Utility classes where appropriate (`.visually-hidden`).
- Keep styles **mobile-first** with `@media(min-width: ...)` for desktop overrides.
- Maintain **accessibility**:
  - `:focus-visible` styles for keyboard navigation.
  - `@media(prefers-reduced-motion: reduce)` to disable animations.
  - Proper semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

## Example workflows

### Adding a new repository to the gallery
1. Edit the `REPOS` array in `index.html`.
2. Add a new object with required fields: `name`, `description`, `language`, `stars`, `forks`, `topics`, `license`, `updated`, `codeUrl`, `demoUrl`.
3. Refresh the page – no build step needed.

### Changing the default sort order
1. Locate the `state` object: `{ query:'', chip:null, sort:'updated' }`.
2. Change `sort:'updated'` to `sort:'stars'` or `sort:'name'`.
3. Update the `<select>` default `selected` attribute to match.

### Adding a new topic filter
1. Topics are auto-generated from all `topics` arrays in `REPOS`.
2. The top 8 most frequent topics become chips automatically.
3. To show more, increase the `.slice(0,8)` limit in `topTopics`.

---

If any of these points feel inaccurate (z.B. die genaue Trennung „wichtige vs. andere" Repos oder wie das Dropdown aussehen soll), tell me what's missing or wrong and I'll refine the instructions.
