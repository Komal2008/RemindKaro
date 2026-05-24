'use client';

import { useState, useMemo } from 'react';
import styles from './CalendarView.module.css';

/**
 * Premium CalendarView grid showing deadline markers for tasks
 */
export default function CalendarView({ tasks = [], onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = useMemo(() => {
    const d = [];
    // Padding for first row
    for (let i = 0; i < firstDayOfMonth; i++) {
      d.push(null);
    }
    // Actual days
    for (let i = 1; i <= daysInMonth; i++) {
      d.push(new Date(year, month, i));
    }
    return d;
  }, [year, month, daysInMonth, firstDayOfMonth]);

  const taskMap = useMemo(() => {
    const map = {};
    tasks.forEach((t) => {
      if (t.status === 'completed') return;
      const tDate = new Date(t.deadline);
      const dateStr = tDate.toDateString();
      if (!map[dateStr]) map[dateStr] = [];
      map[dateStr].push(t);
    });
    return map;
  }, [tasks]);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToToday = () => setCurrentDate(new Date());

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const todayStr = new Date().toDateString();

  return (
    <div className={styles.calendar}>
      <header className={styles.header}>
        <div className={styles.controls}>
          <button
            className={styles.navBtn}
            onClick={prevMonth}
            aria-label="Previous Month"
          >
            ‹
          </button>
          <button
            className={styles.navBtn}
            onClick={nextMonth}
            aria-label="Next Month"
          >
            ›
          </button>
          <button className={styles.todayBtn} onClick={goToToday}>
            Today
          </button>
        </div>
        <h2 className={styles.monthTitle}>
          {currentDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          })}
        </h2>
      </header>

      <div className={styles.grid}>
        {weekDays.map((d) => (
          <div key={d} className={styles.weekDay}>
            {d}
          </div>
        ))}

        {days.map((date, i) => {
          if (!date)
            return <div key={`empty-${i}`} className={styles.emptyDay} />;

          const dateStr = date.toDateString();
          const dayTasks = taskMap[dateStr] || [];
          const isToday = dateStr === todayStr;

          return (
            <button
              key={dateStr}
              className={`${styles.day} ${isToday ? styles.isToday : ''} ${dayTasks.length > 0 ? styles.hasTasks : ''}`}
              onClick={() => onDateSelect && onDateSelect(date)}
            >
              <span className={styles.dateNum}>{date.getDate()}</span>
              {dayTasks.length > 0 && (
                <div className={styles.markers}>
                  {dayTasks.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className={`${styles.marker} ${styles[`marker--${t.priority}`]}`}
                    />
                  ))}
                  {dayTasks.length > 3 && (
                    <span className={styles.moreMarker}>+</span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
