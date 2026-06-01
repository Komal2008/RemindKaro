// app/robots.js
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/dashboard/",
          "/login",
          "/signup",
          "/forgot-password",
          "/reset-password",
          "/onboarding",
        ],
      },
    ],
    sitemap: "https://remindkro.in/sitemap.xml",
  };
}
