import TestimonialsClient from "@/components/TestimonialsClient";
import { cookies } from "next/headers";

export const metadata = {
  title: "User Testimonials & Reviews",
  description:
    "Read what students, developers, and freelancers have to say about RemindKaro. See how our AI-powered reminders help them stay on top of coding tests, hackathons, and deadlines.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "User Testimonials & Reviews — RemindKaro",
    description:
      "Read what students, developers, and freelancers have to say about RemindKaro. See how our AI-powered reminders help them stay on top of coding tests, hackathons, and deadlines.",
    url: "https://remindkro.in/testimonials",
  },
  twitter: {
    title: "User Testimonials & Reviews — RemindKaro",
    description:
      "Read what students, developers, and freelancers have to say about RemindKaro. See how our AI-powered reminders help them stay on top of coding tests, hackathons, and deadlines.",
  },
};

export default async function TestimonialsPage() {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get("auth_token")?.value;

  return <TestimonialsClient isLoggedIn={isLoggedIn} />;
}
