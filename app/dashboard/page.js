'use client';

import { useState, useMemo, useEffect } from 'react';
import styles from './page.module.css';
import Button from '@/components/ui/Button';
import TaskCard from '@/components/tasks/TaskCard';
import CalendarView from '@/components/ui/CalendarView';
import VoiceMic from '@/components/ui/VoiceMic';
import TaskForm from '@/components/tasks/TaskForm';
import useEscalationEngine from '@/components/hooks/useEscalationEngine';

// We will fetch tasks on mount

export default function DashboardPage() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'high', 'completed'
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [initialVoiceText, setInitialVoiceText] = useState('');
  const [loading, setLoading] = useState(true);

  // Run escalation engine
  useEscalationEngine(tasks);

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch('/api/tasks');
        if (res.ok) {
          const data = await res.json();
          setTasks(data.tasks);
        }
      } catch (err) {
        console.error("Failed to fetch tasks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const stats = useMemo(() => {
    return {
      total: tasks.length,
      urgent: tasks.filter(t => t.priority === 'high' && t.status !== 'completed').length,
      completed: tasks.filter(t => t.status === 'completed').length
    };
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks.filter(t => {
      if (filter === 'high') return t.priority === 'high' && t.status !== 'completed';
      if (filter === 'completed') return t.status === 'completed';
      return true;
    }).sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }, [tasks, filter]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setTasks(prev => prev.filter(t => t.id !== id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleVoiceInput = (text) => {
    setInitialVoiceText(text);
    setIsFormOpen(true);
  };

  const handleSaveTask = async (taskData) => {
    try {
      if (editingTask) {
        const res = await fetch(`/api/tasks/${taskData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(taskData)
        });
        if (res.ok) {
          const { task } = await res.json();
          setTasks(prev => prev.map(t => t.id === task.id ? task : t));
        }
      } else {
        const res = await fetch('/api/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(taskData)
        });
        if (res.ok) {
          const { task } = await res.json();
          setTasks(prev => [...prev, task]);
        }
      }
      closeForm();
    } catch (err) {
      console.error(err);
    }
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingTask(null);
    setInitialVoiceText('');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Your Dashboard</h1>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <VoiceMic onResult={handleVoiceInput} />
          <Button variant="primary" onClick={() => setIsFormOpen(true)}>
            + New Task
          </Button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={styles.statCard}>
          <span className={styles.statLabel}>Total Tasks</span>
          <span className={styles.statValue}>{stats.total}</span>
        </div>
        <div className={`${styles.statCard} ${styles['statCard--urgent']}`}>
          <span className={styles.statLabel}>High Priority</span>
          <span className={styles.statValue}>{stats.urgent}</span>
        </div>
        <div className={`${styles.statCard} ${styles['statCard--completed']}`}>
          <span className={styles.statLabel}>Completed</span>
          <span className={styles.statValue}>{stats.completed}</span>
        </div>
      </section>

      <div className={styles.content}>
        <div className={styles.mainPanel}>
          <div className={styles.controls}>
            <div className={styles.filterGroup}>
              <button 
                className={styles.filterBtn} 
                aria-pressed={filter === 'all'}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={styles.filterBtn} 
                aria-pressed={filter === 'high'}
                onClick={() => setFilter('high')}
              >
                High Priority
              </button>
              <button 
                className={styles.filterBtn} 
                aria-pressed={filter === 'completed'}
                onClick={() => setFilter('completed')}
              >
                Completed
              </button>
            </div>
          </div>

          <div className={styles.taskList}>
            {loading ? (
              <div className={styles.emptyState}>Loading tasks...</div>
            ) : filteredTasks.length > 0 ? (
              filteredTasks.map(task => (
                <TaskCard 
                  key={task.id} 
                  task={task} 
                  onStatusChange={handleStatusChange}
                  onDelete={handleDelete}
                  onEdit={(t) => { setEditingTask(t); setIsFormOpen(true); }}
                />
              ))
            ) : (
              <div className={styles.emptyState}>
                <h3>No tasks found</h3>
                <p>You're all caught up! Add a new task to get started.</p>
              </div>
            )}
          </div>
        </div>

        <aside className={styles.sidePanel}>
          <div className={styles.calendarWidget}>
            <CalendarView tasks={tasks} />
          </div>
        </aside>
      </div>

      {isFormOpen && (
        <TaskForm 
          initialData={editingTask}
          initialVoiceText={initialVoiceText}
          onClose={closeForm}
          onSave={handleSaveTask}
        />
      )}
    </div>
  );
}
