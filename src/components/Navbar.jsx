import { useState, useEffect } from 'react';
import { Hexagon, X } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'konteks', label: 'Konteks' },
  { id: 'pengrajin', label: 'Pengrajin' },
  { id: 'etika', label: 'Etika' },
  { id: 'sejarah', label: 'Sejarah' },
  { id: 'komitmen', label: 'Komitmen' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(id);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Navigasi utama">
      <div className="navbar__inner">
        <a
          href="#beranda"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); scrollToSection('beranda'); }}
          aria-label="Laweyan Beyond the Frame - Kembali ke beranda"
        >
          <span className="navbar__logo-icon">
            <Hexagon size={16} />
          </span>
          Laweyan
        </a>

        <div className={`navbar__links ${menuOpen ? 'open' : ''}`} role="menubar">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar__link ${activeSection === item.id ? 'active' : ''}`}
              role="menuitem"
              tabIndex={0}
              onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`navbar__overlay ${menuOpen ? 'visible' : ''}`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
