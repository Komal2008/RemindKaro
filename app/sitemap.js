// app/sitemap.js
export default async function sitemap() {
  const baseUrl = "https://remindkro.in";

  // Public indexable routes
  const routes = [
    "",
    "/pricing",
    "/testimonials",
    "/privacy-policy",
    "/terms-of-service",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return routes;
}
