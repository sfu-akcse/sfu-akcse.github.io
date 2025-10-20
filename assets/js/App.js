(function registerApp(global) {
  const AKCSE = (global.AKCSE = global.AKCSE || {});
  const { translations } = AKCSE.i18n;
  const { executiveMembers, eventYears, projectHighlights } = AKCSE.data;
  const { usePersistedLanguage } = AKCSE.hooks;
  const { Hero, AboutSection, ExecutiveSection, EventsSection, ProjectsSection, SiteFooter } = AKCSE.components;

  AKCSE.App = function App() {
    const [language, setLanguage] = usePersistedLanguage();
    const content = translations[language] || translations.en;

    return (
      <div className="page">
        <Hero copy={content.hero} nav={content.nav} language={language} onLanguageChange={setLanguage} />
        <main>
          <AboutSection copy={content.about} />
          <ExecutiveSection copy={content.executive} members={executiveMembers} language={language} />
          <EventsSection copy={content.events} years={eventYears} />
          <ProjectsSection copy={content.projects} projects={projectHighlights} language={language} />
        </main>
        <SiteFooter copy={content.footer} />
      </div>
    );
  };
})(window);