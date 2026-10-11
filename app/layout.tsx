import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const description = `${site.name}, wadah memilah sampah untuk warga ${site.area}. Profil, visi misi, pengurus, regulasi, lokasi, dan kegiatan.`;

// metadataBase tidak diset: di Vercel, Next.js otomatis memakai domain
// produksi proyek. Set manual di sini jika memakai domain sendiri.
export const metadata: Metadata = {
  title: site.name,
  description,
  openGraph: {
    title: site.name,
    description,
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
