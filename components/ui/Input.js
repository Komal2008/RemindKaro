'use client';
import { forwardRef } from 'react';
import styles from './Input.module.css';

/**
 * Premium Input field with label, error, hint, and icon support
 */
const Input = forwardRef(function Input(
  {
    id,
    label,
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    hint,
    icon,
    required = false,
    disabled = false,
    fullWidth = true,
    className = '',
    theme = 'light',
    ...props
  },
  ref
) {
  const isDark = theme === 'dark';

  return (
    <div
      className={[styles.wrapper, fullWidth ? styles.fullWidth : '', className]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <label
          htmlFor={id}
          className={[styles.label, isDark ? styles.labelDark : ''].join(' ')}
        >
          {label}
          {required && (
            <span className={styles.required} aria-hidden="true">
              {' '}
              *
            </span>
          )}
        </label>
      )}
      <div
        className={[styles.inputWrap, error ? styles.hasError : ''].join(' ')}
      >
        {icon && (
          <span
            className={[styles.icon, isDark ? styles.iconDark : ''].join(' ')}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          className={[
            styles.input,
            icon ? styles.withIcon : '',
            isDark ? styles.inputDark : '',
          ].join(' ')}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          {...props}
        />
      </div>
      {error && (
        <p id={`${id}-error`} className={styles.errorMsg} role="alert">
          {error}
        </p>
      )}
      {hint && !error && (
        <p id={`${id}-hint`} className={styles.hint}>
          {hint}
        </p>
      )}
    </div>
  );
});

export default Input;
