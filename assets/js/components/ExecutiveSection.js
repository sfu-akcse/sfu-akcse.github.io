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

  useEffect(() => {
    const viewportEl = viewportRef.current;
    if (viewportEl) {
      viewportEl.scrollTop = 0;
    }
    setActiveIndex(0);
  }, [language, totalMembers]);

  const scrollToIndex = (index) => {
    if (!hasMembers) {
      return;
    }

    const nextIndex = Math.max(0, Math.min(index, totalMembers - 1));
    const viewportEl = viewportRef.current;
    const cardEl = cardRefs.current[nextIndex];

    if (viewportEl && cardEl) {
      cardEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      if (typeof cardEl.focus === 'function') {
        cardEl.focus();
      }
    }

    setActiveIndex(nextIndex);
  };

  const handleKeyNavigation = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      scrollToIndex(activeIndex - 1);
    }

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      scrollToIndex(activeIndex + 1);
    }
  };

  const handleScroll = () => {
    const viewportEl = viewportRef.current;
    if (!viewportEl) {
      return;
    }

    const scrollTop = viewportEl.scrollTop;
    const baseOffset = cardRefs.current[0]?.offsetTop ?? 0;
    let closestIndex = activeIndex;
    let smallestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((cardEl, index) => {
      if (!cardEl) {
        return;
      }

      const distance = Math.abs(cardEl.offsetTop - baseOffset - scrollTop);
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
      <div className="section__intro">
        <h2>${copy.heading}</h2>
        <p>${copy.body}</p>
      </div>
      <div className="executive-carousel">
        <div className="executive-carousel__stage">
          <button
            type="button"
            className="executive-carousel__arrow executive-carousel__arrow--prev"
            onClick=${() => scrollToIndex(activeIndex - 1)}
            disabled=${disablePrev}
            aria-label=${controls.previous}
          >
            ←
          </button>
          <div
            className="executive-carousel__viewport"
            role="list"
            aria-label=${controls.label}
            tabIndex="0"
            onKeyDown=${handleKeyNavigation}
            onScroll=${handleScroll}
            ref=${viewportRef}
          >
            ${members.map(
              (member, index) => html`<article
                className="executive-slide"
                key=${member.name}
                role="listitem"
                tabIndex=${index === activeIndex ? 0 : -1}
                ref=${(el) => {
                  cardRefs.current[index] = el;
                }}
                onFocus=${() => setActiveIndex(index)}
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
          <button
            type="button"
            className="executive-carousel__arrow executive-carousel__arrow--next"
            onClick=${() => scrollToIndex(activeIndex + 1)}
            disabled=${disableNext}
            aria-label=${controls.next}
          >
            →
          </button>
        </div>
        <span className="executive-carousel__status" role="status" aria-live="polite">
          ${hasMembers ? controls.position(displayIndex, displayTotal) : ''}
        </span>
        ${controls.hint
          ? html`<p className="executive-carousel__hint">${controls.hint}</p>`
          : null}
      </div>
    </div>
  </section>`;
}
