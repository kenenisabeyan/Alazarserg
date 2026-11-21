import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { WEDDING_CONFIG } from '../../config/weddingConfig';

/**
 * 3D Animated Flanking Celebrity Loved Portraits
 * Two floating, arched, perspective-tilted 3D portrait frames on the left and right flanks.
 * Features realistic gold bezel frames, floating levitation physics, diagonal light sheen sweeps,
 * and reactive 3D mouse parallax.
 */
export function Side3DPortraits({ mouseOffset = { x: 0, y: 0 } }) {
  const [hoveredSide, setHoveredSide] = useState(null);

  const portraits = {
    groom: {
      title: 'Alazar',
      subtitle: 'The Groom',
      quote: 'My greatest journey began the moment I saw you.',
      // High-fashion black-tie editorial groom portrait
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85',
      accent: '#B89B72'
    },
    bride: {
      title: 'Serg',
      subtitle: 'The Bride',
      quote: 'With you, every day feels like poetry and home.',
      // Ethereal haute couture editorial bride portrait
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85',
      accent: '#D4B47C'
    }
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-4 sm:px-8 lg:px-14 overflow-hidden">
      {/* ================================================================
          LEFT 3D PORTRAIT: THE GROOM (ALAZAR)
         ================================================================ */}
      <div
        className="pointer-events-auto hidden md:block transition-transform duration-700 ease-out"
        style={{
          perspective: '1200px',
          transform: `translate3d(${mouseOffset.x * -16}px, ${mouseOffset.y * -12}px, 0)`
        }}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div
          className="group relative cursor-pointer select-none transition-all duration-700 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform:
              hoveredSide === 'left'
                ? 'rotateY(6deg) rotateX(2deg) scale(1.06) translateY(-8px)'
                : `rotateY(${14 + mouseOffset.x * 6}deg) rotateX(${-4 + mouseOffset.y * -4}deg)`
          }}
        >
          {/* Ambient Warm Golden Aura Bloom behind frame */}
          <div
            className="absolute -inset-5 rounded-t-[140px] rounded-b-3xl opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-90"
            style={{
              background:
                'radial-gradient(circle at 50% 40%, rgba(248, 217, 148, 0.75) 0%, rgba(184, 155, 114, 0.3) 65%, transparent 100%)'
            }}
          />

          {/* Main Arched 3D Luxury Bezel Frame */}
          <div
            className="relative h-[340px] w-[200px] lg:h-[400px] lg:w-[240px] xl:h-[440px] xl:w-[260px] overflow-hidden rounded-t-[130px] rounded-b-2xl border-2 border-[#D4B47C]/80 p-2 transition-all duration-500"
            style={{
              background:
                'linear-gradient(145deg, #FFFDF9 0%, #F5EAD7 40%, #E3CDA9 80%, #C9A977 100%)',
              boxShadow:
                '0 28px 65px -15px rgba(58, 44, 28, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.9) inset, 0 10px 24px rgba(184, 155, 114, 0.25)'
            }}
          >
            {/* Inner Fine Gold Inlay Molding */}
            <div className="pointer-events-none absolute inset-2 rounded-t-[122px] rounded-b-xl border border-[#B89B72]/50 z-20" />

            {/* Portrait Image Canvas Container */}
            <div className="relative h-full w-full overflow-hidden rounded-t-[120px] rounded-b-xl bg-[#FAF8F5]">
              <img
                src={portraits.groom.image}
                alt={`${portraits.groom.title} - ${portraits.groom.subtitle}`}
                className="h-full w-full object-cover object-center filter contrast-[1.04] brightness-[0.98] transition-transform duration-1000 ease-out group-hover:scale-108"
                loading="eager"
              />

              {/* Warm Golden Hour Vignette Overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255, 245, 225, 0.12) 0%, rgba(184, 155, 114, 0.08) 50%, rgba(31, 29, 27, 0.72) 100%)'
                }}
              />

              {/* Diagonal Light Sheen Sweep Animation */}
              <div
                className="pointer-events-none absolute -inset-full opacity-0 transition-opacity duration-1000 group-hover:opacity-100 animate-pulse-slow"
                style={{
                  background:
                    'linear-gradient(120deg, transparent 38%, rgba(255, 255, 255, 0.4) 50%, transparent 62%)'
                }}
              />

              {/* Bottom Caption Pill */}
              <div className="absolute inset-x-3 bottom-3 z-20 rounded-xl border border-white/40 bg-[#FAF8F5]/85 p-3 text-center backdrop-blur-md shadow-sm transition-transform duration-500 group-hover:translate-y-[-2px]">
                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-[#9E7D49]">
                  {portraits.groom.subtitle}
                </span>
                <h3 className="mt-0.5 font-serif text-lg font-medium text-[#1F1D1B]">
                  {portraits.groom.title}
                </h3>
                <p className="mt-1 font-serif text-[11px] italic text-[#5C554E] line-clamp-1">
                  "{portraits.groom.quote}"
                </p>
              </div>

              {/* Top Luxury Sparkle Badge */}
              <div className="absolute left-3 top-4 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-[#FAF8F5]/85 text-[#9E7D49] shadow-sm backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================
          RIGHT 3D PORTRAIT: THE BRIDE (SERG)
         ================================================================ */}
      <div
        className="pointer-events-auto hidden md:block transition-transform duration-700 ease-out"
        style={{
          perspective: '1200px',
          transform: `translate3d(${mouseOffset.x * 16}px, ${mouseOffset.y * 12}px, 0)`
        }}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div
          className="group relative cursor-pointer select-none transition-all duration-700 ease-out"
          style={{
            transformStyle: 'preserve-3d',
            transform:
              hoveredSide === 'right'
                ? 'rotateY(-6deg) rotateX(2deg) scale(1.06) translateY(-8px)'
                : `rotateY(${-14 + mouseOffset.x * 6}deg) rotateX(${-4 + mouseOffset.y * -4}deg)`
          }}
        >
          {/* Ambient Warm Golden Aura Bloom behind frame */}
          <div
            className="absolute -inset-5 rounded-t-[140px] rounded-b-3xl opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-90"
            style={{
              background:
                'radial-gradient(circle at 50% 40%, rgba(248, 217, 148, 0.75) 0%, rgba(184, 155, 114, 0.3) 65%, transparent 100%)'
            }}
          />

          {/* Main Arched 3D Luxury Bezel Frame */}
          <div
            className="relative h-[340px] w-[200px] lg:h-[400px] lg:w-[240px] xl:h-[440px] xl:w-[260px] overflow-hidden rounded-t-[130px] rounded-b-2xl border-2 border-[#D4B47C]/80 p-2 transition-all duration-500"
            style={{
              background:
                'linear-gradient(215deg, #FFFDF9 0%, #F5EAD7 40%, #E3CDA9 80%, #C9A977 100%)',
              boxShadow:
                '0 28px 65px -15px rgba(58, 44, 28, 0.35), 0 0 0 1px rgba(255, 255, 255, 0.9) inset, 0 10px 24px rgba(184, 155, 114, 0.25)'
            }}
          >
            {/* Inner Fine Gold Inlay Molding */}
            <div className="pointer-events-none absolute inset-2 rounded-t-[122px] rounded-b-xl border border-[#B89B72]/50 z-20" />

            {/* Portrait Image Canvas Container */}
            <div className="relative h-full w-full overflow-hidden rounded-t-[120px] rounded-b-xl bg-[#FAF8F5]">
              <img
                src={portraits.bride.image}
                alt={`${portraits.bride.title} - ${portraits.bride.subtitle}`}
                className="h-full w-full object-cover object-center filter contrast-[1.04] brightness-[0.98] transition-transform duration-1000 ease-out group-hover:scale-108"
                loading="eager"
              />

              {/* Warm Golden Hour Vignette Overlay */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255, 245, 225, 0.12) 0%, rgba(184, 155, 114, 0.08) 50%, rgba(31, 29, 27, 0.72) 100%)'
                }}
              />

              {/* Diagonal Light Sheen Sweep Animation */}
              <div
                className="pointer-events-none absolute -inset-full opacity-0 transition-opacity duration-1000 group-hover:opacity-100 animate-pulse-slow"
                style={{
                  background:
                    'linear-gradient(120deg, transparent 38%, rgba(255, 255, 255, 0.4) 50%, transparent 62%)'
                }}
              />

              {/* Bottom Caption Pill */}
              <div className="absolute inset-x-3 bottom-3 z-20 rounded-xl border border-white/40 bg-[#FAF8F5]/85 p-3 text-center backdrop-blur-md shadow-sm transition-transform duration-500 group-hover:translate-y-[-2px]">
                <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-[#9E7D49]">
                  {portraits.bride.subtitle}
                </span>
                <h3 className="mt-0.5 font-serif text-lg font-medium text-[#1F1D1B]">
                  {portraits.bride.title}
                </h3>
                <p className="mt-1 font-serif text-[11px] italic text-[#5C554E] line-clamp-1">
                  "{portraits.bride.quote}"
                </p>
              </div>

              {/* Top Luxury Heart Badge */}
              <div className="absolute right-3 top-4 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-[#FAF8F5]/85 text-[#9E7D49] shadow-sm backdrop-blur-sm">
                <Heart className="h-3.5 w-3.5 fill-[#B89B72] text-[#B89B72]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
