import { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

/**
 * Pledge form with validation, agreement checkbox, and submit handling.
 */
export default function PledgeForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const nameInputRef = useRef(null);

  const validate = () => {
    const newErrors = {};
    const trimmedName = name.trim();

    if (!trimmedName) {
      newErrors.name = 'Silakan masukkan nama atau nama panggilan Anda.';
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Nama harus minimal 2 karakter.';
    } else if (trimmedName.length > 50) {
      newErrors.name = 'Nama tidak boleh lebih dari 50 karakter.';
    }

    if (!agreed) {
      newErrors.agreed = 'Anda perlu menyetujui komitmen sebelum melanjutkan.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(name.trim());
      setName('');
      setAgreed(false);
      setErrors({});
    }
  };

  return (
    <form className="pledge__form-wrap" onSubmit={handleSubmit} noValidate>
      <h3 className="pledge__form-title">Ambil Komitmen Anda</h3>

      <div className="pledge__input-group">
        <label className="pledge__label" htmlFor="pledge-name">
          Nama atau Nama Panggilan
        </label>
        <input
          id="pledge-name"
          type="text"
          className={`pledge__input ${errors.name ? 'error' : ''}`}
          placeholder="Masukkan nama Anda..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameInputRef}
          maxLength={50}
          autoComplete="off"
          aria-describedby={errors.name ? 'pledge-name-error' : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="pledge__error" id="pledge-name-error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="pledge__checkbox-group">
        <input
          id="pledge-agree"
          type="checkbox"
          className="pledge__checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          aria-describedby={errors.agreed ? 'pledge-agree-error' : undefined}
        />
        <label className="pledge__checkbox-label" htmlFor="pledge-agree">
          Saya berkomitmen untuk menjadi wisatawan yang menghormati sejarah, warga, dan
          budaya di setiap tempat yang saya kunjungi — termasuk Kampung Batik Laweyan.
        </label>
      </div>
      {errors.agreed && (
        <p className="pledge__error" id="pledge-agree-error" role="alert" style={{ marginTop: '-0.5rem', marginBottom: '1rem' }}>
          {errors.agreed}
        </p>
      )}

      <button type="submit" className="btn btn--primary btn--large pledge__submit">
        <CheckCircle size={18} />
        Saya Berkomitmen Menjadi Wisatawan Pancasilais
      </button>
    </form>
  );
}
