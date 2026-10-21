import { ArrowUpRightIcon } from "lucide-react";
import { site } from "@/data/site";
import { InstagramIcon } from "@/components/site/instagram-icon";
import { SectionHeading } from "@/components/site/section";

export function Contact() {
  const { handle, url } = site.instagram;

  return (
    <section id="kontak" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        {/* grid-cols-1 mengunci kolom ke lebar card; tanpanya kolom implisit
            melebar mengikuti isi dan keluar dari card di layar kecil. */}
        <div className="grid grid-cols-1 items-end gap-10 rounded-lg bg-primary p-8 text-primary-foreground sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <SectionHeading
              eyebrow="Kontak"
              title="Ikuti kabar dan kegiatan kami di Instagram"
              inverse
            />
            <p className="mt-6 max-w-md leading-relaxed text-primary-foreground/90 sm:text-lg">
              Jadwal penimbangan, informasi kegiatan, dan dokumentasi terbaru
              kami bagikan lewat Instagram.
            </p>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-full bg-white py-2 pr-2 pl-5 text-foreground transition-shadow hover:shadow-lg sm:pl-3 lg:justify-self-end"
          >
            <span className="flex min-w-0 items-center gap-3">
              {/* Disembunyikan di layar kecil agar handle muat satu baris. */}
              <span className="hidden size-11 shrink-0 items-center justify-center rounded-full bg-accent text-primary sm:flex">
                <InstagramIcon className="size-5" />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-xs text-muted-foreground">Instagram</span>
                <span className="block text-sm font-semibold break-all sm:text-base">{handle}</span>
              </span>
            </span>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform motion-safe:group-hover:rotate-45">
              <ArrowUpRightIcon className="size-5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
