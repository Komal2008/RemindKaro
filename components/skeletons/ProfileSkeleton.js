import styles from './ProfileSkeleton.module.css';

export default function ProfileSkeleton() {
  return (
    <div className={styles.container}>
      <div className={`skeleton-pulse ${styles.eyebrow}`} />
      <div className={`skeleton-pulse ${styles.title}`} />

      <div className={`skeleton-pulse ${styles.planCard}`}>
        <div
          style={{
            width: '200px',
            height: '30px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.1)',
          }}
        />
        <div
          style={{
            width: '80%',
            height: '20px',
            borderRadius: '6px',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
        <div
          style={{
            width: '60%',
            height: '20px',
            borderRadius: '6px',
            background: 'rgba(255,255,255,0.05)',
          }}
        />
      </div>

      <div className={`skeleton-pulse ${styles.infoCard}`}>
        <div
          style={{
            width: '250px',
            height: '28px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.1)',
          }}
        />
        <div className={styles.infoGrid}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
              <div
                style={{
                  width: '100px',
                  height: '14px',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.05)',
                }}
              />
              <div
                style={{
                  width: '180px',
                  height: '20px',
                  borderRadius: '6px',
                  background: 'rgba(255,255,255,0.1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
