export type GalleryItem = {
  // Path di /public (mis. "/images/gallery/kerja-bakti.jpg"); null = placeholder.
  src: string | null;
  alt: string;
};

// Placeholder: ganti dengan foto kegiatan asli. Urutan di sini = urutan di grid;
// foto pertama tampil lebih besar. Jumlah 9, 21, 33, dst. mengisi grid tanpa
// sel kosong di tablet (3 kolom) dan desktop (4 kolom).
export const galleryItems: GalleryItem[] = [
  { src: null, alt: "Penimbangan sampah warga" },
  { src: null, alt: "Pemilahan sampah plastik" },
  { src: null, alt: "Pencatatan setoran nasabah" },
  { src: null, alt: "Kerja bakti lingkungan" },
  { src: null, alt: "Sosialisasi memilah sampah" },
  { src: null, alt: "Pengangkutan sampah terpilah" },
  { src: null, alt: "Kegiatan bersama pengurus" },
  { src: null, alt: "Edukasi untuk anak-anak" },
  { src: null, alt: "Hasil pilahan siap dijual" },
];
