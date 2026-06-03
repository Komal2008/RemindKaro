import styles from './SupportSkeleton.module.css';

export default function SupportSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div
            className="skeleton-pulse"
            style={{ width: '100px', height: '16px', borderRadius: '4px' }}
          />
          <div
            className="skeleton-pulse"
            style={{ width: '240px', height: '36px', borderRadius: '8px' }}
          />
        </div>
        <div className={styles.headerRight}>
          <div
            className="skeleton-pulse"
            style={{ width: '180px', height: '40px', borderRadius: '20px' }}
          />
          <div
            className="skeleton-pulse"
            style={{ width: '140px', height: '40px', borderRadius: '20px' }}
          />
        </div>
      </div>

      <div className={styles.strip}>
        <div className={`skeleton-pulse ${styles.stripItem}`} />
        <div className={`skeleton-pulse ${styles.stripItem}`} />
        <div className={`skeleton-pulse ${styles.stripItem}`} />
      </div>

      <div className={styles.split}>
        <div className={styles.list}>
          <div className={`skeleton-pulse ${styles.ticket}`} />
          <div className={`skeleton-pulse ${styles.ticket}`} />
          <div className={`skeleton-pulse ${styles.ticket}`} />
          <div className={`skeleton-pulse ${styles.ticket}`} />
        </div>
        <div className={`skeleton-pulse ${styles.panel}`} />
      </div>
    </div>
  );
}
