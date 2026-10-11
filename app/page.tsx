import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { VisionMission } from "@/components/site/vision-mission";
import { OrgChart } from "@/components/site/org-chart";
import { Regulations } from "@/components/site/regulations";

// Kerangka sementara untuk section Fase 3, agar navigasi bisa diuji.
const upcomingSections = [
  { id: "lokasi", title: "Lokasi" },
  { id: "gallery", title: "Gallery" },
  { id: "kontak", title: "Kontak" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <VisionMission />
        <OrgChart />
        <Regulations />
        {upcomingSections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
              <h2 className="text-3xl font-semibold tracking-tight">
                {section.title}
              </h2>
              <p className="mt-2 text-muted-foreground">
                Konten section ini dikerjakan di fase berikutnya.
              </p>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
