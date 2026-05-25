import Skeleton from '@/components/ui/Skeleton';
import styles from './MarketingPageSkeleton.module.css';

export default function MarketingPageSkeleton() {
  return (
    <div className={styles.page} role="status" aria-label="Loading page">
      <div className={styles.card}>
        <div className={styles.header}>
          <Skeleton variant="title" style={{ width: 160, height: 28 }} />
          <div className={styles.headerRight}>
            <Skeleton variant="pill" style={{ width: 64 }} />
            <Skeleton variant="pill" style={{ width: 64 }} />
            <Skeleton variant="button" />
          </div>
        </div>
        <div className={styles.hero}>
          <Skeleton variant="block" style={{ minHeight: 280, maxWidth: 280 }} />
          <div className={styles.heroCopy}>
            <Skeleton variant="line" style={{ width: '90%' }} />
            <Skeleton variant="line" style={{ width: '70%' }} />
            <Skeleton
              variant="title"
              style={{ width: 200, height: 48, marginTop: 24 }}
            />
          </div>
        </div>
        <div className={styles.featureGrid}>
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="block" style={{ minHeight: 220 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
