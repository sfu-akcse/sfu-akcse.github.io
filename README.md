# SFU Association of Korean-Canadian Scientists and Engineers Website

This repository hosts the interactive React-powered website for the SFU Association of Korean-Canadian Scientists and Engineers (SFU AKCSE). The single-page experience includes bilingual (English and Korean) content, expandable event timelines, executive profiles with custom illustrations, and project highlights with external links.

## Structure

- `index.html` – Loads the React application with CDN-hosted React, ReactDOM, and Babel.
- `assets/css/style.css` – Global styles, layout primitives, and responsive design rules for the React components.
- `assets/js/` – Modularized React application source:
  - `main.js` – Entry point that mounts the React app.
  - `App.js` – Top-level composition of the hero, sections, and footer.
  - `components/` – Section-level React components.
  - `data/` – Structured content used by the UI.
  - `hooks/` – Custom React hooks (e.g., language persistence).
  - `i18n/` – Translation dictionaries for English and Korean.
- `assets/images/` – SVG illustrations used for event cards and executive placeholders.

## Local preview

Use any static file server to preview the site locally. For example:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

## Deployment

The site is published automatically through GitHub Pages using the workflow defined in `.github/workflows/deploy.yml`. Every push to `main` (or a manual workflow dispatch) uploads the static site artifact and deploys it to the `github-pages` environment. Ensure the repository has Pages configured to source from GitHub Actions.
