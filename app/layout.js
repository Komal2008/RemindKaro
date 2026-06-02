// app/layout.js
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import AppProviders from "@/components/providers/AppProviders";
import StructuredData from "@/components/ui/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://remindkro.in"),
  title: {
    default: "RemindKaro — Smart AI Deadline & Reminders Dashboard",
    template: "%s | RemindKaro",
  },
  description:
    "Intelligent AI-powered deadline scheduler and reminder assistant. Track coding tests, assignments, interviews, and hackathons with native voice entry and smart urgency escalation.",
  keywords: [
    "remindkaro",
    "reminder",
    "deadline tracker",
    "ai scheduler",
    "assignment reminder",
    "hackathon submission tracker",
    "reminders in india",
    "whatsapp reminders",
    "telegram reminders",
    "voice task scheduler",
  ],
  authors: [{ name: "RemindKaro Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RemindKaro — Smart AI Deadline & Reminders Dashboard",
    description:
      "Intelligent AI-powered deadline scheduler and reminder assistant. Track coding tests, assignments, interviews, and hackathons with native voice entry and smart urgency escalation.",
    url: "https://remindkro.in",
    siteName: "RemindKaro",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "RemindKaro — Smart AI Deadline & Reminders Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RemindKaro — Smart AI Deadline & Reminders Dashboard",
    description:
      "Intelligent AI-powered deadline scheduler and reminder assistant. Track coding tests, assignments, and interviews with smart urgency escalation.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('remindkaro-theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);else document.documentElement.setAttribute('data-theme',window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <StructuredData />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <AppProviders>
          <main>{children}</main>
        </AppProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
