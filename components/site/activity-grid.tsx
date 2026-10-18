"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ActivityItem } from "@/data/activities";
import { Photo } from "@/components/site/photo";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const navButton =
  "flex size-10 items-center justify-center rounded-full bg-white/90 text-foreground shadow-sm transition-colors hover:bg-white";

export function ActivityGrid({ items }: { items: ActivityItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex === null ? null : items[openIndex];

  function step(delta: number) {
    setOpenIndex((index) =>
      index === null ? null : (index + delta + items.length) % items.length,
    );
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={`${item.alt}-${index}`}
            className={cn(index === 0 && "col-span-2 md:row-span-2")}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Lihat foto: ${item.alt}`}
              className="group block aspect-square w-full overflow-hidden rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:rounded-lg"
            >
              <Photo
                src={item.src}
                alt={item.alt}
                sizes={
                  index === 0
                    ? "(min-width: 768px) 50vw, 100vw"
                    : "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                }
                className="size-full transition-transform duration-500 motion-safe:group-hover:scale-[1.02]"
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(open) => !open && setOpenIndex(null)}
      >
        <DialogContent
          className="gap-3 bg-transparent p-0 ring-0 sm:max-w-4xl [&>[data-slot=dialog-close]]:bg-white/90 [&>[data-slot=dialog-close]]:top-3 [&>[data-slot=dialog-close]]:right-3"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") step(1);
            if (event.key === "ArrowLeft") step(-1);
          }}
        >
          {current && (
            <>
              <div className="relative">
                <Photo
                  src={current.src}
                  alt={current.alt}
                  sizes="(min-width: 896px) 896px, 100vw"
                  fit="contain"
                  className="aspect-[4/3] w-full rounded-lg bg-black/80"
                />
                <div className="absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between">
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Foto sebelumnya"
                    className={navButton}
                  >
                    <ChevronLeftIcon className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Foto berikutnya"
                    className={navButton}
                  >
                    <ChevronRightIcon className="size-5" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-md bg-white px-5 py-3">
                <DialogTitle className="text-sm font-medium">{current.alt}</DialogTitle>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {openIndex! + 1} / {items.length}
                </span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
