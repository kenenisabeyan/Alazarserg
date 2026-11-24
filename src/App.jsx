import React, { useState, useCallback } from 'react';
import { Sparkles } from 'lucide-react';
import { EnvelopeIntro } from './components/fx/EnvelopeIntro';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { RsvpModal } from './components/common/RsvpModal';
import { Toast } from './components/common/Toast';
import { HomePage } from './pages/HomePage';
import { TheDayPage } from './pages/TheDayPage';
import { TravelStayPage } from './pages/TravelStayPage';
import { GalleryGiftsPage } from './pages/GalleryGiftsPage';
import { QnAPage } from './pages/QnAPage';
import { WEDDING_CONFIG } from './config/weddingConfig';

/**
 * Root Multi-Page Wedding Hub Orchestrator
 */
export default function App() {
  const [introDone, setIntroDone] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Toast notification helper
  const showToast = useCallback((msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? '' : prev));
    }, 3600);
  }, []);

  const handleNavigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReplayIntro = () => {
    setActivePage('Home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIntroDone(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF8F5] text-[#1F1D1B] selection:bg-[#B89B72]/25 selection:text-[#1F1D1B]">
      {/* 3D Envelope Intro Layer */}
      {!introDone && <EnvelopeIntro onComplete={() => setIntroDone(true)} />}

      {/* Global Top Navbar */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenRsvp={() => setRsvpOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Active Page Viewport */}
      {activePage === 'Home' && (
        <HomePage
          onNavigate={handleNavigate}
          onOpenRsvp={() => setRsvpOpen(true)}
          onShowToast={showToast}
        />
      )}

      {activePage === 'The Day' && (
        <TheDayPage
          onNavigate={handleNavigate}
          onOpenRsvp={() => setRsvpOpen(true)}
          onShowToast={showToast}
        />
      )}

      {activePage === 'Travel & Stay' && (
        <TravelStayPage
          onNavigate={handleNavigate}
          onOpenRsvp={() => setRsvpOpen(true)}
          onShowToast={showToast}
        />
      )}

      {activePage === 'Gallery & Gifts' && (
        <GalleryGiftsPage
          onNavigate={handleNavigate}
          onOpenRsvp={() => setRsvpOpen(true)}
          onShowToast={showToast}
        />
      )}

      {activePage === 'Q+A' && (
        <QnAPage
          onNavigate={handleNavigate}
          onOpenRsvp={() => setRsvpOpen(true)}
          onShowToast={showToast}
        />
      )}

      {/* Global Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* Mobile Sticky RSVP Button */}
      <div className="fixed inset-x-4 bottom-4 z-30 sm:hidden">
        <button
          type="button"
          onClick={() => setRsvpOpen(true)}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#6E7B68] py-3.5 font-sans text-xs font-medium uppercase tracking-[0.24em] text-white shadow-[0_12px_30px_rgba(31,29,27,0.28)]"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#E5C98E]" />
          RSVP to {WEDDING_CONFIG.couple.names}
        </button>
      </div>

      {/* RSVP Modal */}
      <RsvpModal
        isOpen={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
        onSuccess={(name) => showToast(`Thank you, ${name}! Your RSVP has been received.`)}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
