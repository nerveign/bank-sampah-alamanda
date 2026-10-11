"use client";

import { useEffect, useState } from "react";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, sectionToNav, site } from "@/data/site";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Navbar dianggap "di atas hero" sampai hero hampir tergulir habis.
const HERO_EXIT_OFFSET = 96;

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

function useOnHero() {
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("beranda");
    if (!hero) return;
    const update = () =>
      setOnHero(window.scrollY < hero.offsetHeight - HERO_EXIT_OFFSET);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return onHero;
}

export function Navbar() {
  const active = useActiveSection();
  const onHero = useOnHero();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#beranda"
          className="justify-self-start rounded-full bg-white px-5 py-2.5 text-lg font-bold tracking-tight text-primary shadow-sm"
        >
          {site.shortName}
        </a>

        <nav
          aria-label="Navigasi utama"
          className={cn(
            "hidden rounded-full border p-1.5 backdrop-blur-md transition-colors duration-300 lg:block",
            onHero
              ? "border-white/15 bg-white/10 text-white"
              : "border-border bg-white/85 text-foreground shadow-sm",
          )}
        >
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    onHero
                      ? "text-white/80 hover:text-white aria-[current]:bg-white/20 aria-[current]:text-white"
                      : "text-muted-foreground hover:text-foreground aria-[current]:bg-accent aria-[current]:text-accent-foreground",
                  )}
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
            className={cn(
              "flex size-11 items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-300 lg:hidden",
              onHero
                ? "border-white/15 bg-white/10 text-white"
                : "border-border bg-white/85 text-foreground shadow-sm",
            )}
          >
            <MenuIcon className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-4/5 max-w-xs">
            <SheetHeader className="px-6 pt-6">
              <SheetTitle className="text-lg font-bold tracking-tight text-primary">
                {site.shortName}
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
                      className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted aria-[current]:bg-accent aria-[current]:text-accent-foreground"
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
