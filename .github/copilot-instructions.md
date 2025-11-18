# GitHub Copilot Instructions for this repository

These instructions are for AI coding agents working in this repo (TimInTech/Web).

## Project overview

- This is a **simple static web project** with its main entry point at `index.html` in the repo root.
- There is **no backend** and **no build system** here by default (no npm, webpack, etc.). Assume **plain HTML/CSS/JS** unless new tooling is explicitly added.
- Check `README.md` for the human-facing project description and goals before making non-trivial changes.

## Existing AI / prompt conventions

- The file `codex_prompt.txt` contains **project-specific AI guidance**.
  - **Always read and respect `codex_prompt.txt` first.**
  - Do not generate code or refactors that contradict rules or constraints defined there.
- If anything in these Copilot instructions conflicts with `codex_prompt.txt`, **treat `codex_prompt.txt` as the source of truth** and adjust accordingly.

## File & structure conventions

- Keep the site primarily driven from **`index.html` in the repo root**.
- When editing or extending the page:
  - **Preserve the existing HTML structure and style** (indentation, attribute order, use of single vs. double quotes, etc.) as seen in `index.html`.
  - Use **semantic HTML** in the same way `index.html` already does (e.g., if it uses `<section>`, `<header>`, `<main>`, follow that pattern when adding content).
- Only introduce **additional files** (e.g., `styles.css`, `script.js`) if:
  - The existing code already links to them, or
  - The instructions in `README.md` or `codex_prompt.txt` clearly allow or encourage it.

## JavaScript & CSS patterns

- If `index.html` currently uses **inline `<script>` or `<style>` blocks**, follow that pattern for small additions rather than introducing new files.
- If the page already links to **external CSS or JS files**, extend those existing files instead of creating new ones, unless there is a clear separation concern.
- Do **not** add heavy frameworks (e.g., React, Vue, large UI libraries) unless there is an explicit instruction in `README.md` or `codex_prompt.txt` allowing this. Default to **lightweight, vanilla JS**.

## Workflows: running & checking changes

- There is **no special build or test command** required:
  - Open `index.html` directly in a browser or via a simple static server (e.g., an editor's "Live Server" / "simple HTTP server") to verify changes.
- Always validate:
  - That the page renders without console errors.
  - That any links, navigation, or interactive elements you modify still work as expected.

## Style & content changes

- When modifying visible text or layout, keep changes **aligned with the tone and structure** implied by existing content and `README.md`.
- Before large refactors (e.g., reorganizing markup), prefer **small, incremental changes** that preserve current behavior and layout, unless there is a clear reason (bug or requirement) to do more.

---

If any of these sections feel too generic for how you actually work in this repo (for example, if you do have a build tool, extra HTML files, or specific JS/CSS patterns), tell me what's missing or inaccurate and I'll refine the instructions to better match your actual setup.
