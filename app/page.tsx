import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";

// Kerangka sementara untuk section Fase 2–3, agar navigasi bisa diuji.
const upcomingSections = [
  { id: "tentang", title: "Tentang" },
  { id: "visi-misi", title: "Visi & Misi" },
  { id: "pengurus", title: "Struktur Pengurus" },
  { id: "regulasi", title: "Regulasi" },
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
        {upcomingSections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={
              index % 2 === 0
                ? "scroll-mt-24 bg-background"
                : "scroll-mt-24 bg-surface"
            }
          >
            <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
              <p className="text-sm font-semibold text-primary">
                ({String(index + 1).padStart(2, "0")})
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
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
