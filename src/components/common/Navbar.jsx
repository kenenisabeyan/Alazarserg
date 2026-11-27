import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { WEDDING_CONFIG } from '../../config/weddingConfig';

/**
 * Editorial Navbar matching the reference video layout
 * Tabs: INVITATION | THE DAY | GALLERY + RSVP Action
 */
export function Navbar({ onOpenRsvp }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('invitation');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['invitation', 'the-day', 'gallery'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'INVITATION', href: '#invitation', id: 'invitation' },
    { label: 'THE DAY', href: '#the-day', id: 'the-day' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' }
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'border-b border-[#1F1D1B]/10 bg-[#FAF8F5]/92 py-3.5 shadow-[0_6px_30px_rgba(31,29,27,0.06)] backdrop-blur-md'
          : 'bg-gradient-to-b from-[#1F1D1B]/40 via-[#1F1D1B]/10 to-transparent py-5 text-white'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Monogram / Brand */}
        <a
          href="#invitation"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#invitation');
          }}
          className="flex items-center gap-3 text-left focus:outline-none"
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full border font-script text-lg transition-colors ${
              scrolled
                ? 'border-[#B89B72]/50 bg-[#FAF8F5] text-[#9E7E49]'
                : 'border-white/60 bg-black/20 text-[#F5E6CC] backdrop-blur-xs'
            }`}
          >
            {WEDDING_CONFIG.couple.monogram}
          </span>
          <span
            className={`font-serif text-sm tracking-[0.18em] transition-colors ${
              scrolled ? 'text-[#1F1D1B]' : 'text-white'
            }`}
          >
            {WEDDING_CONFIG.couple.names}
          </span>
        </a>

        {/* Center / Desktop Nav Tabs */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary Navigation">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className={`relative font-sans text-xs uppercase tracking-[0.22em] transition-colors hover:text-[#B89B72] ${
                activeSection === item.id
                  ? 'font-semibold text-[#B89B72]'
                  : scrolled
                  ? 'text-[#4A423A]'
                  : 'text-white/90'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#B89B72]" />
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA / RSVP Action */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenRsvp}
            className={`hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-2 font-sans text-xs uppercase tracking-[0.2em] transition hover:scale-105 ${
              scrolled
                ? 'bg-[#4A5A43] text-white hover:bg-[#3D4B37]'
                : 'bg-white/20 text-white backdrop-blur-md hover:bg-white/30 border border-white/40'
            }`}
          >
            <Sparkles className="h-3 w-3 text-[#E8D4AE]" />
            RSVP
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition md:hidden ${
              scrolled ? 'text-[#1F1D1B]' : 'text-white'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#1F1D1B]/10 bg-[#FAF8F5] px-6 py-6 shadow-xl md:hidden animate-fade-in text-[#1F1D1B]">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="py-2 text-left font-sans text-sm font-medium uppercase tracking-[0.24em] text-[#1F1D1B] hover:text-[#B89B72]"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3 border-t border-[#1F1D1B]/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRsvp();
                }}
                className="w-full rounded-full bg-[#4A5A43] py-3 text-center font-sans text-xs font-medium uppercase tracking-[0.2em] text-white"
              >
                RSVP to Celebration
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
