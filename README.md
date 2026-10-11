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
| `data/site.ts` | Nama, subjudul navbar, teks hero, foto slider hero (`hero.images`), alamat, link Google Maps, akun Instagram, menu navbar |
| `data/profil.ts` | Teks Tentang, foto Tentang, Visi & Misi |
| `data/pengurus.ts` | Susunan dan nama pengurus (satu baris array = satu tingkat bagan) |
| `data/regulasi.ts` | Penjelasan dan poin-poin regulasi |
| `data/gallery.ts` | Foto kegiatan untuk gallery |

### Foto

1. Simpan foto di `public/images/`, misalnya `public/images/gallery/kerja-bakti.jpg`.
2. Isi `src` atau `image` dengan path-nya tanpa `public`, misalnya `"/images/gallery/kerja-bakti.jpg"`.
3. Selama nilainya `null`, yang tampil adalah kotak placeholder.

Gambar dioptimasi otomatis oleh `next/image` saat di-deploy ke Vercel.

### Peta lokasi

Di Google Maps, cari lokasi bank sampah, pilih **Bagikan → Sematkan peta**, lalu salin nilai `src` dari kode iframe ke `mapsEmbedUrl` di `data/site.ts`. Link biasa (**Bagikan → Salin link**) masuk ke `mapsUrl`.

## Konten yang masih placeholder

- Tagline hero, foto hero, dan foto Tentang
- Visi & Misi
- Nama dan susunan pengurus
- Teks regulasi (**verifikasi nomor dan tahun peraturan sebelum dipublikasikan**)
- Titik peta yang tepat (sekarang masih pencarian area)
- Akun Instagram
- Foto gallery
- Logo (sementara teks "Alamanda"; ikon situs di `app/icon.svg`)

## Struktur

```
app/            layout, halaman, gaya global, ikon, gambar Open Graph
components/site komponen tiap section (navbar, hero, about, dst.)
components/ui   komponen shadcn/ui
data/           konten situs
docs/SPEC.md    spesifikasi dan rencana
```

## Deploy

Hubungkan repo ini ke Vercel. Tidak perlu konfigurasi atau environment variable tambahan.
