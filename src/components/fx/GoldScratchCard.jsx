import React, { useRef, useState, useEffect, useCallback } from 'react';

/**
 * Interactive Gold-Foil Scratch Card Component
 * Uses HTML5 Canvas destination-out compositing for realistic mobile/touch gold scratching.
 */
export function GoldScratchCard({ value, label, forceRevealed, onReveal }) {
  const canvasRef = useRef(null);
  const isDrawingRef = useRef(false);
  const [scratched, setScratched] = useState(false);

  const paintFoil = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Rich champagne gold brushed foil gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#F5E4BE');
    grad.addColorStop(0.28, '#DFBE7E');
    grad.addColorStop(0.55, '#F9ECCB');
    grad.addColorStop(0.8, '#C9A15B');
    grad.addColorStop(1, '#E9CE96');

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle brushed metallic texture lines
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 1;
    for (let i = 0; i < h; i += 4) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i + (Math.random() * 4 - 2));
      ctx.stroke();
    }

    // Inner foil frame & label
    ctx.strokeStyle = 'rgba(255,250,235,0.55)';
    ctx.lineWidth = 1;
    ctx.strokeRect(7, 7, w - 14, h - 14);

    ctx.fillStyle = 'rgba(122, 92, 46, 0.55)';
    ctx.font = '500 10px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH', w / 2, h / 2 + 4);
  }, []);

  useEffect(() => {
    if (!scratched && !forceRevealed) {
      paintFoil();
    }
  }, [paintFoil, scratched, forceRevealed]);

  useEffect(() => {
    if (forceRevealed && !scratched) {
      setScratched(true);
    }
  }, [forceRevealed, scratched]);

  const checkProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas || scratched) return;
    try {
      const ctx = canvas.getContext('2d');
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let cleared = 0;
      const step = 32;
      for (let i = 3; i < imgData.length; i += step) {
        if (imgData[i] < 100) cleared++;
      }
      const ratio = cleared / (imgData.length / step);
      if (ratio > 0.36) {
        setScratched(true);
        if (onReveal) onReveal();
      }
    } catch {
      // Graceful fallback
    }
  };

  const scratchAt = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || scratched) return;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const ctx = canvas.getContext('2d');

    ctx.globalCompositeOperation = 'destination-out';
    const brush = ctx.createRadialGradient(x, y, 4, x, y, 24);
    brush.addColorStop(0, 'rgba(0,0,0,1)');
    brush.addColorStop(0.75, 'rgba(0,0,0,0.85)');
    brush.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = brush;
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();
  };

  const handlePointerDown = (e) => {
    isDrawingRef.current = true;
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerMove = (e) => {
    if (!isDrawingRef.current) return;
    scratchAt(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    if (!isDrawingRef.current) return;
    isDrawingRef.current = false;
    checkProgress();
  };

  const handleTouchStart = (e) => {
    isDrawingRef.current = true;
    const touch = e.touches[0];
    if (touch) scratchAt(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    if (!isDrawingRef.current) return;
    const touch = e.touches[0];
    if (touch) scratchAt(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    isDrawingRef.current = false;
    checkProgress();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-32 w-28 overflow-hidden rounded-2xl border border-[#B89B72]/45 bg-[#FAF8F5] shadow-[0_12px_32px_rgba(146,120,82,0.12)] transition-transform duration-300 hover:-translate-y-0.5 sm:h-40 sm:w-36">
        {/* Underlying Revealed Card */}
        <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center">
          <div className="pointer-events-none absolute inset-2 rounded-xl border border-[#B89B72]/25" />
          <span
            className={`font-serif text-3xl font-medium tracking-wide text-[#9A7A49] transition-all duration-700 sm:text-4xl ${
              scratched ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
            }`}
          >
            {value}
          </span>
        </div>

        {/* Scratch Canvas */}
        <canvas
          ref={canvasRef}
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`absolute inset-0 h-full w-full cursor-crosshair touch-none transition-opacity duration-700 ${
            scratched ? 'pointer-events-none opacity-0' : 'opacity-100'
          }`}
          aria-label={`Scratch to reveal wedding ${label}`}
        />
      </div>
      <span className="mt-3 font-sans text-[11px] uppercase tracking-[0.26em] text-[#8A7A68]">
        {label}
      </span>
    </div>
  );
}
