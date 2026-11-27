import React from 'react';

/**
 * Luminous Arched Pavilion Illustration (3D Parallax Hero Art)
 * Multi-layer architectural scene featuring a sunlit classical lakeside palace,
 * radiating sun rays, grand courtyard balustrades, reflecting pool, and foreground framing arch with glowing lanterns.
 */
export function LuminousArchHeroArt({ mouseOffset = { x: 0, y: 0 } }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none">
      {/* Sky & Radiant Warm Horizon Gradient - Translucent to frame couple photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 38%, rgba(212, 180, 124, 0.18) 0%, rgba(31, 29, 27, 0.45) 55%, rgba(18, 16, 14, 0.78) 100%)'
        }}
      />

      {/* ==================================================================
          LAYER 1: Distant 3D Architectural Palace, Sun Halo & Water Pool
         ================================================================== */}
      <svg
        viewBox="0 0 800 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * -12}px, ${mouseOffset.y * -9}px, 0) scale(1.05)`
        }}
      >
        <defs>
          {/* Luminous Sun Glow */}
          <radialGradient id="sunGlowHero" cx="50%" cy="40%" r="52%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="25%" stopColor="#FFF2D0" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#F8D692" stopOpacity="0.55" />
            <stop offset="85%" stopColor="#E6BD70" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D9AB55" stopOpacity="0" />
          </radialGradient>

          {/* Distant Hills Gradient */}
          <linearGradient id="distantHills" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D8BE9A" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#BEA27C" stopOpacity="0.9" />
          </linearGradient>

          {/* Palace Sandstone Gradient */}
          <linearGradient id="palaceStone" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFBF2" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#EFE0C7" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#D5C09F" stopOpacity="0.95" />
          </linearGradient>

          {/* Palace Shaded Wing */}
          <linearGradient id="palaceShade" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E8D5B8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#BFAB8B" stopOpacity="0.95" />
          </linearGradient>

          {/* Lake Water Gradient */}
          <linearGradient id="lakeReflect" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D5BE97" stopOpacity="0.75" />
            <stop offset="35%" stopColor="#E4D1AF" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#EFE3CC" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#F5EDE0" stopOpacity="0.98" />
          </linearGradient>
        </defs>

        {/* Luminous Sun Orb */}
        <circle cx="400" cy="380" r="320" fill="url(#sunGlowHero)" />

        {/* Volumetric Sun Rays */}
        <g opacity="0.32" fill="#FFFFFF">
          <polygon points="400,370 140,0 220,0" />
          <polygon points="400,370 330,0 470,0" />
          <polygon points="400,370 580,0 660,0" />
          <polygon points="400,370 0,160 0,260" />
          <polygon points="400,370 800,160 800,260" />
        </g>

        {/* Distant Rolling Hills of the Great Rift Valley / Bishoftu */}
        <path
          d="M0 580 Q160 520 340 545 T700 530 Q760 540 800 550 V640 H0 Z"
          fill="url(#distantHills)"
        />
        <path
          d="M0 600 Q220 555 420 575 T800 565 V650 H0 Z"
          fill="#CBB08C"
          opacity="0.8"
        />

        {/* ================================================================
            DISTANT ARCHITECTURAL GRAND PALACE & DOME COMPLEX
           ================================================================ */}
        <g id="distant-palace">
          {/* Main Central Grand Dome */}
          <path
            d="M320 560 C320 455, 480 455, 480 560 Z"
            fill="url(#palaceStone)"
            stroke="#B69A73"
            strokeWidth="1.6"
          />
          {/* Dome Ribs */}
          <path d="M400 455 V560" stroke="#B89B72" strokeWidth="1.2" />
          <path d="M360 475 C372 505 376 535 376 560" stroke="#CBB492" strokeWidth="1" />
          <path d="M440 475 C428 505 424 535 424 560" stroke="#CBB492" strokeWidth="1" />
          {/* Golden Dome Lantern Spire */}
          <rect x="395" y="432" width="10" height="24" fill="#FAF5E9" stroke="#B89254" strokeWidth="1.2" />
          <polygon points="400,410 406,432 394,432" fill="#E6C887" stroke="#B89254" strokeWidth="1" />
          <circle cx="400" cy="406" r="4.5" fill="#D4B47C" />

          {/* Left Wing Dome */}
          <path d="M150 580 C150 510, 240 510, 240 580 Z" fill="url(#palaceShade)" stroke="#AFA088" strokeWidth="1.2" />
          <rect x="192" y="496" width="6" height="15" fill="#FAF5E9" stroke="#B89B72" strokeWidth="0.8" />
          <polygon points="195,482 199,496 191,496" fill="#D4B47C" />

          {/* Right Wing Dome */}
          <path d="M560 580 C560 510, 650 510, 650 580 Z" fill="url(#palaceShade)" stroke="#AFA088" strokeWidth="1.2" />
          <rect x="602" y="496" width="6" height="15" fill="#FAF5E9" stroke="#B89B72" strokeWidth="0.8" />
          <polygon points="605,482 609,496 601,496" fill="#D4B47C" />

          {/* Center Colonnade Base Building */}
          <rect x="290" y="555" width="220" height="65" rx="2" fill="url(#palaceStone)" stroke="#B69A73" strokeWidth="1.4" />
          {/* Left & Right Palace Wings */}
          <rect x="110" y="575" width="185" height="45" fill="url(#palaceShade)" stroke="#AFA088" strokeWidth="1.2" />
          <rect x="505" y="575" width="185" height="45" fill="url(#palaceShade)" stroke="#AFA088" strokeWidth="1.2" />

          {/* Illuminated Arched Windows across Palace facade */}
          <g fill="#FFF5D6" stroke="#B69A73" strokeWidth="0.8">
            {/* Center triple high arches */}
            {[325, 365, 405, 445].map((x) => (
              <path key={x} d={`M${x} 615 V580 Q${x + 12} 568 ${x + 24} 580 V615 Z`} />
            ))}
            {/* Left wing arches */}
            {[130, 165, 200, 235].map((x) => (
              <path key={x} d={`M${x} 615 V590 Q${x + 10} 582 ${x + 20} 590 V615 Z`} fill="#FFEEC2" />
            ))}
            {/* Right wing arches */}
            {[530, 565, 600, 635].map((x) => (
              <path key={x} d={`M${x} 615 V590 Q${x + 10} 582 ${x + 20} 590 V615 Z`} fill="#FFEEC2" />
            ))}
          </g>

          {/* Grand Lakeside Promenade Balustrade */}
          <rect x="60" y="618" width="680" height="10" rx="1" fill="#E8DEC9" stroke="#9E8565" strokeWidth="1" />
          {/* Balusters */}
          <g stroke="#9E8565" strokeWidth="1.8">
            {Array.from({ length: 42 }).map((_, i) => (
              <line key={i} x1={75 + i * 16} y1="628" x2={75 + i * 16} y2="642" />
            ))}
          </g>
          <rect x="55" y="642" width="690" height="8" rx="1" fill="#DFCDB4" stroke="#9E8565" strokeWidth="1" />
        </g>

        {/* ================================================================
            SHIMMERING CRATER LAKE REFLECTING POOL
           ================================================================ */}
        <rect x="0" y="648" width="800" height="252" fill="url(#lakeReflect)" />

        {/* Shimmering Golden Ripples & Dome Reflections */}
        <g stroke="#FFFDF8" strokeOpacity="0.75" strokeWidth="1.5">
          <ellipse cx="400" cy="675" rx="85" ry="3.5" fill="none" />
          <ellipse cx="400" cy="710" rx="140" ry="4.5" fill="none" />
          <ellipse cx="400" cy="750" rx="190" ry="5.5" fill="none" strokeOpacity="0.6" />
          <line x1="220" y1="685" x2="580" y2="685" />
          <line x1="270" y1="725" x2="530" y2="725" strokeWidth="1.8" />
          <line x1="160" y1="770" x2="640" y2="770" strokeWidth="1.2" strokeOpacity="0.5" />
          <line x1="310" y1="815" x2="490" y2="815" strokeWidth="1.2" strokeOpacity="0.4" />
        </g>
      </svg>

      {/* ==================================================================
          LAYER 2: Foreground Classical Marble Arch & Glowing Lanterns
         ================================================================== */}
      <svg
        viewBox="0 0 800 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mouseOffset.x * 14}px, ${mouseOffset.y * 10}px, 0)`
        }}
      >
        <defs>
          {/* Arch Paper / Marble Relief */}
          <linearGradient id="foreArchMarble" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.98" />
            <stop offset="50%" stopColor="#F5EBDD" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E5D3B8" stopOpacity="0.95" />
          </linearGradient>

          {/* Deep Sculpted Gold Borders */}
          <linearGradient id="richGoldMolding" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EED29A" />
            <stop offset="35%" stopColor="#B88F48" />
            <stop offset="70%" stopColor="#DFBF7E" />
            <stop offset="100%" stopColor="#967030" />
          </linearGradient>

          {/* Lantern Candle Glow */}
          <radialGradient id="lanternWarmGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="25%" stopColor="#FFF2BF" stopOpacity="0.95" />
            <stop offset="55%" stopColor="#F7C455" stopOpacity="0.65" />
            <stop offset="85%" stopColor="#E89B2B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#E89B2B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer Ivory Framing Cutout (Frames the entire screen like an open royal portico) */}
        <path
          d="M0 0 H800 V900 H690 V380 C690 190 565 80 400 80 C235 80 110 190 110 380 V900 H0 Z"
          fill="url(#foreArchMarble)"
          style={{ filter: 'drop-shadow(0 20px 35px rgba(62,44,22,0.18))' }}
        />

        {/* Heavy Outer Gold Filigree Molding */}
        <path
          d="M110 900 V380 C110 190 235 80 400 80 C565 80 690 190 690 380 V900"
          fill="none"
          stroke="url(#richGoldMolding)"
          strokeWidth="3.2"
        />

        {/* Inner Delicate Parallel Gold Inlay */}
        <path
          d="M126 900 V385 C126 205 244 98 400 98 C556 98 674 205 674 385 V900"
          fill="none"
          stroke="url(#richGoldMolding)"
          strokeWidth="1.4"
          strokeOpacity="0.8"
        />

        {/* Subtle Decorative Rosette Key at Apex of Arch */}
        <g transform="translate(400, 80)">
          <circle cx="0" cy="0" r="14" fill="#FAF5EB" stroke="#B89254" strokeWidth="2" />
          <circle cx="0" cy="0" r="7" fill="#DFBE82" />
          <circle cx="0" cy="0" r="2.5" fill="#FAF8F5" />
        </g>

        {/* ================================================================
            LEFT HANGING ROYAL GOLDEN LANTERN
           ================================================================ */}
        <g className="origin-top animate-sway-slow">
          {/* Chain */}
          <line x1="168" y1="210" x2="168" y2="330" stroke="#A98446" strokeWidth="1.6" />
          {/* Radiant Halo */}
          <circle cx="168" cy="365" r="62" fill="url(#lanternWarmGlow)" />
          {/* Lantern Brass Frame */}
          <path
            d="M152 340 L168 326 L184 340 L180 388 L168 398 L156 388 Z"
            fill="#FFF6DE"
            stroke="#967030"
            strokeWidth="2"
          />
          {/* Inner Candle Flame */}
          <circle cx="168" cy="365" r="6" fill="#FFA929" />
          <circle cx="168" cy="364" r="3" fill="#FFFFFF" />
          <line x1="168" y1="326" x2="168" y2="398" stroke="#B89254" strokeWidth="1" />
          <line x1="154" y1="365" x2="182" y2="365" stroke="#B89254" strokeWidth="1" />
          {/* Bottom Finial */}
          <polygon points="168,398 171,408 165,408" fill="#B89254" />
        </g>

        {/* ================================================================
            RIGHT HANGING ROYAL GOLDEN LANTERN
           ================================================================ */}
        <g className="origin-top animate-sway-delayed">
          {/* Chain */}
          <line x1="632" y1="210" x2="632" y2="315" stroke="#A98446" strokeWidth="1.6" />
          {/* Radiant Halo */}
          <circle cx="632" cy="350" r="62" fill="url(#lanternWarmGlow)" />
          {/* Lantern Brass Frame */}
          <path
            d="M616 325 L632 311 L648 325 L644 373 L632 383 L620 373 Z"
            fill="#FFF6DE"
            stroke="#967030"
            strokeWidth="2"
          />
          {/* Inner Candle Flame */}
          <circle cx="632" cy="350" r="6" fill="#FFA929" />
          <circle cx="632" cy="349" r="3" fill="#FFFFFF" />
          <line x1="632" y1="311" x2="632" y2="383" stroke="#B89254" strokeWidth="1" />
          <line x1="618" y1="350" x2="646" y2="350" stroke="#B89254" strokeWidth="1" />
          {/* Bottom Finial */}
          <polygon points="632,383 635,393 629,393" fill="#B89254" />
        </g>

        {/* Classical Botanical Acanthus Corner Scrollwork */}
        <g opacity="0.9" fill="#FFFDF9" stroke="#B89254" strokeWidth="1.2">
          {/* Top Left Corner */}
          <circle cx="160" cy="138" r="26" />
          <circle cx="196" cy="112" r="18" />
          <circle cx="126" cy="178" r="20" />
          <path d="M178 152 Q230 142 260 105" fill="none" stroke="#B89254" strokeWidth="1.5" />
          <ellipse cx="230" cy="128" rx="12" ry="5" transform="rotate(-32 230 128)" fill="#E9DEC9" />

          {/* Top Right Corner */}
          <circle cx="640" cy="138" r="26" />
          <circle cx="604" cy="112" r="18" />
          <circle cx="674" cy="178" r="20" />
          <path d="M622 152 Q570 142 540 105" fill="none" stroke="#B89254" strokeWidth="1.5" />
          <ellipse cx="570" cy="128" rx="12" ry="5" transform="rotate(32 570 128)" fill="#E9DEC9" />
        </g>
      </svg>
    </div>
  );
}
