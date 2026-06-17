'use client';

import { useState } from 'react';
import { Circle, Loader, CheckCircle2 } from 'lucide-react';
import styles from './KanbanBoard.module.css';

const COLUMNS = [
  {
    id: 'pending',
    label: 'Pending',
    Icon: Circle,
    colorVar: '--color-medium-400',
    bgVar: 'rgba(245, 158, 11, 0.08)',
  },
  {
    id: 'in_progress',
    label: 'In Progress',
    Icon: Loader,
    colorVar: '--linear-primary-hover',
    bgVar: 'rgba(94, 106, 210, 0.08)',
  },
  {
    id: 'completed',
    label: 'Completed',
    Icon: CheckCircle2,
    colorVar: '--color-low-400',
    bgVar: 'rgba(16, 185, 129, 0.08)',
  },
];

function getPriorityColor(priority) {
  if (priority === 'high') return 'var(--color-urgent-400)';
  if (priority === 'medium') return 'var(--color-medium-400)';
  return 'var(--color-low-400)';
}

function KanbanCard({ task, onDragStart, onCardClick }) {
  const deadlineDate = new Date(task.deadline);
  const now = new Date();
  const isOverdue = deadlineDate < now && task.status !== 'completed';
  const diffH = Math.round((deadlineDate - now) / 3600000);
  const diffD = Math.round((deadlineDate - now) / 86400000);
  const timeLabel =
    diffH < 0 ? 'Overdue' : diffH < 24 ? `${diffH}h left` : `${diffD}d left`;

  return (
    <div
      className={`${styles.card} ${isOverdue ? styles.cardOverdue : ''}`}
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      onClick={() => onCardClick(task)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onCardClick(task)}
    >
      <div className={styles.cardHeader}>
        <span
          className={styles.priorityDot}
          style={{ background: getPriorityColor(task.priority) }}
          title={`${task.priority} priority`}
        />
        <span className={styles.cardCategory}>{task.category}</span>
      </div>

      <p className={styles.cardTitle}>{task.title}</p>

      {task.description && (
        <p className={styles.cardDesc}>
          {task.description.slice(0, 80)}
          {task.description.length > 80 ? '…' : ''}
        </p>
      )}

      <div className={styles.cardFooter}>
        <span
          className={`${styles.cardTime} ${isOverdue ? styles.cardTimeOverdue : ''}`}
        >
          {timeLabel}
        </span>
        {task.assignee && (
          <span className={styles.assigneeChip} title={task.assignee.name}>
            {(task.assignee.name ||
              task.assignee.email ||
              '?')[0].toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}

export default function KanbanBoard({
  tasks = [],
  onStatusChange,
  onEdit,
  onDelete,
  onCardClick,
}) {
  const [dragOverColumn, setDragOverColumn] = useState(null);
  const [draggingTask, setDraggingTask] = useState(null);

  const tasksByStatus = COLUMNS.reduce((acc, col) => {
    acc[col.id] = tasks.filter((t) => t.status === col.id);
    return acc;
  }, {});

  // Also collect any statuses not in our 3 main columns (archived, missed) and treat as pending
  const otherTasks = tasks.filter(
    (t) => !COLUMNS.map((c) => c.id).includes(t.status)
  );
  tasksByStatus.pending = [...tasksByStatus.pending, ...otherTasks];

  const handleDragStart = (e, task) => {
    setDraggingTask(task);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, columnId) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverColumn(columnId);
  };

  const handleDrop = (e, columnId) => {
    e.preventDefault();
    setDragOverColumn(null);
    if (draggingTask && draggingTask.status !== columnId) {
      onStatusChange(draggingTask.id, columnId);
    }
    setDraggingTask(null);
  };

  const handleDragLeave = () => setDragOverColumn(null);
  const handleDragEnd = () => {
    setDraggingTask(null);
    setDragOverColumn(null);
  };

  return (
    <div className={styles.board}>
      {COLUMNS.map((col) => {
        const colTasks = tasksByStatus[col.id] || [];
        const isDragTarget = dragOverColumn === col.id;
        const { Icon } = col;
        return (
          <div
            key={col.id}
            className={`${styles.column} ${isDragTarget ? styles.columnDragOver : ''}`}
            onDragOver={(e) => handleDragOver(e, col.id)}
            onDrop={(e) => handleDrop(e, col.id)}
            onDragLeave={handleDragLeave}
            style={{
              '--col-bg': col.bgVar,
              '--col-color': `var(${col.colorVar})`,
            }}
          >
            <div className={styles.columnHeader}>
              <div className={styles.columnTitle}>
                <Icon
                  size={14}
                  className={styles.columnIcon}
                  style={{ color: `var(${col.colorVar})` }}
                />
                <span style={{ color: `var(${col.colorVar})` }}>
                  {col.label}
                </span>
              </div>
              <span className={styles.columnCount}>{colTasks.length}</span>
            </div>

            <div className={styles.columnBody}>
              {colTasks.length === 0 ? (
                <div className={styles.emptyCol}>
                  <p>Drop tasks here</p>
                </div>
              ) : (
                colTasks.map((task) => (
                  <KanbanCard
                    key={task.id}
                    task={task}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onStatusChange={onStatusChange}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onCardClick={onCardClick}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
