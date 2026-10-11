import { navItems, site } from "@/data/site";
import { InstagramIcon } from "@/components/site/instagram-icon";

export function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-2xl font-bold tracking-tight text-white">
            {site.shortName}
          </p>
          <p className="mt-3 max-w-xs leading-relaxed">
            {site.name}, wadah memilah sampah untuk warga {site.area}.
          </p>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
          >
            <InstagramIcon className="size-4" />
            {site.instagram.handle}
          </a>
        </div>

        <nav aria-label="Navigasi footer" className="md:col-span-3">
          <p className="text-xs font-medium tracking-[0.18em] text-white/50 uppercase">
            Menu
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="transition-colors hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="text-xs font-medium tracking-[0.18em] text-white/50 uppercase">
            Alamat
          </p>
          <p className="mt-4 leading-relaxed">{site.location.address}</p>
          <a
            href={site.location.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-white underline-offset-4 hover:underline"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/50 sm:px-6">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
