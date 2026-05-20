'use client';
import { useState, useMemo } from 'react';
import styles from './TaskCard.module.css';

/**
 * Premium TaskCard with urgency detection, priority borders, hover actions
 */
export default function TaskCard({ task, onStatusChange, onDelete, onEdit }) {
  const [hovered, setHovered] = useState(false);
  const [completing, setCompleting] = useState(false);

  const urgency = useMemo(() => {
    const now = new Date();
    const deadline = new Date(task.deadline);
    const hoursLeft = (deadline - now) / (1000 * 60 * 60);

    if (task.status === 'completed') return { state: 'done', label: '✓ Done', color: 'done' };
    if (task.status === 'missed' || (hoursLeft < 0 && task.status !== 'completed'))
      return { state: 'overdue', label: '🔴 Overdue', color: 'overdue' };
    if (hoursLeft < 1) return { state: 'critical', label: `🔴 ${Math.round(hoursLeft * 60)}m left`, color: 'critical' };
    if (hoursLeft < 6) return { state: 'urgent', label: `🟠 ${Math.round(hoursLeft)}h left`, color: 'urgent' };
    if (hoursLeft < 24) return { state: 'today', label: '📅 Today', color: 'today' };
    const daysLeft = Math.ceil(hoursLeft / 24);
    return { state: 'upcoming', label: `📅 ${daysLeft}d left`, color: 'upcoming' };
  }, [task.deadline, task.status]);

  const formattedDeadline = useMemo(() => {
    return new Date(task.deadline).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }, [task.deadline]);

  const handleComplete = async () => {
    setCompleting(true);
    try {
      await onStatusChange(task.id, 'completed');
    } finally {
      setCompleting(false);
    }
  };

  const cardCls = [
    styles.card,
    styles[`priority--${task.priority}`],
    styles[`urgency--${urgency.state}`],
    task.status === 'completed' ? styles.completed : '',
  ].filter(Boolean).join(' ');

  return (
    <article
      className={cardCls}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Task: ${task.title}`}
    >
      {/* Priority left bar is set via CSS border-left */}

      <div className={styles.body}>
        <div className={styles.topRow}>
          <h3 className={styles.title}>{task.title}</h3>
          <span className={`${styles.urgencyBadge} ${styles[`badge--${urgency.color}`]}`}>
            {urgency.label}
          </span>
        </div>

        {task.description && (
          <p className={styles.description}>{task.description}</p>
        )}

        <div className={styles.meta}>
          <span className={styles.metaItem}>🕐 {formattedDeadline}</span>
          <span className={styles.category}>{task.category}</span>
          {task.recurring && (
            <span className={styles.recurring}>🔁 {task.recurring}</span>
          )}
        </div>
      </div>

      <div className={`${styles.actions} ${hovered ? styles.actionsVisible : ''}`}>
        {task.status !== 'completed' && (
          <button
            className={`${styles.actionBtn} ${styles.completeBtn}`}
            onClick={handleComplete}
            disabled={completing}
            title="Mark complete"
            aria-label="Mark task as completed"
          >
            {completing ? '⏳' : '✓'}
          </button>
        )}
        <button
          className={`${styles.actionBtn} ${styles.editBtn}`}
          onClick={() => onEdit?.(task)}
          title="Edit"
          aria-label="Edit task"
        >
          ✎
        </button>
        <button
          className={`${styles.actionBtn} ${styles.deleteBtn}`}
          onClick={() => onDelete?.(task.id)}
          title="Delete"
          aria-label="Delete task"
        >
          ✕
        </button>
      </div>
    </article>
  );
}
