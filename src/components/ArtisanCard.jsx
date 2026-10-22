import { User, MapPin, ExternalLink } from 'lucide-react';

/**
 * Artisan listing card with image placeholder, details, and action buttons.
 */
export default function ArtisanCard({ artisan, onViewDetail }) {
  return (
    <article className="card artisan-card" aria-label={`Pengrajin: ${artisan.name}`}>
      <div className="artisan-card__image-wrap">
        {artisan.image ? (
          <img
            src={artisan.image}
            alt={`${artisan.name} — ${artisan.specialization}`}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div className="artisan-card__image-placeholder" style={artisan.image ? { display: 'none' } : {}}>
          <User size={32} />
          <span>Foto belum tersedia</span>
        </div>
      </div>

      <div className="artisan-card__body">
        <span className="artisan-card__category">{artisan.specialization}</span>
        <h3 className="artisan-card__name">{artisan.name}</h3>
        <p className="artisan-card__owner">{artisan.owner}</p>
        <p className="artisan-card__desc">{artisan.description}</p>

        {!artisan.verified && (
          <p style={{ fontSize: 'var(--fs-caption)', color: 'var(--color-terracotta)', marginBottom: 'var(--space-sm)' }}>
            ⚠ Data demonstrasi — perlu verifikasi
          </p>
        )}

        <div className="artisan-card__actions">
          <button
            className="btn btn--primary btn--small"
            onClick={() => onViewDetail(artisan)}
            aria-label={`Lihat detail ${artisan.name}`}
          >
            Lihat Detail
          </button>

          {artisan.contact?.address && (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(artisan.contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary btn--small"
              aria-label={`Petunjuk arah ke ${artisan.name}`}
            >
              <MapPin size={14} />
              Arah
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
