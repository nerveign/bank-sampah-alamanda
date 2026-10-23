# Spesifikasi & Rencana — Landing Page Bank Sampah Alamanda

Status: **Fase 0–4 selesai diimplementasikan; konten asli sebagian besar sudah terpasang** · Dibuat 2026-10-11 · Disinkronkan dengan kode 2026-10-21

### Catatan implementasi (perbedaan dari rencana awal)
- **Menu navbar 5 item**, bukan 7: Beranda, Tentang, Aktivitas, Lokasi, Kontak (`navItems` di `data/site.ts`). Section Visi & Misi, Pengurus, dan Regulasi tetap ada di halaman tetapi tidak punya menu sendiri; saat tampil di layar, menu **Tentang** yang disorot (`sectionToNav`). Menu footer memakai daftar yang sama.
- **Navbar** menampilkan logo asli + nama saja; subjudul di bawah nama sudah dihapus. `site.tagline` sekarang dipakai untuk judul tab dan metadata.
- **Hero** saat ini satu foto (`/images/hero-1.jpg`), jadi slider tidak tampil. Kode slider tetap ada dan aktif otomatis bila `hero.images` berisi dua foto atau lebih.
- **Konten asli sudah terpasang:** logo, foto hero dan Tentang, 9 foto aktivitas, visi-misi (dari papan Visi Misi), struktur pengurus (dari spanduk PKM3R), dan 7 regulasi. Yang masih perlu dicek ada di bagian 8.
- **Warna tombol** memakai `#1F7A41`, bukan `#2E9E57`, agar kontras teks putih memenuhi standar (lihat tabel token).
- **shadcn/ui v4** dengan preset `base-nova` (berbasis Base UI, bukan Radix): pola `asChild` diganti `render`, dan `cn` diimpor dari paket `cn`.
- **Menu mobile** memakai Sheet dengan `modal="trap-focus"` (fokus terkunci, scroll halaman tidak), agar link anchor langsung scroll sambil sheet menutup.
- **Aktivitas**: foto pertama tampil 2×2. Jumlah 9, 21, 33, dst. mengisi grid tanpa sel kosong. Klik foto membuka lightbox (panah kiri/kanan, Escape).
- **Kontak** menjadi section tersendiri sebelum footer.
- **SEO**: metadata, canonical, dan Open Graph di `app/layout.tsx`, gambar OG di `app/opengraph-image.tsx`, `app/robots.ts`, `app/sitemap.ts`, data terstruktur JSON-LD di `components/site/structured-data.tsx`, logo di `public/images/bank-sampah-logo.png` dengan favicon `app/icon.png` dan `app/apple-icon.png`. Alamat situs ditentukan di `lib/seo.ts`: env `SITE_URL`, lalu domain produksi Vercel (`VERCEL_PROJECT_PRODUCTION_URL`), lalu localhost. Next.js hanya mengisi `metadataBase` otomatis untuk gambar sosial, bukan untuk canonical, sitemap, dan robots, sehingga alamat ini perlu ditetapkan sendiri.
- Cara mengganti konten dijelaskan di `README.md`.

## 1. Ringkasan

Landing page satu halaman (single page) untuk **Bank Sampah Alamanda**, wadah pemilahan sampah untuk warga **RW 01 Kelurahan Mangunsari, Kota Semarang**. Halaman bersifat statis: tanpa kode server, tanpa form, tanpa database. Seluruh teks dalam **Bahasa Indonesia**.

Tujuan halaman:
- Memperkenalkan Bank Sampah Alamanda dan kegiatannya.
- Menunjukkan struktur pengurus dan regulasi yang menjadi dasar operasionalnya.
- Membantu warga menemukan lokasi (CTA utama: **Lihat Lokasi**).
- Mengarahkan pengunjung ke Instagram untuk informasi terbaru.

## 2. Keputusan yang sudah ditetapkan

| Topik | Keputusan |
|---|---|
| Framework | Next.js 16.3.8 (App Router), React 19, TypeScript, Tailwind v4, pnpm |
| Komponen UI | **shadcn/ui** |
| Sifat halaman | Statis, tanpa server, tanpa form |
| Hosting | Vercel (diurus pemilik proyek) |
| Bahasa | Indonesia saja (`<html lang="id">`) |
| Font | **Inter** sebagai base font, lewat `next/font/google` |
| Logo | Logo asli (`public/images/bank-sampah-logo.png`), dipakai di navbar, favicon, dan JSON-LD |
| Foto | Foto asli untuk hero, Tentang, dan aktivitas; kotak placeholder hanya muncul bila `src` bernilai `null` |
| Elemen referensi yang dibuang | Tombol search di navbar, kartu "Join The Movement", tombol "Login" |
| `output: 'export'` | **Ditunda**, diputuskan nanti (lihat bagian 9) |

