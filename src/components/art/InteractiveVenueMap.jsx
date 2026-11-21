import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy } from 'lucide-react';
import { VENUE_PINS } from '../../data/dressCodeData';
import { WEDDING_CONFIG } from '../../config/weddingConfig';

/**
 * Interactive Stylized Venue Map Component
 * Zero external tile loading errors; bespoke vector cartography with selectable interactive pins.
 */
export function InteractiveVenueMap({ onCopyAddress }) {
  const [selectedPin, setSelectedPin] = useState('pavilion');
  const active = VENUE_PINS[selectedPin] || VENUE_PINS.pavilion;

  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-[#B89B72]/35 bg-[#FAF8F5] p-4 shadow-[0_20px_50px_rgba(31,29,27,0.06)] sm:p-5">
      {/* Map Viewport */}
      <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-[#B89B72]/25 bg-[#F4EFE5] sm:h-72">
        <svg viewBox="0 0 400 280" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
          <rect width="400" height="280" fill="#F6F1E7" />

          {/* Lake Kuriftu Basin */}
          <path
            d="M170 -10 C150 45, 195 108, 265 112 C330 116, 390 85, 415 55 L415 -10 Z"
            fill="#DCE7E4"
            stroke="#C3D4CF"
            strokeWidth="1.5"
          />
          <text
            x="295"
            y="58"
            textAnchor="middle"
            fill="#6E827C"
            fontSize="10"
            letterSpacing="3"
            fontFamily="Plus Jakarta Sans, sans-serif"
          >
            LAKE KURIFTU
          </text>

          {/* Gardens */}
          <ellipse cx="110" cy="110" rx="68" ry="48" fill="#E8ECE3" opacity="0.85" />
          <ellipse cx="320" cy="175" rx="54" ry="34" fill="#E8ECE3" opacity="0.7" />

          {/* Roads */}
          <path
            d="M-10 245 Q115 215 190 190 T410 170"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="10"
          />
          <path
            d="M-10 245 Q115 215 190 190 T410 170"
            fill="none"
            stroke="#DFD5C3"
            strokeWidth="1.2"
          />
          <path
            d="M95 215 Q145 170 206 126"
            fill="none"
            stroke="#D4B47C"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Compass Rose */}
          <g transform="translate(362, 242)" stroke="#B89B72" strokeWidth="1" opacity="0.7">
            <circle r="14" fill="#FAF8F5" fillOpacity="0.8" />
            <line x1="0" y1="-10" x2="0" y2="10" />
            <line x1="-10" y1="0" x2="10" y2="0" />
            <text
              x="0"
              y="-17"
              textAnchor="middle"
              fill="#8E7349"
              fontSize="7"
              stroke="none"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              N
            </text>
          </g>
        </svg>

        {/* Pins */}
        {Object.values(VENUE_PINS).map((pin) => {
          const isSelected = pin.id === selectedPin;
          return (
            <button
              key={pin.id}
              type="button"
              onClick={() => setSelectedPin(pin.id)}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none"
              aria-label={`Select ${pin.label} on map`}
            >
              {isSelected && (
                <span className="absolute -inset-3 rounded-full bg-[#B89B72]/35 animate-ping" />
              )}
              <span
                className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  isSelected
                    ? 'scale-110 border-white bg-[#6E7B68] text-white shadow-lg'
                    : 'border-[#B89B72] bg-[#FAF8F5] text-[#8E7349] shadow-sm hover:scale-105'
                }`}
              >
                <MapPin className="h-4 w-4" />
              </span>
              <span
                className={`pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 font-sans text-[10px] font-medium shadow-sm transition ${
                  isSelected
                    ? 'bg-[#1F1D1B] text-[#FAF8F5]'
                    : 'bg-[#FAF8F5]/90 text-[#5C554E] group-hover:bg-[#1F1D1B] group-hover:text-white'
                }`}
              >
                {pin.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Pin Details */}
      <div className="mt-4 rounded-2xl border border-[#1F1D1B]/8 bg-[#F0ECE4]/65 p-4">
        <div className="flex items-center justify-between gap-2">
          <span className="font-serif text-lg font-medium text-[#1F1D1B]">{active.label}</span>
          <span className="rounded-full bg-[#FAF8F5] px-2.5 py-0.5 font-sans text-[10px] uppercase tracking-[0.18em] text-[#9A7A49]">
            {active.tag}
          </span>
        </div>
        <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#5C554E]">{active.note}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-wrap gap-2.5">
        <a
          href={WEDDING_CONFIG.venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#6E7B68] px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-[#5B6856]"
        >
          <Navigation className="h-3.5 w-3.5" />
          Google Maps
        </a>
        <a
          href={WEDDING_CONFIG.venue.appleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#B89B72]/60 bg-white px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#7D633B] transition hover:bg-[#F0ECE4]"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Apple Maps
        </a>
        <button
          type="button"
          onClick={onCopyAddress}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#1F1D1B]/15 bg-white px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#5C554E] transition hover:border-[#B89B72] hover:text-[#1F1D1B]"
          title="Copy Venue Address"
        >
          <Copy className="h-3.5 w-3.5" />
          Copy
        </button>
      </div>
    </div>
  );
}
