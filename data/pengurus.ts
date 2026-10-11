export type Pengurus = { jabatan: string; nama: string };

// Bagan dibaca dari atas ke bawah; setiap baris adalah satu tingkat.
// Placeholder: ganti jabatan dan nama sesuai susunan pengurus asli.
export const pengurusLevels: Pengurus[][] = [
  [{ jabatan: "Pembina", nama: "Nama Pembina" }],
  [{ jabatan: "Ketua", nama: "Nama Ketua" }],
  [
    { jabatan: "Sekretaris", nama: "Nama Sekretaris" },
    { jabatan: "Bendahara", nama: "Nama Bendahara" },
  ],
  [
    { jabatan: "Seksi Penimbangan", nama: "Nama Anggota" },
    { jabatan: "Seksi Pemilahan", nama: "Nama Anggota" },
    { jabatan: "Seksi Humas & Edukasi", nama: "Nama Anggota" },
  ],
];
