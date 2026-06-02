'use client';

import { useEffect, useRef } from 'react';

/**
 * Checks tasks periodically and triggers browser notifications / audio chimes for urgent/overdue tasks.
 */
export default function useEscalationEngine(tasks) {
  const notifiedTasksRef = useRef(new Set());

  useEffect(() => {
    // Request permission if not granted
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }

    const checkTasks = () => {
      if (!tasks || tasks.length === 0) return;
      if (typeof window === 'undefined' || !('Notification' in window)) return;
      if (Notification.permission !== 'granted') return;

      const now = new Date();
      let shouldPlayChime = false;

      tasks.forEach((task) => {
        if (task.status === 'completed') return;

        const deadline = new Date(task.deadline);
        const hoursLeft = (deadline - now) / (1000 * 60 * 60);

        // Conditions for escalation:
        // 1. Task just became overdue
        // 2. Task is critical (< 1 hour left)

        let escalationType = null;
        if (hoursLeft < 0 && hoursLeft > -1) {
          escalationType = 'overdue';
        } else if (hoursLeft > 0 && hoursLeft < 1) {
          escalationType = 'critical';
        }

        if (escalationType) {
          const notificationId = `${task.id}-${escalationType}`;
          if (!notifiedTasksRef.current.has(notificationId)) {
            notifiedTasksRef.current.add(notificationId);
            shouldPlayChime = true;

            const title =
              escalationType === 'overdue'
                ? `🚨 OVERDUE: ${task.title}`
                : `⏳ CRITICAL: ${task.title}`;
            const body =
              escalationType === 'overdue'
                ? `This task missed its deadline.`
                : `This task is due in less than an hour!`;

            new Notification(title, {
              body,
              icon: '/favicon.ico',
              vibrate: [200, 100, 200],
            });
          }
        }
      });

      const muted =
        typeof window !== 'undefined' &&
        localStorage.getItem('notificationsMuted') === 'true';

      if (shouldPlayChime && !muted) {
        // Try to play a generic system beep or loaded sound
        try {
          const audioCtx = new (
            window.AudioContext || window.webkitAudioContext
          )();
          const oscillator = audioCtx.createOscillator();
          const gainNode = audioCtx.createGain();

          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
          oscillator.frequency.exponentialRampToValueAtTime(
            440,
            audioCtx.currentTime + 0.5
          ); // A4

          gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(
            0.001,
            audioCtx.currentTime + 0.5
          );

          oscillator.connect(gainNode);
          gainNode.connect(audioCtx.destination);

          oscillator.start();
          oscillator.stop(audioCtx.currentTime + 0.5);
        } catch (err) {
          console.error('Audio chime failed:', err);
        }
      }
    };

    // Run immediately then every 1 minute
    checkTasks();
    const interval = setInterval(checkTasks, 60 * 1000);

    return () => clearInterval(interval);
  }, [tasks]);
}
