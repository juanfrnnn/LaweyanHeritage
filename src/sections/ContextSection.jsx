import { Camera, Eye, Users, Landmark } from 'lucide-react';

const narratives = [
  {
    number: '01',
    icon: Camera,
    title: 'Dampak Wisata Konten',
    text: 'Ketika kunjungan hanya berorientasi pada konten media sosial, warga lokal kehilangan ketenangan di rumah mereka sendiri. Gang-gang sempit dipenuhi pengunjung yang menghalangi akses pemukiman demi mendapatkan sudut foto terbaik.',
  },
  {
    number: '02',
    icon: Eye,
    title: 'Keindahan Butuh Konteks',
    text: 'Arsitektur tua Laweyan bukan sekadar properti foto — setiap bangunan menyimpan cerita tentang saudagar batik, pergerakan ekonomi pribumi, dan ketahanan budaya yang berlangsung berabad-abad.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Pariwisata Bermartabat',
    text: 'Wisata yang bermartabat berarti menempatkan kebutuhan dan privasi warga lokal di atas kepentingan konten pribadi. Setiap pengunjung memiliki tanggung jawab moral terhadap komunitas yang mereka kunjungi.',
  },
];

export default function ContextSection() {
  return (
    <section id="konteks" className="context-section section">
      <div className="container">
        <div className="context__header">
          <span className="section-label">Di Balik Estetika</span>
          <h2 className="section-title">Ada Sejarah yang Perlu<br />Dipahami, Bukan Sekadar Dipotret</h2>
          <p className="section-subtitle">
            Perbedaan antara wisatawan yang "datang untuk foto" dan wisatawan yang
            "datang untuk memahami" terletak pada satu hal: empati terhadap ruang
            hidup dan nilai budaya di sekitar mereka.
          </p>
        </div>

        {/* Two Perspectives */}
        <div className="context__perspectives">
          <div className="perspective-card perspective-card--tourist">
            <div className="perspective-card__icon">
              <Camera size={24} />
            </div>
            <h3 className="perspective-card__title">"Datang untuk Foto"</h3>
            <p className="perspective-card__text">
              Laweyan terlihat sebagai set foto outdoor gratis — gang-gang sempit
              yang instagramable, tembok tua berwarna pastel, dan nuansa vintage
              yang sempurna untuk konten. Pengunjung datang, memotret sepuasnya,
              dan pergi tanpa sempat memahami konteks di balik setiap sudut yang
              mereka abadikan.
            </p>
            <p className="perspective-card__text" style={{ marginTop: '0.75rem' }}>
              Perilaku ini, meski tidak disengaja, bisa mengganggu kenyamanan warga,
              merusak elemen bersejarah, dan mereduksi nilai budaya yang kaya menjadi
              sekadar konten estetika.
            </p>
          </div>

          <div className="perspective-card perspective-card--cultural">
            <div className="perspective-card__icon">
              <Landmark size={24} />
            </div>
            <h3 className="perspective-card__title">"Datang untuk Memahami"</h3>
            <p className="perspective-card__text">
              Laweyan adalah kawasan bersejarah yang telah menjadi pusat perdagangan
              batik selama berabad-abad. Setiap bangunannya menceritakan kisah
              tentang saudagar yang mandiri, kebangkitan ekonomi pribumi, dan warisan
              seni yang terus dijaga generasi ke generasi.
            </p>
            <p className="perspective-card__text" style={{ marginTop: '0.75rem' }}>
              Wisatawan yang memahami konteks ini akan datang dengan rasa hormat,
              berinteraksi dengan empati, dan pulang dengan pengalaman yang jauh
              lebih bermakna dari sekadar foto.
            </p>
          </div>
        </div>

        {/* Narrative Cards */}
        <div className="context__narratives">
          {narratives.map(({ number, icon: Icon, title, text }) => (
            <div className="card narrative-card" key={number}>
              <p className="narrative-card__number">{number}</p>
              <Icon size={22} color="var(--accent-primary)" style={{ marginBottom: '0.5rem' }} />
              <h3 className="narrative-card__title">{title}</h3>
              <p className="narrative-card__text">{text}</p>
            </div>
          ))}
        </div>

        {/* Pancasila note */}
        <div
          style={{
            textAlign: 'center',
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
            Pariwisata yang adil menghormati hak warga lokal atas ruang hidup mereka
            dan memastikan manfaat ekonomi wisata benar-benar mengalir kepada
            masyarakat setempat, bukan hanya kepada platform konten.
          </p>
        </div>
      </div>
    </section>
  );
}
