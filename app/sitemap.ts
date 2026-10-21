import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

// Halaman tunggal; anchor (#tentang, dst.) tidak dimasukkan ke sitemap.
// lastModified sengaja tidak diisi: tanggal build bukan tanggal perubahan
// konten, dan Google mengabaikan lastmod yang tidak akurat.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }];
}
