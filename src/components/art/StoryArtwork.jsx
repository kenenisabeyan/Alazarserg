import React from 'react';

/**
 * Arched Story Line-Art Illustration Component
 * Self-contained SVG illustrations without external image dependency.
 */
export function StoryArtwork({ variant }) {
  const palettes = {
    met: {
      bg: 'from-[#F5EBDC] via-[#EADBC4] to-[#DEC7A6]',
      accent: '#B89B72',
      label: 'Addis Ababa • 2023'
    },
    trip: {
      bg: 'from-[#EEF0EB] via-[#DCE2D7] to-[#C8D1C2]',
      accent: '#6E7B68',
      label: 'Lake Langano • 2024'
    },
    proposal: {
      bg: 'from-[#F7E8DE] via-[#ECD2C1] to-[#DCB69F]',
      accent: '#A8644D',
      label: 'Bishoftu Sunset • 2026'
    }
  };
  const theme = palettes[variant] || palettes.met;

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden rounded-t-[180px] rounded-b-2xl border border-[#B89B72]/30 bg-gradient-to-b ${theme.bg} p-4 shadow-[0_20px_50px_rgba(31,29,27,0.08)]`}
    >
      <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden rounded-t-[168px] rounded-b-xl border border-white/60 bg-white/20 p-6 backdrop-blur-[2px]">
        <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#1F1D1B]/65">
          {theme.label}
        </span>

        <svg viewBox="0 0 200 200" className="my-auto h-36 w-36 text-[#1F1D1B]/75">
          {variant === 'met' && (
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="100" cy="100" r="68" stroke={theme.accent} strokeOpacity="0.45" />
              <path d="M58 124 Q58 148 78 148 Q98 148 98 124 Z" fill="rgba(255,255,255,0.45)" />
              <path d="M104 124 Q104 148 124 148 Q144 148 144 124 Z" fill="rgba(255,255,255,0.45)" />
              <path d="M74 114 Q70 98 78 88 Q84 78 76 66" stroke={theme.accent} />
              <path d="M124 114 Q120 98 128 88 Q134 78 126 66" stroke={theme.accent} />
              <path d="M48 152 H154" strokeOpacity="0.5" />
              <path
                d="M92 64 C96 56 104 56 108 64 C112 56 120 56 120 66 C120 76 108 82 108 86 C108 82 96 76 96 66 Z"
                fill={theme.accent}
                fillOpacity="0.25"
                stroke={theme.accent}
              />
            </g>
          )}
          {variant === 'trip' && (
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="100" cy="72" r="24" fill="rgba(255,250,235,0.6)" stroke={theme.accent} />
              <path d="M25 138 Q65 92 105 138 T180 132" strokeWidth="1.4" />
              <path d="M15 152 Q70 116 125 148 T188 148" strokeOpacity="0.5" />
              <line x1="42" y1="164" x2="158" y2="164" stroke={theme.accent} strokeOpacity="0.6" />
              <line x1="65" y1="174" x2="135" y2="174" stroke={theme.accent} strokeOpacity="0.4" />
            </g>
          )}
          {variant === 'proposal' && (
            <g fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="100" cy="116" r="34" strokeWidth="1.6" stroke={theme.accent} />
              <circle cx="100" cy="116" r="29" strokeWidth="0.8" strokeOpacity="0.5" />
              <polygon
                points="100,62 114,76 100,88 86,76"
                fill="rgba(255,255,255,0.75)"
                stroke={theme.accent}
                strokeWidth="1.3"
              />
              <line x1="100" y1="42" x2="100" y2="52" stroke={theme.accent} />
              <line x1="76" y1="54" x2="83" y2="61" stroke={theme.accent} />
              <line x1="124" y1="54" x2="117" y2="61" stroke={theme.accent} />
              <line x1="68" y1="76" x2="77" y2="76" stroke={theme.accent} />
              <line x1="123" y1="76" x2="132" y2="76" stroke={theme.accent} />
            </g>
          )}
        </svg>

        <div className="h-px w-10 bg-[#B89B72]/50" />
      </div>
    </div>
  );
}
