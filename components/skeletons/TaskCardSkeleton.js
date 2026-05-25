import Skeleton from '@/components/ui/Skeleton';
import styles from './TaskCardSkeleton.module.css';

export default function TaskCardSkeleton() {
  return (
    <div className={styles.card} aria-hidden>
      <div className={styles.body}>
        <div className={styles.top}>
          <Skeleton variant="title" style={{ width: '55%', height: 18 }} />
          <Skeleton variant="pill" style={{ width: 64, height: 24 }} />
        </div>
        <Skeleton variant="line" style={{ width: '85%', marginTop: 10 }} />
        <div className={styles.meta}>
          <Skeleton variant="caption" style={{ width: 100 }} />
          <Skeleton variant="caption" style={{ width: 72 }} />
        </div>
      </div>
      <div className={styles.actions}>
        <Skeleton variant="circleSm" />
        <Skeleton variant="circleSm" />
      </div>
    </div>
  );
}
