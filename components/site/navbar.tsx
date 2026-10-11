"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { navItems, sectionToNav, site } from "@/data/site";
import { LogoMark } from "@/components/site/logo-mark";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function useActiveSection() {
  const [active, setActive] = useState(navItems[0].id);

  useEffect(() => {
    const ids = [...navItems.map((item) => item.id), ...Object.keys(sectionToNav)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Section yang melintasi garis tengah layar dianggap aktif.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(sectionToNav[entry.target.id] ?? entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

const linkClass =
  "rounded-lg font-medium text-foreground transition-colors hover:bg-muted aria-[current]:bg-accent aria-[current]:text-accent-foreground";

export function Navbar() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#beranda" className="flex items-center gap-3">
          <LogoMark className="size-10 shrink-0" />
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight text-primary sm:text-lg">
              {site.name}
            </span>
            <span className="block text-xs text-muted-foreground sm:text-sm">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`${linkClass} block px-3.5 py-2.5 text-[0.95rem]`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* trap-focus: fokus terkunci di sheet tapi scroll halaman tidak,
            jadi link anchor bisa langsung scroll sementara sheet menutup. */}
        <Sheet open={menuOpen} onOpenChange={setMenuOpen} modal="trap-focus">
          <SheetTrigger
            aria-label="Buka menu"
            className="flex size-11 items-center justify-center rounded-lg border text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            <MenuIcon className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-4/5 max-w-xs">
            <SheetHeader className="px-6 pt-6">
              <SheetTitle className="text-lg font-bold tracking-tight text-primary">
                {site.name}
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Navigasi utama">
              <ul className="flex flex-col gap-1 px-3">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active === item.id ? "true" : undefined}
                      className={`${linkClass} block px-3 py-3 text-base`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
