import { cn } from '@/lib/utils';
import { pengurusLevels, type Pengurus } from '@/data/pengurus';
import { Section, SectionHeading } from '@/components/site/section';

// Tingkat dengan kotak sebanyak ini atau lebih dibagi rata selebar bagan.
const WIDE_LEVEL = 4;

function nodeTone(level: number) {
  if (level <= 1) return 'border-primary bg-accent';
  if (level === 2) return 'border-transparent bg-primary text-primary-foreground';
  return 'bg-card';
}

function Node({ person, level, className }: { person: Pengurus; level: number; className?: string }) {
  const single = person.nama.length === 1;

  return (
    <div className={cn('rounded-md border px-4 py-4 text-center', nodeTone(level), className)}>
      <p className={cn('text-xs font-semibold tracking-[0.1em] uppercase', level === 2 ? 'text-primary-foreground/90' : 'text-primary')}>{person.jabatan}</p>
      {single ? (
        <p className="mt-1.5 font-semibold">{person.nama[0]}</p>
      ) : (
        <ul className="mt-2 space-y-0.5 text-sm">
          {person.nama.map((nama) => (
            <li key={nama}>{nama}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function OrgChart() {
  return (
    <Section id="pengurus">
      <SectionHeading eyebrow="Struktur Pengurus" title="Struktur organisasi Bank Sampah Alamanda" />

      {/* Desktop: bagan dengan garis penghubung antar tingkat. */}
      <div className="mt-14 hidden flex-col items-center lg:flex">
        {pengurusLevels.map((level, levelIndex) => {
          const wide = level.length >= WIDE_LEVEL;
          return (
            <ul key={levelIndex} className={cn('relative flex justify-center', wide && 'w-full', levelIndex > 0 && 'pt-6 before:absolute before:top-0 before:left-1/2 before:h-6 before:w-px before:bg-primary/25')}>
              {level.map((person) => (
                <li
                  key={person.jabatan}
                  className={cn(
                    'relative flex flex-col',
                    wide ? 'max-w-56 min-w-0 flex-1 px-1.5' : 'w-60 px-2',
                    levelIndex > 0 && [
                      'pt-6',
                      // Garis vertikal pendek ke tiap kotak.
                      'before:absolute before:top-0 before:left-1/2 before:h-6 before:w-px before:bg-primary/25',
                      // Garis horizontal yang menyatukan saudara satu tingkat.
                      'after:absolute after:top-0 after:right-0 after:left-0 after:h-px after:bg-primary/25',
                      'first:after:left-1/2 last:after:right-1/2 only:after:hidden',
                    ],
                  )}
                >
                  <Node person={person} level={levelIndex} className="flex-1" />
                </li>
              ))}
            </ul>
          );
        })}
      </div>

      {/* Mobile/tablet: daftar bertingkat dengan garis di kiri. */}
      <ol className="mt-10 space-y-6 border-l-2 border-primary/20 pl-6 lg:hidden">
        {pengurusLevels.map((level, levelIndex) => (
          <li key={levelIndex} className="relative">
            <span aria-hidden className="absolute top-5 -left-[31px] size-3 rounded-full border-2 border-background bg-primary" />
            <ul className={cn('grid gap-2', level.length > 1 && 'sm:grid-cols-2')}>
              {level.map((person) => (
                <li key={person.jabatan} className="flex">
                  <Node person={person} level={levelIndex} className="flex-1" />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
