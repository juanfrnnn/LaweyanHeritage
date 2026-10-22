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
    owner: 'Ir. Alpha Febela',
    description:
      'Rumah produksi batik legendaris di Laweyan yang terkenal dengan inovasi motif batik tulis abstrak, motif klasik kontemporer, serta pusat riset dan edukasi batik.',
    specialization: 'Batik Tulis Klasik & Abstrak',
    category: 'batik-tulis',
    image: null,
    contact: {
      phone: '+628112633884',
      instagram: '@batikmahkota',
      address: 'Jl. Sayangan No. 9, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.5672, lng: 110.7968 },
    verified: true,
    highlights: [
      'Pelopor motif batik abstrak geometri',
      'Pusat workshop dan edukasi batik',
      'Generasi penerus pembatik sejarah Laweyan',
    ],
  },
  {
    id: 2,
    name: 'Batik Putra Laweyan',
    owner: 'H. Mufti Raharjo',
    description:
      'Produsen batik cap dan kombinasi terkemuka di Laweyan dengan ragam motif geometris dan floral modern, melayani pemesanan seragam skala besar maupun eceran.',
    specialization: 'Batik Cap & Kombinasi',
    category: 'batik-cap',
    image: null,
    contact: {
      phone: '+628122612400',
      instagram: '@batikputralaweyan',
      address: 'Jl. Sidoluhur No. 31, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.5681, lng: 110.7955 },
    verified: true,
    highlights: [
      'Spesialis batik cap presisi tinggi',
      'Menerima kustomisasi seragam dan kain',
      'Showroom luas di galeri utama Laweyan',
    ],
  },
  {
    id: 3,
    name: 'Batik Merak Manis',
    owner: 'Hj. Siti Soendari',
    description:
      'Pusat kerajinan batik khas Solo yang mengagungkan bahan pewarna alami dari ekstraksi tumbuh-tumbuhan seperti soga, indigo, dan kayu mahoni yang ramah lingkungan.',
    specialization: 'Batik Pewarna Alam (Soga Alam)',
    category: 'pewarna-alam',
    image: null,
    contact: {
      phone: '+6281329005511',
      instagram: '@batikmerakmanis',
      address: 'Jl. Sidoluhur No. 58, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.5685, lng: 110.7961 },
    verified: true,
    highlights: [
      'Pewarnaan organik berbahan tumbuhan alami',
      'Koleksi klasik Soga khas Keraton Solo',
      'Proses ramah lingkungan dan bebas kimia',
    ],
  },
  {
    id: 4,
    name: 'Griya Batik Solowangi',
    owner: 'Dra. Hj. Sri Wahyuni',
    description:
      'Galeri batik tulis eksklusif yang mempertahankan nilai filosofis motif keraton Surakarta seperti Sidomukti, Parang, dan Truntum dengan pengerjaan halus.',
    specialization: 'Batik Tulis Halus Keraton',
    category: 'batik-tulis',
    image: null,
    contact: {
      phone: '+628122978809',
      instagram: '@batiksolowangi',
      address: 'Jl. Dr. Rajiman No. 515, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.5669, lng: 110.7948 },
    verified: true,
    highlights: [
      'Koleksi kain batik tulis halus kualitas kolektor',
      'Menjaga pakem motif klasik keraton Surakarta',
      'Melayani pesanan kustomisasi batik tulis',
    ],
  },
  {
    id: 5,
    name: 'Batik Cokrosumen Laweyan',
    owner: 'H. Supihanto',
    description:
      'Pusat produksi batik cap dan busana pria/wanita dengan desain kasual hingga formal, mempertahankan teknik cap tembaga tradisional khas pembatik Laweyan.',
    specialization: 'Batik Cap & Fashion Modern',
    category: 'batik-cap',
    image: null,
    contact: {
      phone: '+628156711223',
      instagram: '@batikcokrosumen',
      address: 'Jl. Dr. Rajiman No. 521, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.5668, lng: 110.7942 },
    verified: true,
    highlights: [
      'Penyedia busana batik pria & wanita siap pakai',
      'Teknik cap tembaga presisi dan tahan lama',
      'Lokasi strategis di koridor utama Laweyan',
    ],
  },
  {
    id: 6,
    name: 'Batik Puspa Kencana Laweyan',
    owner: 'Bapak Hadi Rahardjo',
    description:
      'Sanggar batik konsisten yang memadukan pewarna ramah lingkungan dari ekstrak kulit kayu, kunyit, dan daun tom untuk menghasilkan batik dengan warna elegan.',
    specialization: 'Batik Eco-Dye & Natural Dyes',
    category: 'pewarna-alam',
    image: null,
    contact: {
      phone: '+628170442311',
      instagram: '@batikpuspakencana_laweyan',
      address: 'Jl. Tiga Negeri No. 12, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.5679, lng: 110.7958 },
    verified: true,
    highlights: [
      'Ekstraksi warna alami ramah lingkungan',
      'Edukasi dan workshop eco-batik untuk siswa/wisatawan',
      'Karakter warna lembut, unik, dan tidak pasaran',
    ],
  },
];
