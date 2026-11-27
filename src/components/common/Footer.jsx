import React from 'react';
import { RotateCcw } from 'lucide-react';
import { GoldDustCanvas } from '../fx/GoldDustCanvas';
import { WEDDING_CONFIG } from '../../config/weddingConfig';

/**
 * Editorial Dark Luxury Footer (Matching Video Reference 00:43 - 00:46)
 */
export function Footer({ onReplayIntro }) {
  return (
    <footer className="relative overflow-hidden bg-[#181716] px-5 pt-16 pb-28 text-center text-[#FAF8F5] sm:pb-16 border-t border-[#B89B72]/20">
      <GoldDustCanvas intensity={0.45} />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        {/* Monogram */}
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B89B72]/60 font-serif text-2xl text-[#D4B47C] shadow-[0_0_20px_rgba(212,180,124,0.15)]">
          {WEDDING_CONFIG.couple.monogram}
        </span>

        {/* Couple Names */}
        <h3 className="mt-5 font-serif text-3xl tracking-[0.18em] text-[#FAF8F5] sm:text-4xl font-light">
          {WEDDING_CONFIG.couple.groom} &amp; {WEDDING_CONFIG.couple.bride}
        </h3>

        {/* Date and Location */}
        <p className="mt-2 font-sans text-xs uppercase tracking-[0.32em] text-[#B89B72]">
          {WEDDING_CONFIG.date.day} . 04 . {WEDDING_CONFIG.date.year} &bull; {WEDDING_CONFIG.venue.name.toUpperCase()}, {WEDDING_CONFIG.venue.city.toUpperCase()}
        </p>

        {/* Replay 3D Envelope Trigger */}
        <button
          type="button"
          onClick={onReplayIntro}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#B89B72]/40 bg-white/5 px-5 py-2.5 font-sans text-[11px] uppercase tracking-[0.24em] text-[#E8DFD1] transition hover:border-[#D4B47C] hover:bg-white/10 hover:text-white"
        >
          <RotateCcw className="h-3.5 w-3.5 text-[#D4B47C]" />
          Replay 3D Envelope Opening
        </button>

        <p className="mt-8 font-sans text-[10px] uppercase tracking-[0.2em] text-[#8A8177]">
          With Gratitude &bull; A Celebration of Love, Heritage &amp; Forever
        </p>
      </div>
    </footer>
  );
}
