import Skeleton from "@/components/ui/Skeleton";
import styles from "@/app/styles/auth-flow.module.css";
import onboardingStyles from "@/components/skeletons/OnboardingSkeleton.module.css";

export default function OnboardingLoading() {
  return (
    <div className={styles.page}>
      <div className={`${styles.pageInner} ${onboardingStyles.wrap}`}>
        <div className={styles.progressWrap}>
          <Skeleton variant="line" style={{ width: "40%", height: 12 }} />
          <Skeleton variant="rect" style={{ height: 4, marginTop: 12 }} />
        </div>
        <div className={styles.card}>
          <div className={styles.cardStep}>
            <Skeleton variant="heading" style={{ width: "80%", height: 28 }} />
            <Skeleton variant="line" style={{ width: "95%", marginTop: 12 }} />
            {[1, 2, 3].map((i) => (
              <Skeleton
                key={i}
                variant="card"
                style={{ minHeight: 72, marginTop: i === 0 ? 24 : 12 }}
              />
            ))}
            <Skeleton
              variant="button"
              style={{ width: "100%", marginTop: 28 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
