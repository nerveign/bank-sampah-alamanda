import { cn } from "@/lib/utils";
import { pengurusLevels, type Pengurus } from "@/data/pengurus";
import { Section, SectionHeading } from "@/components/site/section";

function nodeTone(level: number) {
  if (level === 0) return "border-transparent bg-accent";
  if (level === 1) return "border-transparent bg-primary text-primary-foreground";
  return "bg-card";
}

function Node({ person, level }: { person: Pengurus; level: number }) {
  return (
    <div className={cn("rounded-2xl border px-5 py-4 text-center", nodeTone(level))}>
      <p
        className={cn(
          "text-xs font-medium tracking-[0.12em] uppercase",
          level === 1 ? "text-primary-foreground/90" : "text-primary",
        )}
      >
        {person.jabatan}
      </p>
      <p className="mt-1 font-semibold">{person.nama}</p>
    </div>
  );
}

export function OrgChart() {
  return (
    <Section id="pengurus">
      <SectionHeading
        number={3}
        eyebrow="Struktur Pengurus"
        title="Orang-orang di balik Bank Sampah Alamanda"
      />

      {/* Desktop/tablet: bagan dengan garis penghubung antar tingkat. */}
      <div className="mt-14 hidden flex-col items-center md:flex">
        {pengurusLevels.map((level, levelIndex) => (
          <ul
            key={levelIndex}
            className={cn(
              "relative flex justify-center",
              levelIndex > 0 &&
                "pt-6 before:absolute before:top-0 before:left-1/2 before:h-6 before:w-px before:bg-primary/25",
            )}
          >
            {level.map((person) => (
              <li
                key={person.jabatan}
                className={cn(
                  "relative w-56 px-2",
                  levelIndex > 0 && [
                    "pt-6",
                    // Garis vertikal pendek ke tiap kotak.
                    "before:absolute before:top-0 before:left-1/2 before:h-6 before:w-px before:bg-primary/25",
                    // Garis horizontal yang menyatukan saudara satu tingkat.
                    "after:absolute after:top-0 after:right-0 after:left-0 after:h-px after:bg-primary/25",
                    "first:after:left-1/2 last:after:right-1/2 only:after:hidden",
                  ],
                )}
              >
                <Node person={person} level={levelIndex} />
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Mobile: daftar bertingkat dengan garis di kiri. */}
      <ol className="mt-10 space-y-6 border-l-2 border-primary/20 pl-6 md:hidden">
        {pengurusLevels.map((level, levelIndex) => (
          <li key={levelIndex} className="relative">
            <span
              aria-hidden
              className="absolute top-5 -left-[31px] size-3 rounded-full border-2 border-background bg-primary"
            />
            <ul className="grid gap-2">
              {level.map((person) => (
                <li key={person.jabatan}>
                  <Node person={person} level={levelIndex} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
