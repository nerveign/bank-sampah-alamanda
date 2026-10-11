import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Foto dengan fallback placeholder selama foto asli belum tersedia.
// Ukuran ditentukan lewat className (mis. aspect ratio) pada pembungkus.
export function Photo({
  src,
  alt,
  sizes,
  className,
}: {
  src: string | null;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={`${alt} (placeholder)`}
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,var(--accent),var(--muted))] text-primary/60"
        >
          <ImageIcon className="size-8" />
          <span className="px-4 text-center text-xs font-medium">{alt}</span>
        </div>
      )}
    </div>
  );
}
