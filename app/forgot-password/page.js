"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/Input";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import styles from "@/app/styles/auth-flow.module.css";
import AuthThemeBar from "@/components/auth/AuthThemeBar";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");

      setMessage(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <AuthThemeBar />
      <motion.div
        className={styles.authCardSingle}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className={styles.authCardSingleBody}>
          <div className={styles.formInner}>
            <Link href="/login" className={styles.backLink}>
              <ArrowLeft size={16} aria-hidden /> Back to login
            </Link>

            <h2 className={styles.formTitle}>Forgot password</h2>
            <p className={styles.formDesc}>
              Enter your email address and we&apos;ll send you a link to reset
              your password.
            </p>

            {error && (
              <div className={styles.alertBox} role="alert">
                <span className={styles.alertDot} aria-hidden />
                {error}
              </div>
            )}

            {message && (
              <div className={styles.successBox} role="status">
                {message}
              </div>
            )}

            <form className={styles.form} onSubmit={handleForgotPassword}>
              <Input
                id="email"
                label="Email Address"
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                icon={<Mail size={16} />}
                theme="dark"
              />

              <button
                type="submit"
                disabled={loading}
                className={styles.btnPrimary}
                style={{ marginTop: "var(--space-2)" }}
              >
                {loading ? (
                  <span className={styles.spinner} aria-label="Sending" />
                ) : (
                  <>
                    Send Reset Link <ArrowRight size={18} aria-hidden />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
