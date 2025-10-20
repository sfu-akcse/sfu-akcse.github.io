(function registerSiteFooter(global) {
  const AKCSE = (global.AKCSE = global.AKCSE || {});
  const components = (AKCSE.components = AKCSE.components || {});

  components.SiteFooter = function SiteFooter({ copy }) {
    return (
      <footer className="footer">
        <div className="footer__container">
          <p>{copy.text}</p>
          <a className="footer__to-top" href="#top">
            {copy.backToTop}
          </a>
        </div>
      </footer>
    );
  };
})(window);
