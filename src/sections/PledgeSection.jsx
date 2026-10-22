import { useState, useRef, useEffect, useCallback } from 'react';
import { Download, Share2, Copy, Check, RotateCcw } from 'lucide-react';
import PledgeForm from '../components/PledgeForm';
import CommitmentCard from '../components/CommitmentCard';
import { generatePledgeCard, downloadImage, shareContent, copyToClipboard } from '../utils/generatePledgeCard';

const STORAGE_KEY = 'laweyan_pledge_count';
const PLEDGES_KEY = 'laweyan_pledges';

function getCount() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
  } catch {
    return 0;
  }
}

function bumpCount() {
  try {
    const next = getCount() + 1;
    localStorage.setItem(STORAGE_KEY, String(next));
    return next;
  } catch {
    return 0;
  }
}

export default function PledgeSection() {
  const [pledged, setPledged] = useState(false);
  const [pledgerName, setPledgerName] = useState('');
  const [pledgeDate, setPledgeDate] = useState('');
  const [count, setCount] = useState(getCount);
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);
  const cardRef = useRef(null);

  const handleSubmit = useCallback((name) => {
    const date = new Date().toLocaleDateString('id-ID', {
      day: 'numeric', month: 'long', year: 'numeric',
    });
    setPledgerName(name);
    setPledgeDate(date);
    setPledged(true);
    setCount(bumpCount());
  }, []);

  const handleDownload = async () => {
    if (!cardRef.current || generating) return;
    setGenerating(true);
    const dataUrl = await generatePledgeCard(cardRef.current, pledgerName);
    if (dataUrl) {
      downloadImage(dataUrl, `komitmen-wisatawan-pancasilais-${pledgerName.toLowerCase().replace(/\s+/g, '-')}.png`);
    } else {
      alert('Gagal membuat kartu. Silakan coba lagi.');
    }
    setGenerating(false);
  };

  const handleShare = async () => {
    const text = `Saya berkomitmen menjadi Wisatawan Pancasilais! Menghormati warga, menghargai budaya, dan mendukung pengrajin lokal di Kampung Batik Laweyan. #LaweyanBeyondTheFrame #WisatawanPancasilais`;
    const shared = await shareContent({ title: 'Komitmen Wisatawan Pancasilais', text });
    if (!shared) {
      const ok = await copyToClipboard(text);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  };

  const handleReset = () => {
    setPledged(false);
    setPledgerName('');
    setPledgeDate('');
  };

  return (
    <section id="komitmen" className="pledge-section section">
      <div className="container">
        <div className="pledge__header">
          <span className="section-label">Ambil Bagian</span>
          <h2 className="section-title">The Heritage Lives<br />Through Us</h2>
          <p className="section-subtitle">
            Perubahan dimulai dari komitmen pribadi. Jadilah bagian dari gerakan
            wisatawan yang menghargai budaya, sejarah, dan warga lokal.
          </p>
        </div>

        <div className="pledge__content">
          {/* Left: Form or Success */}
          {!pledged ? (
            <PledgeForm onSubmit={handleSubmit} />
          ) : (
            <div className="pledge__success pledge__form-wrap">
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎉</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--fs-h3)', color: 'var(--color-cream)', marginBottom: '0.5rem' }}>
                  Terima kasih, {pledgerName}!
                </h3>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-brown-light)' }}>
                  Komitmen Anda telah dicatat. Kartu komitmen Anda siap diunduh.
                </p>
              </div>

              <CommitmentCard ref={cardRef} name={pledgerName} date={pledgeDate} />

              <div className="commitment-card__actions" style={{ marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <button
                  className="btn btn--primary btn--small"
                  onClick={handleDownload}
                  disabled={generating}
                  aria-label="Unduh kartu komitmen sebagai PNG"
                >
                  <Download size={16} />
                  {generating ? 'Membuat...' : 'Unduh PNG'}
                </button>
                <button
                  className="btn btn--accent btn--small"
                  onClick={handleShare}
                  aria-label="Bagikan komitmen"
                >
                  {copied ? <Check size={16} /> : <Share2 size={16} />}
                  {copied ? 'Disalin!' : 'Bagikan'}
                </button>
                <button
                  className="btn btn--secondary btn--small"
                  onClick={handleReset}
                  aria-label="Buat komitmen baru"
                >
                  <RotateCcw size={16} />
                  Ulangi
                </button>
              </div>
            </div>
          )}

          {/* Right: Counter */}
          <div className="pledge__counter">
            <div className="pledge__counter-number" aria-live="polite" aria-label={`${count} komitmen`}>
              {count.toLocaleString('id-ID')}
            </div>
            <p className="pledge__counter-label">Wisatawan Pancasilais</p>
            <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-brown-light)', margin: '0.5rem 0' }}>
              yang telah berkomitmen
            </p>
            <p className="pledge__counter-note">
              * Counter ini hanya mencatat data di browser Anda secara lokal.
              Tidak terhubung ke server eksternal.
            </p>

            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
              <span className="pancasila-badge">
                <span className="sila-number">1</span>
                Sila ke-1 s/d 5: Satu Jiwa, Banyak Langkah
              </span>
            </div>
            <p style={{ fontSize: 'var(--fs-small)', color: 'var(--color-brown-light)', marginTop: '1rem', lineHeight: 1.7 }}>
              Komitmen sebagai Wisatawan Pancasilais bukan sekadar janji —
              melainkan wujud nyata nilai-nilai luhur Pancasila dalam kehidupan
              sehari-hari, termasuk dalam cara kita berwisata.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
