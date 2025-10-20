import { html } from '../lib/react.js';

export function AboutSection({ copy }) {
  return html`<section id="about" className="section section--light">
    <div className="section__container">
      <h2>${copy.heading}</h2>
      <p>${copy.body}</p>
      <div className="section__highlights">
        <article className="highlight">
          <h3>${copy.highlights.mission.title}</h3>
          <p>${copy.highlights.mission.body}</p>
        </article>
        <article className="highlight">
          <h3>${copy.highlights.community.title}</h3>
          <p>${copy.highlights.community.body}</p>
        </article>
        <article className="highlight">
          <h3>${copy.highlights.global.title}</h3>
          <p>${copy.highlights.global.body}</p>
        </article>
      </div>
    </div>
  </section>`;
}
