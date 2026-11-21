import React from 'react';

/**
 * Luminous Arched Pavilion Illustration
 * Multi-layer 3D parallax hero scene with golden sunburst, courtyards, and hanging lanterns.
 */
export function LuminousArchHeroArt({ mouseOffset = { x: 0, y: 0 } }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Sky & Horizon Warm Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 42%, #FFF9EC 0%, #F7EBDA 38%, #EFE2CE 72%, #FAF8F5 100%)'
        }}
      />

      {/* Layer 1: Distant Pavilion & Sunburst */}
      <svg
        viewBox="0 0 800 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * -10}px, ${mouseOffset.y * -8}px, 0) scale(1.04)`
        }}
      >
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="46%" r="48%">
            <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#F8E2B4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F7EFE2" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="marbleArch" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#F3E8D7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E6D5BC" stopOpacity="0.88" />
          </linearGradient>
          <linearGradient id="goldLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5C98E" />
            <stop offset="50%" stopColor="#B89254" />
            <stop offset="100%" stopColor="#E9CF9B" />
          </linearGradient>
          <linearGradient id="waterReflect" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EED9B5" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#F7EEE0" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#FAF8F5" stopOpacity="1" />
          </linearGradient>
        </defs>

        <circle cx="400" cy="430" r="340" fill="url(#sunGlow)" />

        <g opacity="0.28" fill="#FFFDF6">
          <polygon points="400,410 180,0 260,0" />
          <polygon points="400,410 350,0 450,0" />
          <polygon points="400,410 540,0 620,0" />
        </g>

        <g fill="#E9DAC3" opacity="0.55">
          <path d="M120 620 L120 510 Q150 475 180 510 L180 620 Z" />
          <path d="M620 620 L620 510 Q650 475 680 510 L680 620 Z" />
          <path d="M230 620 L230 535 Q255 510 280 535 L280 620 Z" />
          <path d="M520 620 L520 535 Q545 510 570 535 L570 620 Z" />
          <path d="M340 620 L340 495 Q400 440 460 495 L460 620 Z" />
          <rect x="80" y="610" width="640" height="22" rx="2" fill="#E3D2B7" />
        </g>

        <rect x="0" y="625" width="800" height="275" fill="url(#waterReflect)" />
        <g stroke="#FFFDF8" strokeOpacity="0.5" strokeWidth="1">
          <line x1="250" y1="665" x2="550" y2="665" />
          <line x1="300" y1="695" x2="500" y2="695" />
          <line x1="280" y1="730" x2="520" y2="730" />
        </g>
      </svg>

      {/* Layer 2: Foreground Arch & Lanterns */}
      <svg
        viewBox="0 0 800 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 12}px, ${mouseOffset.y * 8}px, 0)`
        }}
      >
        <defs>
          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF7D4" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F4C771" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F4C771" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d="M0 0 H800 V900 H680 V385 C680 205 560 95 400 95 C240 95 120 205 120 385 V900 H0 Z"
          fill="url(#marbleArch)"
        />

        <path
          d="M120 880 V385 C120 205 240 95 400 95 C560 95 680 205 680 385 V880"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="2.4"
        />
        <path
          d="M136 880 V390 C136 220 248 112 400 112 C552 112 664 220 664 390 V880"
          fill="none"
          stroke="url(#goldLine)"
          strokeWidth="1"
          strokeOpacity="0.65"
        />

        {/* Left Lantern */}
        <g className="origin-top animate-sway-slow">
          <line x1="176" y1="220" x2="176" y2="338" stroke="#B89B72" strokeWidth="1.2" />
          <circle cx="176" cy="368" r="46" fill="url(#lanternGlow)" />
          <path
            d="M164 345 L176 334 L188 345 L185 384 L176 393 L167 384 Z"
            fill="#FBE5B0"
            stroke="#B89254"
            strokeWidth="1.4"
          />
          <line x1="176" y1="334" x2="176" y2="393" stroke="#B89254" strokeWidth="0.8" />
        </g>

        {/* Right Lantern */}
        <g className="origin-top animate-sway-delayed">
          <line x1="624" y1="220" x2="624" y2="322" stroke="#B89B72" strokeWidth="1.2" />
          <circle cx="624" cy="352" r="46" fill="url(#lanternGlow)" />
          <path
            d="M612 329 L624 318 L636 329 L633 368 L624 377 L615 368 Z"
            fill="#FBE5B0"
            stroke="#B89254"
            strokeWidth="1.4"
          />
          <line x1="624" y1="318" x2="624" y2="377" stroke="#B89254" strokeWidth="0.8" />
        </g>

        {/* Botanical Accents */}
        <g opacity="0.82" fill="#FFFDF9" stroke="#C7A670" strokeWidth="0.9">
          <circle cx="165" cy="145" r="24" />
          <circle cx="195" cy="122" r="18" />
          <circle cx="135" cy="182" r="20" />
          <path d="M180 158 Q225 148 250 115" fill="none" stroke="#B89B72" strokeWidth="1.1" />
          <ellipse cx="222" cy="136" rx="10" ry="4" transform="rotate(-32 222 136)" fill="#E9DEC9" />

          <circle cx="635" cy="145" r="24" />
          <circle cx="605" cy="122" r="18" />
          <circle cx="665" cy="182" r="20" />
          <path d="M620 158 Q575 148 550 115" fill="none" stroke="#B89B72" strokeWidth="1.1" />
          <ellipse cx="578" cy="136" rx="10" ry="4" transform="rotate(32 578 136)" fill="#E9DEC9" />
        </g>

        <rect x="0" y="700" width="800" height="200" fill="url(#bottomCanvasFade)" />
        <defs>
          <linearGradient id="bottomCanvasFade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF8F5" stopOpacity="0" />
            <stop offset="68%" stopColor="#FAF8F5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FAF8F5" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
