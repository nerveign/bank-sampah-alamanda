import { CheckIcon } from 'lucide-react';
import { about } from '@/data/profil';
import { Photo } from '@/components/site/photo';
import { Section, SectionHeading } from '@/components/site/section';

export function About() {
  return (
    <Section id="tentang">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Tentang Kami" title={about.title} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-4">
            {about.points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <CheckIcon className="size-4" />
                </span>
                <div>
                  <p className="font-semibold">{point.title}</p>
                  <p className="text-sm text-muted-foreground">{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <Photo src={about.image} alt="Kegiatan memilah sampah di Bank Sampah Alamanda" sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/5] rounded-3xl sm:aspect-[4/3] lg:aspect-[4/5]" />
        </div>
      </div>
    </Section>
  );
}
