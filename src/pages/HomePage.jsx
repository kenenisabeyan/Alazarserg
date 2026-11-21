import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Sparkles,
  ChevronDown,
  Clock,
  ArrowRight,
  Star,
  Heart
} from 'lucide-react';
import { LuminousArchHeroArt } from '../components/art/LuminousArchHeroArt';
import { StoryArtwork } from '../components/art/StoryArtwork';
import { GoldDustCanvas } from '../components/fx/GoldDustCanvas';
import { TiltCard } from '../components/fx/TiltCard';
import { GoldScratchCard } from '../components/fx/GoldScratchCard';
import { Side3DPortraits } from '../components/fx/Side3DPortraits';
import { useInView } from '../hooks/useInView';
import { useCountdown } from '../hooks/useCountdown';
import { downloadCalendarInvite } from '../utils/calendar';
import { WEDDING_CONFIG } from '../config/weddingConfig';
import { STORY_MILESTONES, WEEKEND_PREVIEW_EVENTS } from '../data/storyData';

/**
 * Page 1: Home Page
 */
export function HomePage({ onNavigate, onOpenRsvp, onShowToast }) {
  // Parallax mouse tracking
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Gold Scratch cards state
  const [revealedCount, setRevealedCount] = useState(0);
  const [forceRevealAll, setForceRevealAll] = useState(false);

  // Live Countdown Hook
  const timeLeft = useCountdown(WEDDING_CONFIG.date.iso);

  // Section in-view scroll reveal hooks
  const [scratchRef, scratchVisible] = useInView();
  const [logisticsRef, logisticsVisible] = useInView();
  const [storyRef, storyVisible] = useInView();
  const [weekendRef, weekendVisible] = useInView();
  const [ctaRef, ctaVisible] = useInView();

  const handleHeroMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const handleDownloadCalendar = () => {
    if (downloadCalendarInvite()) {
      onShowToast(`${WEDDING_CONFIG.couple.names} calendar invite (.ics) downloaded!`);
    } else {
      onShowToast('Could not download calendar file.');
    }
  };

  return (
    <main className="animate-fade-in">
      {/* ================================================================
          HERO SECTION: 3D EDITORIAL ARCHED PAVILION
         ================================================================ */}
      <section
        onMouseMove={handleHeroMouseMove}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16"
      >
        <LuminousArchHeroArt mouseOffset={mouseOffset} />
        <GoldDustCanvas intensity={0.85} />

        {/* 3D Animated Flanking Celebrity Loved Portraits */}
        <Side3DPortraits mouseOffset={mouseOffset} />

        <div className="relative z-20 mx-auto max-w-2xl px-4 text-center">
          {/* Couple Display Name */}
          <h1
            className="font-serif text-5xl font-light tracking-[0.06em] text-[#1F1D1B] sm:text-7xl md:text-[5.5rem] drop-shadow-sm"
            style={{ lineHeight: 1.05 }}
          >
            {WEDDING_CONFIG.couple.groom}
            <span className="mx-3 inline-block font-script text-5xl text-[#B89B72] sm:text-7xl">
              &amp;
            </span>
            {WEDDING_CONFIG.couple.bride}
          </h1>

          <p className="mt-4 font-serif text-lg italic tracking-wide text-[#5B5248] sm:text-2xl drop-shadow-sm">
            {WEDDING_CONFIG.couple.tagline}
          </p>

          {/* Scroll Down */}
          <a
            href="#reveal-date"
            className="mt-14 inline-flex flex-col items-center gap-1.5 text-[#8A7659] transition hover:text-[#1F1D1B]"
          >
            <span className="font-serif text-sm italic tracking-wider">Scroll down</span>
            <ChevronDown className="h-4 w-4 animate-bounce text-[#B89B72]" />
          </a>
        </div>
      </section>

      {/* ================================================================
          DATE SCRATCH SECTION
         ================================================================ */}
      <section
        id="reveal-date"
        ref={scratchRef}
        className={`relative border-t border-[#1F1D1B]/10 bg-[#FAF8F5] px-5 py-20 transition-all duration-1000 sm:py-24 ${
          scratchVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-script text-4xl text-[#B89B72] sm:text-5xl">The Date</p>
          <p className="mt-2 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.28em] text-[#7A6F64]">
            <Sparkles className="h-3.5 w-3.5 text-[#B89B72]" />
            Scratch the gold foil to reveal
            <Sparkles className="h-3.5 w-3.5 text-[#B89B72]" />
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            <GoldScratchCard
              value={WEDDING_CONFIG.date.day}
              label="Day"
              forceRevealed={forceRevealAll}
              onReveal={() => setRevealedCount((c) => c + 1)}
            />
            <GoldScratchCard
              value={WEDDING_CONFIG.date.month}
              label="Month"
              forceRevealed={forceRevealAll}
              onReveal={() => setRevealedCount((c) => c + 1)}
            />
            <GoldScratchCard
              value={WEDDING_CONFIG.date.year}
              label="Year"
              forceRevealed={forceRevealAll}
              onReveal={() => setRevealedCount((c) => c + 1)}
            />
          </div>

          <div className="mt-7 flex items-center justify-center gap-4">
            {!forceRevealAll && revealedCount < 3 ? (
              <button
                type="button"
                onClick={() => {
                  setForceRevealAll(true);
                  setRevealedCount(3);
                }}
                className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#9A7A49] underline decoration-[#B89B72]/50 underline-offset-4 transition hover:text-[#1F1D1B]"
              >
                Or tap here to reveal all
              </button>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F0ECE4] px-4 py-1.5 font-serif text-sm italic text-[#6E5736] animate-fade-in">
                <Star className="h-3.5 w-3.5 fill-[#B89B72] text-[#B89B72]" />
                Save the Date — Saturday, {WEDDING_CONFIG.date.display}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ================================================================
          LOGISTICS STRIP & COUNTDOWN
         ================================================================ */}
      <section
        ref={logisticsRef}
        className={`relative border-y border-[#1F1D1B]/10 bg-[#F0ECE4]/75 px-5 py-20 transition-all duration-1000 ${
          logisticsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 divide-y divide-[#1F1D1B]/10 rounded-3xl border border-[#B89B72]/30 bg-[#FAF8F5] shadow-[0_18px_50px_rgba(31,29,27,0.04)] md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex flex-col items-center p-8 text-center">
              <Clock className="h-5 w-5 text-[#B89B72]" />
              <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#8E7D6B]">
                Date &amp; Time
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">{WEDDING_CONFIG.date.display}</h3>
              <p className="mt-1 font-sans text-xs text-[#6B6259]">Ceremony begins at {WEDDING_CONFIG.date.time}</p>
            </div>

            <div className="flex flex-col items-center p-8 text-center">
              <MapPin className="h-5 w-5 text-[#B89B72]" />
              <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#8E7D6B]">
                Venue Location
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">Kuriftu Lakefront</h3>
              <p className="mt-1 font-sans text-xs text-[#6B6259]">{WEDDING_CONFIG.venue.city}, {WEDDING_CONFIG.venue.region} &bull; {WEDDING_CONFIG.venue.country}</p>
            </div>

            <div className="flex flex-col items-center p-8 text-center">
              <Sparkles className="h-5 w-5 text-[#B89B72]" />
              <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#8E7D6B]">
                Dress Code
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">Formal &amp; Habesha</h3>
              <p className="mt-1 font-sans text-xs text-[#6B6259]">
                Warm champagne, sage &amp; soft neutrals
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mt-16 text-center">
            <p className="font-script text-4xl text-[#B89B72] sm:text-5xl">
              The Celebration Begins In
            </p>
            <div className="mx-auto mt-7 grid max-w-2xl grid-cols-4 gap-3 sm:gap-6">
              {[
                { label: 'Days', val: String(timeLeft.days).padStart(2, '0') },
                { label: 'Hours', val: String(timeLeft.hours).padStart(2, '0') },
                { label: 'Minutes', val: String(timeLeft.minutes).padStart(2, '0') },
                { label: 'Seconds', val: String(timeLeft.seconds).padStart(2, '0') }
              ].map((unit, idx) => (
                <div
                  key={unit.label}
                  className="relative flex flex-col items-center rounded-2xl border border-[#B89B72]/30 bg-[#FAF8F5] py-5 px-2 shadow-sm sm:py-7"
                >
                  <span className="font-serif text-3xl font-light tracking-wider text-[#9E7D49] sm:text-5xl">
                    {unit.val}
                  </span>
                  <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.26em] text-[#7D7369]">
                    {unit.label}
                  </span>
                  {idx < 3 && (
                    <span className="pointer-events-none absolute -right-2.5 top-1/2 hidden -translate-y-1/2 font-serif text-2xl text-[#B89B72]/60 sm:inline sm:-right-4">
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WELCOME NOTE & STORY
         ================================================================ */}
      <section
        ref={storyRef}
        className={`relative bg-[#FAF8F5] px-5 py-24 transition-all duration-1000 sm:py-28 ${
          storyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl">
            <div className="relative rounded-t-[240px] rounded-b-3xl border border-[#B89B72]/45 bg-[#FAF8F5] p-3 shadow-[0_24px_65px_rgba(146,120,82,0.1)] sm:p-5">
              <div className="rounded-t-[228px] rounded-b-2xl border border-[#B89B72]/30 bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] px-7 pt-16 pb-14 text-center sm:px-14 sm:pt-20">
                <p className="font-sans text-[10px] uppercase tracking-[0.34em] text-[#B89B72]">
                  With Joyful Hearts &amp; Blessings of Our Families
                </p>

                <h2 className="mt-5 font-serif text-4xl font-light tracking-wide text-[#1F1D1B] sm:text-5xl">
                  Dear Friends &amp; Family
                </h2>

                <div className="mx-auto my-6 flex items-center justify-center gap-3">
                  <span className="h-px w-10 bg-[#B89B72]/50" />
                  <Heart className="h-4 w-4 text-[#B89B72]" />
                  <span className="h-px w-10 bg-[#B89B72]/50" />
                </div>

                <div className="space-y-4 font-sans text-sm leading-relaxed text-[#524B45] sm:text-[15px]">
                  <p>
                    We are deeply honored to invite you to share in the joy of{' '}
                    <strong className="font-medium text-[#1F1D1B]">{WEDDING_CONFIG.couple.names}</strong>—a
                    weekend celebrating love, cherished traditions, and the start of our forever together.
                  </p>
                  <p>
                    Whether you are traveling across oceans or driving in from down the road, your
                    presence, laughter, and blessings mean the world to us. We have created this
                    space to share our story and every detail you need for an unforgettable weekend.
                  </p>
                </div>

                <p className="mt-8 font-script text-4xl text-[#9E7E49]">
                  With all our love, {WEDDING_CONFIG.couple.groom} &amp; {WEDDING_CONFIG.couple.bride}
                </p>
              </div>
            </div>
          </div>

          {/* Story Milestones */}
          <div className="mt-28">
            <div className="text-center">
              <p className="font-sans text-[11px] uppercase tracking-[0.34em] text-[#B89B72]">
                How It All Began
              </p>
              <h2 className="mt-2 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
                Our Story
              </h2>
              <div className="mx-auto mt-4 h-px w-16 bg-[#B89B72]/50" />
            </div>

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
              {STORY_MILESTONES.map((item) => (
                <TiltCard key={item.title} className="group">
                  <StoryArtwork variant={item.variant} />
                  <div className="mt-6 px-2 text-center">
                    <span className="font-sans text-[10px] font-medium uppercase tracking-[0.3em] text-[#B89B72]">
                      {item.year}
                    </span>
                    <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">{item.title}</h3>
                    <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#5C554E]">
                      {item.text}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          WEEKEND PREVIEW
         ================================================================ */}
      <section
        ref={weekendRef}
        className={`relative border-t border-[#1F1D1B]/10 bg-[#F0ECE4]/70 px-5 py-24 transition-all duration-1000 sm:py-28 ${
          weekendVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.34em] text-[#B89B72]">
              A Weekend of Celebration
            </p>
            <h2 className="mt-2 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
              Weekend Preview
            </h2>
            <p className="mt-3 font-sans text-sm text-[#615951]">
              From an intimate welcome coffee ceremony to our grand gala and traditional Melse,
              explore what awaits you.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {WEEKEND_PREVIEW_EVENTS.map((ev, index) => (
              <TiltCard key={ev.title}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-[#B89B72]/30 bg-[#FAF8F5] p-7 shadow-[0_14px_38px_rgba(31,29,27,0.04)] transition-colors hover:border-[#B89B72]/65 sm:p-8">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#9A7A49]">
                        0{index + 1} &bull; {ev.day}
                      </span>
                      <span className="rounded-full border border-[#6E7B68]/30 bg-[#6E7B68]/10 px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#55634F]">
                        {ev.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl text-[#1F1D1B] sm:text-3xl">
                      {ev.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-4 font-sans text-xs text-[#72685E]">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#B89B72]" />
                        {ev.time}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#B89B72]" />
                        {ev.location}
                      </span>
                    </div>

                    <p className="mt-4 font-sans text-sm leading-relaxed text-[#5C554E]">
                      {ev.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#1F1D1B]/8 pt-4">
                    <button
                      type="button"
                      onClick={() => onNavigate('The Day')}
                      className="group inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#8F7347] transition hover:text-[#1F1D1B]"
                    >
                      View Full Schedule
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          RSVP CTA BAND
         ================================================================ */}
      <section
        ref={ctaRef}
        className={`relative overflow-hidden bg-[#1F1D1B] px-5 py-24 text-[#FAF8F5] transition-all duration-1000 sm:py-28 ${
          ctaVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <GoldDustCanvas intensity={0.65} />

        <div className="relative z-10 mx-auto max-w-4xl rounded-[32px] border border-[#B89B72]/35 bg-[#1F1D1B]/65 px-6 py-14 text-center backdrop-blur-sm sm:px-14 sm:py-18">
          <p className="font-sans text-[11px] uppercase tracking-[0.36em] text-[#D4B47C]">
            Kindly Respond By {WEDDING_CONFIG.date.rsvpDeadline}
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#FAF8F5] sm:text-6xl">
            Will You Join Us?
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-[#D8D1C7]">
            Confirm your attendance, share your dietary preferences, and suggest a song that is
            guaranteed to bring you onto the dance floor.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={onOpenRsvp}
              className="inline-flex min-w-[220px] items-center justify-center gap-2.5 rounded-full bg-[#B89B72] px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[#1F1D1B] shadow-[0_12px_32px_rgba(184,155,114,0.35)] transition hover:-translate-y-0.5 hover:bg-[#CCA97C]"
            >
              Confirm Your RSVP
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('The Day')}
              className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-full border border-[#B89B72]/50 px-7 py-4 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#FAF8F5] transition hover:border-[#DFBE82] hover:bg-white/5"
            >
              Explore The Day
              <ArrowRight className="h-3.5 w-3.5 text-[#DFBE82]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
