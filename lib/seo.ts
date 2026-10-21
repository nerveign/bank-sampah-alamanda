// URL kanonik situs, dipakai untuk canonical, sitemap, robots, dan data
// terstruktur. Urutan: SITE_URL (isi manual, mis. untuk domain sendiri), lalu
// domain produksi Vercel (otomatis saat build di Vercel), lalu localhost.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")
).replace(/\/+$/, "");
