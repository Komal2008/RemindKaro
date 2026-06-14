'use client';

import { useCallback, useRef } from 'react';
import { useSound } from '@/components/providers/SoundProvider';

export function useHoverSound() {
  const { soundEnabled } = useSound();
  const audioCtxRef = useRef(null);

  const playHoverSound = useCallback(() => {
    if (!soundEnabled) return;

    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      const ctx = audioCtxRef.current;

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.value = 1800; // high-frequency subtle click

      gainNode.gain.setValueAtTime(0.04, ctx.currentTime); // very quiet
      gainNode.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + 0.08
      );

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio not supported or blocked — fail silently
    }
  }, [soundEnabled]);

  return playHoverSound;
}
