// app/layout.js
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";

export const metadata = {
  title: "RemindKaro — Smart AI Deadline & Reminders Dashboard",
  description:
    "Intelligent AI-powered deadline scheduler and reminder assistant. Track coding tests, assignments, interviews, and hackathons with native voice entry and smart urgency escalation.",
  keywords: [
    "remindkaro",
    "reminder",
    "deadline tracker",
    "ai scheduler",
    "assignment reminder",
    "hackathon submission tracker",
  ],
  authors: [{ name: "RemindKaro Team" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('remindkaro-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);else document.documentElement.setAttribute('data-theme',window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <AppProviders>
          <main>{children}</main>
        </AppProviders>
      </body>
    </html>
  );
}
