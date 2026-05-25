import Skeleton from '@/components/ui/Skeleton';
import TaskCardSkeleton from './TaskCardSkeleton';
import styles from './DashboardSkeleton.module.css';

export default function DashboardSkeleton() {
  return (
    <div
      className={styles.wrap}
      role="status"
      aria-live="polite"
      aria-label="Loading dashboard"
    >
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Skeleton variant="caption" style={{ width: 72, height: 12 }} />
          <Skeleton variant="heading" style={{ width: 180, height: 32 }} />
        </div>
        <div className={styles.headerActions}>
          <Skeleton variant="circle" style={{ width: 44, height: 44 }} />
          <Skeleton variant="button" style={{ width: 128 }} />
        </div>
      </header>

      <section className={styles.stats}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.statCard}>
            <Skeleton variant="circle" style={{ width: 36, height: 36 }} />
            <div className={styles.statBody}>
              <Skeleton variant="title" style={{ width: 48, height: 32 }} />
              <Skeleton variant="caption" style={{ width: 80, height: 10 }} />
            </div>
          </div>
        ))}
      </section>

      <div className={styles.content}>
        <div className={styles.main}>
          <div className={styles.controls}>
            <div className={styles.filters}>
              <Skeleton variant="pill" style={{ width: 48 }} />
              <Skeleton variant="pill" style={{ width: 56 }} />
              <Skeleton variant="pill" style={{ width: 44 }} />
            </div>
            <Skeleton variant="pill" style={{ width: 72, height: 28 }} />
          </div>
          <div className={styles.taskList}>
            {[1, 2, 3, 4].map((i) => (
              <TaskCardSkeleton key={i} />
            ))}
          </div>
        </div>

        <aside className={styles.side}>
          <div className={styles.calendar}>
            <div className={styles.calHeader}>
              <Skeleton variant="title" style={{ width: 140, height: 18 }} />
              <div className={styles.calNav}>
                <Skeleton variant="circleSm" />
                <Skeleton variant="circleSm" />
                <Skeleton variant="pill" style={{ width: 56 }} />
              </div>
            </div>
            <div className={styles.calGrid}>
              {Array.from({ length: 7 }).map((_, i) => (
                <Skeleton
                  key={`w-${i}`}
                  variant="line"
                  style={{ height: 10 }}
                />
              ))}
              {Array.from({ length: 35 }).map((_, i) => (
                <Skeleton
                  key={`d-${i}`}
                  variant="rect"
                  style={{ minHeight: 44 }}
                />
              ))}
            </div>
            <Skeleton variant="line" style={{ width: '50%', marginTop: 12 }} />
          </div>

          <div className={styles.upNext}>
            <Skeleton variant="caption" style={{ width: 64, height: 10 }} />
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.upItem}>
                <Skeleton variant="circleSm" style={{ width: 8, height: 8 }} />
                <div className={styles.upMeta}>
                  <Skeleton variant="line" style={{ width: '90%' }} />
                  <Skeleton variant="caption" style={{ width: '40%' }} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
