(function registerUsePersistedLanguage(global) {
  const AKCSE = (global.AKCSE = global.AKCSE || {});
  const hooks = (AKCSE.hooks = AKCSE.hooks || {});
  const { useState, useEffect } = global.React;

  hooks.usePersistedLanguage = function usePersistedLanguage() {
    const [language, setLanguage] = useState(() => {
      if (typeof window === 'undefined') return 'en';
      const stored = localStorage.getItem('akcse-language');
      const preferred = stored === 'ko' ? 'ko' : 'en';
      document.documentElement.setAttribute('lang', preferred);
      return preferred;
    });

    useEffect(() => {
      if (typeof window === 'undefined') return;
      const preferred = language === 'ko' ? 'ko' : 'en';
      localStorage.setItem('akcse-language', preferred);
      document.documentElement.setAttribute('lang', preferred);
      if (preferred !== language) {
        setLanguage(preferred);
      }
    }, [language]);

    return [language, setLanguage];
  };
})(window);
