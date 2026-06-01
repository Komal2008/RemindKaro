import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import { cookies } from "next/headers";

export const metadata = {
  title: "Terms of Service",
  description:
    "Read our terms of service. By using RemindKaro, you agree to our terms for managing schedules, voice tasks, and urgency escalation alerts.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service — RemindKaro",
    description:
      "Read our terms of service. By using RemindKaro, you agree to our terms for managing schedules, voice tasks, and urgency escalation alerts.",
    url: "https://remindkro.in/terms-of-service",
  },
  twitter: {
    title: "Terms of Service — RemindKaro",
    description:
      "Read our terms of service. By using RemindKaro, you agree to our terms for managing schedules, voice tasks, and urgency escalation alerts.",
  },
};

export default async function TermsOfServicePage() {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get("auth_token")?.value;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--color-bg-primary)",
        color: "var(--color-text-primary)",
      }}
    >
      <Header isLoggedIn={isLoggedIn} />

      <main
        style={{
          flex: 1,
          padding: "120px clamp(20px, 5vw, 5%) 80px",
          maxWidth: "800px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <div
          className="glass-panel"
          style={{ padding: "clamp(24px, 5vw, 40px)" }}
        >
          <h1
            style={{
              fontSize: "clamp(28px, 5vw, 36px)",
              marginBottom: "24px",
              color: "var(--linear-primary)",
            }}
          >
            Terms of Service
          </h1>
          <p
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              marginBottom: "16px",
              fontFamily: "var(--font-body)",
            }}
          >
            By using RemindKaro, you agree to these terms. The service helps you
            track deadlines and receive reminders; you are responsible for the
            accuracy of tasks and deadlines you create.
          </p>
          <p
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              marginBottom: "16px",
              fontFamily: "var(--font-body)",
            }}
          >
            Free and paid plans may change with notice. Do not misuse the
            platform, attempt unauthorized access, or upload harmful content.
          </p>
          <p
            style={{
              color: "var(--color-text-secondary)",
              lineHeight: 1.7,
              fontFamily: "var(--font-body)",
            }}
          >
            Contact{" "}
            <a href="mailto:hello@remindkaro.com">hello@remindkaro.com</a> for
            questions about these terms.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
