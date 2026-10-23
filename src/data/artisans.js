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
    owner: 'Ir. Alpha Febela Priyatmono',
    description:
      'Rumah produksi batik legendaris di Laweyan yang terkenal dengan inovasi motif batik tulis abstrak, motif klasik kontemporer, serta pusat riset dan edukasi batik.',
    specialization: 'Batik Tulis Klasik & Abstrak',
    category: 'batik-tulis',
    image: '/images/BatikMahkota.png',
    contact: {
      phone: '+6281228016356',
      instagram: '@batikmahkota',
      address: 'Jl. Sayangan Kulon No. 9, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.568894933347311, lng: 110.7926358281713 },
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
    image: '/images/BatikPutra.png',
    contact: {
      phone: '+628122612400',
      instagram: '@batikputralaweyan',
      address: 'Jl. Sidoluhur No. 31, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.570341310078675, lng: 110.79488306923979 },
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
    image: '/images/batikMerakManis.png',
    contact: {
      phone: '+6287812639345',
      instagram: '@batikmerakmanis',
      address: 'Jl. Sidoluhur No. 19, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.570854714413195, lng: 110.79604046936446 },
    verified: true,
    highlights: [
      'Pewarnaan organik berbahan tumbuhan alami',
      'Koleksi klasik Soga khas Keraton Solo',
      'Proses ramah lingkungan dan bebas kimia',
    ],
  },
  {
    id: 4,
    name: 'Batik Soga Laweyan',
    owner: 'H. Setyawan',
    description:
      'Galeri dan toko batik terkemuka di koridor utama Dr. Rajiman yang menyediakan beragam koleksi batik tulis dan cap bermotif soga klasik khas Surakarta.',
    specialization: 'Batik Tulis & Cap Soga',
    category: 'batik-tulis',
    image: '/images/BatikSoga.png',
    contact: {
      phone: '+62271716796',
      instagram: '@batiksogalaweyan',
      address: 'Jl. Dr. Rajiman No. 472-474, Bumi, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.570479110264664, lng: 110.79988846305437 },
    verified: true,
    highlights: [
      'Showroom batik tulis dan cap berkelas',
      'Menjaga pakem warna Soga khas Solo',
      'Terdaftar di Google Maps & mudah diakses',
    ],
  },
  {
    id: 5,
    name: 'Batik Omah Laweyan',
    owner: 'Bapak Totok',
    description:
      'Pusat belanja busana batik cap dan kombinasi yang bertempat di bangunan rumah kuno arsitektur heritage Laweyan dengan koleksi pakaian pria dan wanita lengkap.',
    specialization: 'Batik Cap & Fashion Heritage',
    category: 'batik-cap',
    image: '/images/BatikOmah.jpg',
    contact: {
      phone: '+628122971234',
      instagram: '@omahlaweyan.batik',
      address: 'Jl. Dr. Rajiman No. 549, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.569063986616736, lng: 110.79456044274384 },
    verified: true,
    highlights: [
      'Bangunan galeri bernuansa rumah antik Jawa-Kolonial',
      'Ragam busana batik cap siap pakai untuk pria & wanita',
      'Akses lokasi strategis tepi jalan utama',
    ],
  },
  {
    id: 6,
    name: 'Batik Puspa Kencana Laweyan',
    owner: 'Bapak Hadi Rahardjo',
    description:
      'Sanggar kerajinan batik yang berfokus pada pengembangan warna alami berbahan ekstrak kayu dan dedaunan lokal dengan hasil warna lembut dan tidak pasaran.',
    specialization: 'Batik Eco-Dye & Natural Dyes',
    category: 'pewarna-alam',
    image: '/images/BatikPuspaKencana.png',
    contact: {
      phone: '+628170442311',
      instagram: '@batikpuspakencana_laweyan',
      address: 'Jl. Sidoluhur No. 51, Laweyan, Surakarta, Jawa Tengah 57148',
    },
    coordinates: { lat: -7.569984463353957, lng: 110.79316217488383 },
    verified: true,
    highlights: [
      'Ekstraksi warna alami ramah lingkungan',
      'Edukasi dan workshop eco-batik untuk wisatawan',
      'Karakter warna lembut dan bernilai seni tinggi',
    ],
  },
];
