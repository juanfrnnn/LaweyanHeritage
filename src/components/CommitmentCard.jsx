import { forwardRef } from 'react';

/**
 * Commitment card displayed after pledge is submitted.
 * Uses `forwardRef` so the parent can capture it as a PNG with html-to-image.
 */
const CommitmentCard = forwardRef(function CommitmentCard({ name, date }, ref) {
  return (
    <div className="commitment-card" ref={ref} id="commitment-card-capture">
      <div className="commitment-card__ornament">⬡ ✦ ⬡</div>
      <p className="commitment-card__title">Sertifikat Komitmen</p>
      <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
        Dengan bangga diberikan kepada
      </p>
      <p className="commitment-card__name">{name}</p>
      <p className="commitment-card__message">
        "Saya berkomitmen menjadi wisatawan yang menghargai sejarah, menghormati warga,
        dan mendukung pengrajin lokal di setiap destinasi yang saya kunjungi."
      </p>
      <p className="commitment-card__date">{date}</p>
      <div
        style={{
          width: '100%',
          height: '2px',
          background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-gold))',
          margin: '1rem 0',
          borderRadius: '1px',
        }}
      />
      <p className="commitment-card__campaign">
        #LaweyanBeyondTheFrame · #WisatawanPancasilais
      </p>
    </div>
  );
});

export default CommitmentCard;
