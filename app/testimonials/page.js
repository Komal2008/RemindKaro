import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { cookies } from 'next/headers';
import { Star } from 'lucide-react';

export default async function TestimonialsPage() {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get('auth_token')?.value;

  const testimonials = [
    { name: "Rahul S.", role: "Computer Science Student", text: "RemindKaro completely changed how I manage my hackathon deadlines. I haven't missed a single submission since I started using it." },
    { name: "Priya M.", role: "Software Developer", text: "The native voice entry is a game changer. I just speak my tasks and they are automatically categorized with the right urgency." },
    { name: "Amit K.", role: "Tech Lead", text: "Clean, fast, and exactly what I needed to track my team's sprint deadlines and interview schedules without the clutter of Jira." },
    { name: "Sneha R.", role: "UX Designer", text: "The aesthetic of this dashboard is unparalleled. It actually makes me want to log in and check my tasks every day." },
    { name: "Karan V.", role: "Freelancer", text: "I juggle 5 different clients and RemindKaro's smart escalation system ensures I always know what needs my attention first." },
    { name: "Ananya P.", role: "Product Manager", text: "I love the clean UI and the lack of distracting emojis. It feels like a premium tool built for professionals." }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)'
    }}>
      <Header isLoggedIn={isLoggedIn} />
      
      <main style={{ flex: 1, padding: '120px 5% 80px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: 'var(--color-text-primary)' }}>What Our Users Say</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '18px', marginTop: '16px' }}>Real feedback from professionals and students using RemindKaro.</p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px'
        }}>
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              style={{
                background: 'rgba(25, 24, 41, 0.5)', backdropFilter: 'blur(10px)',
                border: '1px solid var(--color-border-medium)', borderRadius: 'var(--radius-lg)',
                padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px',
                transition: 'transform 0.2s ease', cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', gap: '4px', color: '#FBBF24' }}>
                {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p style={{ color: 'var(--color-text-primary)', fontSize: '16px', lineHeight: 1.6, flex: 1 }}>"{t.text}"</p>
              <div>
                <h4 style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '16px' }}>{t.name}</h4>
                <p style={{ color: 'var(--color-text-tertiary)', fontSize: '14px' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
