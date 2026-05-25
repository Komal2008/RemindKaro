import TestimonialsClient from "@/components/TestimonialsClient";
import { cookies } from "next/headers";

export default async function TestimonialsPage() {
  const cookieStore = await cookies();
  const isLoggedIn = !!cookieStore.get("auth_token")?.value;

  return <TestimonialsClient isLoggedIn={isLoggedIn} />;
}
