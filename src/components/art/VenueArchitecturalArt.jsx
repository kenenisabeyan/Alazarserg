import React from 'react';

/**
 * Architectural Lakefront Pavilion Artwork
 * Rich SVG vector artwork portraying Kuriftu Resort pavilion, arched windows, and Lake Kuriftu water reflections.
 */
export function VenueArchitecturalArt() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-[#B89B72]/35 bg-gradient-to-b from-[#FDF7EB] via-[#F4E6CE] to-[#E9D5B5] shadow-[0_20px_50px_rgba(31,29,27,0.08)]">
      <svg viewBox="0 0 640 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="venueSun" cx="50%" cy="32%" r="55%">
            <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#F8DFAD" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F2E2C6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lakeWater" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D7C3A1" stopOpacity="0.65" />
            <stop offset="45%" stopColor="#EADBC3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FAF6EE" stopOpacity="0.98" />
          </linearGradient>
          <linearGradient id="palaceWarm" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBF2" />
            <stop offset="100%" stopColor="#E6D2B2" />
          </linearGradient>
        </defs>

        {/* Sky & Horizon */}
        <rect width="640" height="400" fill="#F8EFE0" />
        <circle cx="320" cy="135" r="220" fill="url(#venueSun)" />

        {/* Distant Hills of Bishoftu */}
        <path d="M0 245 Q140 190 310 232 T640 220 V290 H0 Z" fill="#E3D2B6" opacity="0.6" />

        {/* Pavilion Architecture */}
        <g fill="url(#palaceWarm)" stroke="#B89B72" strokeWidth="1.2">
          <rect x="85" y="180" width="135" height="92" rx="2" />
          <rect x="420" y="180" width="135" height="92" rx="2" />
          <rect x="208" y="148" width="224" height="124" rx="3" />
          <path d="M196 150 L320 108 L444 150 Z" fill="#EFE0C6" />
          <circle cx="320" cy="100" r="6" fill="#D4B47C" />
        </g>

        {/* Arched Windows */}
        <g fill="#FBE4AF" stroke="#B89254" strokeWidth="1">
          {[112, 152, 192, 448, 488, 528].map((x) => (
            <path key={x} d={`M${x - 10} 252 V214 Q${x} 202 ${x + 10} 214 V252 Z`} />
          ))}
          {[255, 320, 385].map((x) => (
            <path
              key={x}
              d={`M${x - 20} 272 V202 Q${x} 178 ${x + 20} 202 V272 Z`}
              fill="#FFF1CC"
            />
          ))}
        </g>

        {/* Acacia Palms */}
        <g stroke="#9D835C" strokeWidth="1.4" fill="none" opacity="0.65">
          <path d="M52 278 Q58 205 64 148" />
          <path d="M64 148 Q35 138 18 158 M64 148 Q95 134 114 156 M64 148 Q45 124 24 128 M64 148 Q84 122 104 128" />
          <path d="M588 278 Q582 205 576 148" />
          <path d="M576 148 Q605 138 622 158 M576 148 Q545 134 526 156 M576 148 Q595 124 616 128 M576 148 Q556 122 536 128" />
        </g>

        {/* Lake Kuriftu Reflection */}
        <rect x="0" y="272" width="640" height="128" fill="url(#lakeWater)" />
        <g stroke="#FFFDF6" strokeOpacity="0.65" strokeWidth="1.2">
          <line x1="220" y1="296" x2="420" y2="296" />
          <line x1="255" y1="316" x2="385" y2="316" />
          <line x1="180" y1="340" x2="460" y2="340" />
          <line x1="280" y1="364" x2="360" y2="364" />
        </g>
      </svg>

      <div className="absolute bottom-4 left-4 rounded-full border border-white/60 bg-[#FAF8F5]/85 px-4 py-1.5 backdrop-blur-md">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[#7D633B]">
          Lakefront Pavilion &bull; Bishoftu
        </span>
      </div>
    </div>
  );
}
