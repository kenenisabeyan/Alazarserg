import React, { useState, useEffect } from 'react';
import { Menu, X, RotateCcw } from 'lucide-react';
import { WEDDING_CONFIG } from '../../config/weddingConfig';

/**
 * Global Editorial Navbar with Monogram, Nav Links, and Mobile Drawer
 */
export function Navbar({ activePage, onNavigate, onOpenRsvp, onReplayIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['Home', 'The Day', 'Travel & Stay', 'Gallery & Gifts', 'Q+A'];

  const handleLinkClick = (page) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[#1F1D1B]/10 bg-[#FAF8F5]/92 py-3 shadow-[0_6px_30px_rgba(31,29,27,0.05)] backdrop-blur-md'
          : 'bg-gradient-to-b from-[#FAF8F5]/80 to-transparent py-5'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Monogram & Couple Name */}
        <button
          type="button"
          onClick={() => handleLinkClick('Home')}
          className="flex items-center gap-3 text-left focus:outline-none"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B89B72]/50 bg-[#FAF8F5]/90 font-script text-xl text-[#9E7E49] shadow-sm">
            {WEDDING_CONFIG.couple.monogram}
          </span>
          <div className="hidden sm:block">
            <p className="font-serif text-lg tracking-[0.14em] text-[#1F1D1B]">
              {WEDDING_CONFIG.couple.names}
            </p>
            <p className="font-sans text-[9px] uppercase tracking-[0.28em] text-[#8E7B64]">
              {WEDDING_CONFIG.date.display}
            </p>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary Navigation">
          {navLinks.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleLinkClick(item)}
              className={`relative font-sans text-xs uppercase tracking-[0.2em] transition-colors ${
                item === activePage
                  ? 'font-semibold text-[#1F1D1B]'
                  : 'text-[#5A524B] hover:text-[#B89B72]'
              }`}
            >
              {item}
              {item === activePage && (
                <span className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#B89B72]" />
              )}
            </button>
          ))}

          <button
            type="button"
            onClick={onOpenRsvp}
            className="rounded-full bg-[#6E7B68] px-6 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-white shadow-sm transition-all hover:bg-[#5B6856] hover:shadow-md"
          >
            RSVP
          </button>
        </nav>

        {/* Mobile Nav Controls */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <button
            type="button"
            onClick={onOpenRsvp}
            className="rounded-full bg-[#6E7B68] px-4 py-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white"
          >
            RSVP
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1F1D1B]/15 bg-[#FAF8F5]/85 text-[#1F1D1B]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#1F1D1B]/10 bg-[#FAF8F5] px-6 py-5 shadow-lg lg:hidden animate-fade-in">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleLinkClick(item)}
                className={`flex items-center justify-between border-b border-[#1F1D1B]/8 py-2.5 font-sans text-xs uppercase tracking-[0.22em] ${
                  item === activePage ? 'font-semibold text-[#1F1D1B]' : 'text-[#5A524B]'
                }`}
              >
                <span>{item}</span>
                {item === activePage && <span className="h-1.5 w-1.5 rounded-full bg-[#B89B72]" />}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="mt-2 inline-flex items-center gap-2 py-2 font-sans text-xs text-[#9A7A49]"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Replay 3D Envelope Opening
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
