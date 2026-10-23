export type ActivityItem = {
  // Path di /public (mis. "/images/aktivitas/kerja-bakti.jpg"); null = placeholder.
  src: string | null;
  alt: string;
};

// Foto kegiatan asli di /public/images. Teks alt masih generik: sesuaikan
// dengan isi tiap foto. Urutan di sini = urutan di grid; foto pertama tampil
// lebih besar. Jumlah 9, 21, 33, dst. mengisi grid tanpa sel kosong di tablet
// (3 kolom) dan desktop (4 kolom).
export const activityItems: ActivityItem[] = [
  { src: "/images/aktivitas-1.jpg", alt: "Penimbangan sampah warga" },
  { src: "/images/aktivitas-2.jpg", alt: "Pemilahan sampah plastik" },
  { src: "/images/aktivitas-3.jpg", alt: "Pencatatan setoran nasabah" },
  { src: "/images/aktivitas-4.jpg", alt: "Kerja bakti lingkungan" },
  { src: "/images/aktivitas-5.jpg", alt: "Sosialisasi memilah sampah" },
  { src: "/images/aktivitas-6.jpg", alt: "Pengangkutan sampah terpilah" },
  { src: "/images/aktivitas-7.jpg", alt: "Kegiatan bersama pengurus" },
  { src: "/images/aktivitas-8.jpg", alt: "Edukasi untuk anak-anak" },
  { src: "/images/aktivitas-9.jpg", alt: "Hasil pilahan siap dijual" },
];
