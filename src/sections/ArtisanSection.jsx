import { useState } from 'react';
import { PackageSearch } from 'lucide-react';
import { ARTISANS } from '../data/artisans';
import ArtisanCard from '../components/ArtisanCard';
import ArtisanFilter from '../components/ArtisanFilter';
import ArtisanModal from '../components/ArtisanModal';
import ArtisanMap from '../components/ArtisanMap';

export default function ArtisanSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtisan, setSelectedArtisan] = useState(null);

  const filtered = ARTISANS.filter((a) => {
    const matchesCategory = activeCategory === 'all' || a.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      a.name.toLowerCase().includes(q) ||
      a.specialization.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="pengrajin" className="artisan-section section">
      <div className="container">
        <div className="artisan__header">
          <span className="section-label">Meet the Makers</span>
          <h2 className="section-title">Support the Heritage</h2>
          <p className="section-subtitle">
            Di balik setiap lembar batik yang indah ada tangan-tangan pengrajin
            yang terampil dan berdedikasi. Mengenal dan mendukung mereka adalah
            cara nyata melestarikan budaya Laweyan.
          </p>
        </div>

        <ArtisanFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <div className="artisan__grid" role="list" aria-label="Direktori pengrajin batik">
          {filtered.length > 0 ? (
            filtered.map((artisan) => (
              <div key={artisan.id} role="listitem">
                <ArtisanCard artisan={artisan} onViewDetail={setSelectedArtisan} />
              </div>
            ))
          ) : (
            <div className="artisan__empty">
              <PackageSearch size={48} />
              <p style={{ fontSize: 'var(--fs-body)', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                Pengrajin tidak ditemukan
              </p>
              <p style={{ fontSize: 'var(--fs-small)' }}>
                Coba ubah filter atau kata kunci pencarian.
              </p>
            </div>
          )}
        </div>

        <ArtisanMap artisans={ARTISANS} />

        <div className="artisan__disclaimer">
          <p>
            <strong>Catatan:</strong> Seluruh data pengrajin di atas adalah{' '}
            <strong>data demonstrasi</strong> untuk keperluan perancangan sistem.
            Nama, deskripsi, dan detail kontak perlu diverifikasi langsung dengan
            pengrajin bersangkutan sebelum dipublikasikan secara resmi.
          </p>
        </div>

        {/* Pancasila connection */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            padding: '1.5rem 2rem',
            background: 'rgba(44,74,110,0.06)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(44,74,110,0.12)',
          }}
        >
          <span className="pancasila-badge">
            <span className="sila-number">5</span>
            Sila ke-5: Keadilan Sosial bagi Seluruh Rakyat Indonesia
          </span>
          <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', marginTop: '0.75rem', maxWidth: 600, margin: '0.75rem auto 0' }}>
            Mendukung pengrajin lokal secara langsung adalah wujud nyata keadilan
            ekonomi — memastikan manfaat pariwisata menyentuh mereka yang paling
            berjasa dalam menjaga warisan budaya ini.
          </p>
        </div>
      </div>

      {selectedArtisan && (
        <ArtisanModal artisan={selectedArtisan} onClose={() => setSelectedArtisan(null)} />
      )}
    </section>
  );
}
