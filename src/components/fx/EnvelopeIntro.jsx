import React, { useState } from 'react';
import { WEDDING_CONFIG } from '../../config/weddingConfig';
import { GoldDustCanvas } from './GoldDustCanvas';

/**
 * 3D Interactive Embossed Envelope Intro
 * Matched to Video Reference:
 * - Clean alabaster backdrop
 * - "WE'RE GETTING MARRIED" + "Alazar & Serg" above envelope
 * - Deep sage/olive green horizontal envelope with floral accents
 * - Golden wax seal with "A&S" monogram
 * - "• TAP THE SEAL TO OPEN •" below
 * - Flap opens in 3D and inner card slides up
 */
export function EnvelopeIntro({ onComplete }) {
  const [stage, setStage] = useState('sealed'); // sealed -> breaking -> opening -> done
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    if (stage !== 'sealed') return;
    const { clientX, clientY } = e;
    const x = ((clientY / window.innerHeight) - 0.5) * -7;
    const y = ((clientX / window.innerWidth) - 0.5) * 7;
    setTilt({ x, y });
  };

  const handleOpen = () => {
    if (stage !== 'sealed') return;
    setTilt({ x: 0, y: 0 });
    setStage('breaking');
    setTimeout(() => setStage('opening'), 400);
    setTimeout(() => {
      setStage('done');
      onComplete();
    }, 1800);
  };

  if (stage === 'done') return null;

  const isBreaking = stage === 'breaking' || stage === 'opening';
  const isOpening = stage === 'opening';

  return (
    <div
      onMouseMove={handlePointerMove}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#FAF8F5] px-4 transition-all duration-1000 ${
        isOpening ? 'pointer-events-none opacity-0 scale-105' : 'opacity-100'
      }`}
      style={{ perspective: '1800px' }}
    >
      <GoldDustCanvas intensity={0.7} />

      {/* Header Above Envelope (from Video 00:00) */}
      <div className={`mb-6 text-center transition-all duration-700 ${isOpening ? '-translate-y-6 opacity-0' : 'opacity-100'}`}>
        <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-[#8C7A68]">
          We're Getting Married
        </p>
        <h1 className="mt-2 font-serif text-4xl sm:text-5xl font-light text-[#1F1D1B] tracking-wide">
          {WEDDING_CONFIG.couple.groom}{' '}
          <span className="font-script text-3xl sm:text-4xl text-[#B89B72]">&amp;</span>{' '}
          {WEDDING_CONFIG.couple.bride}
        </h1>
      </div>

      {/* 3D Envelope Wrapper */}
      <div
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpen();
        }}
        aria-label="Tap the seal to open wedding invitation"
        className="group relative h-[310px] w-full max-w-[500px] cursor-pointer select-none transition-transform duration-500 ease-out sm:h-[340px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: isOpening
            ? 'rotateX(8deg) translateY(24px) scale(1.05)'
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        {/* Corner White Calla Lily / Floral Accents (as seen in video 00:00) */}
        <div className="pointer-events-none absolute -top-8 -right-8 z-30 h-28 w-28 opacity-90 transition-transform group-hover:scale-105">
          <svg viewBox="0 0 100 100" fill="none" className="h-full w-full drop-shadow-md">
            {/* Elegant stylized white petal curves */}
            <path d="M40 90 C45 60, 70 40, 85 20 C75 35, 65 45, 50 55 Z" fill="#F8F6F0" stroke="#DCD3C3" strokeWidth="1" />
            <path d="M55 85 C65 55, 85 30, 95 10 C80 30, 70 45, 60 60 Z" fill="#FFFFFF" stroke="#E6DECE" strokeWidth="1" />
            <path d="M45 75 C30 50, 40 30, 60 20 C50 35, 45 45, 48 65 Z" fill="#FAF7F2" stroke="#DCD3C3" strokeWidth="1" />
            {/* Gold Stamen */}
            <path d="M60 45 Q70 30 75 18" stroke="#D4B47C" strokeWidth="2.5" strokeLinecap="round" />
            {/* Sage leaves */}
            <path d="M30 85 Q20 65 15 50 Q28 65 35 75 Z" fill="#5F705B" opacity="0.85" />
            <path d="M48 92 Q60 80 75 75 Q60 85 50 95 Z" fill="#4E5D4A" opacity="0.85" />
          </svg>
        </div>

        <div className="pointer-events-none absolute -bottom-8 -left-8 z-30 h-28 w-28 opacity-90 transition-transform group-hover:scale-105">
          <svg viewBox="0 0 100 100" fill="none" className="h-full w-full drop-shadow-md" style={{ transform: 'rotate(180deg)' }}>
            <path d="M40 90 C45 60, 70 40, 85 20 C75 35, 65 45, 50 55 Z" fill="#F8F6F0" stroke="#DCD3C3" strokeWidth="1" />
            <path d="M55 85 C65 55, 85 30, 95 10 C80 30, 70 45, 60 60 Z" fill="#FFFFFF" stroke="#E6DECE" strokeWidth="1" />
            <path d="M45 75 C30 50, 40 30, 60 20 C50 35, 45 45, 48 65 Z" fill="#FAF7F2" stroke="#DCD3C3" strokeWidth="1" />
            <path d="M60 45 Q70 30 75 18" stroke="#D4B47C" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M30 85 Q20 65 15 50 Q28 65 35 75 Z" fill="#5F705B" opacity="0.85" />
            <path d="M48 92 Q60 80 75 75 Q60 85 50 95 Z" fill="#4E5D4A" opacity="0.85" />
          </svg>
        </div>

        {/* Envelope Back Body (Forest/Sage Green) */}
        <div
          className="absolute inset-0 rounded-2xl shadow-[0_20px_50px_rgba(20,25,18,0.22)]"
          style={{ background: '#455742' }}
        />

        {/* Rising Save-the-Date Card (Slides up on open) */}
        <div
          className={`absolute inset-x-5 top-5 h-[280px] sm:h-[300px] flex flex-col items-center justify-center rounded-xl border border-[#D4B47C]/60 bg-[#FFFDF9] px-6 text-center shadow-md transition-all duration-1000 ${
            isOpening ? '-translate-y-28 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-[#8C7A68]">
            Save The Date
          </p>
          <p className="mt-1 font-serif text-xs uppercase tracking-[0.24em] text-[#B89B72]">
            A Celebration of Love
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-wider text-[#1F1D1B] sm:text-4xl">
            {WEDDING_CONFIG.couple.monogram}
          </h2>
          <div className="mt-4 flex items-center justify-center gap-3 font-serif text-sm tracking-[0.24em] text-[#63584E]">
            <span>24</span>
            <span>&bull;</span>
            <span>04</span>
            <span>&bull;</span>
            <span>2027</span>
          </div>
        </div>

        {/* Envelope Pocket Lining & Flaps */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {/* Lower Front Flap (V-Shape Fold) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0% 100%, 100% 100%, 50% 48%)',
              background: '#3A4B37',
              boxShadow: '0 -4px 15px rgba(0,0,0,0.12)'
            }}
          />
          {/* Left Side Flap */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(0% 0%, 0% 100%, 50% 50%)',
              background: '#3E4F3B'
            }}
          />
          {/* Right Side Flap */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(100% 0%, 100% 100%, 50% 50%)',
              background: '#3C4D39'
            }}
          />
        </div>

        {/* Top Triangular Flap (Folds open upward) */}
        <div
          className="absolute inset-x-0 top-0 h-1/2 origin-top transition-transform duration-700 ease-in-out"
          style={{
            transformStyle: 'preserve-3d',
            transform: isOpening ? 'rotateX(172deg)' : 'rotateX(0deg)',
            zIndex: isOpening ? 5 : 25
          }}
        >
          <div
            className="h-full w-full"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              background: '#475B44',
              boxShadow: '0 4px 14px rgba(0,0,0,0.15)'
            }}
          />
        </div>

        {/* Center Embossed Gold Wax Seal (B&S / A&S) */}
        <div
          className={`absolute left-1/2 top-1/2 z-30 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.35)] transition-all duration-500 ${
            isBreaking ? 'scale-125 opacity-0' : 'scale-100 opacity-100 group-hover:scale-105'
          }`}
          style={{
            background: 'radial-gradient(circle at 35% 35%, #F0D39E 0%, #D4B47C 45%, #9E7D46 100%)',
            border: '2px solid rgba(255, 235, 185, 0.7)'
          }}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#FAF0D4]/70">
            <span className="font-serif text-lg font-bold tracking-wider text-[#543F1E] drop-shadow-xs">
              {WEDDING_CONFIG.couple.monogram}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Below Envelope (from Video 00:00) */}
      <div className={`mt-8 text-center transition-all duration-700 ${isOpening ? 'translate-y-6 opacity-0' : 'opacity-100'}`}>
        <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#8A7969] animate-pulse">
          &bull; Tap the seal to open &bull;
        </p>
      </div>
    </div>
  );
}
