import { X, MapPin, Phone, Link2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

/**
 * Modal component for displaying artisan profile details.
 * Traps focus inside the modal and supports Escape key to close.
 */
export default function ArtisanModal({ artisan, onClose }) {
  const modalRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    // Focus close button on mount
    if (closeRef.current) closeRef.current.focus();

    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!artisan) return null;

  const hasContact = artisan.contact?.phone || artisan.contact?.instagram || artisan.contact?.address;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail profil ${artisan.name}`}
    >
      <div className="modal" ref={modalRef}>
        <div className="modal__header">
          <div>
            <span className="artisan-card__category">{artisan.specialization}</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-h3)', fontWeight: 700, marginTop: '0.25rem' }}>
              {artisan.name}
            </h2>
          </div>
          <button
            className="modal__close"
            onClick={onClose}
            ref={closeRef}
            aria-label="Tutup modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal__body">
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-sm)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Pemilik:</strong> {artisan.owner}
          </p>

          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            {artisan.description}
          </p>

          {!artisan.verified && (
            <p style={{
              fontSize: 'var(--fs-caption)',
              color: 'var(--color-terracotta)',
              marginTop: 'var(--space-md)',
              padding: 'var(--space-sm) var(--space-md)',
              background: 'rgba(196, 96, 60, 0.08)',
              borderRadius: 'var(--radius-sm)',
            }}>
              ⚠ Data demonstrasi — informasi ini perlu diverifikasi sebelum digunakan secara publik.
            </p>
          )}

          {artisan.highlights && artisan.highlights.length > 0 && (
            <div className="modal__highlights">
              <h4>Keunggulan</h4>
              <ul>
                {artisan.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {hasContact && (
            <div className="modal__contact">
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-body)', fontWeight: 600, marginBottom: 'var(--space-md)' }}>
                Kontak & Lokasi
              </h4>

              {artisan.contact.address && (
                <div className="modal__contact-item">
                  <MapPin size={16} />
                  <span>{artisan.contact.address}</span>
                </div>
              )}

              {artisan.contact.phone && (
                <div className="modal__contact-item">
                  <Phone size={16} />
                  <a href={`tel:${artisan.contact.phone}`}>{artisan.contact.phone}</a>
                </div>
              )}

              {artisan.contact.instagram && (
                <div className="modal__contact-item">
                  <Link2 size={16} />
                  <a
                    href={`https://instagram.com/${artisan.contact.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {artisan.contact.instagram}
                  </a>
                </div>
              )}

              {artisan.contact.address && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(artisan.contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--small"
                  style={{ marginTop: 'var(--space-md)' }}
                >
                  <MapPin size={14} />
                  Buka di Google Maps
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
