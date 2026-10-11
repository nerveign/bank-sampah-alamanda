import { activityItems } from '@/data/activities';
import { ActivityGrid } from '@/components/site/activity-grid';
import { Section, SectionHeading } from '@/components/site/section';

export function Activities() {
  return (
    <Section id="aktivitas" className="bg-surface">
      <SectionHeading eyebrow="Aktivitas" title="Kegiatan Bank Sampah Alamanda" className="mb-12" />
      <ActivityGrid items={activityItems} />
    </Section>
  );
}