## 3. Arah desain

Dua referensi dari pemilik proyek:
1. **"Clears"** (terang, editorial): navbar pill melayang, headline besar dengan tracking rapat, label kapital kecil, penomoran `(01)` berwarna hijau, card foto dengan radius besar, CTA pill hijau dengan ikon panah di lingkaran putih.
2. **banksampah.jakarta.go.id** (gelap): hero foto full-bleed dengan overlay gelap, teks putih tebal, navbar pill translusen di tengah, logo di pill putih di kiri, CTA outline putih.
3. **Situs Desa Cukil** (ditambahkan setelah implementasi, menggantikan referensi 2 untuk navbar dan hero): navbar putih solid dengan logo + nama + subjudul di kiri dan menu di kanan (menu aktif berlatar hijau muda); hero foto gelap dengan eyebrow wilayah, headline besar, paragraf, dua tombol (hijau solid + outline putih), dan titik slider di kanan bawah.

**Perpaduan yang disepakati:**
- **Navbar dan hero** mengikuti referensi 3.
- **Section di bawah hero** terang dengan aksen hijau, teks charcoal, dan gaya referensi 1 (penomoran `(01)`, card rounded, label kapital kecil, banyak whitespace).

### Token warna (usulan, bisa disetel saat implementasi)

| Token | Nilai awal | Pemakaian |
|---|---|---|
| `--primary` (hijau tua) | `#1F7A41` | Latar tombol, teks hijau (penomoran, link). Kontras dengan putih ~5.4:1 |
| `--brand` (hijau terang) | `#2E9E57` | Aksen dekoratif saja (garis, ikon besar, ring fokus); bukan latar teks kecil karena kontras dengan putih hanya ~3.4:1 |
| `--accent` | `#E8F4EC` | Latar hijau muda (badge, hover) |
| `--border` | `#E3E8E4` | Garis dan border |
| `--foreground` (charcoal) | `#1F2421` | Teks utama, bukan hitam pekat |
| `--muted-foreground` | `#5B645F` | Teks sekunder |
| `--background` | `#FFFFFF` | Latar section |
| `--surface` | `#F5F7F5` | Latar card dan section selang-seling |
| `--hero-overlay` | `rgba(15, 20, 17, 0.55)` | Overlay di atas foto hero |

Warna ini dipetakan ke variabel CSS shadcn (`--primary`, `--foreground`, dst.) di `app/globals.css`.

### Tipografi
- Inter untuk semua teks.
- Headline besar: bobot 600–700, tracking rapat (`-0.03em` s.d. `-0.04em`).
- Label kecil: kapital, tracking sedikit renggang.

## 4. Struktur halaman

Satu halaman, urutan dari atas. Setiap section punya `id` untuk anchor dan `scroll-margin-top` agar tidak tertutup navbar.

| # | Section | Anchor | Menu navbar |
|---|---|---|---|
| 1 | Navbar | n/a | n/a |
| 2 | Hero | `#beranda` | Beranda |
| 3 | Tentang | `#tentang` | Tentang |
| 4 | Visi & Misi | `#visi-misi` | (masuk menu Tentang) |
| 5 | Struktur Pengurus | `#pengurus` | (masuk menu Tentang) |
| 6 | Regulasi | `#regulasi` | (masuk menu Tentang) |
| 7 | Aktivitas | `#aktivitas` | Aktivitas |
| 8 | Lokasi | `#lokasi` | Lokasi |
| 9 | Kontak | `#kontak` | Kontak |
| 10 | Footer | n/a | n/a |

Menu navbar (5 item): **Beranda, Tentang, Aktivitas, Lokasi, Kontak**. Anchor `#visi-misi`, `#pengurus`, dan `#regulasi` tetap bisa dituju lewat URL; menu **Tentang** disorot selama salah satunya terlihat.

### 4.1 Navbar
- Bar putih solid selebar layar, `sticky` di atas (tinggi 80px), dengan garis bawah tipis. Hero berada di bawahnya, bukan di belakangnya.
- Kiri: logo asli + "Bank Sampah Alamanda" (tanpa subjudul).
- Desktop: 5 menu di kanan; menu aktif berlatar hijau muda dengan sudut membulat. Tidak ada tombol tambahan.
- Mobile: tombol hamburger di kanan; menu terbuka lewat komponen **Sheet** shadcn.
- Klik menu melakukan smooth scroll ke anchor; menu aktif ditandai sesuai section yang terlihat.

