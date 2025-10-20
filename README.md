# SFU Association of Korean-Canadian Scientists and Engineers Website

This repository hosts the interactive React-powered website for the SFU Association of Korean-Canadian Scientists and Engineers (SFU AKCSE). The single-page experience includes bilingual (English and Korean) content, expandable event timelines, executive profiles with custom illustrations, and project highlights with external links.

## Structure

- `index.html` – Loads the React application with CDN-hosted React, ReactDOM, and Babel, then executes the compiled module files in order.
- `assets/css/style.css` – Global styles, layout primitives, and responsive design rules for the React components.
- `assets/js/` – Modularized React application source registered on the global `window.AKCSE` namespace for browser execution:
  - `namespace.js` – Initializes the shared namespace used by every module.
  - `i18n/` – Translation dictionaries for English and Korean.
  - `data/` – Structured content used by the UI.
  - `hooks/` – Custom React hooks (e.g., language persistence).
  - `components/` – Section-level React components.
  - `App.js` – Top-level composition of the hero, sections, and footer.
  - `main.js` – Entry point that mounts the React app.
- `assets/images/` – SVG illustrations used for event cards and executive placeholders.

## Local preview

Use any static file server to preview the site locally. For example:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Deployment

The site is published automatically through GitHub Pages using the workflow defined in `.github/workflows/deploy.yml`. Every push to `main` (or a manual workflow dispatch) uploads the static site artifact and deploys it to the `github-pages` environment. Ensure the repository has Pages configured to source from GitHub Actions.
