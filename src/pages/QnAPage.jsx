import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle, ArrowLeft, ArrowRight, Mail } from 'lucide-react';
import { GoldDustCanvas } from '../components/fx/GoldDustCanvas';
import { FAQ_DATA } from '../data/faqData';
import { WEDDING_CONFIG } from '../config/weddingConfig';

/**
 * Page 4: Q+A (Frequently Asked Questions)
 */
export function QnAPage({ onNavigate, onOpenRsvp }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <main className="animate-fade-in">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-[#1F1D1B]/10 bg-gradient-to-b from-[#F5EDE0] via-[#FAF6EE] to-[#FAF8F5] px-5 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <GoldDustCanvas intensity={0.6} />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B89B72]/70" />
            <span className="font-sans text-[10px] font-medium uppercase tracking-[0.36em] text-[#8F7347] sm:text-xs">
              Helpful Information
            </span>
            <span className="h-px w-8 bg-[#B89B72]/70" />
          </div>

          <h1 className="font-serif text-5xl font-light tracking-wide text-[#1F1D1B] sm:text-7xl">
            Questions &amp; Answers
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-[#5C554E] sm:text-base">
            Everything you need to know about celebrating with {WEDDING_CONFIG.couple.names}—dress code,
            transportation, plus-ones, and wedding logistics.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="relative bg-[#FAF8F5] px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-4">
            {FAQ_DATA.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-2xl border border-[#B89B72]/30 bg-white/80 transition-shadow hover:shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="flex w-full items-center justify-between p-5 text-left focus:outline-none sm:p-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl text-[#1F1D1B] sm:text-2xl">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B89B72]/40 bg-[#FAF8F5] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#B89B72] text-white' : 'text-[#8E7349]'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#1F1D1B]/8 px-5 pb-6 pt-4 sm:px-6">
                      <p className="font-sans text-sm leading-relaxed text-[#5C554E]">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Need Additional Assistance */}
          <div className="mt-16 rounded-3xl border border-[#B89B72]/30 bg-[#F0ECE4]/60 p-8 text-center">
            <HelpCircle className="mx-auto h-8 w-8 text-[#B89B72]" />
            <h3 className="mt-3 font-serif text-2xl text-[#1F1D1B]">Have Another Question?</h3>
            <p className="mx-auto mt-2 max-w-md font-sans text-sm text-[#5C554E]">
              Feel free to reach out directly to our wedding coordination team. We are here to ensure
              your experience is seamless and unforgettable.
            </p>
            <a
              href="mailto:celebration@alazar-serg.com"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#B89B72] bg-white px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#8F7347] transition hover:bg-[#F0ECE4]"
            >
              <Mail className="h-3.5 w-3.5" />
              celebration@alazar-serg.com
            </a>
          </div>

          {/* Bottom Nav */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1F1D1B]/10 pt-10 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('Home')}
              className="inline-flex items-center gap-2 rounded-full border border-[#1F1D1B]/15 bg-white px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#1F1D1B] transition hover:border-[#B89B72] hover:bg-[#F0ECE4]"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[#B89B72]" />
              Back to Home
            </button>

            <button
              type="button"
              onClick={onOpenRsvp}
              className="inline-flex items-center gap-2 rounded-full bg-[#6E7B68] px-7 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.24em] text-white shadow-md transition hover:bg-[#5B6856]"
            >
              RSVP to Celebration
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
