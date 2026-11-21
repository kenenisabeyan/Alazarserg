import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { GoldDustCanvas } from './GoldDustCanvas';
import { EmbossedDamaskOverlay } from './EmbossedDamaskOverlay';
import { WEDDING_CONFIG } from '../../config/weddingConfig';

/**
 * 3D Interactive Embossed Envelope Intro
 * Features tactile 3D perspective mouse tilt, wax seal cracking, unfolding flaps, and glowing invitation reveal.
 */
export function EnvelopeIntro({ onComplete }) {
  const [stage, setStage] = useState('sealed'); // sealed -> breaking -> opening -> done
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    if (stage !== 'sealed') return;
    const { clientX, clientY } = e;
    const x = ((clientY / window.innerHeight) - 0.5) * -9;
    const y = ((clientX / window.innerWidth) - 0.5) * 9;
    setTilt({ x, y });
  };

  const handleOpen = () => {
    if (stage !== 'sealed') return;
    setTilt({ x: 0, y: 0 });
    setStage('breaking');
    setTimeout(() => setStage('opening'), 380);
    setTimeout(() => {
      setStage('done');
      onComplete();
    }, 1550);
  };

  if (stage === 'done') return null;

  const isBreaking = stage === 'breaking' || stage === 'opening';
  const isOpening = stage === 'opening';

  return (
    <div
      onMouseMove={handlePointerMove}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isOpening ? 'pointer-events-none opacity-0 scale-105' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 45%, #F8F3EA 0%, #EAE1D2 58%, #DCD0BC 100%)',
        perspective: '1800px'
      }}
    >
      <GoldDustCanvas intensity={1.1} />

      {/* 3D Envelope Container */}
      <div
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleOpen();
        }}
        aria-label={`Tap wax seal to open ${WEDDING_CONFIG.couple.names} wedding invitation`}
        className="group relative h-[92vh] max-h-[820px] w-[92vw] max-w-[460px] cursor-pointer select-none transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isOpening
            ? 'rotateX(6deg) translateY(36px) scale(1.06)'
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
        }}
      >
        {/* Outer Shadow & Texture */}
        <div
          className="absolute inset-0 rounded-[28px] transition-shadow duration-700"
          style={{
            boxShadow: isBreaking
              ? '0 30px 90px rgba(184, 155, 114, 0.45), 0 0 60px rgba(255, 224, 158, 0.4)'
              : '0 35px 80px -15px rgba(58, 44, 28, 0.28), 0 0 0 1px rgba(255,255,255,0.65) inset',
            background: '#F6F0E6'
          }}
        />

        {/* Interior Gold Light Core */}
        <div
          className={`absolute inset-2 rounded-[22px] transition-all duration-700 ${
            isBreaking ? 'opacity-100 scale-100' : 'opacity-40 scale-95 group-hover:opacity-75'
          }`}
          style={{
            background:
              'radial-gradient(circle at 50% 50%, #FFF7DC 0%, #F8D994 28%, #E6B768 55%, #F4ECE0 88%)'
          }}
        />

        {/* Rising Invitation Preview Card */}
        <div
          className={`absolute inset-x-5 top-8 bottom-8 flex flex-col items-center justify-center rounded-2xl border border-[#D4B47C]/50 bg-[#FAF8F5] px-6 text-center shadow-lg transition-all duration-1000 ${
            isOpening ? '-translate-y-12 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#B89B72]">
            You Are Cordially Invited
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light tracking-wide text-[#1F1D1B]">
            {WEDDING_CONFIG.couple.names}
          </h2>
          <div className="my-3 h-px w-14 bg-[#B89B72]/60" />
          <p className="font-serif text-sm italic text-[#6E655D]">{WEDDING_CONFIG.date.display}</p>
        </div>

        {/* Flaps container */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[26px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Left Flap */}
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{
              clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
              background: 'linear-gradient(125deg, #FAF6EE 0%, #EFE7D9 65%, #E6DCCB 100%)',
              transform: isOpening ? 'translateX(-14px) rotateY(-18deg)' : 'none',
              filter: 'drop-shadow(2px 0 8px rgba(72,56,36,0.12))'
            }}
          >
            <EmbossedDamaskOverlay />
          </div>

          {/* Right Flap */}
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{
              clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)',
              background: 'linear-gradient(235deg, #FAF6EE 0%, #EFE7D9 65%, #E6DCCB 100%)',
              transform: isOpening ? 'translateX(14px) rotateY(18deg)' : 'none',
              filter: 'drop-shadow(-2px 0 8px rgba(72,56,36,0.12))'
            }}
          >
            <EmbossedDamaskOverlay />
          </div>

          {/* Bottom Flap */}
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{
              clipPath: 'polygon(0 100%, 50% 47%, 100% 100%)',
              background: 'linear-gradient(0deg, #F4EDE2 0%, #FBF8F2 75%, #EDE4D4 100%)',
              transform: isOpening ? 'translateY(22px)' : 'none',
              filter: 'drop-shadow(0 -6px 14px rgba(82,63,41,0.14))'
            }}
          >
            <EmbossedDamaskOverlay />
          </div>

          {/* Crease Lines */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <line x1="0" y1="0" x2="50" y2="50" stroke="rgba(184,155,114,0.35)" strokeWidth="0.3" />
            <line x1="100" y1="0" x2="50" y2="50" stroke="rgba(184,155,114,0.35)" strokeWidth="0.3" />
            <line x1="0" y1="100" x2="50" y2="48" stroke="rgba(184,155,114,0.28)" strokeWidth="0.3" />
            <line x1="100" y1="100" x2="50" y2="48" stroke="rgba(184,155,114,0.28)" strokeWidth="0.3" />
          </svg>
        </div>

        {/* Top Opening Flap */}
        <div
          className="absolute inset-x-0 top-0 h-[55%] origin-top overflow-hidden rounded-t-[26px] transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transformStyle: 'preserve-3d',
            transform: isOpening
              ? 'rotateX(172deg)'
              : isBreaking
              ? 'rotateX(28deg)'
              : 'rotateX(0deg)',
            zIndex: isOpening ? 5 : 20,
            filter: 'drop-shadow(0 12px 18px rgba(72,54,32,0.16))'
          }}
        >
          <div
            className="h-full w-full"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background: 'linear-gradient(180deg, #FBF8F3 0%, #F4ECE0 62%, #EADFD0 100%)'
            }}
          >
            <EmbossedDamaskOverlay />
          </div>
        </div>

        {/* 3D Wax Seal with Couple Monogram */}
        <div
          className={`absolute left-1/2 top-[51%] z-30 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${
            isOpening
              ? '-translate-y-32 scale-75 opacity-0'
              : isBreaking
              ? '-translate-y-8 scale-110'
              : 'group-hover:scale-105'
          }`}
        >
          <div
            className={`absolute -inset-6 rounded-full blur-xl transition-opacity duration-700 ${
              isBreaking ? 'opacity-100' : 'opacity-65 animate-pulse-slow'
            }`}
            style={{
              background: 'radial-gradient(circle, rgba(255,220,140,0.85) 0%, rgba(184,155,114,0) 72%)'
            }}
          />

          <div
            className="relative flex h-24 w-24 items-center justify-center rounded-full sm:h-28 sm:w-28"
            style={{
              background:
                'radial-gradient(circle at 32% 28%, #FFFDF9 0%, #F5ECE0 46%, #E5D6BF 85%, #CEB795 100%)',
              boxShadow:
                '0 12px 28px rgba(82,60,34,0.28), inset 0 2px 5px rgba(255,255,255,0.95), inset 0 -4px 8px rgba(164,135,96,0.35)'
            }}
          >
            <div
              className="flex h-[78%] w-[78%] items-center justify-center rounded-full border-2 border-[#C8A870]/70"
              style={{
                boxShadow:
                  'inset 0 2px 6px rgba(154,124,84,0.28), 0 1px 2px rgba(255,255,255,0.9)'
              }}
            >
              <span
                className="font-script text-3xl tracking-tight sm:text-4xl"
                style={{
                  background: 'linear-gradient(135deg, #A3824A 0%, #DFBE82 48%, #9A7742 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.85))'
                }}
              >
                {WEDDING_CONFIG.couple.monogram}
              </span>
            </div>
          </div>
        </div>

        {/* Tap Prompt */}
        <div
          className={`absolute inset-x-0 bottom-7 z-30 flex flex-col items-center text-center transition-opacity duration-500 ${
            isBreaking ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#B89B72]/35 bg-[#FAF8F5]/85 px-4 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.26em] text-[#7A6343] shadow-sm backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-[#B89B72]" />
            Tap Seal to Open
          </span>
          <p className="mt-2 font-serif text-xs italic text-[#7B6E60]">
            {WEDDING_CONFIG.couple.names} &bull; Digital Invitation
          </p>
        </div>
      </div>

      {/* Skip Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setStage('done');
          onComplete();
        }}
        className="absolute right-5 top-5 z-40 rounded-full border border-[#B89B72]/30 bg-[#FAF8F5]/75 px-3.5 py-1.5 font-sans text-[11px] uppercase tracking-[0.2em] text-[#6E655D] backdrop-blur-md transition hover:bg-[#FAF8F5] hover:text-[#1F1D1B]"
      >
        Skip Intro
      </button>
    </div>
  );
}
