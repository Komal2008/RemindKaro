'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import BrandLogo from './BrandLogo';
import styles from './Header.module.css';

export default function Header({ isLoggedIn }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('site-nav-open', open);
    return () => document.body.classList.remove('site-nav-open');
  }, [open]);

  return (
    <header className={styles.header}>
      <BrandLogo href="/" size="sm" className={styles.logo} />

      <div className={styles.actions}>
        <nav
          className={`${styles.nav} nav-links-panel ${open ? 'isOpen' : ''}`}
          aria-label="Main navigation"
        >
          <Link
            href="/#features"
            className={styles.navLink}
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#pricing"
            className={styles.navLink}
            onClick={() => setOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/testimonials"
            className={styles.navLink}
            onClick={() => setOpen(false)}
          >
            Testimonials
          </Link>
          {isLoggedIn ? (
            <Link href="/dashboard" className={styles.btnPrimary}>
              Dashboard
            </Link>
          ) : (
            <>
              <Link href="/login" className={styles.btnGhost}>
                Sign In
              </Link>
              <Link href="/signup" className={styles.btnPrimary}>
                Get Started
              </Link>
            </>
          )}
        </nav>
        <ThemeToggle compact />
        <button
          type="button"
          className={`${styles.menuBtn} nav-menu-btn`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
    </header>
  );
}
