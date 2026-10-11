import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { VisionMission } from "@/components/site/vision-mission";
import { OrgChart } from "@/components/site/org-chart";
import { Regulations } from "@/components/site/regulations";
import { Location } from "@/components/site/location";
import { Activities } from "@/components/site/activities";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <a
        href="#tentang"
        className="sr-only z-50 rounded-full bg-white px-4 py-2 font-medium text-primary shadow focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Lewati ke konten
      </a>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <VisionMission />
        <OrgChart />
        <Regulations />
        <Location />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
