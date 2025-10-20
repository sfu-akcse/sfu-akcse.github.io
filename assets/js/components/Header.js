(function registerHeader(global) {
  const AKCSE = (global.AKCSE = global.AKCSE || {});
  const components = (AKCSE.components = AKCSE.components || {});

  components.Header = function Header({ copy, nav, language, onLanguageChange }) {
    return (
      <header className="site-header" id="top">
        <div className="site-header__background" aria-hidden="true"></div>
        <div className="site-header__inner">
          <div className="site-header__brand" role="banner">
            <div className="site-header__logo" aria-hidden="true">
              <span className="site-header__acronym">SFU AKCSE</span>
            </div>
            <div className="site-header__identity">
              <h1 className="site-header__title">{copy.title}</h1>
              <p className="site-header__tagline">{copy.subtitle}</p>
            </div>
          </div>
          <div className="site-header__controls">
            <nav className="site-header__nav" aria-label="Primary">
              <ul>
                <li>
                  <a href="#about">{nav.about}</a>
                </li>
                <li>
                  <a href="#executive">{nav.executive}</a>
                </li>
                <li>
                  <a href="#events">{nav.events}</a>
                </li>
                <li>
                  <a href="#projects">{nav.projects}</a>
                </li>
              </ul>
            </nav>
            <div className="language-toggle" role="group" aria-label="Language selector">
              <button
                type="button"
                className={`language-toggle__button ${language === 'en' ? 'is-active' : ''}`}
                onClick={() => onLanguageChange('en')}
              >
                EN
              </button>
              <button
                type="button"
                className={`language-toggle__button ${language === 'ko' ? 'is-active' : ''}`}
                onClick={() => onLanguageChange('ko')}
              >
                한국어
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };
})(window);
