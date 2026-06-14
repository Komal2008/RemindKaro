'use client';

import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/components/providers/SoundProvider';
import styles from './ThemeToggle.module.css';

export default function SoundToggle({ compact = false, className = '' }) {
  const { soundEnabled, toggleSound, mounted } = useSound();

  if (!mounted) {
    return (
      <div
        className={[styles.toggle, compact ? styles.compact : '', className]
          .filter(Boolean)
          .join(' ')}
        aria-hidden
        style={{ opacity: 0.6 }}
      />
    );
  }

  return (
    <button
      type="button"
      className={[styles.toggle, compact ? styles.compact : '', className]
        .filter(Boolean)
        .join(' ')}
      onClick={toggleSound}
      aria-label={soundEnabled ? 'Disable hover sounds' : 'Enable hover sounds'}
      title={soundEnabled ? 'Sound on' : 'Sound off'}
    >
      <span className={styles.srOnly}>
        {soundEnabled ? 'Disable hover sounds' : 'Enable hover sounds'}
      </span>
      <span
        className={[styles.thumb, !soundEnabled ? styles.thumbLight : ''].join(
          ' '
        )}
        aria-hidden
      />
      <span
        className={[
          styles.iconSlot,
          soundEnabled ? styles.iconSlotActive : '',
        ].join(' ')}
        aria-hidden
      >
        <Volume2 size={compact ? 14 : 16} />
      </span>
      <span
        className={[
          styles.iconSlot,
          !soundEnabled ? styles.iconSlotActive : '',
        ].join(' ')}
        aria-hidden
      >
        <VolumeX size={compact ? 14 : 16} />
      </span>
    </button>
  );
}
