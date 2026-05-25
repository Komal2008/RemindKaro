"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Input from "@/components/ui/Input";
import { Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import styles from "@/app/styles/auth-flow.module.css";
import AuthThemeBar from "@/components/auth/AuthThemeBar";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (!token) {
      setError("Invalid or missing reset token");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to reset password");

      setMessage("Password successfully reset. Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formInner}>
      <h2 className={styles.formTitle}>Reset password</h2>
      <p className={styles.formDesc}>Please enter your new password below.</p>

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

      {!token ? (
        <div className={styles.formFooter}>
          <p
            className={styles.formDesc}
            style={{ marginBottom: "var(--space-4)" }}
          >
            Invalid link
          </p>
          <Link href="/login" className={styles.formFooterLink}>
            Go back to login
          </Link>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleResetPassword}>
          <Input
            id="password"
            label="New Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            icon={<Lock size={16} />}
            theme="dark"
          />
          <Input
            id="confirmPassword"
            label="Confirm New Password"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            icon={<Lock size={16} />}
            theme="dark"
          />

          <button
            type="submit"
            disabled={loading || !!message}
            className={styles.btnPrimary}
            style={{ marginTop: "var(--space-2)" }}
          >
            {loading ? (
              <span className={styles.spinner} aria-label="Resetting" />
            ) : (
              <>
                Reset Password <ArrowRight size={18} aria-hidden />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ResetPasswordPage() {
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
          <Suspense
            fallback={
              <div className={styles.formInner}>
                <p className={styles.formDesc}>Loading…</p>
              </div>
            }
          >
            <ResetPasswordForm />
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
}
