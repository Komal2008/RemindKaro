import styles from './Skeleton.module.css';

/**
 * Theme-aware skeleton primitive.
 * @param {'line'|'title'|'heading'|'caption'|'circle'|'circleSm'|'rect'|'card'|'pill'|'button'|'input'|'block'} variant
 */
export default function Skeleton({
  variant = 'line',
  width,
  height,
  className = '',
  style = {},
  ...props
}) {
  const cls = [styles.skeleton, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  const Tag = variant === 'line' || variant === 'caption' ? 'span' : 'div';

  return (
    <Tag
      className={cls}
      style={{ width, height, ...style }}
      aria-hidden="true"
      {...props}
    />
  );
}

export function SkeletonLines({ count = 3, className = '' }) {
  return (
    <div className={[styles.group, className].filter(Boolean).join(' ')}>
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton
          key={i}
          variant="line"
          style={{ width: i === count - 1 ? '65%' : '100%' }}
        />
      ))}
    </div>
  );
}

export function SkeletonField({ className = '' }) {
  return (
    <div className={[styles.stackSm, className].filter(Boolean).join(' ')}>
      <Skeleton variant="caption" style={{ width: '28%', height: 10 }} />
      <Skeleton variant="input" />
    </div>
  );
}
