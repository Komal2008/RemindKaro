'use client';

import { useState, useMemo } from 'react';
import styles from './CalendarView.module.css';

export default function CalendarView({ tasks = [], onDateSelect }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = useMemo(() => {
    const d = [];
    for (let i = 0; i < firstDayOfMonth; i++) d.push(null);
    for (let i = 1; i <= daysInMonth; i++) {
      d.push(new Date(year, month, i));
    }
    return d;
  }, [year, month, daysInMonth, firstDayOfMonth]);

  const taskMap = useMemo(() => {
    const map = {};
    tasks.forEach((t) => {
      if (t.status === 'completed') return;
      const dateStr = new Date(t.deadline).toDateString();
      if (!map[dateStr]) map[dateStr] = [];
      map[dateStr].push(t);
    });
    return map;
  }, [tasks]);

  const monthTaskCount = useMemo(() => {
    let count = 0;
    Object.keys(taskMap).forEach((key) => {
      const d = new Date(key);
      if (d.getMonth() === month && d.getFullYear() === year) {
        count += taskMap[key].length;
      }
    });
    return count;
  }, [taskMap, month, year]);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToToday = () => setCurrentDate(new Date());

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const todayStr = new Date().toDateString();

  return (
    <div className={styles.calendar}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h2 className={styles.monthTitle}>
            {currentDate.toLocaleString('default', {
              month: 'long',
              year: 'numeric',
            })}
          </h2>
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={prevMonth}
              aria-label="Previous month"
            >
              ‹
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={nextMonth}
              aria-label="Next month"
            >
              ›
            </button>
            <button
              type="button"
              className={styles.todayBtn}
              onClick={goToToday}
            >
              Today
            </button>
          </div>
        </div>
        <div className={styles.legend}>
          <span className={styles.legendItem}>
            <span
              className={`${styles.legendDot} ${styles.legendDotHigh}`}
              aria-hidden
            />
            Urgent
          </span>
          <span className={styles.legendItem}>
            <span
              className={`${styles.legendDot} ${styles.legendDotMedium}`}
              aria-hidden
            />
            Medium
          </span>
          <span className={styles.legendItem}>
            <span
              className={`${styles.legendDot} ${styles.legendDotLow}`}
              aria-hidden
            />
            Low
          </span>
        </div>
      </header>

      <div className={styles.grid}>
        {weekDays.map((d) => (
          <div key={d} className={styles.weekDay}>
            {d}
          </div>
        ))}

        {days.map((date, i) => {
          if (!date) {
            return <div key={`empty-${i}`} className={styles.emptyDay} />;
          }

          const dateStr = date.toDateString();
          const dayTasks = taskMap[dateStr] || [];
          const isToday = dateStr === todayStr;

          return (
            <button
              key={dateStr}
              type="button"
              className={[
                styles.day,
                isToday ? styles.isToday : '',
                dayTasks.length > 0 ? styles.hasTasks : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => onDateSelect?.(date)}
              aria-label={`${date.toLocaleDateString()}, ${dayTasks.length} tasks`}
            >
              <span className={styles.dateNum}>{date.getDate()}</span>
              {dayTasks.length > 0 && (
                <div className={styles.markers}>
                  {dayTasks.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className={`${styles.marker} ${styles[`marker--${t.priority}`]}`}
                      aria-hidden
                    />
                  ))}
                  {dayTasks.length > 3 && (
                    <span className={styles.moreMarker}>
                      +{dayTasks.length - 3}
                    </span>
                  )}
                </div>
              )}
            </button>
          );
        })}
      </div>

      <p className={styles.taskSummary}>
        <strong>{monthTaskCount}</strong>{' '}
        {monthTaskCount === 1 ? 'deadline' : 'deadlines'} this month
      </p>
    </div>
  );
}
