'use client';

import ThemeToggle from '@/components/ui/ThemeToggle';
import styles from './AuthThemeBar.module.css';

export default function AuthThemeBar() {
  return (
    <div className={styles.bar}>
      <ThemeToggle compact />
    </div>
  );
}
