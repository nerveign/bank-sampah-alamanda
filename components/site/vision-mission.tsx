import { visionMission } from "@/data/profil";
import { Section, SectionHeading } from "@/components/site/section";

export function VisionMission() {
  return (
    <Section id="visi-misi" className="bg-surface">
      <SectionHeading
        eyebrow="Visi & Misi"
        title="Arah dan tujuan Bank Sampah Alamanda"
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        <div className="flex flex-col justify-between gap-10 rounded-3xl bg-primary p-8 text-primary-foreground sm:p-10 lg:col-span-2">
          <p className="text-xs font-medium tracking-[0.18em] text-primary-foreground/90 uppercase sm:text-sm">
            Visi
          </p>
          <p className="text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
            {visionMission.vision}
          </p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="sr-only">Misi</h3>
          <ol className="grid h-full gap-4 sm:grid-cols-2">
            {visionMission.missions.map((mission, index) => (
              <li
                key={mission}
                className="flex flex-col gap-6 rounded-3xl border bg-card p-6 sm:p-8"
              >
                <span className="text-sm font-semibold text-primary">
                  ({String(index + 1).padStart(2, "0")})
                </span>
                <p className="text-lg leading-snug font-medium">{mission}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
