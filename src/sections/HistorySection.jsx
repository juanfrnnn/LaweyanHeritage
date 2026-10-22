import Timeline from '../components/Timeline';
import { PANCASILA_SILA3 } from '../data/timeline';

export default function HistorySection() {
  return (
    <section id="sejarah" className="history-section section">
      <div className="container">
        <div className="history__header">
          <span className="section-label">Jejak Langkah Laweyan</span>
          <h2 className="section-title">Sebuah Kawasan yang Menyimpan<br />Ribuan Cerita</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Jelajahi perjalanan panjang Kampung Batik Laweyan — dari pusat perdagangan
            kain kuno hingga destinasi wisata budaya yang dikenal dunia. Klik setiap
            titik untuk membaca cerita lengkapnya.
          </p>
          <p style={{ fontSize: 'var(--fs-caption)', color: 'var(--text-muted)', marginTop: '1rem', fontStyle: 'italic' }}>
            ⚠ Beberapa informasi sejarah di bawah ini masih memerlukan verifikasi
            lebih lanjut oleh sejarawan atau peneliti lokal.
          </p>
        </div>

        <Timeline />

        {/* Pancasila connection */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '1.5rem 2rem',
            background: 'rgba(44,74,110,0.06)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(44,74,110,0.12)',
          }}
        >
          <span className="pancasila-badge">
            <span className="sila-number">{PANCASILA_SILA3.number}</span>
            Sila ke-{PANCASILA_SILA3.number}: {PANCASILA_SILA3.text}
          </span>
          <p style={{
            fontSize: 'var(--fs-small)',
            color: 'var(--text-secondary)',
            marginTop: '0.75rem',
            maxWidth: 650,
            margin: '0.75rem auto 0',
            lineHeight: 1.7,
          }}>
            {PANCASILA_SILA3.relevance}
          </p>
        </div>
      </div>
    </section>
  );
}
