export const site = {
  name: 'Bank Sampah Alamanda',
  shortName: 'Alamanda',
  area: 'RW 01 Kelurahan Mangunsari, Kota Semarang',
  // Subjudul kecil di bawah nama pada navbar.
  tagline: 'RW 01 Mangunsari, Semarang',
  hero: {
    eyebrow: 'RW 01 Kelurahan Mangunsari, Kota Semarang',
    // Placeholder, menunggu tagline dari pengurus.
    title: 'Pilah sampah, jaga lingkungan kita.',
    description: 'Wadah warga untuk memilah sampah dari rumah. Kenali profil, pengurus, regulasi, dan kegiatan Bank Sampah Alamanda.',
    // Foto slider hero: path di /public (mis. "/images/hero-1.jpg"); null =
    // placeholder. Satu foto = tanpa slider; dua atau lebih = berganti otomatis.
    images: ['/images/hero-1.webp'] as (string | null)[],
  },
  location: {
    address: 'Pengkol, Kelurahan Mangunsari, Kota Semarang',
    // Placeholder: pencarian area, belum titik pasti. Ganti dengan link
    // dari Google Maps > Bagikan > Sematkan peta (ambil nilai src iframe).
    mapsEmbedUrl: 'https://www.google.com/maps?q=Pengkol+Mangunsari+Gunungpati+Semarang&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pengkol+Mangunsari+Gunungpati+Semarang',
  },
  instagram: {
    // Placeholder: ganti dengan akun Instagram Bank Sampah Alamanda.
    handle: 'bs_alamanda_mangunsari',
    url: 'https://www.instagram.com/bs_alamanda_mangunsari',
  },
};

export type NavItem = { label: string; id: string };

export const navItems: NavItem[] = [
  { label: 'Beranda', id: 'beranda' },
  { label: 'Tentang', id: 'tentang' },
  { label: 'Pengurus', id: 'pengurus' },
  { label: 'Regulasi', id: 'regulasi' },
  { label: 'Lokasi', id: 'lokasi' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Kontak', id: 'kontak' },
];

// Section yang tidak punya menu sendiri, dipetakan ke menu induknya.
export const sectionToNav: Record<string, string> = {
  'visi-misi': 'tentang',
};
