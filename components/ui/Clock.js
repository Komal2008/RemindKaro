'use client';

import { useState, useEffect } from 'react';
import styles from './Clock.module.css';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (num) => String(num).padStart(2, '0');
  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  const dateLabel = time.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className={styles.wrap}>
      <div className={styles.time}>
        {hours}
        <span className={styles.sep}>:</span>
        {minutes}
        <span className={styles.sep}>:</span>
        <span className={styles.seconds}>{seconds}</span>
      </div>
      <div className={styles.date}>{dateLabel}</div>
    </div>
  );
}