### 4.2 Hero
- Foto full-bleed dengan overlay gelap. Mendukung slider (berganti otomatis tiap 6 detik, crossfade, titik navigasi di kanan bawah) bila `hero.images` berisi dua foto atau lebih; saat ini satu foto, jadi tanpa slider. Auto-play mati bila pengguna memilih *reduced motion*.
- Eyebrow kapital: "RW 01 Kelurahan Mangunsari, Kota Semarang".
- Headline besar putih. Placeholder: **"Pilah sampah, jaga lingkungan kita."**
- Paragraf deskripsi singkat.
- Dua tombol: **Lihat lokasi** (hijau solid, ke `#lokasi`) dan **Kenali kami** (outline putih, ke `#tentang`).
- Tinggi: satu layar dikurangi tinggi navbar.

### 4.3 Tentang
- Teks inti (dari pemilik proyek): bank sampah sebagai wadah untuk memilah sampah, khususnya untuk daerah RW 01 Kelurahan Mangunsari, Kota Semarang.
- Layout dua kolom: teks + penomoran `(01)`, dan satu foto placeholder dengan radius besar.
- Teks akan saya kembangkan sedikit dari kalimat inti, lalu dikoreksi pemilik proyek.

### 4.4 Visi & Misi
- Sudah memakai teks asli dari papan "Visi Misi Alamanda Bank Sampah" (`data/profil.ts`); draft placeholder awal sudah diganti.
- Visi: satu kalimat. Misi: 4 poin dalam card bernomor `[01]`–`[04]`.

### 4.5 Struktur Pengurus
- Hanya **nama dan jabatan**, tanpa foto.
- Ditampilkan sebagai **bagan hierarki** (tingkat atas ke bawah, dengan garis penghubung).
- Data dipisahkan dari komponen (`data/pengurus.ts`) agar mudah diganti.
- Sudah memakai nama asli dari spanduk "Pengurus Bank Sampah Alamanda" (PKM3R): 6 tingkat dari Pelindung, Penasehat, Ketua, Sekretaris/Bendahara, lima seksi, sampai unit RT 01–07. Karena memuat nama warga, pastikan pengurus mengetahui namanya tampil di situs publik.
- Mobile: bagan menyesuaikan, misalnya menjadi tumpukan vertikal dengan garis di sisi kiri.

### 4.6 Regulasi
- Format: **paragraf penjelasan, lalu poin-poin**.
- Isi harus sesuai regulasi dan visi Kota Semarang. Saat ini berisi 7 peraturan (UU, PP, Perpres, Permen LHK, Perda Jawa Tengah, Perda Kota Semarang, Perwal Semarang); **nomor, tahun, dan penulisannya belum diverifikasi** (lihat bagian 8).
- Poin-poin tampil sebagai daftar bernomor dalam card.

### 4.7 Aktivitas
- Foto kegiatan dalam **grid** responsif (2 kolom di mobile, 3–4 di desktop).
- Saat ini 9 foto asli (`public/images/aktivitas-1.jpg` s.d. `-9.jpg`); jumlahnya mudah diubah lewat satu array data (`data/activities.ts`). Teks alt masih generik dan perlu disesuaikan dengan isi tiap foto.
- Klik foto membuka tampilan besar (lightbox sederhana memakai **Dialog** shadcn).

### 4.8 Lokasi
- Alamat: Pengkol, Kelurahan Mangunsari, Kota Semarang.
- **Embed Google Maps** (iframe) dengan `loading="lazy"` dan `title` yang deskriptif.
- Di samping peta: alamat tertulis dan tombol "Buka di Google Maps".
- Embed yang terpasang masih berupa pencarian area (bukan titik pasti); alamat belum memuat nama jalan.

### 4.9 Kontak
- Hanya link ke **Instagram** (tombol/kartu dengan ikon dan handle).
- Handle yang terpasang: `bs_alamanda_mangunsari` (belum dikonfirmasi pemilik proyek). Handle ini juga dipakai di footer dan JSON-LD (`sameAs`).

### 4.10 Footer
- Nama singkat "Alamanda" dan deskripsi, link Instagram, menu (5 item, sama dengan navbar), alamat dengan tautan Google Maps.
- Hak cipta dengan tahun.

## 5. Struktur file (usulan)

```
app/
  layout.tsx            # Inter, metadata, lang="id"
  page.tsx              # menyusun semua section
  globals.css           # token warna, variabel shadcn
components/
  ui/                   # komponen shadcn (button, sheet, card, dialog, dst.)
  site/
    navbar.tsx
    hero.tsx
    about.tsx
    vision-mission.tsx
    org-chart.tsx
    regulations.tsx
    location.tsx
    activities.tsx
    activity-grid.tsx   # grid + lightbox (client)
    hero-slides.tsx     # slider hero (client)
    photo.tsx           # foto dengan fallback placeholder
    section.tsx         # pembungkus section + heading
    structured-data.tsx # JSON-LD
    contact.tsx
    footer.tsx
data/
  site.ts               # nama, hero, alamat, Instagram, Maps, menu
  profil.ts             # Tentang, Visi & Misi
  pengurus.ts
  regulasi.ts
  activities.ts
lib/
  seo.ts                # alamat situs untuk canonical, sitemap, robots
public/
  images/               # foto placeholder, lalu foto asli
```

