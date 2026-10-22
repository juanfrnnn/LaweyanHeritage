import { ArrowDown, BookOpen, Image } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function HeroSection() {
  return (
    <section id="beranda" className="hero section">
      <div className="container">
        <div className="hero__content">
          {/* Text side */}
          <div className="hero__text animate-fade-in-up">
            <span className="hero__campaign-label">
              ✦ Digital Heritage Campaign
            </span>

            <h1 className="hero__title">
              Laweyan Is More<br />
              Than a <em>Frame.</em>
            </h1>

            <p className="hero__description">
              Di balik setiap gang bersejarah, motif batik yang halus, dan tembok
              tua yang megah, ada kehidupan masyarakat, warisan budaya bangsa, dan
              pengrajin lokal yang perlu didukung — bukan sekadar dijadikan latar
              foto media sosial.
            </p>

            <div className="hero__actions">
              <button
                className="btn btn--primary btn--large"
                onClick={() => scrollTo('konteks')}
              >
                <ArrowDown size={18} />
                Jelajahi Cerita
              </button>
              <button
                className="btn btn--secondary btn--large"
                onClick={() => scrollTo('etika')}
              >
                <BookOpen size={18} />
                Kenali Etika Berkunjung
              </button>
            </div>

            <div className="hero__meta">
              <div className="hero__meta-item">
                <span className="hero__meta-label">Lokasi</span>
                <span className="hero__meta-value">Laweyan, Surakarta</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Kampanye</span>
                <span className="hero__meta-value">#BeyondTheFrame</span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-label">Nilai</span>
                <span className="hero__meta-value">Pancasila</span>
              </div>
            </div>
          </div>

          {/* Visual side */}
          <div className="hero__visual">
            <div className="hero__image-placeholder">
              <Image size={48} />
              <p>Kampung Batik Laweyan</p>
              <span>
                Ganti dengan foto arsitektur berlisensi Laweyan
              </span>
            </div>
          </div>
        </div>

        {/* Before-After Slider */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>
            Geser untuk melihat perbedaan perspektif
          </p>
          <BeforeAfterSlider
            beforeLabel="Wisata Foto"
            afterLabel="Wisata Bermakna"
          />
          <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-muted)', marginTop: '1rem' }}>
            ← Geser slider ke kiri dan kanan untuk membandingkan dua perspektif wisata →
          </p>
        </div>
      </div>
    </section>
  );
}
