import React from 'react';
import {
  Plane,
  Building2,
  Car,
  MapPin,
  ExternalLink,
  Phone,
  ArrowRight,
  ArrowLeft,
  Coffee,
  Compass,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { GoldDustCanvas } from '../components/fx/GoldDustCanvas';
import { TiltCard } from '../components/fx/TiltCard';
import { useInView } from '../hooks/useInView';
import { TRAVEL_DATA } from '../data/travelData';
import { WEDDING_CONFIG } from '../config/weddingConfig';

/**
 * Page 3: Travel & Stay
 */
export function TravelStayPage({ onNavigate, onOpenRsvp }) {
  const [heroRef, heroVisible] = useInView({ threshold: 0.1 });
  const [stayRef, stayVisible] = useInView({ threshold: 0.1 });
  const [transitRef, transitVisible] = useInView({ threshold: 0.1 });
  const [exploreRef, exploreVisible] = useInView({ threshold: 0.1 });

  return (
    <main className="animate-fade-in">
      {/* ================================================================
          HERO SECTION
         ================================================================ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-[#1F1D1B]/10 bg-gradient-to-b from-[#F5EDE0] via-[#FAF6EE] to-[#FAF8F5] px-5 pt-32 pb-16 sm:pt-40 sm:pb-20"
      >
        <GoldDustCanvas intensity={0.6} />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B89B72]/70" />
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.36em] text-[#8F7347] sm:text-xs">
              Flights &bull; Resorts &bull; Shuttles
            </span>
            <span className="h-px w-8 bg-[#B89B72]/70" />
          </div>

          <h1 className="font-serif text-5xl font-light tracking-wide text-[#1F1D1B] sm:text-7xl">
            Travel &amp; Stay
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-[#5C554E] sm:text-base">
            Everything you need for a comfortable journey to Bishoftu and Addis Ababa—curated luxury
            accommodations, airport transfers, and local Ethiopian recommendations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { label: 'Accommodations', href: '#accommodations' },
              { label: 'Airport & Transfers', href: '#transfers' },
              { label: 'Local Guide', href: '#local-guide' }
            ].map((pill) => (
              <a
                key={pill.href}
                href={pill.href}
                className="rounded-full border border-[#B89B72]/45 bg-[#FAF8F5]/90 px-5 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#7A613B] shadow-sm transition hover:-translate-y-0.5 hover:border-[#B89B72] hover:bg-white hover:text-[#1F1D1B]"
              >
                {pill.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          ACCOMMODATIONS SECTION
         ================================================================ */}
      <section
        id="accommodations"
        ref={stayRef}
        className={`relative bg-[#FAF8F5] px-5 py-20 transition-all duration-1000 sm:py-24 ${
          stayVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-script text-4xl text-[#B89B72] sm:text-5xl">Where to Stay</p>
            <h2 className="mt-1 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
              Curated Accommodations
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-sans text-sm text-[#615951]">
              We have reserved room blocks and preferred courtesy rates at Kuriftu Resort and partner
              hotels in Bishoftu and Addis Ababa.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {TRAVEL_DATA.accommodations.map((hotel) => (
              <TiltCard key={hotel.name}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-[#B89B72]/30 bg-white/80 p-7 shadow-[0_14px_38px_rgba(31,29,27,0.04)] backdrop-blur-sm transition hover:border-[#B89B72]/65 sm:p-8">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-[#FAF8F5] px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-[#8F7347] border border-[#B89B72]/30">
                        {hotel.tier}
                      </span>
                      <span className="rounded-full bg-[#6E7B68]/15 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-[#55634F]">
                        {hotel.badge}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl text-[#1F1D1B] sm:text-3xl">
                      {hotel.name}
                    </h3>

                    <p className="mt-1.5 inline-flex items-center gap-1.5 font-sans text-xs text-[#8F7347]">
                      <MapPin className="h-3.5 w-3.5 text-[#B89B72]" />
                      {hotel.location}
                    </p>

                    <p className="mt-4 font-sans text-sm leading-relaxed text-[#5C554E]">
                      {hotel.description}
                    </p>

                    <div className="mt-5 rounded-xl border border-[#B89B72]/20 bg-[#FAF8F5] p-3 text-xs font-sans text-[#756555]">
                      <span className="font-semibold text-[#1F1D1B]">Booking Code / Rate: </span>
                      {hotel.rate}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#1F1D1B]/8 pt-4">
                    <span className="inline-flex items-center gap-1.5 font-sans text-xs text-[#72685E]">
                      <Phone className="h-3.5 w-3.5 text-[#B89B72]" />
                      {hotel.phone}
                    </span>

                    <a
                      href={hotel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-sans text-xs font-medium uppercase tracking-[0.18em] text-[#8F7347] transition hover:text-[#1F1D1B]"
                    >
                      Visit Website
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          FLIGHTS & TRANSFERS SECTION
         ================================================================ */}
      <section
        id="transfers"
        ref={transitRef}
        className={`relative border-y border-[#1F1D1B]/10 bg-[#F0ECE4]/75 px-5 py-20 transition-all duration-1000 sm:py-24 ${
          transitVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-4xl text-[#B89B72] sm:text-5xl">Arrivals</p>
            <h2 className="mt-1 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
              Flights &amp; Airport Transfers
            </h2>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.26em] text-[#7A6F64]">
              Connecting to Addis Ababa Bole International (ADD)
            </p>
          </div>

          {/* Airport Card */}
          <div className="mt-10 rounded-3xl border border-[#B89B72]/35 bg-[#FAF8F5] p-6 shadow-sm sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0ECE4] text-[#8F7347]">
                <Plane className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-serif text-2xl text-[#1F1D1B] sm:text-3xl">
                    {TRAVEL_DATA.airports[0].name}
                  </h3>
                  <span className="rounded-full bg-[#1F1D1B] px-3 py-1 font-sans text-xs font-semibold text-[#FAF8F5]">
                    Airport Code: {TRAVEL_DATA.airports[0].code}
                  </span>
                </div>
                <p className="mt-1 font-sans text-xs uppercase tracking-[0.18em] text-[#9A7A49]">
                  {TRAVEL_DATA.airports[0].distance}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#5C554E]">
                  {TRAVEL_DATA.airports[0].description}
                </p>
                <p className="mt-3 font-serif text-sm italic text-[#726456]">
                  {TRAVEL_DATA.airports[0].shuttleNote}
                </p>
              </div>
            </div>
          </div>

          {/* Transfer Options */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TRAVEL_DATA.transfers.map((item) => (
              <TiltCard key={item.mode}>
                <div className="flex h-full flex-col rounded-3xl border border-[#B89B72]/30 bg-[#FAF8F5] p-6 shadow-sm">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[#9A7A49]">
                    {item.timing}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">{item.mode}</h3>
                  <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#5C554E]">
                    {item.details}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          LOCAL HIGHLIGHTS SECTION
         ================================================================ */}
      <section
        id="local-guide"
        ref={exploreRef}
        className={`relative bg-[#FAF8F5] px-5 py-20 transition-all duration-1000 sm:py-24 ${
          exploreVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-script text-4xl text-[#B89B72] sm:text-5xl">Explore Bishoftu</p>
            <h2 className="mt-1 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
              Local Experiences
            </h2>
            <p className="mx-auto mt-3 max-w-lg font-sans text-sm text-[#615951]">
              Make the most of your wedding weekend with our favorite sights, lakeside strolls, and
              authentic Ethiopian coffee rituals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {TRAVEL_DATA.localExperiences.map((exp) => (
              <TiltCard key={exp.title}>
                <div className="flex h-full flex-col rounded-3xl border border-[#B89B72]/30 bg-[#F0ECE4]/50 p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[10px] uppercase tracking-[0.26em] text-[#9A7A49]">
                      {exp.subtitle}
                    </span>
                    <Sparkles className="h-4 w-4 text-[#B89B72]" />
                  </div>
                  <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">{exp.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-[#5C554E]">
                    {exp.desc}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Quick Travel Checklist */}
          <div className="mt-12 rounded-3xl border border-[#B89B72]/35 bg-[#1F1D1B] p-7 text-[#FAF8F5] sm:p-9">
            <h3 className="font-serif text-2xl text-[#FAF8F5] sm:text-3xl">
              Traveler Essentials &bull; Quick Checklist
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                { title: 'Ethiopian E-Visa', desc: 'Apply easily online at evisa.gov.et prior to your flight departure.' },
                { title: 'Local Currency', desc: 'Ethiopian Birr (ETB). Cards widely accepted at Kuriftu Resort & hotels.' },
                { title: 'SIM Cards & WiFi', desc: 'High-speed 4G/5G Ethio Telecom e-SIMs or physical SIMs available at airport arrival.' },
                { title: 'Mild Spring Climate', desc: 'Daytime 24°C / 75°F. Cool lakeside breezes in evenings (14°C / 57°F).' }
              ].map((tip) => (
                <div key={tip.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="h-4 w-4 text-[#DFBE82]" />
                  <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#DFBE82]">
                    {tip.title}
                  </p>
                  <p className="mt-1 font-sans text-xs text-[#D8D1C7] leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Strip */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1F1D1B]/10 pt-10 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('The Day')}
              className="inline-flex items-center gap-2 rounded-full border border-[#1F1D1B]/15 bg-white px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#1F1D1B] transition hover:border-[#B89B72] hover:bg-[#F0ECE4]"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[#B89B72]" />
              Back to The Day
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('Q+A')}
                className="inline-flex items-center gap-2 rounded-full border border-[#B89B72]/60 bg-white px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#8F7347] transition hover:bg-[#F0ECE4]"
              >
                Read Wedding Q+A
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={onOpenRsvp}
                className="inline-flex items-center gap-2 rounded-full bg-[#6E7B68] px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.24em] text-white shadow-md transition hover:bg-[#5B6856]"
              >
                RSVP Now
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
