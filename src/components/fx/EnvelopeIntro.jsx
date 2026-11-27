import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { GoldDustCanvas } from './GoldDustCanvas';
import { WEDDING_CONFIG } from '../../config/weddingConfig';

/**
 * 3D Interactive Envelope Intro (Modeled from Video Reference)
 * Features olive-sage luxury envelope, corner white calla lily florals,
 * gold wax seal with 'A&S' monogram, and 3D folding flap animation.
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
    setTimeout(() => setStage('opening'), 420);
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
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ${
        isOpening ? 'pointer-events-none opacity-0 scale-105' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 45%, #FBF9F4 0%, #F3EEE3 60%, #E6DDCD 100%)',
        perspective: '1800px'
      }}
    >
      <GoldDustCanvas intensity={0.7} />

      {/* Top Header: WE'RE GETTING MARRIED & Couple Names */}
      <div
        className={`mb-6 sm:mb-8 text-center transition-all duration-700 ${
          isBreaking ? 'opacity-0 -translate-y-4' : 'opacity-100'
        }`}
      >
        <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.38em] text-[#7A7064]">
          We're Getting Married
        </p>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#23201D]">
          {WEDDING_CONFIG.couple.groom}{' '}
          <span className="font-script text-3xl sm:text-5xl text-[#B89B72]">&amp;</span>{' '}
          {WEDDING_CONFIG.couple.bride}
        </h1>
      </div>

      {/* 3D Envelope Container */}
      <div
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpen();
        }}
        aria-label={`Tap wax seal to open ${WEDDING_CONFIG.couple.names} wedding invitation`}
        className="group relative h-[260px] sm:h-[320px] w-[90vw] max-w-[500px] cursor-pointer select-none transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isOpening
            ? 'rotateX(8deg) translateY(24px) scale(1.04)'
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        {/* Envelope Base Body (Sage / Olive Green) */}
        <div
          className="absolute inset-0 rounded-2xl transition-shadow duration-700"
          style={{
            background: 'linear-gradient(145deg, #4F5E4B 0%, #3F4D3C 60%, #344031 100%)',
            boxShadow: isBreaking
              ? '0 25px 70px rgba(79, 94, 75, 0.45), 0 0 40px rgba(212, 180, 124, 0.3)'
              : '0 25px 55px -12px rgba(35, 42, 33, 0.38), 0 1px 0 rgba(255,255,255,0.15) inset'
          }}
        />

        {/* Envelope Inner Pocket Layer */}
        <div
          className="absolute inset-x-0 bottom-0 h-[68%] rounded-b-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #455341 0%, #3B4737 100%)',
            clipPath: 'polygon(0% 0%, 50% 55%, 100% 0%, 100% 100%, 0% 100%)',
            zIndex: 10
          }}
        />

        {/* Inner Card (Slides Up on Open) */}
        <div
          className={`absolute inset-x-6 top-5 bottom-5 flex flex-col items-center justify-center rounded-xl border border-[#D4B47C]/40 bg-[#FAF8F5] p-6 text-center shadow-md transition-all duration-1000 ${
            isOpening ? '-translate-y-28 opacity-100 scale-102' : 'translate-y-2 opacity-0'
          }`}
          style={{ zIndex: 5 }}
        >
          <p className="font-sans text-[9px] uppercase tracking-[0.32em] text-[#8C7A63]">
            Save The Date
          </p>
          <p className="mt-1 font-sans text-[8px] uppercase tracking-[0.22em] text-[#B89B72]">
            A Celebration of Love
          </p>
          <p className="my-2 font-serif text-2xl sm:text-3xl font-light text-[#1F1D1B]">
            {WEDDING_CONFIG.couple.monogram}
          </p>
          <p className="font-sans text-[10px] tracking-[0.26em] text-[#6E645A]">
            {WEDDING_CONFIG.date.day} &bull; {WEDDING_CONFIG.date.month.toUpperCase()} &bull; {WEDDING_CONFIG.date.year}
          </p>
        </div>

        {/* Top Triangular Flap (Folds Open Upward with 3D Hinge) */}
        <div
          className="absolute inset-x-0 top-0 h-[52%] origin-top transition-transform duration-700 ease-in-out"
          style={{
            background: 'linear-gradient(180deg, #576853 0%, #465542 100%)',
            clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
            transformStyle: 'preserve-3d',
            transform: isBreaking ? 'rotateX(172deg)' : 'rotateX(0deg)',
            zIndex: isBreaking ? 2 : 12,
            boxShadow: '0 4px 12px rgba(0,0,0,0.18)'
          }}
        />

        {/* White Corner Calla Lily / Floral Sprigs (As in Reference Video) */}
        {/* Top-Right Floral Bouquet */}
        <svg
          className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 sm:h-28 sm:w-28 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 15 }}
        >
          {/* Stem & Leaves */}
          <path d="M70 70 Q55 45 42 35" stroke="#7E8F76" strokeWidth="2" strokeLinecap="round" />
          <path d="M65 65 Q50 60 38 68" stroke="#8A9E82" strokeWidth="1.8" strokeLinecap="round" />
          {/* Calla Lily Petals (Cream White) */}
          <path
            d="M42 35 C35 25, 45 12, 55 18 C65 24, 58 38, 42 35 Z"
            fill="#FFFDF7"
            stroke="#DCD2BE"
            strokeWidth="0.8"
          />
          {/* Golden Spadix */}
          <path d="M46 28 Q49 20 52 17" stroke="#D4B47C" strokeWidth="2.4" strokeLinecap="round" />
          {/* Secondary Bud */}
          <path
            d="M36 50 C30 42, 38 32, 46 38 C54 44, 48 54, 36 50 Z"
            fill="#FAF6EE"
            stroke="#DCD2BE"
            strokeWidth="0.8"
          />
          <path d="M39 45 Q42 38 44 36" stroke="#D4B47C" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Bottom-Left Floral Bouquet */}
        <svg
          className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 sm:h-28 sm:w-28 drop-shadow-md"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 15 }}
        >
          {/* Stem & Leaves */}
          <path d="M30 30 Q45 55 58 65" stroke="#7E8F76" strokeWidth="2" strokeLinecap="round" />
          <path d="M35 35 Q50 40 62 32" stroke="#8A9E82" strokeWidth="1.8" strokeLinecap="round" />
          {/* Calla Lily Petals */}
          <path
            d="M58 65 C65 75, 55 88, 45 82 C35 76, 42 62, 58 65 Z"
            fill="#FFFDF7"
            stroke="#DCD2BE"
            strokeWidth="0.8"
          />
          {/* Golden Spadix */}
          <path d="M54 72 Q51 80 48 83" stroke="#D4B47C" strokeWidth="2.4" strokeLinecap="round" />
          {/* Secondary Bud */}
          <path
            d="M64 50 C70 58, 62 68, 54 62 C46 56, 52 46, 64 50 Z"
            fill="#FAF6EE"
            stroke="#DCD2BE"
            strokeWidth="0.8"
          />
          <path d="M61 55 Q58 62 56 64" stroke="#D4B47C" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Center Circular Gold Wax Seal */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full shadow-xl transition-all duration-500 ${
            isBreaking ? 'scale-125 opacity-0' : 'scale-100 opacity-100 group-hover:scale-105'
          }`}
          style={{
            zIndex: 14,
            background: 'radial-gradient(circle at 35% 32%, #FBE7BF 0%, #D8B57E 45%, #9E7A45 100%)',
            boxShadow: '0 8px 24px rgba(50, 40, 25, 0.45), 0 0 0 2px rgba(255,245,215,0.6) inset'
          }}
        >
          {/* Seal Concentric Ring */}
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-[#8C6934]/60">
            <span className="font-serif text-sm sm:text-base font-semibold tracking-wider text-[#3D2C16] drop-shadow-xs">
              {WEDDING_CONFIG.couple.monogram}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Hint: TAP THE SEAL TO OPEN */}
      <div
        className={`mt-8 sm:mt-10 inline-flex items-center gap-2 font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[#7A7064] transition-all duration-500 ${
          isBreaking ? 'opacity-0 translate-y-3' : 'opacity-100 animate-pulse'
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#B89B72]" />
        Tap The Seal To Open
        <span className="h-1.5 w-1.5 rounded-full bg-[#B89B72]" />
      </div>
    </div>
  );
}
