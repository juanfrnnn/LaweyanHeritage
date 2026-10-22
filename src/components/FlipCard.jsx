import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import * as Icons from 'lucide-react';

/**
 * Accordion-style conduct card with expand/collapse interaction.
 * Supports click and keyboard (Enter/Space).
 */
export default function FlipCard({ item, type }) {
  const [isOpen, setIsOpen] = useState(false);

  // Dynamically resolve icon from lucide-react
  const IconComponent = Icons[item.icon] || Icons.HelpCircle;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`conduct-card conduct-card--${type}`}>
      <button
        className="conduct-card__trigger"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`conduct-content-${item.id}`}
      >
        <div className="conduct-card__icon">
          <IconComponent size={20} />
        </div>
        <span className="conduct-card__title">{item.title}</span>
        <ChevronDown
          size={18}
          className={`conduct-card__chevron ${isOpen ? 'open' : ''}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={`conduct-content-${item.id}`}
        className={`conduct-card__content ${isOpen ? 'open' : ''}`}
        role="region"
      >
        <p className="conduct-card__text">{item.description}</p>
        <p className="conduct-card__sila">
          ✦ Sila ke-2: {item.spiDetail}
        </p>
      </div>
    </div>
  );
}
