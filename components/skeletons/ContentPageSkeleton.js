import Skeleton, { SkeletonLines } from '@/components/ui/Skeleton';
import styles from './ContentPageSkeleton.module.css';

export default function ContentPageSkeleton() {
  return (
    <div className={styles.wrap} role="status" aria-label="Loading content">
      <Skeleton
        variant="heading"
        style={{ width: 280, height: 36, marginBottom: 24 }}
      />
      <SkeletonLines count={4} />
      <SkeletonLines count={3} className={styles.gap} />
      <SkeletonLines count={2} />
    </div>
  );
}