Semua section adalah Server Component, kecuali yang butuh interaksi (menu mobile di navbar, penanda menu aktif, lightbox aktivitas) yang dipisah sebagai Client Component kecil.

## 6. Rencana implementasi

Setiap fase bisa direview sebelum lanjut.

**Fase 0 — Fondasi**
1. Baca panduan terkait di `node_modules/next/dist/docs/` (sesuai `AGENTS.md`), terutama `next/font` dan `next/image`.
2. Bersihkan scaffold (`app/page.tsx`, aset bawaan di `public/`).
3. Jalankan `shadcn init` (Tailwind v4), tambah komponen: `button`, `sheet`, `card`, `dialog`.
4. Pasang Inter lewat `next/font`, set `lang="id"`, metadata dasar, token warna di `globals.css`.

**Fase 1 — Kerangka dan hero**
5. Navbar (desktop + hamburger mobile) dan Hero dengan CTA "Lihat Lokasi".
6. Smooth scroll, `scroll-margin-top`, dan penanda menu aktif.

**Fase 2 — Konten utama**
7. Tentang dan Visi & Misi.
8. Struktur Pengurus (bagan hierarki).
9. Regulasi.

**Fase 3 — Lokasi, aktivitas, penutup**
10. Lokasi (embed Maps), Aktivitas (grid + lightbox), Kontak, Footer.

**Fase 4 — Finishing**
11. Responsif (mobile, tablet, desktop), aksesibilitas (kontras, fokus keyboard, alt text, label).
12. SEO: title, description, Open Graph, favicon.
13. `pnpm lint` dan `pnpm build` harus bersih; cek visual di browser pada beberapa lebar layar.
14. Ganti placeholder dengan konten asli begitu tersedia.

## 7. Kriteria selesai

- Semua 10 bagian di bagian 4 ada dan menu navbar menuju anchor yang benar.
- Tampilan baik di lebar 375 px, 768 px, dan desktop; tidak ada scroll horizontal.
- Menu hamburger berfungsi di mobile.
- Kontras teks memenuhi standar keterbacaan (terutama teks putih di atas hero).
- `pnpm lint` dan `pnpm build` lolos tanpa error.
- Tidak ada kode server atau form.

## 8. Konten yang masih perlu dicek atau dilengkapi (per 2026-10-21)

Sudah terpasang dan tidak lagi placeholder: logo, visi-misi, nama pengurus, foto hero/Tentang/aktivitas, dan daftar regulasi.

| Kebutuhan | Dipakai di | Kondisi sekarang |
|---|---|---|
| Teks hero (tagline) | Hero | Masih usulan: "Pilah sampah, jaga lingkungan kita." |
| Verifikasi 7 regulasi (nomor, tahun, isi) | Regulasi | Belum diverifikasi; penulisan judul belum seragam (mis. item Perpres) |
| Titik peta pasti dan alamat lengkap | Lokasi, JSON-LD | Embed masih pencarian area; belum ada nama jalan |
| Konfirmasi akun Instagram | Kontak, footer, JSON-LD | Handle terpasang, belum dikonfirmasi |
| Caption alt foto aktivitas | Aktivitas | Generik, belum menggambarkan isi tiap foto |
| Foto unik untuk aktivitas ke-4 | Aktivitas, Tentang | `aktivitas-4.jpg` identik dengan `tentang-kami-2.jpg` |
| Konfirmasi nama pengurus tampil publik | Pengurus | Nama bersumber dari spanduk; ejaan beberapa nama bervariasi |

## 9. Keputusan yang ditunda

**`output: 'export'` di `next.config.ts`.** Belum diputuskan. Catatan untuk keputusan nanti:
- Di Vercel, halaman tanpa fitur server tetap di-prerender statis meskipun tanpa opsi ini.
- Tanpa `export`, optimasi gambar `next/image` aktif otomatis di Vercel (berguna untuk aktivitas).
- Dengan `export`, `next/image` memerlukan `unoptimized` atau loader kustom; manfaatnya hanya bila ada kemungkinan pindah ke hosting statis biasa.
- Rekomendasi: tanpa `export`. Tidak ada pekerjaan di rencana ini yang bergantung pada keputusan tersebut.
