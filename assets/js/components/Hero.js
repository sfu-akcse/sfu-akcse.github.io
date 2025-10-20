(function registerHero(global) {
  const AKCSE = (global.AKCSE = global.AKCSE || {});
  const components = (AKCSE.components = AKCSE.components || {});

  components.Hero = function Hero({ copy, nav, language, onLanguageChange }) {
    return (
      <header className="hero" id="top">
        <div className="hero__overlay" aria-hidden="true"></div>
        <div className="hero__content">
          <div className="hero__branding">
            <h1>{copy.title}</h1>
            <p>{copy.subtitle}</p>
          </div>
          <nav className="hero__nav" aria-label="Primary navigation">
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
      </header>
    );
  };
})(window);
