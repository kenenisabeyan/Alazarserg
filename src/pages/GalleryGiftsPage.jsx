import React, { useState } from 'react';
import {
  Sparkles,
  Heart,
  Gift,
  Camera,
  Copy,
  Check,
  X,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  Upload,
  Landmark
} from 'lucide-react';
import { GoldDustCanvas } from '../components/fx/GoldDustCanvas';
import { TiltCard } from '../components/fx/TiltCard';
import { useInView } from '../hooks/useInView';
import { copyToClipboard } from '../utils/clipboard';
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  REGISTRY_FUNDS,
  BANK_TRANSFER_DETAILS
} from '../data/galleryData';
import { WEDDING_CONFIG } from '../config/weddingConfig';

/**
 * Page: Gallery & Gifts
 */
export function GalleryGiftsPage({ onNavigate, onOpenRsvp, onShowToast }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);
  const [copiedAccount, setCopiedAccount] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const [heroRef, heroVisible] = useInView({ threshold: 0.1 });
  const [galleryRef, galleryVisible] = useInView({ threshold: 0.1 });
  const [registryRef, registryVisible] = useInView({ threshold: 0.1 });

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const handleCopyAccount = async (accountNum, bankName) => {
    const success = await copyToClipboard(accountNum);
    if (success) {
      setCopiedAccount(accountNum);
      onShowToast(`${bankName} account copied to clipboard!`);
      setTimeout(() => setCopiedAccount(null), 3000);
    }
  };

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
              Memories &bull; Registry &bull; Wishing Well
            </span>
            <span className="h-px w-8 bg-[#B89B72]/70" />
          </div>

          <h1 className="font-serif text-5xl font-light tracking-wide text-[#1F1D1B] sm:text-7xl">
            Gallery &amp; Gifts
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-[#5C554E] sm:text-base">
            Glimpses of our journey together, guest photo sharing, and thoughtful registry options
            for our cherished friends and family.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {[
              { label: 'Photo Gallery', href: '#gallery-grid' },
              { label: 'Share Photos', href: '#guest-upload' },
              { label: 'Wishing Well & Registry', href: '#registry-section' }
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
          PHOTO GALLERY SECTION
         ================================================================ */}
      <section
        id="gallery-grid"
        ref={galleryRef}
        className={`relative bg-[#FAF8F5] px-5 py-20 transition-all duration-1000 sm:py-24 ${
          galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-script text-4xl text-[#B89B72] sm:text-5xl">Moments in Time</p>
            <h2 className="mt-1 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
              Captured Memories
            </h2>
            <p className="mx-auto mt-3 max-w-md font-sans text-sm text-[#615951]">
              A glimpse into the chapters that brought us to this joyful threshold.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-5 py-2 font-sans text-xs uppercase tracking-[0.18em] transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#6E7B68] font-medium text-white shadow-md'
                    : 'border border-[#B89B72]/30 bg-[#F0ECE4]/60 text-[#5C554E] hover:border-[#B89B72] hover:text-[#1F1D1B]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group cursor-pointer"
              >
                <TiltCard>
                  <div className="overflow-hidden rounded-3xl border border-[#B89B72]/35 bg-white p-3 shadow-[0_12px_32px_rgba(146,120,82,0.08)] transition hover:border-[#B89B72]/70">
                    {/* Simulated Artistic Canvas Frame */}
                    <div
                      className={`relative flex ${item.aspect} w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b ${item.gradient} p-6`}
                    >
                      {/* Decorative inner frame */}
                      <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/60 bg-white/10 backdrop-blur-[1px]" />

                      {/* Line art iconography */}
                      <div className="relative z-10 flex flex-col items-center justify-center text-center text-[#1F1D1B]/80 transition-transform duration-500 group-hover:scale-105">
                        <Camera className="h-8 w-8 text-[#B89B72]" />
                        <span className="mt-3 font-serif text-xl font-light text-[#1F1D1B]">
                          {item.title}
                        </span>
                        <span className="mt-1 font-sans text-[10px] uppercase tracking-[0.22em] text-[#7A6343]">
                          {item.location}
                        </span>
                      </div>

                      {/* Tag Badge */}
                      <span className="absolute left-5 top-5 rounded-full bg-[#FAF8F5]/90 px-3 py-1 font-sans text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F7347] shadow-sm backdrop-blur-md">
                        {item.tag}
                      </span>
                    </div>

                    <div className="px-3 pt-3.5 pb-2">
                      <p className="font-serif text-sm italic text-[#5C554E] line-clamp-2">
                        "{item.caption}"
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>

          {/* Guest Photo Upload CTA */}
          <div
            id="guest-upload"
            className="mt-16 rounded-3xl border border-[#B89B72]/40 bg-[#F0ECE4]/70 p-8 text-center sm:p-12"
          >
            <Camera className="mx-auto h-10 w-10 text-[#B89B72]" />
            <h3 className="mt-4 font-serif text-3xl text-[#1F1D1B]">
              Share Your Wedding Weekend Photos
            </h3>
            <p className="mx-auto mt-2 max-w-lg font-sans text-sm leading-relaxed text-[#5C554E]">
              We would love to see our wedding through your eyes. Upload your pictures and short video
              clips from the ceremony, dinner, and dancing directly to our shared digital album.
            </p>

            <button
              type="button"
              onClick={() => setUploadModalOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#6E7B68] px-8 py-3.5 font-sans text-xs font-medium uppercase tracking-[0.24em] text-white shadow-md transition hover:bg-[#5B6856]"
            >
              <Upload className="h-4 w-4" />
              Upload Guest Photos
            </button>
          </div>
        </div>
      </section>

      {/* ================================================================
          REGISTRY & WISHING WELL SECTION
         ================================================================ */}
      <section
        id="registry-section"
        ref={registryRef}
        className={`relative border-t border-[#1F1D1B]/10 bg-[#FAF8F5] px-5 py-20 transition-all duration-1000 sm:py-24 ${
          registryVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <Gift className="mx-auto h-8 w-8 text-[#B89B72]" />
            <p className="mt-2 font-script text-4xl text-[#B89B72] sm:text-5xl">Wishing Well</p>
            <h2 className="mt-1 font-serif text-4xl font-light text-[#1F1D1B] sm:text-5xl">
              Gift Registry
            </h2>
            <div className="mx-auto my-4 h-px w-12 bg-[#B89B72]/50" />
            <p className="font-sans text-sm leading-relaxed text-[#5C554E]">
              Your love, laughter, and presence at our wedding are the greatest gifts of all. If you
              wish to honor us with a gift, a contribution towards our honeymoon sanctuary or new
              home would be warmly appreciated.
            </p>
          </div>

          {/* Registry Experience Funds */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {REGISTRY_FUNDS.map((fund) => (
              <TiltCard key={fund.title}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-[#B89B72]/30 bg-white/80 p-6 shadow-sm">
                  <div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F0ECE4] text-[#8F7347]">
                      <Heart className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-serif text-2xl text-[#1F1D1B]">{fund.title}</h3>
                    <p className="mt-2 font-sans text-xs leading-relaxed text-[#5C554E]">
                      {fund.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-[#1F1D1B]/8 pt-4">
                    <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#9A7A49]">
                      Suggested Amounts
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {fund.suggestedAmounts.map((amt) => (
                        <span
                          key={amt}
                          className="rounded-full border border-[#B89B72]/40 bg-[#FAF8F5] px-3 py-1 font-sans text-xs font-semibold text-[#1F1D1B]"
                        >
                          {amt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Ethiopian Bank & Digital Transfer Details */}
          <div className="mt-14 rounded-3xl border border-[#B89B72]/35 bg-[#FAF8F5] p-6 shadow-[0_16px_40px_rgba(31,29,27,0.04)] sm:p-9">
            <div className="flex items-center gap-3">
              <Landmark className="h-6 w-6 text-[#B89B72]" />
              <div>
                <h3 className="font-serif text-2xl text-[#1F1D1B]">
                  Direct Bank &amp; Telebirr Transfers
                </h3>
                <p className="font-sans text-xs text-[#7A6F64]">
                  Tap 'Copy' on any account for convenient mobile banking deposits.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {BANK_TRANSFER_DETAILS.map((bank) => {
                const isCopied = copiedAccount === bank.accountNumber;
                return (
                  <div
                    key={bank.bankName}
                    className="flex flex-col justify-between rounded-2xl border border-[#B89B72]/25 bg-white p-5"
                  >
                    <div>
                      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A7A49]">
                        {bank.bankName}
                      </span>
                      <p className="mt-1 font-serif text-lg font-medium text-[#1F1D1B]">
                        {bank.accountName}
                      </p>
                      <p className="mt-2 font-mono text-sm font-semibold tracking-wider text-[#1F1D1B]">
                        {bank.accountNumber}
                      </p>
                      <p className="mt-1 font-sans text-[11px] text-[#7A6F64]">{bank.branch}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopyAccount(bank.accountNumber, bank.bankName)}
                      className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-[#1F1D1B]/15 bg-[#FAF8F5] py-2 text-xs font-sans font-medium uppercase tracking-[0.16em] text-[#1F1D1B] transition hover:border-[#B89B72] hover:bg-white"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-[#6E7B68]" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-[#B89B72]" />
                          Copy Number
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Navigation Strip */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1F1D1B]/10 pt-10 sm:flex-row">
            <button
              type="button"
              onClick={() => onNavigate('Travel & Stay')}
              className="inline-flex items-center gap-2 rounded-full border border-[#1F1D1B]/15 bg-white px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#1F1D1B] transition hover:border-[#B89B72] hover:bg-[#F0ECE4]"
            >
              <ArrowLeft className="h-3.5 w-3.5 text-[#B89B72]" />
              Travel &amp; Stay
            </button>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate('Q+A')}
                className="inline-flex items-center gap-2 rounded-full border border-[#B89B72]/60 bg-white px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.22em] text-[#8F7347] transition hover:bg-[#F0ECE4]"
              >
                Read Q+A
                <ArrowRight className="h-3.5 w-3.5" />
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
        </div>
      </section>

      {/* ================================================================
          PHOTO LIGHTBOX MODAL
         ================================================================ */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F1D1B]/80 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setActivePhoto(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-3xl border border-[#B89B72]/45 bg-[#FAF8F5] p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#1F1D1B]/15 text-[#1F1D1B]/70 hover:bg-[#F0ECE4]"
            >
              <X className="h-4 w-4" />
            </button>

            <div
              className={`flex aspect-[16/10] w-full items-center justify-center rounded-2xl bg-gradient-to-b ${activePhoto.gradient} p-6 shadow-inner`}
            >
              <Camera className="h-12 w-12 text-[#B89B72]" />
            </div>

            <div className="mt-5 text-center">
              <span className="font-sans text-[10px] uppercase tracking-[0.26em] text-[#8F7347]">
                {activePhoto.category} &bull; {activePhoto.location}
              </span>
              <h3 className="mt-1 font-serif text-3xl text-[#1F1D1B]">{activePhoto.title}</h3>
              <p className="mt-3 font-serif text-base italic text-[#5C554E]">
                "{activePhoto.caption}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================
          GUEST UPLOAD MODAL
         ================================================================ */}
      {uploadModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F1D1B]/80 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setUploadModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl border border-[#B89B72]/45 bg-[#FAF8F5] p-6 text-center shadow-2xl sm:p-9"
          >
            <button
              type="button"
              onClick={() => setUploadModalOpen(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#1F1D1B]/15 text-[#1F1D1B]/70 hover:bg-[#F0ECE4]"
            >
              <X className="h-4 w-4" />
            </button>

            <Upload className="mx-auto h-12 w-12 text-[#B89B72]" />
            <h3 className="mt-3 font-serif text-3xl text-[#1F1D1B]">Upload Your Memories</h3>
            <p className="mx-auto mt-2 max-w-sm font-sans text-xs text-[#5C554E]">
              Select high-resolution photos or videos from your phone or camera to add to the
              {WEDDING_CONFIG.couple.names} wedding gallery.
            </p>

            <div className="mt-6 rounded-2xl border-2 border-dashed border-[#B89B72]/50 bg-white/70 p-8 transition hover:border-[#B89B72]">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={() => {
                  onShowToast('Photos received! Thank you for sharing your memories.');
                  setUploadModalOpen(false);
                }}
                className="hidden"
                id="guest-photo-input"
              />
              <label
                htmlFor="guest-photo-input"
                className="cursor-pointer font-sans text-xs font-medium uppercase tracking-[0.2em] text-[#8F7347] hover:underline"
              >
                Click or Drag Files Here to Upload
              </label>
              <p className="mt-1 font-sans text-[11px] text-[#8E7E70]">Supports JPG, PNG, HEIC, MP4</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
