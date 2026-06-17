import { useState, useEffect } from 'react';
import styles from './TaskDetailModal.module.css';
import Button from './Button';
import { X, Send, Calendar, User, UserCheck } from 'lucide-react';

export default function TaskDetailModal({ task, onClose }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loadingComments, setLoadingComments] = useState(false);
  const [postingComment, setPostingComment] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!task) return;

    const fetchComments = async () => {
      setLoadingComments(true);
      setError('');
      try {
        const res = await fetch(`/api/tasks/${task.id}/comments`);
        if (res.ok) {
          const data = await res.json();
          setComments(data.comments || []);
        } else {
          setError('Failed to load comments');
        }
      } catch (err) {
        console.error('Fetch comments error:', err);
        setError('Network error: Failed to load comments');
      } finally {
        setLoadingComments(false);
      }
    };

    fetchComments();
  }, [task]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handlePostComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setPostingComment(true);
    setError('');

    try {
      const res = await fetch(`/api/tasks/${task.id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment.trim() }),
      });

      const data = await res.json();
      if (res.ok) {
        setComments((prev) => [...prev, data.comment]);
        setNewComment('');
      } else {
        setError(data.error || 'Failed to post comment');
      }
    } catch (err) {
      console.error('Post comment error:', err);
      setError('Network error: Failed to post comment');
    } finally {
      setPostingComment(false);
    }
  };

  if (!task) return null;

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'high':
        return {
          backgroundColor: 'var(--color-urgent-100)',
          color: 'var(--color-urgent-600)',
          border: '1px solid rgba(244, 63, 94, 0.3)',
        };
      case 'medium':
        return {
          backgroundColor: 'var(--color-medium-100)',
          color: 'var(--color-medium-600)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
        };
      default:
        return {
          backgroundColor: 'var(--color-low-100)',
          color: 'var(--color-low-600)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
        };
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <div className={styles.titleArea}>
            <div className={styles.badges}>
              <span
                className={`${styles.badge}`}
                style={getPriorityStyle(task.priority)}
              >
                {task.priority.toUpperCase()}
              </span>
              <span
                className={styles.badge}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border-light)',
                }}
              >
                {task.category}
              </span>
              <span
                className={styles.badge}
                style={{
                  backgroundColor:
                    task.status === 'completed'
                      ? 'rgba(16, 185, 129, 0.15)'
                      : 'rgba(94, 106, 210, 0.15)',
                  color:
                    task.status === 'completed'
                      ? 'var(--color-success)'
                      : 'var(--linear-primary-hover)',
                  border:
                    task.status === 'completed'
                      ? '1px solid rgba(16, 185, 129, 0.3)'
                      : '1px solid rgba(94, 106, 210, 0.3)',
                }}
              >
                {task.status.replace('_', ' ').toUpperCase()}
              </span>
            </div>
            <h2 className={styles.title}>{task.title}</h2>
          </div>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close details modal"
          >
            <X size={18} />
          </button>
        </header>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.content}>
          {task.description && (
            <p className={styles.description}>{task.description}</p>
          )}

          <div className={styles.metadataGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>
                <Calendar
                  size={11}
                  style={{ marginRight: 6, display: 'inline' }}
                />
                Deadline
              </span>
              <span className={styles.metaValue}>
                {formatDate(task.deadline)}
              </span>
            </div>

            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>
                <User size={11} style={{ marginRight: 6, display: 'inline' }} />
                Created By
              </span>
              <span className={styles.metaValue}>
                {task.user?.name || 'Unknown'}
              </span>
            </div>

            {task.workspace && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Workspace</span>
                <span className={styles.metaValue}>{task.workspace.name}</span>
              </div>
            )}

            {task.assignee && (
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>
                  <UserCheck
                    size={11}
                    style={{ marginRight: 6, display: 'inline' }}
                  />
                  Assignee
                </span>
                <span className={styles.metaValue}>{task.assignee.name}</span>
              </div>
            )}
          </div>

          {/* Comments Section */}
          <div className={styles.commentsSection}>
            <div className={styles.commentsHeader}>
              <h3 className={styles.commentsTitle}>
                Comments ({comments.length})
              </h3>
            </div>

            <div className={styles.commentsList}>
              {loadingComments ? (
                <p className={styles.emptyComments}>Loading comments...</p>
              ) : comments.length === 0 ? (
                <p className={styles.emptyComments}>
                  No comments yet. Start the conversation!
                </p>
              ) : (
                comments.map((comment) => (
                  <div key={comment.id} className={styles.commentItem}>
                    <div className={styles.commentHeader}>
                      <span className={styles.commentAuthor}>
                        {comment.user?.name ||
                          comment.user?.email ||
                          'Unknown User'}
                      </span>
                      <span className={styles.commentTime}>
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className={styles.commentContent}>{comment.content}</p>
                  </div>
                ))
              )}
            </div>

            <form onSubmit={handlePostComment} className={styles.commentForm}>
              <input
                type="text"
                placeholder="Write a comment..."
                className={styles.commentInput}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                disabled={postingComment}
                required
              />
              <Button
                type="submit"
                variant="primary"
                size="sm"
                loading={postingComment}
                aria-label="Send comment"
              >
                <Send size={13} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
