import React, { useState } from 'react';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  Car,
  Compass,
  Bus,
  Sun,
  Wind,
  Footprints
} from 'lucide-react';
import { GoldDustCanvas } from '../components/fx/GoldDustCanvas';
import { TiltCard } from '../components/fx/TiltCard';
import { TimelineArtwork } from '../components/art/TimelineArtwork';
import { VenueArchitecturalArt } from '../components/art/VenueArchitecturalArt';
import { InteractiveVenueMap } from '../components/art/InteractiveVenueMap';
import { DressCodeEnsembleArt } from '../components/art/DressCodeEnsembleArt';
import { useInView } from '../hooks/useInView';
import { copyToClipboard } from '../utils/clipboard';
import { SCHEDULES } from '../data/scheduleData';
import { PALETTE_SWATCHES, STYLE_GUIDELINES } from '../data/dressCodeData';
import { WEDDING_CONFIG } from '../config/weddingConfig';

/**
 * Page 2: The Day (Visual Multi-Day Timeline, Venue & Map, Dress Code)
 */
export function TheDayPage({ onNavigate, onOpenRsvp, onShowToast }) {
  const [activeDay, setActiveDay] = useState('saturday');
  const [selectedSwatchIndex, setSelectedSwatchIndex] = useState(0);

  const [timelineRef, timelineVisible] = useInView({ threshold: 0.08 });
  const [venueRef, venueVisible] = useInView({ threshold: 0.08 });
  const [dressRef, dressVisible] = useInView({ threshold: 0.08 });

  const activeSchedule = SCHEDULES[activeDay] || SCHEDULES.saturday;
  const activeSwatch = PALETTE_SWATCHES[selectedSwatchIndex] || PALETTE_SWATCHES[0];

  const handleCopyVenueAddress = async () => {
    const success = await copyToClipboard(WEDDING_CONFIG.venue.fullAddress);
    if (success) {
      onShowToast('Venue address copied to clipboard!');
    } else {
      onShowToast(`Address: ${WEDDING_CONFIG.venue.fullAddress}`);
    }
  };

  return (
    <main className="animate-fade-in">
      {/* ================================================================
          PAGE 2 HERO INTRO
         ================================================================ */}
      <section className="relative overflow-hidden border-b border-[#1F1D1B]/10 bg-gradient-to-b from-[#F5EDE0] via-[#FAF6EE] to-[#FAF8F5] px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <GoldDustCanvas intensity={0.6} />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B89B72]/70" />
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.36em] text-[#8F7347] sm:text-xs">
              Schedule &bull; Venue &bull; Attire
            </span>
            <span className="h-px w-8 bg-[#B89B72]/70" />
          </div>

          <h1 className="font-serif text-5xl font-light tracking-wide text-[#1F1D1B] sm:text-7xl">
            The Day
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-[#5C554E] sm:text-base">
            Every timeless moment of <strong className="font-medium text-[#1F1D1B]">{WEDDING_CONFIG.couple.names}</strong>—from
            our sunlit ceremony and directions to curated attire inspiration.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { label: 'Event Timeline', href: '#day-timeline' },
              { label: 'Venue & Directions', href: '#day-venue' },
              { label: 'Dress Code Guide', href: '#day-dresscode' }
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
          SECTION 1: VISUAL EVENT TIMELINE
         ================================================================ */}
      <section
        id="day-timeline"
        ref={timelineRef}
        className={`relative bg-[#FAF8F5] px-5 py-20 transition-all duration-1000 sm:py-24 ${
          timelineVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-script text-4xl text-[#B89B72] sm:text-5xl">Wedding Timeline</p>
            <p className="mt-1 font-sans text-xs uppercase tracking-[0.28em] text-[#7A6F64]">
              Order of Celebration
            </p>
          </div>

          {/* Multi-Day Switcher Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {Object.entries(SCHEDULES).map(([key, day]) => {
              const isSelected = activeDay === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveDay(key)}
                  className={`rounded-full px-5 py-2.5 font-sans text-xs uppercase tracking-[0.2em] transition-all ${
                    isSelected
                      ? 'bg-[#6E7B68] font-medium text-white shadow-md'
                      : 'border border-[#B89B72]/35 bg-[#F0ECE4]/60 text-[#5C554E] hover:border-[#B89B72] hover:text-[#1F1D1B]'
                  }`}
                >
                  {day.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <h2 className="font-serif text-3xl font-light text-[#1F1D1B] sm:text-4xl">
              {activeSchedule.title}
            </h2>
            <p className="mt-1 font-serif text-base italic text-[#7A6F64]">
              {activeSchedule.subtitle}
            </p>
          </div>

          {/* Central Gold Axis Timeline */}
          <div className="relative mt-14">
            <div
              className="pointer-events-none absolute top-0 bottom-0 left-5 w-px md:left-1/2 md:-translate-x-1/2"
              style={{
                background:
                  'linear-gradient(180deg, rgba(184,155,114,0) 0%, rgba(184,155,114,0.65) 12%, rgba(184,155,114,0.65) 88%, rgba(184,155,114,0) 100%)'
              }}
            />

            <div className="space-y-12 md:space-y-16">
              {activeSchedule.events.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={`${activeDay}-${item.title}`}
                    className="relative grid grid-cols-1 items-center gap-6 pl-12 md:grid-cols-2 md:gap-12 md:pl-0"
                  >
                    {/* Glowing Sparkle Node on Axis */}
                    <div className="absolute left-5 top-8 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-[#B89B72] bg-[#FAF8F5] shadow-[0_0_16px_rgba(212,180,124,0.55)] md:left-1/2 md:top-1/2 md:-translate-y-1/2">
                      <Sparkles className="h-3 w-3 text-[#B89B72]" />
                    </div>

                    {/* Art Column */}
                    <div
                      className={`hidden md:flex ${
                        isEven ? 'md:order-1 md:justify-end md:pr-4' : 'md:order-2 md:justify-start md:pl-4'
                      }`}
                    >
                      <TiltCard>
                        <TimelineArtwork type={item.art} />
                      </TiltCard>
                    </div>

                    {/* Details Card */}
                    <div
                      className={`${
                        isEven
                          ? 'md:order-2 md:pl-4 md:text-left'
                          : 'md:order-1 md:pr-4 md:text-right'
                      }`}
                    >
                      <TiltCard>
                        <div className="rounded-3xl border border-[#B89B72]/30 bg-white/85 p-6 shadow-[0_14px_34px_rgba(31,29,27,0.04)] backdrop-blur-sm transition hover:border-[#B89B72]/65 sm:p-7">
                          <div
                            className={`flex items-center gap-3 ${
                              isEven ? 'md:justify-start' : 'md:justify-end'
                            }`}
                          >
                            <span className="font-script text-3xl text-[#B89B72] sm:text-4xl">
                              {item.time}
                            </span>
                          </div>
                          <h3 className="mt-1 font-serif text-2xl text-[#1F1D1B] sm:text-[1.75rem]">
                            {item.title}
                          </h3>
                          <p
                            className={`mt-1.5 inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.2em] text-[#8F7347] ${
                              isEven ? '' : 'md:flex-row-reverse'
                            }`}
                          >
                            <MapPin className="h-3.5 w-3.5 text-[#B89B72]" />
                            {item.location}
                          </p>
                          <p className="mt-3 font-sans text-sm leading-relaxed text-[#5C554E]">
                            {item.description}
                          </p>
                        </div>
                      </TiltCard>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 2: VENUE SPOTLIGHT & INTERACTIVE MAP
         ================================================================ */}
      <section
        id="day-venue"
        ref={venueRef}
        className={`relative border-y border-[#1F1D1B]/10 bg-[#F0ECE4]/75 px-5 py-20 transition-all duration-1000 sm:py-24 ${
          venueVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-4xl text-[#B89B72] sm:text-5xl">Location</p>
            <h2 className="mt-1 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
              {WEDDING_CONFIG.venue.name} &amp; {WEDDING_CONFIG.venue.subTitle}
            </h2>
            <p className="mt-2 font-sans text-xs uppercase tracking-[0.26em] text-[#7A6F64]">
              {WEDDING_CONFIG.venue.fullAddress}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <TiltCard className="flex flex-col justify-between gap-5">
              <VenueArchitecturalArt />
              <div className="rounded-3xl border border-[#B89B72]/30 bg-[#FAF8F5] p-6">
                <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#B89B72]">
                  About The Setting
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#5C554E]">
                  Set along the serene volcanic waters of Lake Kuriftu—just 45 minutes southeast of
                  Addis Ababa and 35 minutes from Adama—our lakefront pavilion blends warm Ethiopian
                  craftsmanship with breezy golden-hour gardens.
                </p>
              </div>
            </TiltCard>

            <InteractiveVenueMap onCopyAddress={handleCopyVenueAddress} />
          </div>

          {/* Logistics Cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-[#B89B72]/25 bg-[#FAF8F5] p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0ECE4] text-[#9A7A49]">
                <Car className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-[#1F1D1B]">Parking &amp; Valet</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#5C554E]">
                Complimentary valet is available at the South Arch Entrance. Dedicated golf-cart
                transfers run continuously from parking to the pavilion for older family members.
              </p>
            </div>

            <div className="rounded-3xl border border-[#B89B72]/25 bg-[#FAF8F5] p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0ECE4] text-[#9A7A49]">
                <Compass className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-[#1F1D1B]">Gate &amp; Arrival</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#5C554E]">
                Please state <strong className="font-medium text-[#1F1D1B]">“{WEDDING_CONFIG.couple.names} Wedding”</strong>{' '}
                at the lakeside security gate. Welcome ushers will guide you along the floral
                promenade starting at 1:45 PM.
              </p>
            </div>

            <div className="rounded-3xl border border-[#B89B72]/25 bg-[#FAF8F5] p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0ECE4] text-[#9A7A49]">
                <Bus className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-2xl text-[#1F1D1B]">Wedding Shuttles</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-[#5C554E]">
                Private coaches depart Bole Medhanialem (Addis) at 12:15 PM and Adama Central at
                12:45 PM. Evening return shuttles depart at 10:30 PM and midnight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: DRESS CODE & PALETTE SWATCHES
         ================================================================ */}
      <section
        id="day-dresscode"
        ref={dressRef}
        className={`relative bg-[#FAF8F5] px-5 py-20 transition-all duration-1000 sm:py-24 ${
          dressVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-4xl text-[#B89B72] sm:text-5xl">Dress Code</p>
            <h2 className="mt-1 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
              Modern Formal &amp; Festive Habesha
            </h2>
            <p className="mt-3 font-sans text-sm leading-relaxed text-[#5C554E] sm:text-base">
              We kindly invite our guests to dress in{' '}
              <strong className="font-medium text-[#1F1D1B]">
                Modern Black-Tie Optional or Festive Traditional Ethiopian Attire
              </strong>{' '}
              in warm champagne, organic earth, and soft pastel shades.
            </p>
          </div>

          <div className="mt-10">
            <DressCodeEnsembleArt />
          </div>

          {/* Interactive Swatches */}
          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#B89B72]/35 bg-white/85 p-6 text-center shadow-[0_14px_40px_rgba(31,29,27,0.04)] sm:p-9">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-[#8F7347]">
              Recommended Shades &bull; Tap a Swatch for Styling Tips
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {PALETTE_SWATCHES.map((swatch, idx) => {
                const isSelected = idx === selectedSwatchIndex;
                return (
                  <button
                    key={swatch.name}
                    type="button"
                    onClick={() => setSelectedSwatchIndex(idx)}
                    className="group flex flex-col items-center focus:outline-none"
                    aria-label={`Inspect ${swatch.name} dress code swatch`}
                  >
                    <span
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 sm:h-14 sm:w-14 ${
                        isSelected
                          ? 'scale-110 border-[#1F1D1B] ring-4 ring-[#B89B72]/30'
                          : 'border-white shadow-md hover:scale-105'
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                    >
                      {isSelected && (
                        <Check
                          className={`h-5 w-5 ${
                            idx === 5 ? 'text-white' : 'text-[#1F1D1B]'
                          }`}
                        />
                      )}
                    </span>
                    <span
                      className={`mt-2 font-sans text-[10px] uppercase tracking-[0.16em] ${
                        isSelected ? 'font-semibold text-[#1F1D1B]' : 'text-[#7A6F64]'
                      }`}
                    >
                      {swatch.name.split(' ')[1] || swatch.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl border border-[#1F1D1B]/8 bg-[#FAF8F5] p-5 text-left sm:flex sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-center gap-4">
                <span
                  className="h-11 w-11 shrink-0 rounded-xl border border-[#1F1D1B]/10 shadow-inner"
                  style={{ backgroundColor: activeSwatch.hex }}
                />
                <div>
                  <h3 className="font-serif text-2xl text-[#1F1D1B]">{activeSwatch.name}</h3>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#9A7A49]">
                    Suggested Fabrics: {activeSwatch.fabric}
                  </p>
                </div>
              </div>
              <p className="mt-3 font-sans text-xs leading-relaxed text-[#5C554E] sm:mt-0 sm:max-w-xs sm:text-right">
                {activeSwatch.tip}
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center gap-1.5 border-t border-[#1F1D1B]/8 pt-5 font-serif text-sm italic text-[#6E655D]">
              <p>Please kindly avoid wearing pure white or ivory, reserved for the couple.</p>
              <p>Deep Olive Sage (#6E7B68) is lovingly reserved exclusively for the bridal party.</p>
            </div>
          </div>

          {/* Style Guidelines */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {STYLE_GUIDELINES.map((card) => (
              <TiltCard key={card.title}>
                <div className="flex h-full flex-col rounded-3xl border border-[#B89B72]/30 bg-[#F0ECE4]/55 p-6">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[#9A7A49]">
                    {card.tag}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">{card.title}</h3>
                  <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#5C554E]">
                    {card.copy}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Weather & Footwear */}
          <div className="mt-10 grid grid-cols-1 gap-4 rounded-3xl border border-[#B89B72]/35 bg-[#1F1D1B] p-6 text-[#FAF8F5] sm:grid-cols-3 sm:p-8">
            <div className="flex items-start gap-3.5">
              <Sun className="mt-0.5 h-5 w-5 shrink-0 text-[#DFBE82]" />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-[#DFBE82]">
                  Afternoon Sun
                </p>
                <p className="mt-1 font-serif text-lg">24°C / 75°F Clear</p>
                <p className="mt-0.5 font-sans text-xs text-[#D1C8BC]">
                  Breathable fabrics &amp; sunglasses welcome for the lakeside ceremony.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Wind className="mt-0.5 h-5 w-5 shrink-0 text-[#DFBE82]" />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-[#DFBE82]">
                  Lakeside Evening
                </p>
                <p className="mt-1 font-serif text-lg">14°C / 57°F Breezy</p>
                <p className="mt-0.5 font-sans text-xs text-[#D1C8BC]">
                  Bring a light wrap, pashmina, or netela for the starlit outdoor terrace.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Footprints className="mt-0.5 h-5 w-5 shrink-0 text-[#DFBE82]" />
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.26em] text-[#DFBE82]">
                  Footwear Tip
                </p>
                <p className="mt-1 font-serif text-lg">Garden Lawns</p>
                <p className="mt-0.5 font-sans text-xs text-[#D1C8BC]">
                  Ceremony is on manicured grass—block heels, wedges, or flats recommended.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1F1D1B]/10 pt-10 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('Home')}
              className="inline-flex items-center gap-2 rounded-full border border-[#1F1D1B]/15 bg-white px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#1F1D1B] transition hover:border-[#B89B72] hover:bg-[#F0ECE4]"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[#B89B72]" />
              Back to Home
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('Travel & Stay')}
                className="inline-flex items-center gap-2 rounded-full border border-[#B89B72]/60 bg-white px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#8F7347] transition hover:bg-[#F0ECE4]"
              >
                Travel &amp; Stay
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={onOpenRsvp}
                className="inline-flex items-center gap-2 rounded-full bg-[#6E7B68] px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.24em] text-white shadow-md transition hover:bg-[#5B6856]"
              >
                RSVP for The Day
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
