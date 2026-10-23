# Bank Sampah Alamanda

Landing page Bank Sampah Alamanda, wadah memilah sampah untuk warga RW 01 Kelurahan Mangunsari, Kota Semarang.

Satu halaman statis, dibangun dengan Next.js 16, React 19, Tailwind CSS v4, dan shadcn/ui. Spesifikasi lengkap ada di [docs/SPEC.md](docs/SPEC.md).

## Menjalankan

```bash
pnpm install
pnpm dev
```

Buka http://localhost:3000. Untuk mengecek build produksi: `pnpm lint` lalu `pnpm build`.

## Mengganti konten

Semua teks, nama, dan tautan ada di folder `data/`, terpisah dari komponen. Cukup ubah file berikut:

| File | Isi |
|---|---|
| `data/site.ts` | Nama, tagline (judul tab dan metadata), deskripsi SEO, teks hero, foto hero (`hero.images`), alamat, link Google Maps, akun Instagram, menu navbar |
| `data/profil.ts` | Teks Tentang, foto Tentang, Visi & Misi |
| `data/pengurus.ts` | Susunan dan nama pengurus (satu baris array = satu tingkat bagan) |
| `data/regulasi.ts` | Penjelasan dan poin-poin regulasi |
| `data/activities.ts` | Foto kegiatan untuk section Aktivitas |

### Menu navbar

Menu ada 5 item (`navItems` di `data/site.ts`): Beranda, Tentang, Aktivitas, Lokasi, Kontak. Footer memakai daftar yang sama. Section Visi & Misi, Pengurus, dan Regulasi tidak punya menu sendiri; selama salah satunya terlihat, menu **Tentang** yang disorot (`sectionToNav`). Untuk menambah menu, tambahkan item di `navItems` dengan `id` yang sama dengan `id` section-nya.

### Foto

1. Simpan foto di `public/images/`, misalnya `public/images/aktivitas-10.jpg`.
2. Isi `src` atau `image` dengan path-nya tanpa `public`, misalnya `"/images/aktivitas-10.jpg"`.
3. Selama nilainya `null`, yang tampil adalah kotak placeholder.

Foto yang sudah terpasang: `hero-1.jpg` (hero, satu foto sehingga tanpa slider; tambahkan foto ke `hero.images` untuk mengaktifkan slider), `tentang-kami-2.jpg` (Tentang), dan `aktivitas-1.jpg` s.d. `aktivitas-9.jpg` (Aktivitas). Jumlah foto aktivitas 9, 21, 33, dst. mengisi grid tanpa sel kosong.

Gambar dioptimasi otomatis oleh `next/image` saat di-deploy ke Vercel.

### Peta lokasi

Di Google Maps, cari lokasi bank sampah, pilih **Bagikan → Sematkan peta**, lalu salin nilai `src` dari kode iframe ke `mapsEmbedUrl` di `data/site.ts`. Link biasa (**Bagikan → Salin link**) masuk ke `mapsUrl`.

### Logo

File logo ada di `public/images/bank-sampah-logo.png` (PNG transparan, 512×512) dan dipakai langsung di navbar lewat `next/image`. Favicon `app/icon.png` (192×192) dan ikon iOS `app/apple-icon.png` (180×180) dibuat dari logo yang sama; buat ulang keduanya jika logo berganti.

## Konten yang masih perlu dicek

Logo, visi-misi, nama pengurus, foto, dan daftar regulasi sudah terpasang. Yang masih perlu dicek atau dilengkapi:

- Teks hero (masih usulan)
- Teks regulasi (**verifikasi nomor dan tahun peraturan sebelum dipublikasikan**, dan seragamkan penulisan judulnya)
- Titik peta yang tepat (sekarang masih pencarian area) dan alamat lengkap dengan nama jalan
- Akun Instagram (`data/site.ts`; konfirmasi bahwa handle-nya benar, karena ikut masuk ke data terstruktur)
- Teks alt foto aktivitas (`data/activities.ts`; masih generik, sesuaikan dengan isi foto)
- `aktivitas-4.jpg` identik dengan `tentang-kami-2.jpg`; ganti salah satunya jika tidak disengaja
- Nama pengurus tampil publik; pastikan pengurus setuju dan ejaan sudah benar

## Struktur

```
app/            layout, halaman, gaya global, ikon, gambar Open Graph, robots, sitemap
components/site komponen tiap section (navbar, hero, about, dst.) dan data terstruktur
components/ui   komponen shadcn/ui
data/           konten situs
lib/            helper (alamat situs untuk SEO, utilitas)
docs/SPEC.md    spesifikasi dan rencana
```

## SEO

Sudah terpasang: judul dan deskripsi, canonical, Open Graph dan Twitter card, `robots.txt`, `sitemap.xml`, dan data terstruktur (JSON-LD) `WebSite` + `Organization`. Judul dan deskripsi diatur di `data/site.ts` (`tagline` dan `description`; usahakan deskripsi di bawah 160 karakter). Rincian alamat untuk data terstruktur ada di `location` pada file yang sama.

Pemasangan di kode saja tidak membuat situs langsung muncul di Google. Langkah setelah deploy:

1. Buka [Google Search Console](https://search.google.com/search-console) dan tambahkan situs.
2. Verifikasi kepemilikan. Ada tiga cara: file HTML (sudah tersedia di `public/google9e40e5ea23b143dc.html`, jangan dihapus), tag HTML (salin nilai `content` ke environment variable `GOOGLE_SITE_VERIFICATION`, lalu redeploy), atau DNS.
3. Di menu **Sitemap**, kirim `sitemap.xml`. Di **Inspeksi URL**, masukkan alamat halaman utama dan klik **Minta pengindeksan**.
4. Untuk pencarian lokal ("bank sampah dekat saya"), buat dan verifikasi profil di [Google Business Profile](https://www.google.com/business/). Ini berpengaruh besar ke hasil pencarian dan Google Maps, di luar yang bisa dilakukan kode.

Situs produksi: `https://bank-sampah-alamanda.vercel.app`. Pengindeksan biasanya butuh beberapa hari sampai beberapa minggu. Nama "Bank Sampah Alamanda" akan lebih cepat muncul daripada kata kunci umum seperti "bank sampah Semarang".

## Deploy

Hubungkan repo ini ke Vercel. Environment variable berikut opsional (Vercel → Settings → Environment Variables):

| Variabel | Fungsi |
|---|---|
| `SITE_URL` | Alamat situs, mis. `https://alamanda.example`. Dipakai untuk canonical, sitemap, robots, dan data terstruktur. Jika kosong, dipakai domain produksi Vercel secara otomatis. Isi jika memakai domain sendiri yang berbeda dari domain utama di Vercel (mis. www vs tanpa www). |
| `GOOGLE_SITE_VERIFICATION` | Kode verifikasi Google Search Console (lihat bagian SEO). |

Saat dijalankan lokal tanpa variabel, alamat situs di sitemap dan canonical adalah `http://localhost:3000`. Itu wajar dan tidak mempengaruhi produksi.
