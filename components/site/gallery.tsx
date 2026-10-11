import { galleryItems } from "@/data/gallery";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { Section, SectionHeading } from "@/components/site/section";

export function Gallery() {
  return (
    <Section id="gallery" className="bg-surface">
      <SectionHeading
        number={6}
        eyebrow="Gallery"
        title="Kegiatan Bank Sampah Alamanda"
        className="mb-12"
      />
      <GalleryGrid items={galleryItems} />
    </Section>
  );
}
