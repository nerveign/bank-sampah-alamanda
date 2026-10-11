import { ArrowUpRightIcon, MapPinIcon } from "lucide-react";
import { site } from "@/data/site";
import { Section, SectionHeading } from "@/components/site/section";

export function Location() {
  const { address, mapsEmbedUrl, mapsUrl } = site.location;

  return (
    <Section id="lokasi">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col lg:col-span-4">
          <SectionHeading eyebrow="Lokasi" title="Temukan kami" />
          <p className="mt-6 leading-relaxed text-muted-foreground sm:text-lg">
            Warga dapat datang langsung ke lokasi Bank Sampah Alamanda untuk
            menyetorkan sampah yang sudah dipilah.
          </p>

          <div className="mt-8 flex gap-4 rounded-3xl border bg-surface p-6">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
              <MapPinIcon className="size-5" />
            </span>
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Alamat
              </p>
              <p className="mt-1 font-semibold">{address}</p>
            </div>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-3 self-start rounded-full bg-primary py-2 pr-2 pl-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Buka di Google Maps
            <span className="flex size-9 items-center justify-center rounded-full bg-white text-primary transition-transform motion-safe:group-hover:rotate-45">
              <ArrowUpRightIcon className="size-4" />
            </span>
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border bg-muted lg:col-span-8">
          <iframe
            src={mapsEmbedUrl}
            title={`Peta lokasi ${site.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="aspect-[4/3] h-full w-full border-0 lg:aspect-auto lg:min-h-[480px]"
          />
        </div>
      </div>
    </Section>
  );
}
