import { Camera, MessageCircle, Globe } from 'lucide-react';

const SOCIAL_LINKS = [
  // Fill in real URLs when the campaign accounts are created
  { icon: Camera, label: 'Instagram', url: null },
  { icon: MessageCircle, label: 'Twitter / X', url: null },
  { icon: Globe, label: 'Facebook', url: null },
];

const NAV_SECTIONS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'konteks', label: 'Konteks Budaya' },
  { id: 'pengrajin', label: 'Direktori Pengrajin' },
  { id: 'etika', label: 'Etika Berkunjung' },
  { id: 'sejarah', label: 'Jejak Sejarah' },
  { id: 'komitmen', label: 'Komitmen' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <p className="footer__logo">Laweyan: Beyond the Frame</p>
            <p className="footer__brand-text">
              Kampanye digital heritage untuk meningkatkan kesadaran wisatawan
              terhadap sejarah, etika berkunjung, dan pemberdayaan ekonomi
              pengrajin batik lokal di Kampung Batik Laweyan, Surakarta.
            </p>
            <div className="footer__social" style={{ marginTop: '1rem' }}>
              {SOCIAL_LINKS.map(({ icon: Icon, label, url }) =>
                url ? (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ) : (
                  <span
                    key={label}
                    className="footer__social-link"
                    aria-label={`${label} — tautan belum tersedia`}
                    title={`${label} — tautan belum tersedia`}
                    style={{ opacity: 0.3, cursor: 'default' }}
                  >
                    <Icon size={18} />
                  </span>
                )
              )}
            </div>
          </div>

          <div>
            <p className="footer__nav-title">Navigasi</p>
            {NAV_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="footer__nav-link"
                onClick={(e) => { e.preventDefault(); scrollTo(s.id); }}
              >
                {s.label}
              </a>
            ))}
          </div>

          <div>
            <p className="footer__nav-title">Informasi</p>
            <p style={{ fontSize: 'var(--fs-small)', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              Kunjungi Kampung Batik Laweyan secara bertanggung jawab.
              Hormati warga, dukung pengrajin, dan jaga warisan budaya.
            </p>
            <p style={{ fontSize: 'var(--fs-caption)', color: 'rgba(255,255,255,0.25)', marginTop: '1rem', lineHeight: 1.6 }}>
              Kampung Batik Laweyan<br />
              Kecamatan Laweyan<br />
              Kota Surakarta, Jawa Tengah
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Laweyan: Beyond the Frame. Proyek Kampanye Digital Heritage.
          </p>
          <p className="footer__disclaimer">
            Data direktori pengrajin dan informasi sejarah adalah data demonstrasi
            yang perlu diverifikasi. Kredit foto: placeholder — ganti dengan
            sumber berlisensi saat dipublikasikan.
          </p>
        </div>
      </div>
    </footer>
  );
}
