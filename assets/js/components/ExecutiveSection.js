import { html, useState, useEffect, useRef } from '../lib/react.js';

export function ExecutiveSection({ copy, members, language }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef(null);
  const getRole = (member) => (language === 'en' ? member.role : member.roleKo);
  const getBio = (member) => (language === 'en' ? member.bio : member.bioKo);
  const controls = copy.controls ?? {
    label: '',
    selectionLabel: '',
    hint: '',
    position: () => '',
    previous: '',
    next: '',
  };
  const totalMembers = members.length;
  const hasMembers = totalMembers > 0;
  const rawSlidePercent = hasMembers ? 100 / totalMembers : 100;
  const slidePercent = Number(rawSlidePercent.toFixed(4));
  const trackWidthPercent = hasMembers ? totalMembers * 100 : 100;
  const offsetPercent = hasMembers ? activeIndex * slidePercent : 0;
  const displayIndex = hasMembers ? activeIndex + 1 : 0;
  const displayTotal = hasMembers ? totalMembers : 0;
  const disablePrev = !hasMembers || activeIndex === 0;
  const disableNext = !hasMembers || activeIndex === totalMembers - 1;

  useEffect(() => {
    setActiveIndex(0);
  }, [language]);

  useEffect(() => {
    if (activeIndex > totalMembers - 1) {
      setActiveIndex(Math.max(0, totalMembers - 1));
    }
  }, [activeIndex, totalMembers]);

  useEffect(() => {
    const viewportEl = viewportRef.current;
    if (!viewportEl) {
      return;
    }

    const slides = viewportEl.querySelectorAll('.executive-slide');
    const activeSlide = slides[activeIndex];
    if (activeSlide) {
      activeSlide.scrollTop = 0;
    }
  }, [activeIndex, language]);

  const goToIndex = (index) => {
    const nextIndex = Math.max(0, Math.min(index, totalMembers - 1));
    setActiveIndex(nextIndex);
  };

  const handleKeyNavigation = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goToIndex(activeIndex - 1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goToIndex(activeIndex + 1);
    }
  };

  return html`<section id="executive" className="section">
    <div className="section__container section__container--executive">
      <div className="section__intro">
        <h2>${copy.heading}</h2>
        <p>${copy.body}</p>
      </div>
      <div className="executive-carousel">
        <div className="executive-carousel__stage">
          <button
            type="button"
            className="executive-carousel__arrow executive-carousel__arrow--prev"
            onClick=${() => goToIndex(activeIndex - 1)}
            disabled=${disablePrev}
            aria-label=${controls.previous}
          >
            ←
          </button>
          <div
            className="executive-carousel__viewport"
            role="group"
            aria-roledescription="carousel"
            aria-label=${controls.label}
            tabIndex="0"
            onKeyDown=${handleKeyNavigation}
            ref=${viewportRef}
          >
            <div
              className="executive-carousel__track"
              style=${{
                width: `${trackWidthPercent}%`,
                transform: `translateX(-${offsetPercent}%)`,
              }}
            >
              ${members.map(
                (member, index) => html`<article
                  className=${`executive-slide ${index === activeIndex ? 'is-active' : ''}`}
                  key=${member.name}
                  aria-hidden=${index === activeIndex ? undefined : 'true'}
                  tabIndex=${index === activeIndex ? 0 : -1}
                  style=${{ width: `${slidePercent}%` }}
                >
                  <img
                    className="card__image"
                    src=${member.image}
                    alt=${copy.placeholderAlt(member.name)}
                  />
                  <div>
                    <h3>${member.name}</h3>
                    <p className="card__role">${getRole(member)}</p>
                  </div>
                  <p>${getBio(member)}</p>
                </article>`
              )}
            </div>
          </div>
          <button
            type="button"
            className="executive-carousel__arrow executive-carousel__arrow--next"
            onClick=${() => goToIndex(activeIndex + 1)}
            disabled=${disableNext}
            aria-label=${controls.next}
          >
            →
          </button>
          <span className="executive-carousel__status" role="status" aria-live="polite">
            ${controls.position(displayIndex, displayTotal)}
          </span>
        </div>
        <div className="executive-carousel__sidebar">
          <p className="executive-carousel__hint">${controls.hint}</p>
          <ol
            className="executive-carousel__list"
            aria-label=${controls.selectionLabel}
            role="listbox"
            aria-orientation="vertical"
          >
            ${members.map(
              (member, index) => html`<li key=${`${member.name}-control`}>
                <button
                  type="button"
                  className=${`executive-carousel__name ${index === activeIndex ? 'is-active' : ''}`}
                  role="option"
                  aria-selected=${index === activeIndex ? 'true' : 'false'}
                  onClick=${() => goToIndex(index)}
                >
                  <span>${member.name}</span>
                  <span className="executive-carousel__role">${getRole(member)}</span>
                </button>
              </li>`
            )}
          </ol>
        </div>
      </div>
    </div>
  </section>`;
}
