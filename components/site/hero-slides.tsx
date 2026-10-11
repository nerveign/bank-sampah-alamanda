"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 6000;

// Gradasi pengganti selama foto asli belum ada, dibedakan per slide.
const placeholderBackgrounds = [
  "bg-[radial-gradient(ellipse_at_20%_30%,#2e6b45_0%,transparent_55%),radial-gradient(ellipse_at_80%_70%,#3d5a3a_0%,transparent_50%),linear-gradient(135deg,#1c2b22,#0f1712)]",
  "bg-[radial-gradient(ellipse_at_75%_25%,#2f7a52_0%,transparent_55%),radial-gradient(ellipse_at_15%_80%,#4a5e35_0%,transparent_50%),linear-gradient(160deg,#18261d,#0f1712)]",
  "bg-[radial-gradient(ellipse_at_50%_80%,#2a6448_0%,transparent_60%),radial-gradient(ellipse_at_85%_15%,#55603a_0%,transparent_45%),linear-gradient(120deg,#1a2a20,#101814)]",
];

export function HeroSlides({ images }: { images: (string | null)[] }) {
  const [current, setCurrent] = useState(0);
  const hasSlider = images.length > 1;

  useEffect(() => {
    if (!hasSlider) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setCurrent((index) => (index + 1) % images.length),
      INTERVAL_MS,
    );
    return () => clearInterval(timer);
    // `current` ikut di deps agar timer mulai ulang setelah titik diklik.
  }, [hasSlider, images.length, current]);

  return (
    <>
      <div aria-hidden className="absolute inset-0 -z-20">
        {images.map((src, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === current ? "opacity-100" : "opacity-0",
              !src && placeholderBackgrounds[index % placeholderBackgrounds.length],
            )}
          >
            {src ? (
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <span className="absolute bottom-6 left-4 rounded-full bg-white/10 px-3 py-1 text-xs text-white/60 sm:left-6">
                Placeholder foto hero {index + 1}
              </span>
            )}
          </div>
        ))}
      </div>

      {hasSlider && (
        <div className="absolute right-4 bottom-6 flex items-center gap-2 sm:right-6">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Tampilkan foto ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                index === current ? "w-8 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      )}
    </>
  );
}
