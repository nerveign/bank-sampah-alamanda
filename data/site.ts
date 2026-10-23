export const site = {
  name: 'Bank Sampah Alamanda',
  shortName: 'Alamanda',
  area: 'RW 01 Kelurahan Mangunsari, Kota Semarang',
  // Dipakai di judul tab dan metadata ("Nama | tagline"); tidak tampil di navbar.
  tagline: 'RW 01 Mangunsari, Semarang',
  // Deskripsi untuk hasil pencarian dan pratinjau tautan. Usahakan di bawah
  // 160 karakter agar tidak terpotong.
  description: 'Bank Sampah Alamanda, wadah warga RW 01 Kelurahan Mangunsari, Kota Semarang untuk memilah sampah. Kenali profil, pengurus, regulasi, dan lokasi kami.',
  hero: {
    eyebrow: 'RW 01 Kelurahan Mangunsari, Kota Semarang',
    // Placeholder, menunggu tagline dari pengurus.
    title: 'Pilah sampah, jaga lingkungan kita.',
    description: 'Wadah warga untuk memilah sampah dari rumah. Kenali profil, pengurus, regulasi, dan kegiatan Bank Sampah Alamanda.',
    // Foto slider hero: path di /public (mis. "/images/hero-1.jpg"); null =
    // placeholder. Satu foto = tanpa slider; dua atau lebih = berganti otomatis.
    images: ['/images/hero-1.jpg'] as (string | null)[],
  },
  location: {
    address: 'Pengkol, Kelurahan Mangunsari, Kota Semarang',
    // Rincian alamat untuk data terstruktur (JSON-LD) agar terbaca mesin pencari.
    // Lengkapi dengan nama jalan dan nomor jika sudah ada.
    street: 'Pengkol, RW 01 Kelurahan Mangunsari',
    locality: 'Semarang',
    region: 'Jawa Tengah',
    // Masih pencarian area, belum titik pasti. Ganti dengan link
    // dari Google Maps > Bagikan > Sematkan peta (ambil nilai src iframe).
    mapsEmbedUrl: 'https://www.google.com/maps?q=Pengkol+Mangunsari+Gunungpati+Semarang&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pengkol+Mangunsari+Gunungpati+Semarang',
  },
  instagram: {
    // Belum dikonfirmasi pengurus: pastikan akunnya benar. Handle ini juga
    // dipakai di footer dan data terstruktur (sameAs).
    handle: 'bs_alamanda_mangunsari',
    url: 'https://www.instagram.com/bs_alamanda_mangunsari',
  },
};

export type NavItem = { label: string; id: string };

export const navItems: NavItem[] = [
  { label: 'Beranda', id: 'beranda' },
  { label: 'Tentang', id: 'tentang' },
  { label: 'Aktivitas', id: 'aktivitas' },
  { label: 'Lokasi', id: 'lokasi' },
  { label: 'Kontak', id: 'kontak' },
];

// Section yang tidak punya menu sendiri, dipetakan ke menu induknya: selama
// salah satunya terlihat, menu "Tentang" yang disorot di navbar.
export const sectionToNav: Record<string, string> = {
  'visi-misi': 'tentang',
  pengurus: 'tentang',
  regulasi: 'tentang',
};
