import React, { useState } from 'react';
import {
  Calendar,
  MapPin,
  Sparkles,
  ChevronDown,
  Clock,
  ArrowRight,
  Star,
  Heart,
  Camera,
  Image as ImageIcon
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
import { STORY_MILESTONES } from '../data/storyData';
import { GALLERY_ITEMS } from '../data/galleryData';

/**
 * Page 1: Home Page (Refined & Simplified in Reference to Wedding Editorial Video)
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
  const [countdownRef, countdownVisible] = useInView();
  const [blessingRef, blessingVisible] = useInView();
  const [storyRef, storyVisible] = useInView();
  const [galleryRef, galleryVisible] = useInView();

  const handleHeroMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  return (
    <main className="animate-fade-in">
      {/* ================================================================
          1. HERO SECTION: 3D EDITORIAL ARCHED PAVILION
         ================================================================ */}
      <section
        onMouseMove={handleHeroMouseMove}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16"
      >
        <LuminousArchHeroArt mouseOffset={mouseOffset} />
        <GoldDustCanvas intensity={0.85} />

        {/* 3D Animated Flanking Celebrity Loved Portraits */}
        <Side3DPortraits mouseOffset={mouseOffset} />

        <div className="relative z-20 mx-auto max-w-[190px] xs:max-w-xs sm:max-w-xl md:max-w-2xl px-2 sm:px-4 text-center">
          {/* Couple Display Name */}
          <h1
            className="font-serif text-3xl xs:text-4xl sm:text-7xl md:text-[5.5rem] font-light tracking-[0.04em] sm:tracking-[0.06em] text-[#1F1D1B] drop-shadow-sm"
            style={{ lineHeight: 1.08 }}
          >
            {WEDDING_CONFIG.couple.groom}
            <span className="mx-1.5 sm:mx-3 inline-block font-script text-3xl xs:text-4xl sm:text-7xl text-[#B89B72]">
              &amp;
            </span>
            {WEDDING_CONFIG.couple.bride}
          </h1>

          <p className="mt-2 sm:mt-4 font-serif text-xs sm:text-lg md:text-2xl italic tracking-wide text-[#5B5248] drop-shadow-sm max-w-[190px] xs:max-w-xs sm:max-w-none mx-auto">
            {WEDDING_CONFIG.couple.tagline}
          </p>

          {/* Scroll Down */}
          <a
            href="#reveal-date"
            className="mt-8 sm:mt-14 inline-flex flex-col items-center gap-1.5 text-[#8A7659] transition hover:text-[#1F1D1B]"
          >
            <span className="font-serif text-xs sm:text-sm italic tracking-wider">Scroll down</span>
            <ChevronDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-bounce text-[#B89B72]" />
          </a>
        </div>
      </section>

      {/* ================================================================
          2. THE DATE (SCRATCH THE GOLD FOIL TO REVEAL)
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
          3. LOGISTICS STRIP (DATE & TIME, VENUE LOCATION, DRESS CODE)
         ================================================================ */}
      <section
        ref={logisticsRef}
        className={`relative border-t border-[#1F1D1B]/10 bg-[#F0ECE4]/75 px-5 py-16 transition-all duration-1000 sm:py-20 ${
          logisticsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 divide-y divide-[#1F1D1B]/10 rounded-3xl border border-[#B89B72]/30 bg-[#FAF8F5] shadow-[0_18px_50px_rgba(31,29,27,0.04)] md:grid-cols-3 md:divide-x md:divide-y-0">
            {/* Card 1: Date & Time */}
            <div className="flex flex-col items-center p-8 text-center">
              <Clock className="h-5 w-5 text-[#B89B72]" />
              <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#8E7D6B]">
                Date &amp; Time
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">{WEDDING_CONFIG.date.display}</h3>
              <p className="mt-1 font-sans text-xs text-[#6B6259]">
                Ceremony begins at {WEDDING_CONFIG.date.time}
              </p>
            </div>

            {/* Card 2: Venue Location */}
            <div className="flex flex-col items-center p-8 text-center">
              <MapPin className="h-5 w-5 text-[#B89B72]" />
              <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.3em] text-[#8E7D6B]">
                Venue Location
              </p>
              <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">Kuriftu Lakefront</h3>
              <p className="mt-1 font-sans text-xs text-[#6B6259]">
                {WEDDING_CONFIG.venue.city}, {WEDDING_CONFIG.venue.region} &bull; {WEDDING_CONFIG.venue.country}
              </p>
            </div>

            {/* Card 3: Dress Code */}
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
        </div>
      </section>

      {/* ================================================================
          4. THE CELEBRATION BEGINS IN (CINEMATIC COUNTDOWN)
         ================================================================ */}
      <section
        ref={countdownRef}
        className={`relative overflow-hidden bg-[#1F1D1B] px-5 py-20 text-[#FAF8F5] transition-all duration-1000 sm:py-24 ${
          countdownVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <GoldDustCanvas intensity={0.5} />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="font-sans text-[11px] uppercase tracking-[0.36em] text-[#B89B72]">
            Happily Ever After
          </p>
          <h2 className="mt-2 font-serif text-4xl font-light tracking-wide text-[#FAF8F5] sm:text-5xl">
            The Celebration Begins In
          </h2>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-4 gap-3 sm:gap-6">
            {[
              { label: 'Days', val: String(timeLeft.days).padStart(2, '0') },
              { label: 'Hours', val: String(timeLeft.hours).padStart(2, '0') },
              { label: 'Minutes', val: String(timeLeft.minutes).padStart(2, '0') },
              { label: 'Seconds', val: String(timeLeft.seconds).padStart(2, '0') }
            ].map((unit, idx) => (
              <div
                key={unit.label}
                className="relative flex flex-col items-center rounded-2xl border border-[#B89B72]/30 bg-[#2A2724]/80 py-5 px-2 backdrop-blur-sm sm:py-7"
              >
                <span className="font-serif text-3xl font-light tracking-wider text-[#D4B47C] sm:text-5xl">
                  {unit.val}
                </span>
                <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.26em] text-[#A69B8D]">
                  {unit.label}
                </span>
                {idx < 3 && (
                  <span className="pointer-events-none absolute -right-2.5 top-1/2 hidden -translate-y-1/2 font-serif text-2xl text-[#B89B72]/50 sm:inline sm:-right-4">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 font-serif text-sm italic text-[#C9BEB2] sm:text-base">
            and counting — every second a little more in love
          </p>
        </div>
      </section>

      {/* ================================================================
          5. WITH JOYFUL HEARTS & BLESSINGS OF OUR FAMILIES
         ================================================================ */}
      <section
        ref={blessingRef}
        className={`relative bg-[#FAF8F5] px-5 py-24 transition-all duration-1000 sm:py-28 ${
          blessingVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-3xl">
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
      </section>

      {/* ================================================================
          6. HOW IT ALL BEGAN / OUR STORY
         ================================================================ */}
      <section
        ref={storyRef}
        className={`relative border-t border-[#1F1D1B]/10 bg-[#F0ECE4]/60 px-5 py-24 transition-all duration-1000 sm:py-28 ${
          storyVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-5xl">
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
                  <p className="font-sans text-[10px] font-medium uppercase tracking-[0.26em] text-[#8E7D6B]">
                    {item.location}
                  </p>
                  <p className="mt-1 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#B89B72]">
                    {item.year}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-[#1F1D1B]">{item.title}</h3>
                  <p className="mt-2.5 font-sans text-sm leading-relaxed text-[#5C554E]">
                    {item.text}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          7. CAPTURED MOMENTS / OUR GALLERY (AS IN REFERENCE VIDEO)
         ================================================================ */}
      <section
        ref={galleryRef}
        className={`relative border-t border-[#1F1D1B]/10 bg-[#FAF8F5] px-5 py-24 transition-all duration-1000 sm:py-28 ${
          galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.34em] text-[#B89B72]">
              Captured Moments
            </p>
            <h2 className="mt-2 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
              Our Gallery
            </h2>
            <p className="mt-3 font-serif text-sm italic text-[#7A6F64]">
              Tap any photo to view it full screen
            </p>
            <div className="mx-auto mt-4 h-px w-16 bg-[#B89B72]/50" />
          </div>

          {/* Clean Horizontal Moments Ribbon */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate('Gallery & Gifts')}
                className="group relative flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-2xl border border-[#B89B72]/30 bg-gradient-to-t from-[#1F1D1B]/80 via-transparent to-transparent p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#B89B72]/70 hover:shadow-lg focus:outline-none"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-90 transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="relative z-10">
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 font-sans text-[9px] uppercase tracking-wider text-white backdrop-blur-xs">
                    {item.tag}
                  </span>
                  <h4 className="mt-1 font-serif text-base text-white drop-shadow-sm">
                    {item.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => onNavigate('Gallery & Gifts')}
              className="group inline-flex items-center gap-2 rounded-full border border-[#B89B72]/60 px-8 py-3.5 font-sans text-xs uppercase tracking-[0.24em] text-[#1F1D1B] transition hover:border-[#1F1D1B] hover:bg-[#1F1D1B] hover:text-[#FAF8F5]"
            >
              See More Moments
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================
          8. ROMANTIC BANNER: LOVE NEVER FAILS (FROM VIDEO REFERENCE 00:41)
         ================================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] to-[#F0ECE4] px-5 py-20 text-center border-t border-[#1F1D1B]/10">
        <div className="mx-auto max-w-2xl">
          <p className="font-script text-5xl sm:text-6xl text-[#9E7E49]">
            Love never fails
          </p>
          <p className="mt-3 font-serif text-xs uppercase tracking-[0.3em] text-[#7A6F64]">
            {WEDDING_CONFIG.couple.names} &bull; {WEDDING_CONFIG.date.year}
          </p>
        </div>
      </section>
    </main>
  );
}
