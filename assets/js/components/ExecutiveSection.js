import { html, useState, useEffect, useRef } from '../lib/react.js';

export function ExecutiveSection({ copy, members, language }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef(null);
  const cardRefs = useRef([]);
  const getRole = (member) => (language === 'en' ? member.role : member.roleKo);
  const getBio = (member) => (language === 'en' ? member.bio : member.bioKo);
  const controls = copy.controls ?? {
    label: '',
    hint: '',
    position: () => '',
    previous: '',
    next: '',
  };
  const totalMembers = members.length;
  const hasMembers = totalMembers > 0;
  const displayIndex = hasMembers ? activeIndex + 1 : 0;
  const displayTotal = hasMembers ? totalMembers : 0;
  const disablePrev = !hasMembers || activeIndex === 0;
  const disableNext = !hasMembers || activeIndex === totalMembers - 1;

  useEffect(() => {
    cardRefs.current.length = totalMembers;
  }, [totalMembers]);

  const scrollToIndex = (index, { immediate = false } = {}) => {
    if (!hasMembers) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(index, totalMembers - 1));
    const viewportEl = viewportRef.current;
    const cardEl = cardRefs.current[nextIndex];

    if (viewportEl && cardEl) {
      cardEl.scrollIntoView({
        behavior: immediate ? 'auto' : 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }

    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    if (totalMembers > 0) {
      scrollToIndex(0, { immediate: true });
    }
  }, [language, totalMembers]);

  const handleKeyNavigation = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollToIndex(activeIndex - 1);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollToIndex(activeIndex + 1);
    }
  };

  const handleScroll = () => {
    const viewportEl = viewportRef.current;
    if (!viewportEl) {
      return;
    }

    const scrollCenter = viewportEl.scrollLeft + viewportEl.clientWidth / 2;
    let closestIndex = activeIndex;
    let smallestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((cardEl, index) => {
      if (!cardEl) {
        return;
      }

      const cardCenter = cardEl.offsetLeft + cardEl.offsetWidth / 2;
      const distance = Math.abs(cardCenter - scrollCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  return html`<section id="executive" className="section">
    <div className="section__container section__container--executive">
      <div className="executive-intro">
        <h2>${copy.heading}</h2>
        <p>${copy.body}</p>
      </div>
      <div className="executive-gallery">
        <div className="executive-gallery__stage">
          <button
            type="button"
            className="executive-gallery__arrow executive-gallery__arrow--prev"
            onClick=${() => scrollToIndex(activeIndex - 1)}
            disabled=${disablePrev}
            aria-label=${controls.previous}
          >
            ←
          </button>
          <div
            className="executive-gallery__viewport"
            role="list"
            aria-label=${controls.label}
            tabIndex="0"
            onKeyDown=${handleKeyNavigation}
            onScroll=${handleScroll}
            ref=${viewportRef}
          >
            ${members.map(
              (member, index) => html`<article
                className="executive-card"
                key=${member.name}
                role="listitem"
                tabIndex=${index === activeIndex ? 0 : -1}
                ref=${(el) => {
                  cardRefs.current[index] = el;
                }}
                onFocus=${() => setActiveIndex(index)}
              >
                <img
                  className="executive-card__image"
                  src=${member.image}
                  alt=${copy.placeholderAlt(member.name)}
                />
                <div className="executive-card__meta">
                  <h3>${member.name}</h3>
                  <p className="executive-card__role">${getRole(member)}</p>
                </div>
                <p className="executive-card__bio">${getBio(member)}</p>
              </article>`
            )}
          </div>
          <button
            type="button"
            className="executive-gallery__arrow executive-gallery__arrow--next"
            onClick=${() => scrollToIndex(activeIndex + 1)}
            disabled=${disableNext}
            aria-label=${controls.next}
          >
            →
          </button>
        </div>
        <span className="executive-gallery__status" role="status" aria-live="polite">
          ${hasMembers ? controls.position(displayIndex, displayTotal) : ''}
        </span>
        ${controls.hint
          ? html`<p className="executive-gallery__hint">${controls.hint}</p>`
          : null}
      </div>
    </div>
  </section>`;
}
