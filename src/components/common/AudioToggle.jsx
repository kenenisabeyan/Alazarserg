import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Floating Audio Soundscape Toggle Button
 */
export function AudioToggle({ isPlaying, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
      title={isPlaying ? 'Pause ambient music' : 'Play gentle wedding chime'}
      className="fixed right-5 bottom-20 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 text-white shadow-[0_10px_28px_rgba(184,155,114,0.45)] transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:right-6"
      style={{
        background: 'linear-gradient(135deg, #DFBE82 0%, #B89B72 100%)'
      }}
    >
      {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
    </button>
  );
}
