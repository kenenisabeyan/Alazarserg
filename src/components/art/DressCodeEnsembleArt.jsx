import React from 'react';

/**
 * Editorial Attire Ensemble Illustration
 * Curated formal tuxedos, evening dresses, and traditional Habesha Kemis silhouettes.
 */
export function DressCodeEnsembleArt() {
  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-[#B89B72]/30 bg-gradient-to-b from-[#FFFDF9] to-[#F5EFE5] px-4 pt-6 pb-4 shadow-[0_14px_38px_rgba(146,120,82,0.08)]">
      <svg
        viewBox="0 0 560 210"
        className="mx-auto h-auto w-full max-w-xl"
        aria-label="Curated formal and traditional Habesha attire silhouette guide"
      >
        <path
          d="M90 198 V96 C90 36 165 12 280 12 C395 12 470 36 470 96 V198 Z"
          fill="#FAF6EE"
          stroke="#DFCEB3"
          strokeWidth="1"
        />

        {/* Silhouette 1: Tailored Sand Suit */}
        <g transform="translate(88, 36)">
          <circle cx="32" cy="22" r="10" fill="#E3C7B0" />
          <path d="M16 42 Q32 34 48 42 L54 106 L44 106 L44 156 L34 156 L32 114 L30 156 L20 156 L20 106 L10 106 Z" fill="#C9B8A3" />
          <path d="M27 39 L32 58 L37 39 Z" fill="#FAF8F5" />
          <line x1="32" y1="58" x2="32" y2="106" stroke="#9F8B74" strokeWidth="1" />
        </g>

        {/* Silhouette 2: Warm Terracotta Flowing Evening Gown */}
        <g transform="translate(168, 40)">
          <circle cx="34" cy="22" r="9.5" fill="#DFBFA8" />
          <path d="M22 42 Q34 36 46 42 L50 74 Q62 122 66 154 L2 154 Q6 122 18 74 Z" fill="#D59A84" />
          <path d="M18 48 Q34 62 50 48" fill="none" stroke="#F7E4D8" strokeWidth="1.5" />
        </g>

        {/* Silhouette 3: Champagne Gold Traditional Habesha Kemis & Netela */}
        <g transform="translate(248, 34)">
          <circle cx="34" cy="22" r="10" fill="#D8B398" />
          <path d="M20 42 Q34 36 48 42 L54 80 Q68 128 70 160 L-2 160 Q0 128 14 80 Z" fill="#F2E3C9" stroke="#D4B47C" strokeWidth="1" />
          <path d="M4 146 H64 M2 152 H66" stroke="#B89254" strokeWidth="2.4" strokeDasharray="5 2" />
          <path d="M17 76 H51" stroke="#B89254" strokeWidth="2" />
          <path d="M14 48 Q34 68 56 54" fill="none" stroke="#FFFDF9" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
        </g>

        {/* Silhouette 4: Classic Espresso Formal Suit */}
        <g transform="translate(332, 36)">
          <circle cx="32" cy="22" r="10" fill="#DEC1AA" />
          <path d="M16 42 Q32 34 48 42 L54 106 L44 106 L44 156 L34 156 L32 114 L30 156 L20 156 L20 106 L10 106 Z" fill="#5A4B41" />
          <path d="M27 39 L32 58 L37 39 Z" fill="#FAF8F5" />
          <path d="M29 43 L35 43 L32 46 Z" fill="#B89B72" />
        </g>

        {/* Silhouette 5: Dusty Rose Silk Dress */}
        <g transform="translate(410, 42)">
          <circle cx="32" cy="22" r="9.5" fill="#E3C4AE" />
          <path d="M20 42 Q32 36 44 42 L48 76 Q58 118 60 152 L4 152 Q6 118 16 76 Z" fill="#DFC3BC" />
          <path d="M16 78 H48" stroke="#B89B72" strokeWidth="1.2" />
        </g>

        <line x1="65" y1="196" x2="495" y2="196" stroke="#B89B72" strokeOpacity="0.45" strokeWidth="1" />
      </svg>
    </div>
  );
}
