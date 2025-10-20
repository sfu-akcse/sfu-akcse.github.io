import { html, useState } from '../lib/react.js';

export function EventsSection({ copy, years }) {
  const [openYears, setOpenYears] = useState(() => {
    const initial = {};
    years.forEach((yearGroup, index) => {
      initial[yearGroup.year] = index === 0;
    });
    return initial;
  });

  const toggleYear = (year) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  const renderEventCard = (event) => {
    const details = copy.items[event.key];
    if (!details) return null;

    return html`<article className="event-card" key=${event.key}>
      <img src=${event.image} alt=${details.alt} />
      <div className="event-card__content">
        <h3>${details.title}</h3>
        <p>${details.body}</p>
        <a className="event-card__link" href=${event.link} target="_blank" rel="noopener noreferrer">
          ${details.link}
        </a>
      </div>
    </article>`;
  };

  return html`<section id="events" className="section section--light">
    <div className="section__container">
      <h2>${copy.heading}</h2>
      <p>${copy.body}</p>
      <div className="timeline">
        ${years.map(({ year, events }) => {
          const isOpen = Boolean(openYears[year]);
          const toggleLabel = isOpen ? copy.toggle.open : copy.toggle.closed;

          return html`<div className=${`event-dropbar ${isOpen ? 'is-open' : ''}`} key=${year}>
            <button
              type="button"
              className="event-dropbar__toggle"
              onClick=${() => toggleYear(year)}
              aria-expanded=${isOpen}
              aria-controls=${`events-${year}`}
              aria-label=${`${year} — ${toggleLabel}`}
            >
              <span>${year}</span>
              <span className="sr-only">${toggleLabel}</span>
              <span className="event-dropbar__icon" aria-hidden="true">▾</span>
            </button>
            <div className="event-dropbar__panel">
              <div
                className="event-dropbar__content"
                id=${`events-${year}`}
                role="region"
                aria-label=${`${year} ${copy.heading}`}
              >
                <div className="timeline__events">${events.map((event) => renderEventCard(event))}</div>
              </div>
            </div>
          </div>`;
        })}
      </div>
    </div>
  </section>`;
}
