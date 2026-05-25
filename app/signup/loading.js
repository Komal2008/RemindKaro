import AuthShellSkeleton from "@/components/skeletons/AuthShellSkeleton";
import styles from "@/app/styles/auth-flow.module.css";

export default function SignupLoading() {
  return (
    <div className={styles.page}>
      <AuthShellSkeleton />
    </div>
  );
}
