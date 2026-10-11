import Image from "next/image";
import { MapPinIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/data/site";

export function Hero() {
  const { eyebrow, title, image } = site.hero;

  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-[#16211b]"
    >
      {image ? (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_20%_30%,#2e6b45_0%,transparent_55%),radial-gradient(ellipse_at_80%_70%,#3d5a3a_0%,transparent_50%),linear-gradient(135deg,#1c2b22,#0f1712)]"
        >
          <span className="absolute right-4 bottom-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
            Placeholder foto hero
          </span>
        </div>
      )}

      {/* Overlay agar teks putih tetap terbaca di atas foto apa pun. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/40 via-transparent to-black/20"
      />

      <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-20 sm:px-6">
        <p className="text-xs font-medium tracking-[0.2em] text-white/75 uppercase sm:text-sm">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] font-bold tracking-[-0.04em] text-balance text-white sm:text-6xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
          {site.name} · {site.area}
        </p>
        <a
          href="#lokasi"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-10 h-12 gap-2 rounded-full border-white/80 bg-transparent px-6 text-base text-white hover:bg-white hover:text-foreground",
          )}
        >
          <MapPinIcon className="size-5" />
          Lihat Lokasi
        </a>
      </div>
    </section>
  );
}
