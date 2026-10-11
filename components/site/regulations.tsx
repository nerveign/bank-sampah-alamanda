import { regulasi } from '@/data/regulasi';
import { Section, SectionHeading } from '@/components/site/section';

export function Regulations() {
  return (
    <Section id="regulasi" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <SectionHeading eyebrow="Regulasi" title={regulasi.title} />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground sm:text-lg">
            {regulasi.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ol className="space-y-4 lg:col-span-7">
          {regulasi.points.map((point, index) => (
            <li key={point.title} className="flex gap-5 rounded-lg border bg-card p-6 sm:gap-6 sm:p-8">
              <span className="text-sm font-semibold text-primary">[{String(index + 1).padStart(2, '0')}]</span>
              <div>
                <h3 className="text-lg leading-snug font-semibold">{point.title}</h3>
                <p className="mt-2 text-muted-foreground">{point.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
