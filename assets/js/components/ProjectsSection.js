import { html } from '../lib/react.js';

export function ProjectsSection({ copy, projects, language }) {
  return html`<section id="projects" className="section">
    <div className="section__container">
      <h2>${copy.heading}</h2>
      <p>${copy.body}</p>
      <div className="grid grid--projects" role="list">
        ${projects.map(
          (project) => html`<article className="card" role="listitem" key=${project.name}>
            <img className="card__image" src=${project.image} alt=${language === 'en' ? project.altEn : project.altKo} />
            <h3>${language === 'en' ? project.name : project.nameKo}</h3>
            <p>${language === 'en' ? project.summary : project.summaryKo}</p>
            <a className="project-button" href=${project.link} target="_blank" rel="noopener noreferrer">
              ${copy.cta}
            </a>
          </article>`
        )}
      </div>
    </div>
  </section>`;
}
