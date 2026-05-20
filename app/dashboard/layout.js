import styles from './layout.module.css';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.topbar}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>⚡</span>
          RemindKaro
        </div>
        <nav className={styles.nav}>
          <Link href="/dashboard" className={styles.navLink}>Dashboard</Link>
          <button className={styles.logoutBtn}>Logout</button>
        </nav>
      </header>
      
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
