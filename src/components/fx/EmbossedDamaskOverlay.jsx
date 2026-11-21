import React from 'react';

/**
 * Embossed Floral Damask SVG Pattern
 * Simulates tactile heavy letterpress paper relief with highlight/shadow offsets.
 */
export function EmbossedDamaskOverlay({ className = '' }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="damask-emboss"
          width="140"
          height="140"
          patternUnits="userSpaceOnUse"
        >
          {/* Subtle raised highlight offset */}
          <g transform="translate(-0.8, -0.8)" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2">
            <path d="M70 14 C84 32, 98 44, 70 70 C42 44, 56 32, 70 14 Z" />
            <path d="M70 126 C84 108, 98 96, 70 70 C42 96, 56 108, 70 126 Z" />
            <path d="M14 70 C32 56, 44 42, 70 70 C44 98, 32 84, 14 70 Z" />
            <path d="M126 70 C108 56, 96 42, 70 70 C96 98, 108 84, 126 70 Z" />
            <circle cx="70" cy="70" r="9" />
            <path d="M35 35 Q50 38 52 52 Q38 50 35 35 Z" />
            <path d="M105 35 Q90 38 88 52 Q102 50 105 35 Z" />
            <path d="M35 105 Q50 102 52 88 Q38 90 35 105 Z" />
            <path d="M105 105 Q90 102 88 88 Q102 90 105 105 Z" />
            <circle cx="70" cy="36" r="3" />
            <circle cx="70" cy="104" r="3" />
            <circle cx="36" cy="70" r="3" />
            <circle cx="104" cy="70" r="3" />
          </g>
          {/* Soft recessed shadow offset */}
          <g transform="translate(1, 1.2)" fill="none" stroke="rgba(166,144,116,0.22)" strokeWidth="1.3">
            <path d="M70 14 C84 32, 98 44, 70 70 C42 44, 56 32, 70 14 Z" />
            <path d="M70 126 C84 108, 98 96, 70 70 C42 96, 56 108, 70 126 Z" />
            <path d="M14 70 C32 56, 44 42, 70 70 C44 98, 32 84, 14 70 Z" />
            <path d="M126 70 C108 56, 96 42, 70 70 C96 98, 108 84, 126 70 Z" />
            <circle cx="70" cy="70" r="9" />
            <path d="M35 35 Q50 38 52 52 Q38 50 35 35 Z" />
            <path d="M105 35 Q90 38 88 52 Q102 50 105 35 Z" />
            <path d="M35 105 Q50 102 52 88 Q38 90 35 105 Z" />
            <path d="M105 105 Q90 102 88 88 Q102 90 105 105 Z" />
          </g>
          {/* Main paper body fill for sculpted relief */}
          <g fill="rgba(249,245,238,0.65)" stroke="rgba(218,205,186,0.3)" strokeWidth="0.7">
            <path d="M70 14 C84 32, 98 44, 70 70 C42 44, 56 32, 70 14 Z" />
            <path d="M70 126 C84 108, 98 96, 70 70 C42 96, 56 108, 70 126 Z" />
            <path d="M14 70 C32 56, 44 42, 70 70 C44 98, 32 84, 14 70 Z" />
            <path d="M126 70 C108 56, 96 42, 70 70 C96 98, 108 84, 126 70 Z" />
            <circle cx="70" cy="70" r="8" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#damask-emboss)" />
    </svg>
  );
}
