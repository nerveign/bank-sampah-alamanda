import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  number,
  eyebrow,
  title,
  inverse = false,
  className,
}: {
  number: number;
  eyebrow: string;
  title: string;
  // true untuk heading di atas latar hijau/gelap.
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <p
        className={cn(
          "flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase sm:text-sm",
          inverse ? "text-white/70" : "text-muted-foreground",
        )}
      >
        <span
          className={cn(
            "font-semibold tracking-normal",
            inverse ? "text-white" : "text-primary",
          )}
        >
          ({String(number).padStart(2, "0")})
        </span>
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
