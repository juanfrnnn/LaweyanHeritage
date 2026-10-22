/**
 * DATA DEMONSTRASI — Direktori Pengrajin Batik Laweyan
 *
 * PENTING: Seluruh data di bawah ini adalah DATA CONTOH untuk keperluan demonstrasi.
 * Nama, deskripsi, spesialisasi, dan informasi kontak BUKAN data terverifikasi.
 * Sebelum digunakan secara publik, harap verifikasi langsung ke pengrajin/pengusaha terkait.
 *
 * Untuk memperbarui data:
 * 1. Ganti entri di array ARTISANS dengan data nyata yang sudah diverifikasi.
 * 2. Setiap entri memiliki field `verified: false` — ubah ke `true` setelah diverifikasi.
 * 3. Koordinat peta hanya ditampilkan jika `coordinates` terisi dan `verified` bernilai true.
 */

export const ARTISAN_CATEGORIES = [
  { id: 'all', label: 'Semua' },
  { id: 'batik-tulis', label: 'Batik Tulis' },
  { id: 'batik-cap', label: 'Batik Cap' },
  { id: 'pewarna-alam', label: 'Pewarna Alam' },
];

export const ARTISANS = [
  {
    id: 1,
    name: 'Batik Mahkota Laweyan',
    owner: 'Ibu Sari (Contoh)',
    description:
      'Showroom batik yang menampilkan berbagai koleksi batik tulis khas Laweyan dengan motif tradisional Solo. Menyediakan workshop membatik untuk pengunjung.',
    specialization: 'Batik Tulis',
    category: 'batik-tulis',
    image: null,
    contact: {
      phone: null,
      instagram: null,
      address: 'Jl. Sayangan Kulon, Laweyan, Surakarta (Contoh)',
    },
    coordinates: null,
    verified: false,
    highlights: [
      'Workshop membatik untuk wisatawan',
      'Koleksi motif tradisional Solo',
      'Teknik batik tulis generasi ke-3',
    ],
  },
  {
    id: 2,
    name: 'Batik Puspa Kencana',
    owner: 'Bapak Hadi (Contoh)',
    description:
      'Produsen batik cap dan tulis yang menggabungkan motif klasik Jawa dengan desain kontemporer. Menerima pesanan kustom dalam jumlah kecil maupun besar.',
    specialization: 'Batik Cap',
    category: 'batik-cap',
    image: null,
    contact: {
      phone: null,
      instagram: null,
      address: 'Kampung Laweyan, Surakarta (Contoh)',
    },
    coordinates: null,
    verified: false,
    highlights: [
      'Desain kontemporer dengan sentuhan klasik',
      'Menerima pesanan kustom',
      'Berpengalaman lebih dari 20 tahun',
    ],
  },
  {
    id: 3,
    name: 'Batik Warna Alam Laweyan',
    owner: 'Ibu Ratna (Contoh)',
    description:
      'Spesialis batik dengan pewarna alami dari tumbuhan lokal seperti indigo, mahoni, dan kunyit. Mengedepankan proses ramah lingkungan.',
    specialization: 'Pewarna Alam',
    category: 'pewarna-alam',
    image: null,
    contact: {
      phone: null,
      instagram: null,
      address: 'Laweyan, Surakarta (Contoh)',
    },
    coordinates: null,
    verified: false,
    highlights: [
      'Pewarna 100% alami',
      'Proses ramah lingkungan',
      'Edukasi pewarnaan alam untuk pengunjung',
    ],
  },
  {
    id: 4,
    name: 'Griya Batik Cempaka',
    owner: 'Keluarga Santoso (Contoh)',
    description:
      'Rumah produksi batik tulis premium yang mempertahankan teknik tradisional dari generasi ke generasi. Mengutamakan kualitas dan kehalusan motif.',
    specialization: 'Batik Tulis',
    category: 'batik-tulis',
    image: null,
    contact: {
      phone: null,
      instagram: null,
      address: 'Jl. Laweyan, Surakarta (Contoh)',
    },
    coordinates: null,
    verified: false,
    highlights: [
      'Batik tulis premium',
      'Teknik tradisional lintas generasi',
      'Motif eksklusif khas Laweyan',
    ],
  },
  {
    id: 5,
    name: 'Batik Sekar Jagad',
    owner: 'Ibu Dewi (Contoh)',
    description:
      'Pengrajin batik cap dengan variasi motif kaya, mulai dari motif klasik Sekar Jagad hingga motif fauna nusantara. Harga terjangkau untuk souvenir.',
    specialization: 'Batik Cap',
    category: 'batik-cap',
    image: null,
    contact: {
      phone: null,
      instagram: null,
      address: 'Laweyan, Surakarta (Contoh)',
    },
    coordinates: null,
    verified: false,
    highlights: [
      'Variasi motif yang kaya',
      'Harga terjangkau',
      'Cocok untuk oleh-oleh',
    ],
  },
  {
    id: 6,
    name: 'Batik Eco Laweyan',
    owner: 'Mas Andi (Contoh)',
    description:
      'Pelopor batik ramah lingkungan di Laweyan yang menggabungkan pewarna alam dengan teknik batik tulis. Aktif mengedukasi masyarakat tentang sustainable fashion.',
    specialization: 'Pewarna Alam',
    category: 'pewarna-alam',
    image: null,
    contact: {
      phone: null,
      instagram: null,
      address: 'Laweyan, Surakarta (Contoh)',
    },
    coordinates: null,
    verified: false,
    highlights: [
      'Sustainable fashion',
      'Kombinasi pewarna alam & batik tulis',
      'Program edukasi lingkungan',
    ],
  },
];
