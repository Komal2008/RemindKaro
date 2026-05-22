import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { cookies } from 'next/headers';

export default async function PrivacyPolicy() {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get('auth_token')?.value;

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)'
    }}>
      <Header isLoggedIn={isLoggedIn} />
      
      <main style={{ flex: 1, padding: '120px 5% 80px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{
          background: 'rgba(17, 16, 30, 0.5)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--color-border-medium)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px'
        }}>
          <h1 style={{ fontSize: '36px', marginBottom: '24px', color: 'var(--color-info)' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>1. Information We Collect</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
            At RemindKaro, we collect information that you provide directly to us when you create an account, such as your email address, and any tasks or deadlines you input into the system.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>2. How We Use Your Information</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
            We use the information we collect to provide, maintain, and improve our services. Specifically, your data is used to calculate urgency, send reminders, and present your dashboard accurately. We do not sell your personal data to third parties.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>3. Data Security</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption for data at rest and in transit.
          </p>

          <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>4. Contact Us</h2>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px', lineHeight: 1.6 }}>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@remindkaro.com" style={{ color: 'var(--color-info)' }}>hello@remindkaro.com</a>.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
