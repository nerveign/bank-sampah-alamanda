import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Nama + wilayah di judul membantu pencarian lokal ("bank sampah Semarang").
const title = `${site.name} | ${site.tagline}`;
const { description } = site;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large", "max-snippet": -1 },
  },
  // Kode verifikasi Google Search Console (metode tag HTML). Tidak dirender
  // jika variabel tidak diisi.
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
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
