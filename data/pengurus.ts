export type Pengurus = { jabatan: string; nama: string[] };

// Sumber: spanduk "Pengurus Bank Sampah Alamanda" (PKM3R).
// Bagan dibaca dari atas ke bawah; setiap baris adalah satu tingkat.
// Tingkat 0–1 tampil hijau muda, tingkat 2 (Ketua) tampil hijau tua.
export const pengurusLevels: Pengurus[][] = [
  [{ jabatan: "Pelindung", nama: ["Lurah Mangunsari"] }],
  [{ jabatan: "Penasehat", nama: ["Ketua RW 1", "Ketua Penggerak PKK RW 1"] }],
  [{ jabatan: "Ketua", nama: ["Tri Kayati"] }],
  [
    { jabatan: "Sekretaris", nama: ["Bungsu Fatima"] },
    { jabatan: "Bendahara", nama: ["Fitri Sulistyaningrum"] },
  ],
  [
    { jabatan: "Pemilahan", nama: ["Siti Khotijah", "Asih", "Susilowati", "Musiah"] },
    {
      jabatan: "Penimbangan & Humas",
      nama: ["Imdanah", "Sri Handayani", "Dewi Pemilu", "Sri Karyati"],
    },
    { jabatan: "Pengangkut", nama: ["Solikhin"] },
    { jabatan: "Pemasaran", nama: ["Fitri Sulistya Ningrum", "Suryani"] },
    {
      jabatan: "Edukator",
      nama: ["Wulandari", "Atik Handayani", "Emi Pujiastuti", "Diana Dwi Lestari", "Ida Susanti"],
    },
  ],
  [
    { jabatan: "Unit RT 01", nama: ["Irma"] },
    { jabatan: "Unit RT 02", nama: ["Sunarti", "Ika"] },
    { jabatan: "Unit RT 03", nama: ["Biyanti", "Wiwik Puji Astuti"] },
    { jabatan: "Unit RT 04", nama: ["Rohayati", "Suyani", "Susilowati"] },
    { jabatan: "Unit RT 05", nama: ["Ponirah", "Siti Khotijah", "Diyah"] },
    { jabatan: "Unit RT 06", nama: ["Sri Handayani", "Imdanah", "Indah"] },
    { jabatan: "Unit RT 07", nama: ["Bungsu Fatimah", "Sri Karyati", "Sarwati"] },
  ],
];
