'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle({ compact = false, className = '' }) {
  const { theme, toggleTheme, mounted } = useTheme();
  const isDark = theme === 'dark';

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
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      <span className={styles.srOnly}>
        {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      </span>
      <span
        className={[styles.thumb, !isDark ? styles.thumbLight : ''].join(' ')}
        aria-hidden
      />
      <span
        className={[styles.iconSlot, isDark ? styles.iconSlotActive : ''].join(
          ' '
        )}
        aria-hidden
      >
        <Moon size={compact ? 14 : 16} />
      </span>
      <span
        className={[styles.iconSlot, !isDark ? styles.iconSlotActive : ''].join(
          ' '
        )}
        aria-hidden
      >
        <Sun size={compact ? 14 : 16} />
      </span>
    </button>
  );
}
