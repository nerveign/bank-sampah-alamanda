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
  location: {
    address: "Pengkol, Kelurahan Mangunsari, Kota Semarang",
    // Placeholder: pencarian area, belum titik pasti. Ganti dengan link
    // dari Google Maps > Bagikan > Sematkan peta (ambil nilai src iframe).
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Pengkol+Mangunsari+Gunungpati+Semarang&output=embed",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Pengkol+Mangunsari+Gunungpati+Semarang",
  },
  instagram: {
    // Placeholder: ganti dengan akun Instagram Bank Sampah Alamanda.
    handle: "@username",
    url: "https://www.instagram.com/",
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
