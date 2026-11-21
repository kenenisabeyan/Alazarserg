import React from 'react';

/**
 * Timeline Architectural & Ceremonial Motifs (Arch, Rings, Glasses, Feast, Dance, Coffee)
 */
export function TimelineArtwork({ type }) {
  return (
    <div className="relative mx-auto flex h-36 w-36 items-center justify-center rounded-t-[90px] rounded-b-2xl border border-[#B89B72]/35 bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F3E8D5] p-3 shadow-[0_14px_34px_rgba(146,120,82,0.12)] sm:h-40 sm:w-40">
      <div className="flex h-full w-full items-center justify-center rounded-t-[80px] rounded-b-xl border border-[#B89B72]/25 bg-white/45">
        <svg viewBox="0 0 120 120" className="h-24 w-24" fill="none">
          <defs>
            <linearGradient id={`goldArt-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFBE82" />
              <stop offset="50%" stopColor="#B89254" />
              <stop offset="100%" stopColor="#E6CA93" />
            </linearGradient>
          </defs>

          {type === 'arch' && (
            <g stroke={`url(#goldArt-${type})`} strokeWidth="1.4">
              <path d="M24 102 V50 C24 26 40 16 60 16 C80 16 96 26 96 50 V102" />
              <path d="M32 102 V52 C32 33 44 24 60 24 C76 24 88 33 88 52 V102" strokeOpacity="0.6" />
              <path d="M18 102 H102" strokeWidth="1.8" />
              <circle cx="60" cy="40" r="5" fill="#F6E5C1" />
              <path d="M60 45 V58" strokeWidth="1" />
              <circle cx="28" cy="36" r="6" fill="#FFFDF8" />
              <circle cx="92" cy="36" r="6" fill="#FFFDF8" />
            </g>
          )}

          {type === 'rings' && (
            <g stroke={`url(#goldArt-${type})`} strokeWidth="1.5">
              <circle cx="48" cy="68" r="21" />
              <circle cx="72" cy="68" r="21" />
              <polygon points="60,26 68,36 60,44 52,36" fill="#FFF7E4" />
              <line x1="60" y1="14" x2="60" y2="21" />
              <line x1="45" y1="22" x2="50" y2="27" />
              <line x1="75" y1="22" x2="70" y2="27" />
              <path d="M34 98 Q60 90 86 98" strokeOpacity="0.55" />
            </g>
          )}

          {type === 'glasses' && (
            <g stroke={`url(#goldArt-${type})`} strokeWidth="1.4">
              <path d="M34 32 L46 60 L38 64 L26 36 Z" fill="#FBF0D8" fillOpacity="0.65" />
              <line x1="42" y1="62" x2="50" y2="88" />
              <line x1="42" y1="90" x2="58" y2="86" />
              <path d="M86 32 L74 60 L82 64 L94 36 Z" fill="#FBF0D8" fillOpacity="0.65" />
              <line x1="78" y1="62" x2="70" y2="88" />
              <line x1="62" y1="86" x2="78" y2="90" />
              <circle cx="60" cy="24" r="2.2" fill="#D4B47C" />
              <circle cx="53" cy="18" r="1.5" fill="#D4B47C" />
              <circle cx="67" cy="18" r="1.5" fill="#D4B47C" />
            </g>
          )}

          {type === 'feast' && (
            <g stroke={`url(#goldArt-${type})`} strokeWidth="1.5">
              <path d="M22 80 C22 50 38 38 60 38 C82 38 98 50 98 80 Z" fill="#FBF1DC" fillOpacity="0.6" />
              <circle cx="60" cy="31" r="6" fill="#FFFDF8" />
              <path d="M16 80 H104" strokeWidth="2" />
              <path d="M26 86 H94" strokeOpacity="0.6" />
              <path d="M40 60 Q60 50 80 60" strokeOpacity="0.5" />
              <circle cx="60" cy="60" r="3" fill="#D4B47C" />
            </g>
          )}

          {type === 'dance' && (
            <g stroke={`url(#goldArt-${type})`} strokeWidth="1.4">
              <circle cx="60" cy="60" r="34" strokeDasharray="3 4" strokeOpacity="0.65" />
              <path d="M46 76 V42 L78 36 V68" strokeWidth="1.6" />
              <ellipse cx="41" cy="76" rx="6" ry="4.5" fill="#F6E5C1" />
              <ellipse cx="73" cy="68" rx="6" ry="4.5" fill="#F6E5C1" />
              <path d="M60 16 L62 22 L68 24 L62 26 L60 32 L58 26 L52 24 L58 22 Z" fill="#DFBE82" stroke="none" />
            </g>
          )}

          {type === 'coffee' && (
            <g stroke={`url(#goldArt-${type})`} strokeWidth="1.4">
              <circle cx="60" cy="76" r="20" fill="#FBF0D8" fillOpacity="0.65" />
              <path d="M55 56 L57 26 H63 L65 56" fill="#FFFDF8" />
              <path d="M64 42 Q82 42 78 66" />
              <path d="M55 46 Q42 40 36 52" />
              <path d="M30 98 H90" strokeWidth="1.6" />
              <path d="M56 18 Q60 12 64 18" strokeOpacity="0.7" />
            </g>
          )}
        </svg>
      </div>
    </div>
  );
}
