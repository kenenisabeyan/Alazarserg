import React from 'react';

/**
 * Global Floating Toast Notification
 */
export function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 left-1/2 z-50 -translate-x-1/2 rounded-full border border-[#B89B72]/50 bg-[#1F1D1B] px-5 py-2.5 text-center font-sans text-xs tracking-wide text-[#FAF8F5] shadow-xl sm:bottom-8 animate-fade-in">
      {message}
    </div>
  );
}
