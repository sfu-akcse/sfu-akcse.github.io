import { html } from '../lib/react.js';

export function ExecutiveSection({ copy, members, language }) {
  const getRole = (member) => (language === 'en' ? member.role : member.roleKo);
  const getBio = (member) => (language === 'en' ? member.bio : member.bioKo);

  return html`<section id="executive" className="section">
    <div className="section__container section__container--executive">
      <div className="section__intro">
        <h2>${copy.heading}</h2>
        <p>${copy.body}</p>
      </div>
      <div className="grid grid--executive" role="list">
        ${members.map(
          (member) => html`<article className="card" role="listitem" key=${member.name}>
            <img className="card__image" src=${member.image} alt=${copy.placeholderAlt(member.name)} />
            <h3>${member.name}</h3>
            <p className="card__role">${getRole(member)}</p>
            <p>${getBio(member)}</p>
          </article>`
        )}
      </div>
    </div>
  </section>`;
}
