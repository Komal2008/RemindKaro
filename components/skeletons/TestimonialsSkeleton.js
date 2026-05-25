import Skeleton from '@/components/ui/Skeleton';
import styles from './TestimonialsSkeleton.module.css';

export default function TestimonialsSkeleton() {
  return (
    <div
      className={styles.wrap}
      role="status"
      aria-label="Loading testimonials"
    >
      <div className={styles.hero}>
        <Skeleton
          variant="heading"
          style={{ width: 320, maxWidth: '100%', height: 40 }}
        />
        <Skeleton
          variant="line"
          style={{ width: 400, maxWidth: '90%', margin: '16px auto 0' }}
        />
      </div>
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className={styles.card}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Skeleton
                  key={s}
                  variant="circleSm"
                  style={{ width: 16, height: 16 }}
                />
              ))}
            </div>
            <Skeleton variant="line" />
            <Skeleton variant="line" />
            <Skeleton variant="line" style={{ width: '75%' }} />
            <div className={styles.author}>
              <Skeleton variant="line" style={{ width: 100, height: 14 }} />
              <Skeleton variant="caption" style={{ width: 140 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
