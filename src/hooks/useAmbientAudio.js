import { useState, useEffect, useRef } from 'react';

/**
 * Web Audio API synthesized ambient romantic chime soundscape
 * Eliminates broken external mp3 links and guarantees zero-dependency soothing sound.
 */
export function useAmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const toggleAudio = () => {
    try {
      if (isPlaying) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsPlaying(false);
        return;
      }

      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Warm pentatonic harp scale (D major / B minor progression)
      const notes = [293.66, 369.99, 440.0, 554.37, 587.33, 440.0, 369.99, 329.63];
      let step = 0;

      const playChime = () => {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(notes[step % notes.length], now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.045, now + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 2.5);
        step++;
      };

      playChime();
      intervalRef.current = setInterval(playChime, 1350);
      setIsPlaying(true);
      return true;
    } catch (err) {
      console.error('Audio playback error:', err);
      return false;
    }
  };

  return { isPlaying, toggleAudio };
}
