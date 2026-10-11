import { site } from "@/data/site";
import { HeroSlides } from "@/components/site/hero-slides";

export function Hero() {
  const { eyebrow, title, description, images } = site.hero;

  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-[calc(100svh-5rem)] scroll-mt-24 items-center overflow-hidden bg-[#16211b]"
    >
      <HeroSlides images={images} />

      {/* Overlay agar teks putih tetap terbaca di atas foto apa pun. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/45 via-black/15 to-transparent"
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-white/85 uppercase sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] font-bold tracking-[-0.045em] text-balance text-white sm:text-6xl lg:text-[5.5rem]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 sm:text-xl">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#lokasi"
            className="inline-flex h-13 items-center rounded-lg bg-primary px-7 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Lihat lokasi
          </a>
          <a
            href="#tentang"
            className="inline-flex h-13 items-center rounded-lg border border-white/70 px-7 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Kenali kami
          </a>
        </div>
      </div>
    </section>
  );
}
