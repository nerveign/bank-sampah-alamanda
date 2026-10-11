import { galleryItems } from '@/data/gallery';
import { GalleryGrid } from '@/components/site/gallery-grid';
import { Section, SectionHeading } from '@/components/site/section';

export function Gallery() {
  return (
    <Section id="aktivitas" className="bg-surface">
      <SectionHeading eyebrow="Aktivitas" title="Kegiatan Bank Sampah Alamanda" className="mb-12" />
      <GalleryGrid items={galleryItems} />
    </Section>
  );
}
