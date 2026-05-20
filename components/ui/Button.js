'use client';
import styles from './Button.module.css';

/**
 * Premium button with multiple variants and loading states
 */
export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'danger' | 'ghost' | 'success'
  size = 'md',         // 'sm' | 'md' | 'lg'
  loading = false,
  disabled = false,
  fullWidth = false,
  id,
  className = '',
}) {
  const cls = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    fullWidth ? styles['btn--full'] : '',
    loading ? styles['btn--loading'] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      id={id}
      type={type}
      className={cls}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      {loading && (
        <span className={styles.spinner} aria-hidden="true" />
      )}
      <span className={styles.label}>{children}</span>
    </button>
  );
}
