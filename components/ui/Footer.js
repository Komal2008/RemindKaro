import Link from 'next/link';
import { Mail } from 'lucide-react';
import BrandLogo from './BrandLogo';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <BrandLogo href="/" size="md" className={styles.logo} />
            <p className={styles.brandDesc}>
              The intelligent dashboard for deadlines, hackathons, and
              interviews with smart urgency escalation.
            </p>
          </div>

          <div>
            <h3 className={styles.colTitle}>Product</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/#features">Features</Link>
              </li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/testimonials">Testimonials</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Account</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/login">Sign In</Link>
              </li>
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Legal</h3>
            <ul className={styles.linkList}>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.colTitle}>Project Guidelines</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://github.com/Remind-Karo/RemindKaro/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contributing Guidelines
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Remind-Karo/RemindKaro/blob/main/CODE_OF_CONDUCT.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code of Conduct
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Remind-Karo/RemindKaro/blob/main/SECURITY.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Security Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={styles.colTitle}>Contact</h3>
            <a href="mailto:hello@remindkaro.com" className={styles.contactBtn}>
              <Mail size={16} aria-hidden />
              hello@remindkaro.com
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright} suppressHydrationWarning>
            &copy; {new Date().getFullYear()} RemindKaro. All rights reserved.
          </p>
          <p className={styles.copyright}>Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
