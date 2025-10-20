import { html } from '../lib/react.js';

export function SiteFooter({ copy }) {
  return html`<footer className="site-footer">
    <div className="site-footer__container">
      <p>${copy.text}</p>
      <a className="site-footer__back" href="#top">${copy.backToTop}</a>
    </div>
  </footer>`;
}
