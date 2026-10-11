export const site = {
  name: "Bank Sampah Alamanda",
  shortName: "Alamanda",
  area: "RW 01 Kelurahan Mangunsari, Kota Semarang",
  hero: {
    eyebrow: "Bank Sampah · RW 01 Mangunsari",
    // Placeholder, menunggu tagline dari pengurus.
    title: "Pilah Sampah, Jaga Lingkungan Kita",
    // Isi dengan path di /public (mis. "/images/hero.jpg") saat foto asli tersedia.
    image: null as string | null,
  },
};

export type NavItem = { label: string; id: string };

export const navItems: NavItem[] = [
  { label: "Beranda", id: "beranda" },
  { label: "Tentang", id: "tentang" },
  { label: "Pengurus", id: "pengurus" },
  { label: "Regulasi", id: "regulasi" },
  { label: "Lokasi", id: "lokasi" },
  { label: "Gallery", id: "gallery" },
  { label: "Kontak", id: "kontak" },
];

// Section yang tidak punya menu sendiri, dipetakan ke menu induknya.
export const sectionToNav: Record<string, string> = {
  "visi-misi": "tentang",
};
