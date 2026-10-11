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
  eyebrow,
  title,
  inverse = false,
  className,
}: {
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
          "text-xs font-semibold tracking-[0.18em] uppercase sm:text-sm",
          inverse ? "text-primary-foreground/90" : "text-primary",
        )}
      >
        {eyebrow}
      </p>
      <h2 className="mt-4 max-w-3xl text-3xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
