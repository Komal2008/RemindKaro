'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './WorkspaceActivityFeed.module.css';
import { RefreshCw } from 'lucide-react';
import Skeleton from './Skeleton';

function getRelativeTimeString(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now - date;
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHr / 24);

  if (diffSec < 60) return 'just now';
  if (diffMin < 60) return `${diffMin}m ago`;
  if (diffHr < 24) return `${diffHr}h ago`;
  if (diffDays === 1) return 'yesterday';
  return `${diffDays}d ago`;
}

function getDayGroupLabel(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const compareDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  if (compareDate.getTime() === today.getTime()) {
    return 'Today';
  } else if (compareDate.getTime() === yesterday.getTime()) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }
}

function getAvatarGradient(name) {
  const char = (name || '?')[0].toUpperCase();
  const code = char.charCodeAt(0);
  const gradients = [
    'linear-gradient(135deg, #FF6B6B, #FF8E53)',
    'linear-gradient(135deg, #4E54C8, #8F94FB)',
    'linear-gradient(135deg, #11998E, #38EF7D)',
    'linear-gradient(135deg, #FC4A1A, #F7B733)',
    'linear-gradient(135deg, #4A00E0, #8E2DE2)',
    'linear-gradient(135deg, #02AAB0, #00CDAC)',
    'linear-gradient(135deg, #FF512F, #DD2476)',
    'linear-gradient(135deg, #1A2980, #26D0CE)',
  ];
  return gradients[code % gradients.length];
}

export default function WorkspaceActivityFeed({ workspaceId }) {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActivity = useCallback(async () => {
    if (!workspaceId) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/workspaces/${workspaceId}/activity`);
      if (res.ok) {
        const data = await res.json();
        setActivities(data.activities || []);
      }
    } catch (err) {
      console.error('Failed to fetch activity feed:', err);
    } finally {
      setLoading(false);
    }
  }, [workspaceId]);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  const renderActivityText = (activity) => {
    const userName = activity.user
      ? activity.user.name || activity.user.email
      : 'Someone';
    let meta = {};
    if (activity.meta) {
      try {
        meta =
          typeof activity.meta === 'string'
            ? JSON.parse(activity.meta)
            : activity.meta;
      } catch (e) {
        console.error('Failed to parse activity meta:', e);
      }
    }

    switch (activity.eventType) {
      case 'task_created':
        return (
          <span>
            <strong>{userName}</strong> created{' '}
            <em>{meta.title || 'a task'}</em>
          </span>
        );
      case 'task_completed':
        return (
          <span>
            <strong>{userName}</strong> completed{' '}
            <em>{meta.title || 'a task'}</em>
          </span>
        );
      case 'task_assigned':
        return (
          <span>
            <strong>{userName}</strong> assigned{' '}
            <em>{meta.title || 'a task'}</em> to{' '}
            <strong>{meta.assigneeName || 'someone'}</strong>
          </span>
        );
      case 'member_joined':
        return (
          <span>
            <strong>{meta.name || userName}</strong> joined the workspace
          </span>
        );
      case 'member_removed':
        return (
          <span>
            <strong>{meta.name || 'A member'}</strong> was removed
          </span>
        );
      case 'comment_posted':
        return (
          <span>
            <strong>{userName}</strong> commented on{' '}
            <em>{meta.taskTitle || 'a task'}</em>
          </span>
        );
      case 'role_changed': {
        const action =
          meta.newRole === 'admin' ? 'promoted to admin' : 'demoted to member';
        return (
          <span>
            <strong>{meta.targetName || 'A member'}</strong> was {action}
          </span>
        );
      }
      default:
        return (
          <span>
            <strong>{userName}</strong> performed action{' '}
            <code>{activity.eventType}</code>
          </span>
        );
    }
  };

  // Group activities by day
  const groupedActivities = activities.reduce((groups, activity) => {
    const day = getDayGroupLabel(activity.createdAt);
    if (!groups[day]) {
      groups[day] = [];
    }
    groups[day].push(activity);
    return groups;
  }, {});

  if (!workspaceId) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Activity Feed</h3>
        <button
          type="button"
          onClick={fetchActivity}
          className={`${styles.refreshButton} ${loading ? styles.spinning : ''}`}
          title="Refresh activities"
          disabled={loading}
        >
          <RefreshCw size={14} />
        </button>
      </div>

      <div className={styles.feedBody}>
        {loading && activities.length === 0 ? (
          <div className={styles.skeletonContainer}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className={styles.skeletonItem}>
                <Skeleton
                  variant="circle"
                  className={styles.skeletonAvatar}
                  width={28}
                  height={28}
                />
                <div className={styles.skeletonMeta}>
                  <Skeleton variant="line" width="70%" />
                  <Skeleton variant="caption" width="40%" />
                </div>
              </div>
            ))}
          </div>
        ) : activities.length === 0 ? (
          <div className={styles.emptyFeed}>
            <p>No recent activity in this workspace.</p>
          </div>
        ) : (
          Object.keys(groupedActivities).map((day) => (
            <div key={day} className={styles.dayGroup}>
              <div className={styles.dayLabel}>{day}</div>
              <div className={styles.dayItems}>
                {groupedActivities[day].map((act) => {
                  const name = act.user
                    ? act.user.name || act.user.email
                    : 'Someone';
                  const initial = name[0].toUpperCase();
                  return (
                    <div key={act.id} className={styles.itemRow}>
                      <div
                        className={styles.avatar}
                        style={{ background: getAvatarGradient(name) }}
                      >
                        {initial}
                      </div>
                      <div className={styles.itemContent}>
                        <p className={styles.itemText}>
                          {renderActivityText(act)}
                        </p>
                        <span className={styles.itemTime}>
                          {getRelativeTimeString(act.createdAt)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
