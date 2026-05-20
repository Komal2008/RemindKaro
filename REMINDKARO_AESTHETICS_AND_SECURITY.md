# RemindKaro — Advanced Aesthetics & Security Guide
## Premium UI/UX + Enterprise Security Standards

---

## TABLE OF CONTENTS
1. [Premium Aesthetic Design System](#1-premium-aesthetic-design-system)
2. [Advanced UI/UX Patterns](#2-advanced-uiux-patterns)
3. [Micro-Interactions & Animation](#3-micro-interactions--animation)
4. [Component Library Standards](#4-component-library-standards)
5. [Dark Mode Implementation](#5-dark-mode-implementation)
6. [Accessibility & Inclusive Design](#6-accessibility--inclusive-design)
7. [Enterprise Security Architecture](#7-enterprise-security-architecture)
8. [Data Protection & Compliance](#8-data-protection--compliance)
9. [API Security](#9-api-security)
10. [Frontend Security](#10-frontend-security)
11. [Infrastructure Security](#11-infrastructure-security)
12. [Security Monitoring & Incident Response](#12-security-monitoring--incident-response)

---

## 1. Premium Aesthetic Design System

### 1.1 Color Psychology for Urgency

RemindKaro must communicate urgency visually. Your color system should make users *feel* the deadline pressure.

#### Primary Color Hierarchy

```css
/* ===== URGENT (High Priority) ===== */
--color-urgent-50: #FEF2F2;      /* Subtle background */
--color-urgent-100: #FEE2E2;     /* Light tint */
--color-urgent-200: #FECACA;     /* Medium tint */
--color-urgent-400: #F87171;     /* Interactive */
--color-urgent-600: #E11D48;     /* Primary button */
--color-urgent-700: #BE123C;     /* Hover state */
--color-urgent-900: #831843;     /* Text on light */

/* ===== MEDIUM PRIORITY ===== */
--color-medium-50: #FFFBEB;
--color-medium-100: #FEF3C7;
--color-medium-200: #FDE68A;
--color-medium-400: #FBBF24;
--color-medium-600: #D97706;
--color-medium-700: #B45309;
--color-medium-900: #78350F;

/* ===== LOW PRIORITY ===== */
--color-low-50: #F0FDF4;
--color-low-100: #DCFCE7;
--color-low-200: #BBF7D0;
--color-low-400: #4ADE80;
--color-low-600: #16A34A;
--color-low-700: #15803D;
--color-low-900: #166534;

/* ===== NEUTRAL BASE ===== */
--color-bg-primary: #0F0E17;      /* Pure dark - main background */
--color-bg-secondary: #1A1927;    /* Slightly lighter surface */
--color-bg-tertiary: #2A2935;     /* Hover/active state */
--color-bg-quaternary: #383742;   /* Deepest secondary */

/* ===== TEXT HIERARCHY ===== */
--color-text-primary: #F5F5F5;    /* Main content - almost white */
--color-text-secondary: #B8B8C8;  /* Secondary info */
--color-text-tertiary: #8A8A9E;   /* Disabled/hints */
--color-text-danger: #FF6B6B;     /* Error text */
--color-text-success: #4ECDC4;    /* Success text */

/* ===== SEMANTIC COLORS ===== */
--color-success: #4ECDC4;         /* Completed tasks */
--color-error: #FF6B6B;           /* Errors/warnings */
--color-warning: #FFB703;         /* Caution state */
--color-info: #4F46E5;            /* Information */

/* ===== BORDERS ===== */
--color-border-light: rgba(255, 255, 255, 0.05);
--color-border-medium: rgba(255, 255, 255, 0.1);
--color-border-strong: rgba(255, 255, 255, 0.15);

/* ===== SHADOW SYSTEM ===== */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.15);
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.2);
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.25);
--shadow-focus: 0 0 0 3px rgba(79, 70, 229, 0.1);
```

### 1.2 Typography System (Premium)

```css
/* ===== FONT FAMILIES ===== */
--font-display: 'Sohne', 'Segoe UI', 'Inter', sans-serif;  /* Headers */
--font-body: 'Inter', 'Segoe UI', system-ui, sans-serif;   /* Body text */
--font-mono: 'Fira Code', 'Monaco', 'Courier New', monospace; /* Code */

/* ===== FONT SIZES ===== */
--fs-xs: 11px;      /* Labels, badges */
--fs-sm: 12px;      /* Secondary text */
--fs-base: 14px;    /* Body text (primary) */
--fs-lg: 16px;      /* Call-to-action */
--fs-xl: 20px;      /* Section headers */
--fs-2xl: 24px;     /* Page titles */
--fs-3xl: 32px;     /* Hero section */

/* ===== FONT WEIGHTS ===== */
--fw-light: 300;
--fw-regular: 400;
--fw-medium: 500;
--fw-semibold: 600;
--fw-bold: 700;

/* ===== LINE HEIGHTS ===== */
--lh-tight: 1.2;    /* Headings */
--lh-normal: 1.5;   /* Body */
--lh-relaxed: 1.75; /* Long-form */

/* ===== LETTER SPACING ===== */
--ls-tight: -0.02em;
--ls-normal: 0;
--ls-loose: 0.05em;

/* ===== READY-TO-USE STYLES ===== */
/* Headlines */
.h1 {
  font-family: var(--font-display);
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-tight);
  color: var(--color-text-primary);
}

.h2 {
  font-family: var(--font-display);
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  line-height: var(--lh-tight);
  letter-spacing: var(--ls-tight);
  color: var(--color-text-primary);
}

.h3 {
  font-family: var(--font-body);
  font-size: var(--fs-xl);
  font-weight: var(--fw-semibold);
  line-height: var(--lh-tight);
  color: var(--color-text-primary);
}

/* Body text */
.body-lg {
  font-size: var(--fs-base);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color: var(--color-text-primary);
}

.body-sm {
  font-size: var(--fs-sm);
  font-weight: var(--fw-regular);
  line-height: var(--lh-normal);
  color: var(--color-text-secondary);
}

/* Labels & badges */
.label {
  font-size: var(--fs-xs);
  font-weight: var(--fw-medium);
  text-transform: uppercase;
  letter-spacing: var(--ls-loose);
  color: var(--color-text-tertiary);
}
```

### 1.3 Spacing System (8px Grid)

```css
/* ===== SPACING SCALE ===== */
--space-0: 0;
--space-1: 4px;     /* Micro spacing */
--space-2: 8px;     /* Component internal */
--space-3: 12px;    /* Between components */
--space-4: 16px;    /* Section spacing */
--space-5: 20px;    /* Container padding */
--space-6: 24px;    /* Major sections */
--space-8: 32px;    /* Hero section spacing */
--space-10: 40px;   /* Page margins */
--space-12: 48px;   /* Large sections */
--space-16: 64px;   /* Full screen sections */

/* ===== BORDER RADIUS ===== */
--radius-none: 0;
--radius-sm: 4px;       /* Tight: badges, small buttons */
--radius-md: 8px;       /* Default: cards, inputs */
--radius-lg: 12px;      /* Generous: modals, main containers */
--radius-xl: 16px;      /* Very generous: large cards */
--radius-full: 9999px;  /* Pill buttons, avatars */
```

### 1.4 Elevation & Depth System

```css
/* ===== Z-INDEX SCALE ===== */
--z-hide: -1;              /* Behind content */
--z-base: 0;               /* Default flow */
--z-dropdown: 10;          /* Dropdowns */
--z-sticky: 20;            /* Sticky headers */
--z-fixed: 30;             /* Fixed overlays */
--z-modal-backdrop: 40;    /* Modal background */
--z-modal: 50;             /* Modal content */
--z-popover: 60;           /* Popovers/tooltips */
--z-notification: 70;      /* Toast notifications */

/* ===== SHADOW HIERARCHY ===== */
/* Surface shadows - card borders with subtle depth */
.shadow-surface {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border-medium);
}

/* Interactive shadows - for buttons and clickables */
.shadow-interactive {
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.02);
}

/* Elevated shadows - modals, popovers */
.shadow-elevated {
  box-shadow:
    0 10px 38px rgba(0, 0, 0, 0.3),
    0 4px 6px rgba(0, 0, 0, 0.15);
}

/* Glow for focus states */
.shadow-focus {
  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
}
```

---

## 2. Advanced UI/UX Patterns

### 2.1 Task Card - Premium Version

```jsx
import React, { useState } from 'react';
import styles from './TaskCard.module.css';

const TaskCard = ({ task, onStatusChange, onDelete, onEdit }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showActions, setShowActions] = useState(false);

  const getUrgencyState = () => {
    const now = new Date();
    const deadline = new Date(task.deadline);
    const hoursLeft = (deadline - now) / (1000 * 60 * 60);

    if (hoursLeft < 0) return { state: 'overdue', icon: '🔴', text: 'Overdue' };
    if (hoursLeft < 1) return { state: 'critical', icon: '🔴', text: `${Math.round(hoursLeft * 60)}m left` };
    if (hoursLeft < 6) return { state: 'urgent', icon: '🟠', text: `${Math.round(hoursLeft)}h left` };
    if (hoursLeft < 24) return { state: 'today', icon: '📅', text: 'Today' };
    return { state: 'upcoming', icon: '📅', text: `${Math.ceil(hoursLeft / 24)}d left` };
  };

  const urgency = getUrgencyState();
  const priorityClass = `task-card--${task.priority}`;
  const urgencyClass = `urgency--${urgency.state}`;

  return (
    <div
      className={`${styles.card} ${styles[priorityClass]} ${styles[urgencyClass]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Task: ${task.title}`}
    >
      {/* Visual priority indicator */}
      <div className={styles.priorityDot} title={`Priority: ${task.priority}`} />

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{task.title}</h3>
          <div className={`${styles.urgencyBadge} ${styles[urgencyClass]}`}>
            <span className={styles.urgencyIcon}>{urgency.icon}</span>
            <span className={styles.urgencyText}>{urgency.text}</span>
          </div>
        </div>

        {task.description && (
          <p className={styles.description}>{task.description}</p>
        )}

        <div className={styles.metadata}>
          <div className={styles.deadline}>
            📍 {new Date(task.deadline).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
          <div className={styles.category}>{task.category}</div>
        </div>
      </div>

      {/* Actions - reveal on hover */}
      <div className={`${styles.actions} ${isHovered ? styles.visible : ''}`}>
        <button
          className={`${styles.actionBtn} ${styles.complete}`}
          onClick={() => onStatusChange(task.id, 'completed')}
          title="Mark as completed"
          aria-label="Mark task as completed"
        >
          ✓
        </button>
        <button
          className={`${styles.actionBtn} ${styles.edit}`}
          onClick={() => onEdit?.(task.id)}
          title="Edit task"
          aria-label="Edit task"
        >
          ✎
        </button>
        <button
          className={`${styles.actionBtn} ${styles.delete}`}
          onClick={() => onDelete?.(task.id)}
          title="Delete task"
          aria-label="Delete task"
        >
          ✕
        </button>
      </div>

      {/* Escalation indicator for ignored reminders */}
      {task.remindersIgnored > 2 && (
        <div className={styles.escalationAlert} role="status" aria-label="This task has been escalated">
          <span>⚠️</span>
          <span>Escalated - multiple reminders ignored</span>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
```

#### CSS Module for Task Card

```css
/* TaskCard.module.css */

.card {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  padding: 16px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-medium);
  border-left: 4px solid var(--color-urgent-600);
  border-radius: var(--radius-lg);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

/* Priority-based left border */
.card--high { border-left-color: var(--color-urgent-600); }
.card--medium { border-left-color: var(--color-medium-600); }
.card--low { border-left-color: var(--color-low-600); }

/* Urgency states */
.card--critical,
.urgency--critical {
  background: linear-gradient(135deg,
    rgba(225, 29, 72, 0.05) 0%,
    transparent 100%
  );
  border-color: var(--color-urgent-600);
}

.card--urgent,
.urgency--urgent {
  background: linear-gradient(135deg,
    rgba(249, 115, 22, 0.04) 0%,
    transparent 100%
  );
  border-color: var(--color-medium-600);
}

.card--today,
.urgency--today {
  background: transparent;
  border-color: var(--color-border-strong);
}

/* Hover state - elevation and expansion */
.card:hover {
  background: var(--color-bg-tertiary);
  border-color: var(--color-border-strong);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transform: translateY(-2px);
}

/* Active/focus state */
.card:focus-within {
  outline: none;
  box-shadow: var(--shadow-focus);
  border-color: var(--color-info);
}

/* Priority dot indicator */
.priorityDot {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: currentColor;
}

.card--high .priorityDot { color: var(--color-urgent-600); }
.card--medium .priorityDot { color: var(--color-medium-600); }
.card--low .priorityDot { color: var(--color-low-600); }

/* Content layout */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 12px;
}

.title {
  font-size: var(--fs-lg);
  font-weight: var(--fw-semibold);
  color: var(--color-text-primary);
  margin: 0;
  flex: 1;
}

/* Urgency badge - premium styling */
.urgencyBadge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: var(--color-bg-tertiary);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-md);
  font-size: var(--fs-xs);
  font-weight: var(--fw-semibold);
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: var(--ls-loose);
  transition: all 0.2s ease;
}

.urgency--critical .urgencyBadge {
  background: rgba(225, 29, 72, 0.1);
  border-color: var(--color-urgent-600);
  color: var(--color-urgent-200);
}

.urgency--critical .urgencyIcon {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.urgency--urgent .urgencyBadge {
  background: rgba(249, 115, 22, 0.1);
  border-color: var(--color-medium-600);
  color: var(--color-medium-200);
}

.urgency--today .urgencyBadge {
  background: transparent;
  border-color: var(--color-border-light);
  color: var(--color-text-secondary);
}

.urgency--upcoming .urgencyBadge {
  background: transparent;
  border-color: var(--color-border-light);
  color: var(--color-text-tertiary);
}

/* Description */
.description {
  font-size: var(--fs-sm);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: var(--lh-normal);
}

/* Metadata */
.metadata {
  display: flex;
  gap: 16px;
  font-size: var(--fs-xs);
  color: var(--color-text-tertiary);
  margin-top: 8px;
}

.deadline,
.category {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Action buttons - reveal on hover */
.actions {
  display: flex;
  gap: 8px;
  opacity: 0;
  transform: translateX(8px);
  transition: all 0.2s ease;
}

.actions.visible {
  opacity: 1;
  transform: translateX(0);
}

.actionBtn {
  width: 32px;
  height: 32px;
  border: 1px solid var(--color-border-medium);
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: var(--fs-base);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  color: var(--color-text-secondary);
}

.actionBtn:hover {
  background: var(--color-bg-quaternary);
  border-color: var(--color-border-strong);
  transform: scale(1.1);
}

.actionBtn.complete:hover {
  background: rgba(78, 205, 196, 0.1);
  border-color: var(--color-low-600);
  color: var(--color-low-200);
}

.actionBtn.delete:hover {
  background: rgba(225, 29, 72, 0.1);
  border-color: var(--color-urgent-600);
  color: var(--color-urgent-200);
}

/* Escalation alert */
.escalationAlert {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg,
    var(--color-urgent-600),
    var(--color-medium-600)
  );
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Mobile responsive */
@media (max-width: 640px) {
  .card {
    grid-template-columns: 1fr;
  }

  .actions {
    opacity: 1;
    transform: translateX(0);
  }

  .metadata {
    flex-wrap: wrap;
  }
}
```

### 2.2 Dashboard Layout - Premium Version

```jsx
const Dashboard = ({ tasks, loading, error }) => {
  const [view, setView] = useState('today'); // 'today', 'upcoming', 'all'
  const [sortBy, setSortBy] = useState('urgency'); // 'urgency', 'deadline', 'priority'

  const getTasksByView = () => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);

    switch (view) {
      case 'today':
        return tasks.filter(t => {
          const deadline = new Date(t.deadline);
          const taskDate = new Date(deadline.getFullYear(), deadline.getMonth(), deadline.getDate());
          return taskDate.getTime() === today.getTime();
        });
      case 'upcoming':
        return tasks.filter(t => new Date(t.deadline) >= tomorrow);
      default:
        return tasks;
    }
  };

  const sortTasks = (tasksToSort) => {
    const sorted = [...tasksToSort];
    switch (sortBy) {
      case 'urgency':
        return sorted.sort((a, b) => {
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });
      case 'deadline':
        return sorted.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
      default:
        return sorted;
    }
  };

  const filteredTasks = sortTasks(getTasksByView());
  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === 'completed').length,
    overdue: tasks.filter(t => new Date(t.deadline) < new Date() && t.status !== 'completed').length,
  };

  if (error) return <ErrorState message={error} />;

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <h1>Your Tasks</h1>
        <div className="dashboard-stats">
          <StatCard label="Total" value={stats.total} color="info" />
          <StatCard label="Completed" value={stats.completed} color="success" />
          <StatCard label="Overdue" value={stats.overdue} color="error" />
        </div>
      </header>

      {/* Filters & Controls */}
      <div className="dashboard-controls">
        <div className="view-tabs">
          {['today', 'upcoming', 'all'].map(v => (
            <button
              key={v}
              className={`tab ${view === v ? 'active' : ''}`}
              onClick={() => setView(v)}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sort-select">
          <option value="urgency">Sort by: Urgency</option>
          <option value="deadline">Sort by: Deadline</option>
          <option value="priority">Sort by: Priority</option>
        </select>
      </div>

      {/* Tasks List */}
      <div className="tasks-container">
        {loading ? (
          <LoadingState />
        ) : filteredTasks.length === 0 ? (
          <EmptyState view={view} />
        ) : (
          <div className="tasks-list">
            {filteredTasks.map((task, index) => (
              <div
                key={task.id}
                className="task-item"
                style={{ '--animation-delay': `${index * 50}ms` }}
              >
                <TaskCard task={task} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
```

#### Dashboard Styles

```css
.dashboard {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  margin-bottom: 32px;
}

.dashboard-header h1 {
  font-size: var(--fs-3xl);
  font-weight: var(--fw-bold);
  margin: 0 0 20px 0;
  color: var(--color-text-primary);
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

/* Stat Card */
.stat-card {
  padding: 20px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-lg);
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: var(--color-border-strong);
  background: var(--color-bg-tertiary);
}

.stat-label {
  font-size: var(--fs-xs);
  text-transform: uppercase;
  letter-spacing: var(--ls-loose);
  color: var(--color-text-tertiary);
  margin-bottom: 8px;
}

.stat-value {
  font-size: var(--fs-2xl);
  font-weight: var(--fw-bold);
  color: var(--color-text-primary);
}

/* Controls */
.dashboard-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  gap: 16px;
}

.view-tabs {
  display: flex;
  gap: 8px;
  background: var(--color-bg-secondary);
  padding: 4px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border-medium);
}

.tab {
  padding: 8px 16px;
  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  color: var(--color-text-secondary);
  cursor: pointer;
  font-weight: var(--fw-medium);
  transition: all 0.2s ease;
}

.tab:hover {
  color: var(--color-text-primary);
}

.tab.active {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Tasks List */
.tasks-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.task-item {
  animation: slideInUp 0.4s ease-out;
  animation-delay: var(--animation-delay);
  animation-fill-mode: both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 3. Micro-Interactions & Animation

### 3.1 Entrance & Exit Animations

```css
/* ===== PAGE LOAD ANIMATIONS ===== */

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ===== STAGGER EFFECT FOR LISTS ===== */
.list-item {
  animation: slideInUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation-fill-mode: both;
}

.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 50ms; }
.list-item:nth-child(3) { animation-delay: 100ms; }
.list-item:nth-child(4) { animation-delay: 150ms; }
.list-item:nth-child(n+5) { animation-delay: 150ms; }

/* ===== NOTIFICATION TOAST ===== */
@keyframes toastSlideIn {
  from {
    opacity: 0;
    transform: translateX(100%) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
}

@keyframes toastSlideOut {
  from {
    opacity: 1;
    transform: translateX(0) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%) translateY(-20px);
  }
}

.toast {
  animation: toastSlideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.toast.exiting {
  animation: toastSlideOut 0.3s ease-in;
}

/* ===== LOADING SKELETON SHIMMER ===== */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-bg-secondary) 0%,
    var(--color-bg-tertiary) 50%,
    var(--color-bg-secondary) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
  border-radius: var(--radius-md);
}

/* ===== FOCUS RING ANIMATIONS ===== */
.interactive:focus-visible {
  outline: none;
  animation: focusRing 0.15s ease-out;
}

@keyframes focusRing {
  from {
    box-shadow: none;
  }
  to {
    box-shadow: var(--shadow-focus);
  }
}

/* ===== BUTTON INTERACTIONS ===== */
.btn {
  position: relative;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn:active {
  transform: scale(0.98);
}

/* Ripple effect on click */
.btn::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.btn:active::after {
  width: 100px;
  height: 100px;
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

/* ===== HOVER EFFECTS ===== */
.card {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* ===== URGENCY PULSE ===== */
@keyframes urgencyPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(225, 29, 72, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(225, 29, 72, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(225, 29, 72, 0);
  }
}

.task-critical {
  animation: urgencyPulse 2s infinite;
}

/* ===== SUCCESSFUL COMPLETION ===== */
@keyframes checkmark {
  0% {
    transform: scale(0) rotate(-45deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
}

.task-completed::before {
  content: '✓';
  display: inline-block;
  animation: checkmark 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 3.2 Interactive States

```jsx
// Hook for managing interactive states
export const useInteractiveState = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return {
    isHovered,
    isPressed,
    isFocused,
    bind: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onMouseDown: () => setIsPressed(true),
      onMouseUp: () => setIsPressed(false),
      onFocus: () => setIsFocused(true),
      onBlur: () => setIsFocused(false),
    },
  };
};

// Usage
const MyButton = () => {
  const { isHovered, isPressed, bind } = useInteractiveState();

  return (
    <button
      {...bind}
      className={`
        btn
        ${isHovered ? 'hovered' : ''}
        ${isPressed ? 'pressed' : ''}
      `}
    >
      Click me
    </button>
  );
};
```

---

## 4. Component Library Standards

### 4.1 Button Component Variations

```jsx
export const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon = null,
  children,
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${disabled ? 'disabled' : ''}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="btn-loader">
          <span className="spinner" />
        </span>
      ) : null}
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{children}</span>
    </button>
  );
};

/* Variants:
  - primary: Solid with brand color
  - secondary: Outlined
  - danger: Danger state
  - ghost: Transparent
  - loading: Disabled with spinner
*/

/* Sizes: sm, md, lg */
```

#### Button Styles

```css
.btn {
  position: relative;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  font-size: var(--fs-base);
  font-weight: var(--fw-medium);
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

/* PRIMARY */
.btn-primary {
  background: var(--color-info);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-info);
  opacity: 0.9;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
}

.btn-primary:active:not(:disabled) {
  transform: scale(0.98);
}

/* DANGER */
.btn-danger {
  background: var(--color-error);
  color: white;
}

.btn-danger:hover:not(:disabled) {
  background: rgba(255, 107, 107, 0.9);
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
}

/* SECONDARY */
.btn-secondary {
  background: var(--color-bg-tertiary);
  color: var(--color-text-primary);
  border-color: var(--color-border-medium);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--color-bg-quaternary);
  border-color: var(--color-border-strong);
}

/* GHOST */
.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
}

.btn-ghost:hover:not(:disabled) {
  background: var(--color-bg-secondary);
}

/* DISABLED */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* SIZES */
.btn-sm {
  padding: 6px 12px;
  font-size: var(--fs-sm);
}

.btn-lg {
  padding: 12px 24px;
  font-size: var(--fs-lg);
}
```

### 4.2 Input Components

```jsx
export const Input = React.forwardRef(({
  error = null,
  success = null,
  hint = null,
  icon = null,
  ...props
}, ref) => {
  return (
    <div className="input-group">
      {icon && <span className="input-icon">{icon}</span>}
      <input
        ref={ref}
        className={`
          input
          ${error ? 'input-error' : ''}
          ${success ? 'input-success' : ''}
          ${icon ? 'input-with-icon' : ''}
        `}
        {...props}
      />
      {error && <span className="input-error-msg">{error}</span>}
      {success && <span className="input-success-msg">{success}</span>}
      {hint && <span className="input-hint">{hint}</span>}
    </div>
  );
});

Input.displayName = 'Input';
```

#### Input Styles

```css
.input-group {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.input {
  padding: 10px 14px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border-medium);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-size: var(--fs-base);
  transition: all 0.2s ease;
}

.input::placeholder {
  color: var(--color-text-tertiary);
}

.input:hover {
  border-color: var(--color-border-strong);
  background: var(--color-bg-tertiary);
}

.input:focus {
  outline: none;
  border-color: var(--color-info);
  box-shadow: var(--shadow-focus);
}

.input-error {
  border-color: var(--color-error);
  background: rgba(255, 107, 107, 0.05);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
}

.input-success {
  border-color: var(--color-success);
  background: rgba(78, 205, 196, 0.05);
}

.input-success:focus {
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
}

.input-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
  pointer-events: none;
}

.input-with-icon {
  padding-left: 40px;
}

.input-error-msg {
  color: var(--color-error);
  font-size: var(--fs-xs);
}

.input-success-msg {
  color: var(--color-success);
  font-size: var(--fs-xs);
}

.input-hint {
  color: var(--color-text-tertiary);
  font-size: var(--fs-xs);
}
```

---

## 5. Dark Mode Implementation

### 5.1 CSS Variables for Dark Mode

```css
/* Light Mode (Default) */
:root {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8F9FA;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
  /* ... other light colors ... */
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg-primary: #0F0E17;
    --color-bg-secondary: #1A1927;
    --color-text-primary: #F5F5F5;
    --color-text-secondary: #B8B8C8;
    /* ... other dark colors ... */
  }
}

/* Manual Dark Mode Toggle */
[data-theme='dark'] {
  --color-bg-primary: #0F0E17;
  --color-bg-secondary: #1A1927;
  --color-text-primary: #F5F5F5;
  --color-text-secondary: #B8B8C8;
}

[data-theme='light'] {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F8F9FA;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
}
```

### 5.2 Theme Toggle Hook

```jsx
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme');
    if (stored) return stored;

    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // Update DOM
    document.documentElement.setAttribute('data-theme', theme);

    // Save to localStorage
    localStorage.setItem('theme', theme);

    // Dispatch event for other parts of app
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  }, [theme]);

  const toggle = () => {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  };

  return { theme, setTheme, toggle };
};

// Usage
export const ThemeToggle = () => {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle} aria-label="Toggle dark mode" className="theme-toggle">
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};
```

---

## 6. Accessibility & Inclusive Design

### 6.1 WCAG 2.1 Compliance Checklist

```markdown
## Perceivable
- [ ] Color not sole means of conveying information
- [ ] Text contrast ratio ≥ 4.5:1 (AA) / ≥ 7:1 (AAA)
- [ ] All images have alt text
- [ ] Content resizes to 200% without loss
- [ ] Motion/animation can be disabled via prefers-reduced-motion

## Operable
- [ ] All functionality available via keyboard
- [ ] Tab order is logical
- [ ] No keyboard traps
- [ ] Touch targets ≥ 44×44px
- [ ] No seizure-inducing content (>3 flashes/second)

## Understandable
- [ ] Language of page identified
- [ ] Labels for form inputs
- [ ] Error messages clear and specific
- [ ] Consistent navigation patterns
- [ ] Help available

## Robust
- [ ] Valid HTML
- [ ] ARIA labels used correctly
- [ ] Compatible with assistive technologies
- [ ] Form controls properly labeled
```

### 6.2 Semantic HTML & ARIA

```jsx
// ✅ GOOD: Semantic HTML with ARIA
export const AccessibleTaskCard = ({ task, onComplete, onDelete }) => {
  return (
    <article
      className="task-card"
      role="region"
      aria-labelledby={`task-${task.id}`}
    >
      <h2 id={`task-${task.id}`}>{task.title}</h2>

      <div role="group" aria-label="Task details">
        <dl>
          <dt>Deadline</dt>
          <dd aria-label="deadline">{formatDate(task.deadline)}</dd>

          <dt>Priority</dt>
          <dd>
            <span
              aria-label={`Priority: ${task.priority}`}
              role="img"
            >
              {getPriorityEmoji(task.priority)}
            </span>
            {task.priority}
          </dd>
        </dl>
      </div>

      <div className="task-actions" role="toolbar" aria-label="Task actions">
        <button
          onClick={() => onComplete(task.id)}
          aria-label={`Mark ${task.title} as completed`}
          title="Mark as completed"
        >
          Complete
        </button>

        <button
          onClick={() => onDelete(task.id)}
          aria-label={`Delete ${task.title}`}
          title="Delete task"
        >
          Delete
        </button>
      </div>
    </article>
  );
};
```

### 6.3 Focus Management

```jsx
export const useFocusManagement = () => {
  const modalRef = useRef();
  const previousActiveElement = useRef();

  const openModal = () => {
    previousActiveElement.current = document.activeElement;
    // Focus first interactive element in modal
    setTimeout(() => {
      const firstButton = modalRef.current?.querySelector('button');
      firstButton?.focus();
    }, 0);
  };

  const closeModal = () => {
    // Restore focus to element that opened modal
    previousActiveElement.current?.focus();
  };

  return { modalRef, openModal, closeModal };
};
```

---

## 7. Enterprise Security Architecture

### 7.1 Security Headers

```javascript
// middleware/securityHeaders.js

export const securityHeaders = (req, res, next) => {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Enable XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions Policy (Feature Policy)
  res.setHeader(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=()'
  );

  // Content Security Policy
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'wasm-unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self' https://api.remindkaro.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );

  // Strict Transport Security
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

  next();
};

// Usage in Express
app.use(securityHeaders);
```

### 7.2 Input Validation & Sanitization

```javascript
// validators/taskValidator.js

import Joi from 'joi';
import DOMPurify from 'isomorphic-dompurify';

// Schema definition
const taskSchema = Joi.object({
  title: Joi.string()
    .required()
    .min(3)
    .max(200)
    .trim(),

  description: Joi.string()
    .max(2000)
    .allow('')
    .trim(),

  deadline: Joi.date()
    .required()
    .min('now')
    .iso(),

  priority: Joi.string()
    .required()
    .valid('high', 'medium', 'low'),

  category: Joi.string()
    .required()
    .valid('hackathon', 'assignment', 'coding-test', 'interview', 'work', 'personal'),

  recurring: Joi.string()
    .valid('daily', 'weekly', 'monthly', null),
});

// Validation middleware
export const validateTask = (req, res, next) => {
  const { error, value } = taskSchema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        details: error.details.map(d => ({
          field: d.path.join('.'),
          message: d.message,
        })),
      },
    });
  }

  // Sanitize HTML content
  value.description = DOMPurify.sanitize(value.description, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });

  req.validated = value;
  next();
};

// Usage
app.post('/api/v1/tasks', validateTask, createTaskController);
```

### 7.3 SQL Injection Prevention

```javascript
// ✅ CORRECT: Use parameterized queries

// ❌ AVOID
db.query(`SELECT * FROM tasks WHERE user_id = ${userId}`);

// ✅ DO: Parameterized queries
db.query(
  'SELECT * FROM tasks WHERE user_id = $1 AND status = $2',
  [userId, 'pending']
);

// ✅ DO: ORM with query builder
const tasks = await taskRepository.findByUserId(userId).where('status', 'pending');
```

### 7.4 XSS Prevention

```javascript
// ✅ Frontend: Encode output

// ❌ AVOID
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ DO: React auto-escapes by default
<div>{userInput}</div>

// ✅ DO: If you must use HTML, sanitize
import DOMPurify from 'dompurify';

<div>{DOMPurify.sanitize(userInput)}</div>

// ✅ Backend: Content Security Policy
res.setHeader(
  'Content-Security-Policy',
  "default-src 'self'; script-src 'self'"
);
```

### 7.5 CSRF Protection

```javascript
// middleware/csrfProtection.js

import csrf from 'csurf';

const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  },
});

export { csrfProtection };

// Usage
app.post('/api/v1/tasks', csrfProtection, (req, res) => {
  // CSRF token validated automatically
});

// Frontend: Include token in requests
const response = await fetch('/api/v1/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
  },
  body: JSON.stringify(taskData),
});
```

---

## 8. Data Protection & Compliance

### 8.1 GDPR Compliance

```javascript
// Privacy-focused data handling

export const userDataService = {
  // Right to be forgotten
  async deleteUserData(userId) {
    await Promise.all([
      db.query('DELETE FROM tasks WHERE user_id = $1', [userId]),
      db.query('DELETE FROM notifications WHERE task_id IN (SELECT id FROM tasks WHERE user_id = $1)', [userId]),
      db.query('DELETE FROM users WHERE id = $1', [userId]),
      auditLog.record('user_deleted', userId),
    ]);
  },

  // Data export
  async exportUserData(userId) {
    const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
    const tasks = await db.query('SELECT * FROM tasks WHERE user_id = $1', [userId]);
    const notifications = await db.query(
      'SELECT * FROM notifications WHERE task_id IN (SELECT id FROM tasks WHERE user_id = $1)',
      [userId]
    );

    return {
      user: user.rows[0],
      tasks: tasks.rows,
      notifications: notifications.rows,
    };
  },

  // Consent management
  async updateConsent(userId, consentData) {
    await db.query(
      'UPDATE users SET consent = $1, consent_updated_at = NOW() WHERE id = $2',
      [JSON.stringify(consentData), userId]
    );
  },
};
```

### 8.2 Data Encryption at Rest

```javascript
// utils/encryption.js

import crypto from 'crypto';

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
const IV_LENGTH = 16;

export const encrypt = (text) => {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
};

export const decrypt = (text) => {
  const parts = text.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(parts.join(':'), 'hex')),
    decipher.final(),
  ]);
  return decrypted.toString();
};

// Usage
export const createTask = async (taskData, userId) => {
  // Encrypt sensitive fields
  const encryptedDescription = encrypt(taskData.description);

  await db.query(
    'INSERT INTO tasks (user_id, description) VALUES ($1, $2)',
    [userId, encryptedDescription]
  );
};
```

---

## 9. API Security

### 9.1 OAuth 2.0 Implementation

```javascript
// config/oauth.js

import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userService.findByGoogleId(profile.id);

        if (!user) {
          user = await userService.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Routes
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Generate JWT
    const token = jwt.sign(
      { userId: req.user.id, email: req.user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.redirect(`${process.env.FRONTEND_URL}/dashboard?token=${token}`);
  }
);
```

### 9.2 Rate Limiting & Throttling

```javascript
// middleware/rateLimit.js

import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';

const redisClient = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

// API rate limiter
export const apiLimiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: 'rate-limit:',
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests, please try again later',
  standardHeaders: true,
});

// Auth rate limiter (stricter)
export const authLimiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: 'auth-rate-limit:',
  }),
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true,
});

// Usage
app.use('/api/', apiLimiter);
app.post('/auth/login', authLimiter, loginHandler);
```

---

## 10. Frontend Security

### 10.1 Secure Token Storage

```javascript
// services/auth.js

// ❌ AVOID: localStorage (vulnerable to XSS)
localStorage.setItem('token', token);

// ✅ DO: httpOnly cookies (set by server)
// Server sets:
res.cookie('auth_token', token, {
  httpOnly: true,           // Not accessible via JS
  secure: true,             // Only HTTPS
  sameSite: 'strict',       // CSRF protection
  maxAge: 7 * 24 * 60 * 60 * 1000,
});

// ✅ DO: In-memory token with service worker refresh
class TokenManager {
  constructor() {
    this.token = null;
    this.expiresAt = null;
  }

  setToken(token, expiresIn) {
    this.token = token;
    this.expiresAt = Date.now() + expiresIn * 1000;

    // Refresh before expiry
    const refreshTime = expiresIn * 1000 - 60 * 1000; // 1 min before expiry
    setTimeout(() => this.refreshToken(), refreshTime);
  }

  getToken() {
    if (this.expiresAt && Date.now() > this.expiresAt) {
      this.token = null;
    }
    return this.token;
  }

  async refreshToken() {
    const response = await fetch('/auth/refresh', {
      method: 'POST',
      credentials: 'include',
    });

    const { token, expiresIn } = await response.json();
    this.setToken(token, expiresIn);
  }
}

export const tokenManager = new TokenManager();
```

### 10.2 Request Security

```javascript
// services/api.js

const API_BASE = process.env.REACT_APP_API_URL;

export const apiClient = {
  async request(endpoint, options = {}) {
    const token = tokenManager.getToken();

    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      credentials: 'include', // Include httpOnly cookies
    });

    if (response.status === 401) {
      // Token expired, try refresh
      await tokenManager.refreshToken();
      return this.request(endpoint, options); // Retry
    }

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return response.json();
  },

  get: (endpoint) => apiClient.request(endpoint),
  post: (endpoint, data) => apiClient.request(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  put: (endpoint, data) => apiClient.request(endpoint, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (endpoint) => apiClient.request(endpoint, { method: 'DELETE' }),
};
```

---

## 11. Infrastructure Security

### 11.1 SSL/TLS Configuration

```nginx
# nginx.conf

server {
  listen 443 ssl http2;
  server_name api.remindkaro.com;

  # SSL certificates
  ssl_certificate /etc/letsencrypt/live/api.remindkaro.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/api.remindkaro.com/privkey.pem;

  # SSL protocols
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers HIGH:!aNULL:!MD5;
  ssl_prefer_server_ciphers on;

  # HSTS
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

  # Security headers
  add_header X-Frame-Options "DENY" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-XSS-Protection "1; mode=block" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;

  # Redirect HTTP to HTTPS
  error_page 497 https://$host$request_uri;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}

# Redirect HTTP to HTTPS
server {
  listen 80;
  server_name api.remindkaro.com;
  return 301 https://$server_name$request_uri;
}
```

### 11.2 Docker Security

```dockerfile
# Dockerfile - Production

FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine
WORKDIR /app

# Add non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001

# Copy dependencies
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --chown=nodejs:nodejs . .

# Set secure environment
ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL=error

# Expose port
EXPOSE 3000

# Switch to non-root user
USER nodejs

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Run app
CMD ["node", "src/server.js"]
```

---

## 12. Security Monitoring & Incident Response

### 12.1 Security Logging

```javascript
// utils/securityLogger.js

import winston from 'winston';

export const securityLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'security.log' }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
  ],
});

// Log security events
export const logSecurityEvent = (event, details) => {
  securityLogger.info({
    event,
    timestamp: new Date().toISOString(),
    ...details,
  });
};

// Usage
logSecurityEvent('failed_login_attempt', {
  email: user.email,
  ip: req.ip,
  reason: 'invalid_password',
});

logSecurityEvent('suspicious_activity', {
  userId: user.id,
  action: 'mass_delete',
  threshold: 100,
  actual: 500,
});
```

### 12.2 Anomaly Detection

```javascript
// services/securityMonitor.js

export const securityMonitor = {
  async detectAnomalies(userId) {
    const recentActivity = await activityService.getRecent(userId, 24 * 60); // 24h

    const anomalies = [];

    // Check for unusual IP
    const ips = [...new Set(recentActivity.map(a => a.ip))];
    if (ips.length > 5) {
      anomalies.push({
        type: 'unusual_ip_count',
        severity: 'warning',
        ips,
      });
    }

    // Check for mass operations
    const deletions = recentActivity.filter(a => a.action === 'delete').length;
    if (deletions > 50) {
      anomalies.push({
        type: 'mass_deletion',
        severity: 'critical',
        count: deletions,
      });
    }

    // Check for unusual times
    const unusualTimes = recentActivity.filter(a => {
      const hour = new Date(a.timestamp).getHours();
      return hour < 6 || hour > 23; // Between midnight and 6am
    }).length;

    if (unusualTimes > recentActivity.length * 0.8) {
      anomalies.push({
        type: 'unusual_access_time',
        severity: 'warning',
        percentage: (unusualTimes / recentActivity.length * 100).toFixed(2),
      });
    }

    if (anomalies.length > 0) {
      await notificationService.alertUser(userId, {
        title: 'Unusual Activity Detected',
        anomalies,
      });
    }

    return anomalies;
  },
};
```

---

## Production Security Checklist

```markdown
## Before Deploying

- [ ] HTTPS/SSL configured with valid certificate
- [ ] Security headers enabled (CSP, HSTS, X-Frame-Options, etc.)
- [ ] CORS properly configured for specific domains only
- [ ] Rate limiting enabled on all sensitive endpoints
- [ ] Input validation on ALL endpoints
- [ ] Output encoding/sanitization for XSS prevention
- [ ] SQL injection prevention (parameterized queries)
- [ ] CSRF protection enabled
- [ ] Authentication using OAuth 2.0 or similar
- [ ] JWT tokens signed with strong secret
- [ ] Password hashing using bcrypt/Argon2
- [ ] Database encryption at rest
- [ ] Secrets stored in .env (never in code)
- [ ] GDPR compliance implemented
- [ ] Data backup strategy verified
- [ ] Security logging configured
- [ ] Incident response plan documented
- [ ] Dependencies scanned for vulnerabilities
- [ ] No console.log with sensitive data
- [ ] No debug endpoints in production
- [ ] Error messages don't reveal system details
- [ ] Database user has minimal permissions
- [ ] Web server runs as non-root user
- [ ] Firewall rules configured
- [ ] DDoS protection enabled
- [ ] Security team trained
- [ ] Penetration testing completed
```

---

## Summary

This guide provides:

✅ **Aesthetics:** Premium dark theme, urgency-driven color system, smooth animations  
✅ **UI/UX:** Professional components, micro-interactions, accessibility standards  
✅ **Security:** Enterprise-grade practices, compliance frameworks, monitoring systems  

Apply these principles systematically for a product that looks premium and feels secure.

---

**Version:** 1.0  
**Last Updated:** January 2024  
**Compliance:** GDPR, CCPA, WCAG 2.1 AA
