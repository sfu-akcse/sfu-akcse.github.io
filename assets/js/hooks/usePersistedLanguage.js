const React = window.React;
const { useState, useEffect } = React;

export function usePersistedLanguage() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'en';
    return localStorage.getItem('akcse-language') || 'en';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('akcse-language', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return [language, setLanguage];
}
