import { React, html } from './lib/react.js';
import { translations } from './i18n/translations.js';
import { executiveMembers } from './data/executiveMembers.js';
import { eventYears } from './data/eventYears.js';
import { projectHighlights } from './data/projectHighlights.js';
import { usePersistedLanguage } from './hooks/usePersistedLanguage.js';
import { Header } from './components/Header.js';
import { AboutSection } from './components/AboutSection.js';
import { ExecutiveSection } from './components/ExecutiveSection.js';
import { EventsSection } from './components/EventsSection.js';
import { ProjectsSection } from './components/ProjectsSection.js';
import { SiteFooter } from './components/SiteFooter.js';

export function App() {
  const [language, setLanguage] = usePersistedLanguage();
  const content = translations[language] || translations.en;

  return html`<div className="page">
    <${Header}
      copy=${content.header}
      nav=${content.nav}
      language=${language}
      onLanguageChange=${setLanguage}
    />
    <main>
      <${AboutSection} copy=${content.about} />
      <${ExecutiveSection} copy=${content.executive} members=${executiveMembers} language=${language} />
      <${EventsSection} copy=${content.events} years=${eventYears} />
      <${ProjectsSection} copy=${content.projects} projects=${projectHighlights} language=${language} />
    </main>
    <${SiteFooter} copy=${content.footer} />
  </div>`;
}
