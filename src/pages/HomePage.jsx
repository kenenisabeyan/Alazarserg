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
  X,
  ExternalLink
} from 'lucide-react';
import { LuminousArchHeroArt } from '../components/art/LuminousArchHeroArt';
import { StoryArtwork } from '../components/art/StoryArtwork';
import { GoldDustCanvas } from '../components/fx/GoldDustCanvas';
import { TiltCard } from '../components/fx/TiltCard';
import { GoldScratchCard } from '../components/fx/GoldScratchCard';
import { Side3DPortraits } from '../components/fx/Side3DPortraits';
import { useInView } from '../hooks/useInView';
import { useCountdown } from '../hooks/useCountdown';
import { WEDDING_CONFIG } from '../config/weddingConfig';
import { STORY_MILESTONES } from '../data/storyData';

// Asset images
import heroPhoto from '../assets/keno.jpg';
import couplePortrait from '../assets/kenoo.jpg';
import momentPhoto3 from '../assets/kenooo.jpg';
import momentPhoto4 from '../assets/about.png';

/**
 * Vintage Ornate Filigree Frame SVG (Matching reference video at 00:16)
 */
function VintageOrnateFrame({ children }) {
  return (
    <div className="relative mx-auto my-12 max-w-lg px-4 py-8 text-center sm:px-12 sm:py-10">
      {/* Decorative Ornate SVG Border */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-[#B89B72]"
        viewBox="0 0 460 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Outer and Inner Borders */}
        <rect x="12" y="12" width="436" height="196" rx="16" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.45" />
        <rect x="18" y="18" width="424" height="184" rx="12" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.5" />
        
        {/* Top-Left Corner Scrollwork */}
        <path d="M12 40 C12 25, 25 12, 40 12 C28 20, 20 28, 12 40 Z" fill="currentColor" fillOpacity="0.75" />
        <path d="M22 22 Q35 15 48 22 Q40 32 22 22 Z" fill="currentColor" fillOpacity="0.65" />
        <circle cx="34" cy="34" r="3" fill="currentColor" fillOpacity="0.8" />

        {/* Top-Right Corner Scrollwork */}
        <path d="M448 40 C448 25, 435 12, 420 12 C432 20, 440 28, 448 40 Z" fill="currentColor" fillOpacity="0.75" />
        <path d="M438 22 Q425 15 412 22 Q420 32 438 22 Z" fill="currentColor" fillOpacity="0.65" />
        <circle cx="426" cy="34" r="3" fill="currentColor" fillOpacity="0.8" />

        {/* Bottom-Left Corner Scrollwork */}
        <path d="M12 180 C12 195, 25 208, 40 208 C28 200, 20 192, 12 180 Z" fill="currentColor" fillOpacity="0.75" />
        <path d="M22 198 Q35 205 48 198 Q40 188 22 198 Z" fill="currentColor" fillOpacity="0.65" />
        <circle cx="34" cy="186" r="3" fill="currentColor" fillOpacity="0.8" />

        {/* Bottom-Right Corner Scrollwork */}
        <path d="M448 180 C448 195, 435 208, 420 208 C432 200, 440 192, 448 180 Z" fill="currentColor" fillOpacity="0.75" />
        <path d="M438 198 Q425 205 412 198 Q420 188 438 198 Z" fill="currentColor" fillOpacity="0.65" />
        <circle cx="426" cy="186" r="3" fill="currentColor" fillOpacity="0.8" />

        {/* Center Top & Bottom Crests */}
        <path d="M210 12 Q230 4 250 12 Q230 18 210 12 Z" fill="currentColor" fillOpacity="0.7" />
        <circle cx="230" cy="12" r="3.5" fill="currentColor" />
        <path d="M210 208 Q230 216 250 208 Q230 202 210 208 Z" fill="currentColor" fillOpacity="0.7" />
        <circle cx="230" cy="208" r="3.5" fill="currentColor" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/**
 * Master Home Page - Exactly Styled to Match Video Reference
 */
export function HomePage({ onOpenRsvp }) {
  // Parallax mouse tracking
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Gold Scratch cards state
  const [revealedCount, setRevealedCount] = useState(0);
  const [forceRevealAll, setForceRevealAll] = useState(false);

  // Gallery Lightbox Modal state
  const [activePhoto, setActivePhoto] = useState(null);

  // Live Countdown Hook
  const timeLeft = useCountdown(WEDDING_CONFIG.date.iso);

  // Section in-view scroll reveal hooks
  const [scratchRef, scratchVisible] = useInView();
  const [blessingRef, blessingVisible] = useInView();
  const [countdownRef, countdownVisible] = useInView();
  const [theDayRef, theDayVisible] = useInView();
  const [storyRef, storyVisible] = useInView();
  const [galleryRef, galleryVisible] = useInView();

  const handleHeroMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouseOffset({ x, y });
  };

  const galleryPhotos = [
    { id: 1, src: heroPhoto, title: 'Forever Promised', category: 'Portraits' },
    { id: 2, src: couplePortrait, title: 'Ceremonial Elegance', category: 'The Ceremony' },
    { id: 3, src: momentPhoto3, title: 'Golden Hour Reflections', category: 'Lake Kuriftu' },
    { id: 4, src: momentPhoto4, title: 'Timeless Romance', category: 'Celebration' }
  ];

  return (
    <main className="animate-fade-in bg-[#FAF8F5]">
      {/* ================================================================
          1. HERO SECTION (#invitation) — MATCHING VIDEO 00:04 - 00:08
         ================================================================ */}
      <section
        id="invitation"
        onMouseMove={handleHeroMouseMove}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 pt-28 pb-16 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(31,29,27,0.48), rgba(31,29,27,0.72)), url(${heroPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 28%'
        }}
      >
        <LuminousArchHeroArt mouseOffset={mouseOffset} />
        <GoldDustCanvas intensity={0.9} />

        {/* 3D Animated Flanking Celebrity Loved Portraits */}
        <Side3DPortraits mouseOffset={mouseOffset} />

        <div className="relative z-20 mx-auto max-w-3xl px-4">
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.42em] text-[#E8D4AE] drop-shadow-sm">
            A Celebration of Love
          </p>

          {/* Monumental Couple Name (Matching Video Hero) */}
          <h1 className="mt-4 font-serif text-5xl font-light tracking-[0.08em] sm:text-7xl md:text-8xl drop-shadow-md">
            <span>{WEDDING_CONFIG.couple.groom.toUpperCase()}</span>
            <span className="mx-3 inline-block font-script text-4xl text-[#E5C98E] sm:text-7xl">
              &amp;
            </span>
            <span>{WEDDING_CONFIG.couple.bride.toUpperCase()}</span>
          </h1>

          <p className="mt-4 font-serif text-sm sm:text-xl italic tracking-wider text-[#F2EAE0] drop-shadow-sm">
            {WEDDING_CONFIG.couple.tagline}
          </p>

          {/* Scroll Down Indicator */}
          <a
            href="#reveal-date"
            className="mt-12 sm:mt-16 inline-flex flex-col items-center gap-2 text-[#E8D4AE] transition hover:text-white"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#E8D4AE]">
              Scroll down
            </span>
            <div className="flex h-9 w-6 items-start justify-center rounded-full border border-[#E8D4AE]/60 p-1">
              <ChevronDown className="h-3.5 w-3.5 animate-bounce text-[#E8D4AE]" />
            </div>
          </a>
        </div>
      </section>

      {/* ================================================================
          2. YOU'RE INVITED & BLESSINGS & VINTAGE ORNATE FRAME (VIDEO 00:10 - 00:18)
         ================================================================ */}
      <section
        ref={blessingRef}
        className={`relative border-t border-[#1F1D1B]/10 bg-[#FAF8F5] px-5 py-24 transition-all duration-1000 sm:py-28 ${
          blessingVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.38em] text-[#9A7A49]">
            &bull; You're Invited &bull;
          </p>

          <p className="mt-6 font-serif text-xl sm:text-2xl italic leading-relaxed text-[#554E46]">
            “With Joyful Hearts &amp; Blessings of Our Families”
          </p>

          <h2 className="mt-6 font-serif text-3xl sm:text-4xl font-light text-[#1F1D1B]">
            Dear Friends &amp; Family
          </h2>

          <div className="mx-auto my-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#B89B72]/40" />
            <Heart className="h-4 w-4 text-[#B89B72]" />
            <span className="h-px w-12 bg-[#B89B72]/40" />
          </div>

          <div className="space-y-4 font-sans text-sm sm:text-base leading-relaxed text-[#5C554E] max-w-2xl mx-auto">
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

          <p className="mt-8 font-script text-4xl text-[#9A7A49]">
            With all our love, {WEDDING_CONFIG.couple.groom} &amp; {WEDDING_CONFIG.couple.bride}
          </p>

          {/* Vintage Ornate Filigree Frame (From Video 00:16) */}
          <VintageOrnateFrame>
            <p className="font-sans text-[11px] uppercase tracking-[0.34em] text-[#9E7E49]">
              Saturday
            </p>
            <p className="mt-1 font-serif text-3xl sm:text-4xl font-light text-[#1F1D1B]">
              24 April 2027
            </p>
            <p className="mt-2 font-serif text-sm italic text-[#72685E]">
              at 8:00 &mdash; Ethiopian time (2:00 PM)
            </p>
          </VintageOrnateFrame>
        </div>
      </section>

      {/* ================================================================
          3. THE DATE (INTERACTIVE GOLD FOIL SCRATCH CARD)
         ================================================================ */}
      <section
        id="reveal-date"
        ref={scratchRef}
        className={`relative border-t border-[#1F1D1B]/10 bg-[#F0ECE4]/60 px-5 py-20 transition-all duration-1000 sm:py-24 ${
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
              <span className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F5] px-4 py-1.5 font-serif text-sm italic text-[#6E5736] shadow-sm animate-fade-in">
                <Star className="h-3.5 w-3.5 fill-[#B89B72] text-[#B89B72]" />
                Save the Date &mdash; Saturday, {WEDDING_CONFIG.date.display}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ================================================================
          4. ATMOSPHERIC COUNTDOWN BANNER (VIDEO 00:20 - 00:24)
         ================================================================ */}
      <section
        ref={countdownRef}
        className={`relative overflow-hidden px-5 py-24 text-center text-white transition-all duration-1000 ${
          countdownVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(31,29,27,0.76), rgba(31,29,27,0.85)), url(${couplePortrait})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%'
        }}
      >
        <GoldDustCanvas intensity={0.6} />

        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="font-sans text-xs uppercase tracking-[0.36em] text-[#D4B47C]">
            Happily Ever After
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white">
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
                className="relative flex flex-col items-center rounded-2xl border border-white/20 bg-black/35 py-5 px-2 backdrop-blur-md sm:py-7"
              >
                <span className="font-serif text-3xl sm:text-5xl font-light tracking-wider text-[#F2DFC0]">
                  {unit.val}
                </span>
                <span className="mt-2 font-sans text-[10px] uppercase tracking-[0.26em] text-[#C8BEB2]">
                  {unit.label}
                </span>
                {idx < 3 && (
                  <span className="pointer-events-none absolute -right-2.5 top-1/2 hidden -translate-y-1/2 font-serif text-2xl text-white/40 sm:inline sm:-right-4">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 font-serif text-sm sm:text-base italic text-[#E2D8CC]">
            and counting &mdash; every second a little more in love
          </p>
        </div>
      </section>

      {/* ================================================================
          5. THE DAY (#the-day) — MATCHING VIDEO 00:25 - 00:30
         ================================================================ */}
      <section
        id="the-day"
        ref={theDayRef}
        className={`relative border-t border-[#1F1D1B]/10 bg-[#FAF8F5] px-5 py-24 transition-all duration-1000 sm:py-28 ${
          theDayVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.38em] text-[#9A7A49]">
              The Celebration
            </p>
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-light text-[#1F1D1B]">
              The Day
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-[#B89B72]/50" />
          </div>

          {/* Split 2-Column Layout (Matching Video 00:26 - 00:29) */}
          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Vertical Portrait Photo */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-[28px] border border-[#B89B72]/40 shadow-xl">
                <img
                  src={couplePortrait}
                  alt={`${WEDDING_CONFIG.couple.names} Portrait`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105 aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Cards (WHEN, WHERE, DRESS CODE) */}
            <div className="space-y-6 lg:col-span-7">
              {/* Card 1: WHEN */}
              <div className="rounded-2xl border border-[#B89B72]/30 bg-[#FAF8F5] p-6 shadow-sm sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0ECE4] text-[#8E744A]">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8E744A]">
                      When
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-[#1F1D1B]">
                      Saturday, 24 April 2027
                    </h3>
                    <p className="mt-1 font-serif text-base text-[#6E7B68] font-medium">
                      ሚያዝያ 16 ቀን 2019 ዓ.ም
                    </p>
                    <p className="mt-1 font-sans text-xs text-[#6B6259]">
                      8:00 (Ethiopian time) &bull; 2:00 PM EAT
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: WHERE */}
              <div className="rounded-2xl border border-[#B89B72]/30 bg-[#FAF8F5] p-6 shadow-sm sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0ECE4] text-[#8E744A]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8E744A]">
                      Where
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-[#1F1D1B]">
                      Kuriftu Lakefront
                    </h3>
                    <p className="mt-1 font-sans text-xs text-[#6B6259]">
                      {WEDDING_CONFIG.venue.city}, {WEDDING_CONFIG.venue.region} &bull; {WEDDING_CONFIG.venue.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: DRESS CODE */}
              <div className="rounded-2xl border border-[#B89B72]/30 bg-[#FAF8F5] p-6 shadow-sm sm:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0ECE4] text-[#8E744A]">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8E744A]">
                      Dress Code
                    </p>
                    <h3 className="mt-1 font-serif text-2xl text-[#1F1D1B]">
                      Formal &amp; Habesha
                    </h3>
                    <p className="mt-1 font-sans text-xs text-[#6B6259]">
                      Warm champagne, sage &amp; soft neutrals
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button: GET DIRECTIONS */}
              <div className="pt-2">
                <a
                  href={WEDDING_CONFIG.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#4A5A43] px-8 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.24em] text-white shadow-md transition hover:bg-[#3B4835] hover:scale-105"
                >
                  Get Directions
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
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
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-light text-[#1F1D1B]">
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
          7. CAPTURED MOMENTS / OUR GALLERY (#gallery, VIDEO 00:30 - 00:39)
         ================================================================ */}
      <section
        id="gallery"
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
            <h2 className="mt-2 font-serif text-4xl sm:text-5xl font-light text-[#1F1D1B]">
              Our Gallery
            </h2>
            <p className="mt-3 font-serif text-sm italic text-[#7A6F64]">
              Tap any photo to view it full screen
            </p>
            <div className="mx-auto mt-4 h-px w-16 bg-[#B89B72]/50" />
          </div>

          {/* 4-Column Portrait Photo Gallery Grid */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-6">
            {galleryPhotos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActivePhoto(photo)}
                className="group relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-[#B89B72]/30 bg-[#F0ECE4] shadow-sm transition hover:-translate-y-1 hover:border-[#B89B72] hover:shadow-lg focus:outline-none"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4 text-left">
                  <span className="font-sans text-[9px] uppercase tracking-wider text-[#E8D4AE]">
                    {photo.category}
                  </span>
                  <p className="font-serif text-sm text-white drop-shadow-sm">
                    {photo.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                setActivePhoto(galleryPhotos[0]);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#1F1D1B]/40 px-8 py-3 font-sans text-xs uppercase tracking-[0.24em] text-[#1F1D1B] transition hover:border-[#1F1D1B] hover:bg-[#1F1D1B] hover:text-white"
            >
              See More Moments
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ================================================================
          8. ROMANTIC BANNER: LOVE NEVER FAILS (VIDEO 00:41 - 00:46)
         ================================================================ */}
      <section
        className="relative overflow-hidden py-24 text-center text-white border-t border-[#1F1D1B]/10"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(31,29,27,0.72), rgba(31,29,27,0.78)), url(${momentPhoto3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <GoldDustCanvas intensity={0.5} />
        <div className="relative z-10 mx-auto max-w-2xl px-4">
          <p className="font-script text-5xl sm:text-7xl text-[#F5E6CC] drop-shadow-md">
            Love never fails
          </p>
          <p className="mt-4 font-serif text-xs uppercase tracking-[0.32em] text-[#D8CDC0]">
            {WEDDING_CONFIG.couple.names} &bull; {WEDDING_CONFIG.date.year}
          </p>
        </div>
      </section>

      {/* ================================================================
          PHOTO LIGHTBOX MODAL
         ================================================================ */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] max-w-3xl overflow-hidden rounded-2xl border border-white/20 bg-[#1F1D1B] shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white/80 hover:text-white hover:bg-black/80 transition"
              aria-label="Close photo preview"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              className="max-h-[80vh] w-auto object-contain"
            />
            <div className="p-4 text-center bg-[#1F1D1B] text-white">
              <p className="font-serif text-lg">{activePhoto.title}</p>
              <p className="font-sans text-xs uppercase tracking-widest text-[#B89B72]">
                {activePhoto.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
