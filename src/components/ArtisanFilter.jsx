import { Search } from 'lucide-react';
import { ARTISAN_CATEGORIES } from '../data/artisans';

/**
 * Filter bar and search input for the artisan directory.
 */
export default function ArtisanFilter({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className="artisan__controls">
      <div className="artisan__filters" role="group" aria-label="Filter kategori pengrajin">
        {ARTISAN_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`artisan__filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(cat.id)}
            aria-pressed={activeCategory === cat.id}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="artisan__search">
        <Search size={16} className="artisan__search-icon" aria-hidden="true" />
        <input
          type="search"
          placeholder="Cari nama atau spesialisasi..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Cari pengrajin batik"
          id="artisan-search"
        />
      </div>
    </div>
  );
}
