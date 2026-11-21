import React from 'react';
import { RotateCcw } from 'lucide-react';
import { WEDDING_CONFIG } from '../../config/weddingConfig';

/**
 * Editorial Footer with Monogram, Details, and Replay Trigger
 */
export function Footer({ onReplayIntro }) {
  return (
    <footer className="border-t border-[#1F1D1B]/10 bg-[#FAF8F5] px-5 pt-14 pb-24 text-center sm:pb-14">
      <div className="mx-auto flex max-w-4xl flex-col items-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B89B72]/50 font-script text-2xl text-[#9E7E49]">
          {WEDDING_CONFIG.couple.monogram}
        </span>
        <h3 className="mt-4 font-serif text-2xl tracking-[0.14em] text-[#1F1D1B]">
          {WEDDING_CONFIG.couple.names}
        </h3>
        <p className="mt-1 font-sans text-xs uppercase tracking-[0.28em] text-[#8E7D6B]">
          {WEDDING_CONFIG.date.display} &bull; {WEDDING_CONFIG.venue.city}, {WEDDING_CONFIG.venue.country}
        </p>

        <button
          type="button"
          onClick={onReplayIntro}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1F1D1B]/15 px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] text-[#6B6259] transition hover:border-[#B89B72] hover:text-[#1F1D1B]"
        >
          <RotateCcw className="h-3.5 w-3.5 text-[#B89B72]" />
          Replay 3D Envelope Opening
        </button>

        <p className="mt-8 font-sans text-[11px] text-[#9A9086]">
          Crafted with love for our cherished guests &bull; Private Digital Invitation
        </p>
      </div>
    </footer>
  );
}
