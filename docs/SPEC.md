# Spesifikasi & Rencana — Landing Page Bank Sampah Alamanda

Status: **Fase 0–4 selesai diimplementasikan**, menunggu konten asli · Dibuat 2026-10-11

### Catatan implementasi (perbedaan dari rencana awal)
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
| Logo | Sementara teks **"Alamanda"** (logo asli menyusul) |
| Foto | Placeholder dulu untuk hero, tentang, dan aktivitas |
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
| 5 | Struktur Pengurus | `#pengurus` | Pengurus |
| 6 | Regulasi | `#regulasi` | Regulasi |
| 7 | Aktivitas | `#aktivitas` | Aktivitas |
| 8 | Lokasi | `#lokasi` | Lokasi |
| 9 | Kontak | `#kontak` | Kontak |
| 10 | Footer | n/a | n/a |

Menu navbar (7 item): **Beranda, Tentang, Pengurus, Regulasi, Aktivitas, Lokasi, Kontak**.

### 4.1 Navbar
- Bar putih solid selebar layar, `sticky` di atas (tinggi 80px), dengan garis bawah tipis. Hero berada di bawahnya, bukan di belakangnya.
- Kiri: logo (sementara ikon daun) + "Bank Sampah Alamanda" + subjudul "RW 01 Mangunsari, Semarang".
- Desktop: 7 menu di kanan; menu aktif berlatar hijau muda dengan sudut membulat. Tidak ada tombol tambahan.
- Mobile: tombol hamburger di kanan; menu terbuka lewat komponen **Sheet** shadcn.
- Klik menu melakukan smooth scroll ke anchor; menu aktif ditandai sesuai section yang terlihat.

### 4.2 Hero
- Slider foto full-bleed (placeholder, berganti otomatis tiap 6 detik, crossfade), overlay gelap, titik navigasi di kanan bawah. Satu foto = tanpa slider. Auto-play mati bila pengguna memilih *reduced motion*.
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
- Placeholder dulu, nanti diganti pemilik proyek.
- Visi: satu kalimat. Misi: 4 poin dalam card bernomor `(01)`–`(04)`.
- Draft placeholder:
  - **Visi:** "Mewujudkan lingkungan RW 01 Mangunsari yang bersih, sehat, dan berdaya melalui pengelolaan sampah yang bertanggung jawab."
  - **Misi:**
    1. Mengajak warga memilah sampah dari rumah.
    2. Mengelola sampah bernilai ekonomi agar memberi manfaat bagi warga.
    3. Mengurangi sampah yang berakhir di tempat pembuangan akhir.
    4. Meningkatkan kesadaran lingkungan melalui edukasi dan kegiatan bersama.

### 4.5 Struktur Pengurus
- Hanya **nama dan jabatan**, tanpa foto.
- Ditampilkan sebagai **bagan hierarki** (tingkat atas ke bawah, dengan garis penghubung).
- Data dipisahkan dari komponen (`data/pengurus.ts`) agar mudah diganti.
- Placeholder: Pembina, Ketua, Sekretaris, Bendahara, beberapa seksi di bawahnya. Struktur dan nama asli dari pemilik proyek.
- Mobile: bagan menyesuaikan, misalnya menjadi tumpukan vertikal dengan garis di sisi kiri.

### 4.6 Regulasi
- Format: **paragraf penjelasan, lalu poin-poin**.
- Isi harus sesuai regulasi dan visi Kota Semarang; teks asli dari pemilik proyek. Sampai teks tersedia, pakai placeholder yang jelas bertanda.
- Poin-poin tampil sebagai daftar bernomor dalam card.

### 4.7 Aktivitas
- Foto kegiatan dalam **grid** responsif (2 kolom di mobile, 3–4 di desktop).
- Placeholder dulu; jumlahnya mudah diubah lewat satu array data (`data/activities.ts`).
- Klik foto membuka tampilan besar (lightbox sederhana memakai **Dialog** shadcn).

### 4.8 Lokasi
- Alamat: Pengkol, Kelurahan Mangunsari, Kota Semarang.
- **Embed Google Maps** (iframe) dengan `loading="lazy"` dan `title` yang deskriptif.
- Di samping peta: alamat tertulis dan tombol "Buka di Google Maps".
- Butuh dari pemilik proyek: link embed Google Maps dan alamat lengkap.

### 4.9 Kontak
- Hanya link ke **Instagram** (tombol/kartu dengan ikon dan handle).
- Butuh dari pemilik proyek: handle/URL Instagram.

### 4.10 Footer
- Nama "Bank Sampah Alamanda", alamat singkat, link Instagram, dan tautan ke section-section utama.
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
    contact.tsx
    footer.tsx
data/
  site.ts               # nama, alamat, link Instagram, link Maps
  pengurus.ts
  regulasi.ts
  activities.ts
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

## 8. Konten yang belum ada (dari pemilik proyek)

| Kebutuhan | Dipakai di | Sementara |
|---|---|---|
| File logo | Navbar, footer, favicon | Teks "Alamanda" |
| Teks hero (tagline) | Hero | Placeholder usulan |
| Visi & Misi asli | Visi & Misi | Placeholder usulan |
| Nama pengurus dan susunan hierarkinya | Pengurus | Placeholder jabatan |
| Teks regulasi (penjelasan dan poin-poin) | Regulasi | Placeholder bertanda |
| Link embed Google Maps dan alamat lengkap | Lokasi | Belum ada peta |
| Handle/URL Instagram | Kontak, footer | Tautan kosong |
| Foto: hero, tentang, aktivitas | Hero, Tentang, Aktivitas | Placeholder |
| Referensi desain tambahan | Seluruh tampilan | Menunggu |

## 9. Keputusan yang ditunda

**`output: 'export'` di `next.config.ts`.** Belum diputuskan. Catatan untuk keputusan nanti:
- Di Vercel, halaman tanpa fitur server tetap di-prerender statis meskipun tanpa opsi ini.
- Tanpa `export`, optimasi gambar `next/image` aktif otomatis di Vercel (berguna untuk aktivitas).
- Dengan `export`, `next/image` memerlukan `unoptimized` atau loader kustom; manfaatnya hanya bila ada kemungkinan pindah ke hosting statis biasa.
- Rekomendasi: tanpa `export`. Tidak ada pekerjaan di rencana ini yang bergantung pada keputusan tersebut.
