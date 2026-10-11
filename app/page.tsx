import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { VisionMission } from "@/components/site/vision-mission";
import { OrgChart } from "@/components/site/org-chart";
import { Regulations } from "@/components/site/regulations";
import { Location } from "@/components/site/location";
import { Gallery } from "@/components/site/gallery";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

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
        <Location />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
