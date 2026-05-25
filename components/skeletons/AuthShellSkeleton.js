import Skeleton, { SkeletonField } from '@/components/ui/Skeleton';
import styles from './AuthShellSkeleton.module.css';

export default function AuthShellSkeleton({ single = false }) {
  if (single) {
    return (
      <div className={styles.singleWrap} role="status" aria-label="Loading">
        <div className={styles.singleCard}>
          <Skeleton variant="heading" style={{ width: 200, height: 28 }} />
          <Skeleton variant="line" style={{ width: '90%', marginTop: 8 }} />
          <div className={styles.form}>
            <SkeletonField />
            <Skeleton
              variant="button"
              style={{ width: '100%', marginTop: 8 }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.shell} role="status" aria-label="Loading">
      <div className={styles.brand}>
        <Skeleton variant="title" style={{ width: 140, height: 24 }} />
        <Skeleton variant="line" style={{ width: '85%' }} />
        <Skeleton variant="line" style={{ width: '70%' }} />
        <div className={styles.perks}>
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} variant="line" style={{ width: '75%' }} />
          ))}
        </div>
      </div>
      <div className={styles.formPanel}>
        <Skeleton variant="heading" style={{ width: 200, height: 28 }} />
        <Skeleton variant="line" style={{ width: '80%', marginBottom: 24 }} />
        <SkeletonField />
        <SkeletonField />
        <SkeletonField />
        <Skeleton variant="button" style={{ width: '100%', marginTop: 16 }} />
      </div>
    </div>
  );
}
