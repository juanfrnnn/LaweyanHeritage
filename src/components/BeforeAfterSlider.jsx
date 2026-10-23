import { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal } from 'lucide-react';

/**
 * Interactive Before-After Image Comparison Slider
 * Supports mouse drag, touch, and keyboard interaction.
 */
export default function BeforeAfterSlider({
  beforeLabel = 'Wisata Foto',
  afterLabel = 'Wisata Bermakna',
}) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    e.preventDefault();
    updatePosition(e.clientX);
  }, [isDragging, updatePosition]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging, handlePointerMove, handlePointerUp]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      setPosition((prev) => Math.max(0, prev - 2));
    } else if (e.key === 'ArrowRight') {
      setPosition((prev) => Math.min(100, prev + 2));
    }
  };

  return (
    <div
      className="before-after-slider"
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="slider"
      aria-label="Perbandingan sebelum dan sesudah. Geser untuk melihat perbedaan perspektif wisata."
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      {/* After (Wisata Bermakna - background) */}
      <div className="before-after-slider__after-wrap">
        <img 
          src="/images/wisata-bermakna.jpg" 
          alt="Wisata Bermakna" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Before (Wisata Foto - clipped) */}
      <div
        className="before-after-slider__before-wrap"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img 
          src="/images/wisata-foto.jpg" 
          alt="Wisata Foto" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Handle */}
      <div
        className="before-after-slider__handle"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="before-after-slider__handle-icon">
          <MoveHorizontal size={20} />
        </div>
      </div>

      {/* Labels */}
      <div className="before-after-slider__label before-after-slider__label--before">
        {beforeLabel}
      </div>
      <div className="before-after-slider__label before-after-slider__label--after">
        {afterLabel}
      </div>
    </div>
  );
}
