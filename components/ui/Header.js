import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Header({ isLoggedIn }) {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5%',
      background: 'rgba(8, 7, 15, 0.7)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--color-border-medium)',
      zIndex: 100,
    }}>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-primary)' }}>
        <Zap style={{ color: 'var(--color-info)' }} size={24} />
        <span style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em' }}>RemindKaro</span>
      </Link>

      <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }} className="nav-links">
        <Link href="/#features" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Features</Link>
        <Link href="/testimonials" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-secondary)' }}>Testimonials</Link>
        {isLoggedIn ? (
          <Link href="/dashboard" style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 20px',
            fontSize: '14px',
            fontWeight: 600,
            background: 'var(--color-info)',
            color: '#fff',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)'
          }}>
            Dashboard
          </Link>
        ) : (
          <>
            <Link href="/login" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-primary)' }}>Sign In</Link>
            <Link href="/signup" style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 20px',
              fontSize: '14px',
              fontWeight: 600,
              background: 'var(--color-text-primary)',
              color: 'var(--color-bg-primary)',
              borderRadius: 'var(--radius-md)',
            }}>
              Get Started
            </Link>
          </>
        )}
      </nav>
      {/* We can add a media query for mobile navigation in globals.css */}
    </header>
  );
}
