import { html } from '../lib/react.js';

export function SiteFooter({ copy }) {
  return html`<footer className="site-footer">
    <div className="site-footer__container">
      <div className="site-footer__info">
        <div className="site-footer__mark" aria-hidden="true">AKCSE</div>
        <div className="site-footer__details">
          <p className="site-footer__legal">${copy.legal}</p>
          <p className="site-footer__tagline">${copy.tagline}</p>
        </div>
      </div>
      <a className="site-footer__back" href="#top">
        ${copy.backToTop}
        <span className="site-footer__back-icon" aria-hidden="true">↑</span>
      </a>
    </div>
  </footer>`;
}
