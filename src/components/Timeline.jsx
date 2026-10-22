import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/timeline';

/**
 * Interactive timeline component.
 * Horizontal scroll on desktop, vertical on mobile.
 * Clicking a timeline item shows its detail card below.
 */
export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(null);

  const handleSelect = (event) => {
    setActiveEvent(activeEvent?.id === event.id ? null : event);
  };

  const handleKeyDown = (e, event) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSelect(event);
    }
  };

  return (
    <div className="timeline" role="group" aria-label="Timeline sejarah Laweyan">
      <div className="timeline__track">
        {TIMELINE_EVENTS.map((event) => (
          <div
            key={event.id}
            className={`timeline__item ${activeEvent?.id === event.id ? 'active' : ''}`}
            onClick={() => handleSelect(event)}
            onKeyDown={(e) => handleKeyDown(e, event)}
            tabIndex={0}
            role="button"
            aria-expanded={activeEvent?.id === event.id}
            aria-label={`${event.period}: ${event.title}`}
          >
            <div className="timeline__dot" aria-hidden="true" />
            <span className="timeline__period">{event.period}</span>
            <h3 className="timeline__title">{event.title}</h3>
            <p className="timeline__desc">{event.description}</p>
          </div>
        ))}
      </div>

      {activeEvent && (
        <div className="timeline__detail" aria-live="polite">
          <div className="timeline__detail-card">
            <span className="timeline__detail-period">{activeEvent.period}</span>
            <h3 className="timeline__detail-title">{activeEvent.title}</h3>
            <p className="timeline__detail-text">{activeEvent.detail}</p>

            {activeEvent.needsVerification && (
              <div className="timeline__verification">
                <AlertCircle size={14} />
                <span>Informasi ini perlu verifikasi lebih lanjut oleh sejarawan atau peneliti lokal.</span>
              </div>
            )}

            {activeEvent.sources && activeEvent.sources.length > 0 && (
              <div className="timeline__detail-sources">
                <h4>Sumber Rujukan</h4>
                <ul>
                  {activeEvent.sources.map((src, i) => (
                    <li key={i}>{src}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
