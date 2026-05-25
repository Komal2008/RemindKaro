'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import TestimonialsSkeleton from '@/components/skeletons/TestimonialsSkeleton';
import { Star } from 'lucide-react';
import styles from './TestimonialsClient.module.css';

const TESTIMONIALS = [
  {
    name: 'Rahul S.',
    role: 'Computer Science Student',
    text: "RemindKaro completely changed how I manage my hackathon deadlines. I haven't missed a single submission since I started using it.",
  },
  {
    name: 'Priya M.',
    role: 'Software Developer',
    text: 'The native voice entry is a game changer. I just speak my tasks and they are automatically categorized with the right urgency.',
  },
  {
    name: 'Amit K.',
    role: 'Tech Lead',
    text: "Clean, fast, and exactly what I needed to track my team's sprint deadlines and interview schedules without the clutter of Jira.",
  },
  {
    name: 'Sneha R.',
    role: 'UX Designer',
    text: 'The aesthetic of this dashboard is unparalleled. It actually makes me want to log in and check my tasks every day.',
  },
  {
    name: 'Karan V.',
    role: 'Freelancer',
    text: "I juggle 5 different clients and RemindKaro's smart escalation system ensures I always know what needs my attention first.",
  },
  {
    name: 'Ananya P.',
    role: 'Product Manager',
    text: 'I love the clean UI and the lack of distracting emojis. It feels like a premium tool built for professionals.',
  },
];

export default function TestimonialsClient({ isLoggedIn }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      <Header isLoggedIn={isLoggedIn} />
      <main className={styles.main}>
        {!ready ? (
          <TestimonialsSkeleton />
        ) : (
          <>
            <div className={styles.hero}>
              <h1 className={styles.title}>What Our Users Say</h1>
              <p className={styles.subtitle}>
                Real feedback from professionals and students using RemindKaro.
              </p>
            </div>
            <div className={styles.grid}>
              {TESTIMONIALS.map((t) => (
                <article key={t.name} className={styles.card}>
                  <div className={styles.stars} aria-hidden>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className={styles.quote}>&quot;{t.text}&quot;</p>
                  <div>
                    <h2 className={styles.name}>{t.name}</h2>
                    <p className={styles.role}>{t.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
