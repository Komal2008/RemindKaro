'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './VoiceMic.module.css';

/**
 * Premium VoiceMic component integrating Web Speech API with animated pulse
 */
export default function VoiceMic({ onResult, onError, disabled = false }) {
  const [isRecording, setIsRecording] = useState(false);
  const [isSupported, setIsSupported] = useState(true);
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        setIsSupported(false);
      } else {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
          setIsRecording(true);
        };

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          if (onResult) onResult(transcript);
        };

        recognition.onerror = (event) => {
          if (onError) onError(event.error);
          setIsRecording(false);
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, [onResult, onError]);

  const toggleRecording = useCallback(() => {
    if (!recognitionRef.current) return;
    
    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      try {
        recognitionRef.current.start();
      } catch (err) {
        console.error('Speech recognition error', err);
      }
    }
  }, [isRecording]);

  if (!isSupported) {
    return (
      <button 
        className={`${styles.micButton} ${styles.disabled}`} 
        disabled 
        title="Voice input not supported in this browser"
        type="button"
      >
        🎤
      </button>
    );
  }

  return (
    <div className={styles.wrapper}>
      {isRecording && (
        <>
          <div className={`${styles.pulseRing} ${styles.pulseRing1}`} />
          <div className={`${styles.pulseRing} ${styles.pulseRing2}`} />
        </>
      )}
      <button
        type="button"
        className={`${styles.micButton} ${isRecording ? styles.recording : ''}`}
        onClick={toggleRecording}
        disabled={disabled}
        title={isRecording ? "Stop recording" : "Start voice input"}
        aria-label="Voice Input"
      >
        <span className={styles.icon}>🎤</span>
      </button>
    </div>
  );
}
