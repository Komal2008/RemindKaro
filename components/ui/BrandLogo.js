import Link from 'next/link';
import styles from './BrandLogo.module.css';

export default function BrandLogo({
  href = '/',
  size = 'md',
  className = '',
  asText = false,
}) {
  const cls = [styles.logo, styles[size], className].filter(Boolean).join(' ');

  if (asText || !href) {
    return <span className={cls}>RemindKaro</span>;
  }

  return (
    <Link href={href} className={cls}>
      RemindKaro
    </Link>
  );
}
