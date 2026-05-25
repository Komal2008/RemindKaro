"use client";
import styles from "./layout.module.css";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle";
import BrandLogo from "@/components/ui/BrandLogo";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        router.push("/");
      }
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className={styles.layout}>
      <header className={styles.topbar}>
        <BrandLogo href="/dashboard" size="sm" className={styles.logo} />

        <nav className={styles.nav}>
          <Link
            href="/dashboard"
            className={`${styles.navLink} ${pathname === "/dashboard" ? styles.active : ""}`}
          >
            <span className={styles.navLinkFull}>Dashboard</span>
            <span className={styles.navLinkShort} aria-hidden>
              Home
            </span>
          </Link>
          <ThemeToggle compact />
          <div className={styles.navDivider} />
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Sign out
          </button>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
