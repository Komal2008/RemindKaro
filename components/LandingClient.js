'use client';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Search, MessageSquare, MousePointerClick, TrendingUp, Calendar, Mic, Zap, Briefcase, Trophy, Lock } from 'lucide-react';
import Link from 'next/link';
import Clock from './ui/Clock';
import PhoneMockup from './ui/PhoneMockup';

export default function LandingClient({ isLoggedIn }) {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const bgX1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const bgX2 = useTransform(scrollYProgress, [0, 1], ['-20%', '0%']);
  const bgX3 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  useEffect(() => {
    // Loader animation duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { icon: <Search size={20} />, label: 'TRACK' },
    { icon: <MessageSquare size={20} />, label: 'CHAT' },
    { icon: <MousePointerClick size={20} />, label: 'REMIND' },
    { icon: <TrendingUp size={20} />, label: 'SUCCEED' },
  ];

  const features = [
    { title: "Track Deadlines", desc: "Never miss an important coding test or assignment deadline again. Smart notifications keep you on time.", icon: <Calendar size={28} strokeWidth={2} />, color: "#4f46e5", textColor: "#fff", bg: "linear-gradient(135deg, #4f46e5, #6366f1)" },
    { title: "Voice Entry", desc: "Just speak your tasks and we'll automatically categorize and schedule them with zero friction.", icon: <Mic size={28} strokeWidth={2} />, color: "#0ea5e9", textColor: "#fff", bg: "linear-gradient(135deg, #0369a1, #0ea5e9)" },
    { title: "Urgency Escalation", desc: "Our system highlights tasks that need your immediate attention based on time left and priority.", icon: <Zap size={28} strokeWidth={2} />, color: "#7c3aed", textColor: "#fff", bg: "linear-gradient(135deg, #6d28d9, #8b5cf6)" },
    { title: "Interview Prep", desc: "Keep all your interview schedules and preparation materials in one beautifully organized place.", icon: <Briefcase size={28} strokeWidth={2} />, color: "#db2777", textColor: "#fff", bg: "linear-gradient(135deg, #be185d, #ec4899)" },
    { title: "Hackathon Tracker", desc: "Manage team submissions, project milestones, and final pitch deadlines effortlessly.", icon: <Trophy size={28} strokeWidth={2} />, color: "#ea580c", textColor: "#fff", bg: "linear-gradient(135deg, #c2410c, #f97316)" },
    { title: "Secure & Private", desc: "Your data is encrypted and completely private. We never share or sell your schedule.", icon: <Lock size={28} strokeWidth={2} />, color: "#16a34a", textColor: "#fff", bg: "linear-gradient(135deg, #15803d, #22c55e)" }
  ];

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: '#000000',
              zIndex: 9999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#ffffff',
              fontFamily: 'var(--font-display)'
            }}
          >
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, letterSpacing: '-2px', marginBottom: '24px' }}
            >
              RemindKaro
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
              style={{ 
                fontSize: 'clamp(14px, 2vw, 18px)', 
                color: '#94a3b8', 
                letterSpacing: '4px', 
                textTransform: 'uppercase', 
                fontWeight: 500,
                textAlign: 'center'
              }}
            >
              Your ultimate companion for success
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f1f5f9', // Light background exactly like the video
        color: '#0f172a',
        fontFamily: 'var(--font-display)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Huge Background Scrolling Text */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '40px', opacity: 0.1 }}>
          <motion.div style={{ fontSize: '15vw', fontWeight: 900, whiteSpace: 'nowrap', color: '#1e3a8a', x: bgX1, lineHeight: 0.8 }}>
            CODING TESTS INTERVIEWS HACKATHONS
          </motion.div>
          <motion.div style={{ fontSize: '15vw', fontWeight: 900, whiteSpace: 'nowrap', color: '#1e3a8a', x: bgX2, lineHeight: 0.8 }}>
            ASSIGNMENTS PROJECTS DEADLINES
          </motion.div>
          <motion.div style={{ fontSize: '15vw', fontWeight: 900, whiteSpace: 'nowrap', color: '#1e3a8a', x: bgX3, lineHeight: 0.8 }}>
            REMIND KARO MANAGE SUCCEED
          </motion.div>
        </div>

        {/* Main Content Area (White Rounded Container like video) */}
        <main style={{
          position: 'relative', zIndex: 1, margin: '2vw', minHeight: '96vh',
          backgroundColor: '#ffffff', borderRadius: '40px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
          padding: '40px',
          display: 'flex', flexDirection: 'column'
        }}>
          {/* Header inside the white container */}
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
            <div style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-1px' }}>RemindKaro</div>
            <Link href={isLoggedIn ? "/dashboard" : "/signup"} style={{
              padding: '12px 24px', backgroundColor: '#3b82f6', color: '#fff',
              borderRadius: '30px', fontWeight: 600, fontSize: '14px',
              boxShadow: '0 4px 14px rgba(59, 130, 246, 0.4)',
              textDecoration: 'none'
            }}>
              {isLoggedIn ? "Go to Dashboard" : "Get Started Free"}
            </Link>
          </header>

          {/* Hero Layout exactly like video */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', flex: 1, gap: '40px' }}>

            {/* Left Column: Clock and Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '60px' }}>
              <div style={{ maxWidth: '300px' }}>
                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                  [RemindKaro. Track deadlines effortlessly.] Stay ahead of your coding tests, assignments, and hackathons.
                </p>
                <div style={{ height: '2px', width: '40px', backgroundColor: '#e2e8f0' }} />
              </div>
              <Clock />
            </div>

            {/* Center Column: Phone Mockup */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PhoneMockup />
            </div>

            {/* Right Column: Vertical Nav list */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {navItems.map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'center', gap: '16px',
                    color: idx === 0 ? '#0f172a' : '#94a3b8',
                    fontWeight: 600, fontSize: '16px', letterSpacing: '1px',
                    transition: 'color 0.2s', cursor: 'pointer'
                  }} className="nav-item-hover">
                    <span style={{ opacity: idx === 0 ? 1 : 0.5 }}>{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Folders Section (Sliding up) */}
          <div style={{ marginTop: '120px', padding: '40px 0' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '60px', textAlign: 'center', color: '#0f172a', letterSpacing: '-1px' }}>
              Simple Steps to<br />Deadline Success
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', padding: '0 20px' }}>
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: feature.bg,
                    borderRadius: '24px',
                    padding: '40px 30px',
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: `0 20px 40px -10px ${feature.color}55`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.01)';
                    e.currentTarget.style.boxShadow = `0 35px 60px -15px ${feature.color}80`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = `0 20px 40px -10px ${feature.color}55`;
                  }}
                >
                  {/* Folder Top Tab Decorative Element */}
                  <div style={{
                    position: 'absolute', top: 0, left: 30, width: '60px', height: '6px',
                    backgroundColor: 'rgba(255,255,255,0.3)', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px'
                  }} />

                  {/* Icon Container */}
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '20px',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '28px', color: '#fff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '14px', lineHeight: 1.25, letterSpacing: '-0.5px', color: '#fff' }}>{feature.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', lineHeight: 1.65, fontWeight: 500 }}>{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonials Marquee Section */}
          <div style={{ marginTop: '120px', padding: '80px 0', backgroundColor: '#f8fafc', borderRadius: '40px', overflow: 'hidden' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '40px', textAlign: 'center', color: '#0f172a' }}>
              Trusted by the best
            </h2>

            <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 40s linear infinite' }}>
              {[
                { name: "Rahul S.", role: "Student", text: "RemindKaro changed how I manage my hackathons!" },
                { name: "Priya M.", role: "Developer", text: "Voice entry is magic. Just speak and it's scheduled." },
                { name: "Amit K.", role: "Tech Lead", text: "Clean, fast, exactly what I needed for sprint tracking." },
                { name: "Sneha R.", role: "Designer", text: "The aesthetic is top notch. Love using this app." },
                { name: "Karan V.", role: "Freelancer", text: "Smart escalation ensures I never miss client deadlines." },
              ].map((t, idx) => (
                <div key={idx} style={{
                  backgroundColor: '#fff', padding: '30px', borderRadius: '24px',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                  margin: '0 15px', width: '350px', flexShrink: 0,
                  border: '1px solid rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', gap: '4px', color: '#FBBF24', marginBottom: '16px' }}>
                    {"★★★★★"}
                  </div>
                  <p style={{ color: '#334155', fontSize: '16px', lineHeight: 1.6, marginBottom: '20px', fontWeight: 500 }}>"{t.text}"</p>
                  <div>
                    <h4 style={{ color: '#0f172a', fontWeight: 700, fontSize: '16px' }}>{t.name}</h4>
                    <p style={{ color: '#64748b', fontSize: '14px', fontWeight: 500 }}>{t.role}</p>
                  </div>
                </div>
              ))}
              {/* Duplicated for seamless marquee */}
              {[
                { name: "Rahul S.", role: "Student", text: "RemindKaro changed how I manage my hackathons!" },
                { name: "Priya M.", role: "Developer", text: "Voice entry is magic. Just speak and it's scheduled." },
                { name: "Amit K.", role: "Tech Lead", text: "Clean, fast, exactly what I needed for sprint tracking." },
                { name: "Sneha R.", role: "Designer", text: "The aesthetic is top notch. Love using this app." },
                { name: "Karan V.", role: "Freelancer", text: "Smart escalation ensures I never miss client deadlines." },
              ].map((t, idx) => (
                <div key={`dup-${idx}`} style={{
                  backgroundColor: '#fff', padding: '30px', borderRadius: '24px',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                  margin: '0 15px', width: '350px', flexShrink: 0,
                  border: '1px solid rgba(0,0,0,0.03)'
                }}>
                  <div style={{ display: 'flex', gap: '4px', color: '#FBBF24', marginBottom: '16px' }}>
                    {"★★★★★"}
                  </div>
                  <p style={{ color: '#334155', fontSize: '16px', lineHeight: 1.6, marginBottom: '20px', fontWeight: 500 }}>"{t.text}"</p>
                  <div>
                    <h4 style={{ color: '#0f172a', fontWeight: 700, fontSize: '16px' }}>{t.name}</h4>
                    <p style={{ color: '#64748b', fontSize: '14px', fontWeight: 500 }}>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner Section */}
          <div style={{ marginTop: '80px', textAlign: 'center', padding: '60px 0', borderTop: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '24px', color: '#0f172a' }}>
              Ready to take control of your deadlines?
            </h2>
            <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '40px' }}>
              Join thousands of students and professionals using RemindKaro.
            </p>
            <Link href="/signup" style={{
              padding: '16px 40px', backgroundColor: '#0f172a', color: '#fff',
              borderRadius: '30px', fontWeight: 600, fontSize: '16px',
              display: 'inline-block',
              textDecoration: 'none'
            }}>
              Create Your Free Account
            </Link>
          </div>

        </main>
      </div>
    </>
  );
}
