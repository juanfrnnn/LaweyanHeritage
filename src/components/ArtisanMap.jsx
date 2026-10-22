import { MapPin } from 'lucide-react';

/**
 * Map placeholder component for artisan locations.
 * Shows a clear placeholder when verified location data is not available.
 */
export default function ArtisanMap({ artisans }) {
  const hasVerifiedLocations = artisans.some(
    (a) => a.verified && a.coordinates
  );

  if (hasVerifiedLocations) {
    return (
      <div className="artisan-map">
        <div className="artisan-map__placeholder">
          <MapPin size={48} />
          <p>
            Peta interaktif tersedia. Integrasi Leaflet + OpenStreetMap dapat
            diaktifkan ketika data koordinat terverifikasi tersedia.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="artisan-map">
      <div className="artisan-map__placeholder">
        <MapPin size={48} />
        <p>
          <strong>Peta Lokasi Pengrajin</strong>
        </p>
        <p>
          Peta interaktif akan ditampilkan setelah data lokasi pengrajin
          diverifikasi. Saat ini, gunakan tombol &ldquo;Arah&rdquo; pada kartu pengrajin
          untuk membuka petunjuk arah di Google Maps.
        </p>
        <p style={{ fontSize: 'var(--fs-caption)', opacity: 0.6, marginTop: '0.5rem' }}>
          Untuk mengaktifkan peta: tambahkan koordinat terverifikasi dan set{' '}
          <code>verified: true</code> pada data pengrajin.
        </p>
      </div>
    </div>
  );
}
