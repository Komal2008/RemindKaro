import Link from 'next/link';
import { Zap, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      padding: '80px 5% 40px',
      marginTop: 'auto',
      color: '#0f172a'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '60px',
        justifyContent: 'space-between'
      }}>
        <div style={{ gridColumn: '1 / -1', '@media (min-width: 768px)': { gridColumn: 'span 2' } }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#0f172a', marginBottom: '20px' }}>
            <div style={{ background: '#3b82f6', padding: '8px', borderRadius: '12px', display: 'flex' }}>
              <Zap color="#fff" size={20} />
            </div>
            <span style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-0.5px' }}>RemindKaro</span>
          </Link>
          <p style={{ color: '#64748b', fontSize: '15px', lineHeight: 1.6, maxWidth: '320px', fontWeight: 500 }}>
            The intelligent dashboard for tracking deadlines, hackathons, and interviews with smart urgency escalation.
          </p>
        </div>

        <div>
          <h3 style={{ color: '#0f172a', fontSize: '15px', marginBottom: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><Link href="/#features" style={{ color: '#64748b', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>Features</Link></li>
            <li><Link href="/testimonials" style={{ color: '#64748b', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>Testimonials</Link></li>
            <li><Link href="/login" style={{ color: '#64748b', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>Sign In</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#0f172a', fontSize: '15px', marginBottom: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Legal</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><Link href="/privacy-policy" style={{ color: '#64748b', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" style={{ color: '#64748b', fontSize: '15px', fontWeight: 500, transition: 'color 0.2s' }}>Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#0f172a', fontSize: '15px', marginBottom: '24px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Contact</h3>
          <a href="mailto:hello@remindkaro.com" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: '#0f172a',
            fontSize: '15px',
            fontWeight: 600,
            padding: '12px 20px',
            background: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            transition: 'all 0.2s ease',
            textDecoration: 'none'
          }}>
            <Mail size={18} color="#3b82f6" />
            hello@remindkaro.com
          </a>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '80px auto 0',
        paddingTop: '30px',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>
          © {new Date().getFullYear()} RemindKaro. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <span style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500 }}>Built with Next.js & Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
