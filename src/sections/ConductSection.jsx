import { CheckCircle, XCircle } from 'lucide-react';
import FlipCard from '../components/FlipCard';
import { CONDUCT_DOS, CONDUCT_DONTS, PANCASILA_SILA2 } from '../data/conduct';

export default function ConductSection() {
  return (
    <section id="etika" className="conduct-section section">
      <div className="container">
        <div className="conduct__header">
          <span className="section-label">Etika Berkunjung</span>
          <h2 className="section-title">Be a Wisatawan Pancasilais</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Menjadi wisatawan yang bertanggung jawab bukan soal batasan — melainkan
            tentang rasa hormat dan empati kepada setiap manusia dan budaya yang kita temui.
          </p>
        </div>

        <div className="conduct__grid">
          {/* DO Column */}
          <div>
            <p className="conduct__column-label conduct__column-label--do">
              <CheckCircle size={24} />
              Yang Perlu Dilakukan
            </p>
            {CONDUCT_DOS.map((item) => (
              <FlipCard key={item.id} item={item} type="do" />
            ))}
          </div>

          {/* DON'T Column */}
          <div>
            <p className="conduct__column-label conduct__column-label--dont">
              <XCircle size={24} />
              Yang Perlu Dihindari
            </p>
            {CONDUCT_DONTS.map((item) => (
              <FlipCard key={item.id} item={item} type="dont" />
            ))}
          </div>
        </div>

        {/* Pancasila connection */}
        <div
          style={{
            textAlign: 'center',
            padding: '1.5rem 2rem',
            background: 'linear-gradient(135deg, rgba(44,74,110,0.06) 0%, rgba(44,74,110,0.03) 100%)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(44,74,110,0.12)',
          }}
        >
          <span className="pancasila-badge">
            <span className="sila-number">{PANCASILA_SILA2.number}</span>
            Sila ke-{PANCASILA_SILA2.number}: {PANCASILA_SILA2.text}
          </span>
          <p style={{
            fontSize: 'var(--fs-small)',
            color: 'var(--text-secondary)',
            marginTop: '0.75rem',
            maxWidth: 650,
            margin: '0.75rem auto 0',
            lineHeight: 1.7,
          }}>
            {PANCASILA_SILA2.relevance}
          </p>
        </div>
      </div>
    </section>
  );
}
