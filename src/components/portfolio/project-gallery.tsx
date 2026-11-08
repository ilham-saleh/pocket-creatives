"use client";
import { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { HomePhoto } from "@/components/home/home-photo";
import type { HomePhoto as Photo } from "@/content/home";
export function ProjectGallery({
  photos,
  title,
}: {
  photos: Photo[];
  title: string;
}) {
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  return (
    <Dialog.Root
      open={active !== null}
      onOpenChange={(open) => {
        if (!open) setActive(null);
      }}
    >
      <div className="project-gallery">
        {photos.map((photo, i) => (
          <Dialog.Trigger asChild key={photo.image.src}>
            <button
              className="gallery-image"
              onClick={(event) => {
                trigger.current = event.currentTarget;
                setActive(i);
              }}
              aria-label={`Enlarge image ${i + 1}: ${photo.alt}`}
            >
              <HomePhoto photo={photo} />
              <span aria-hidden="true">↗</span>
            </button>
          </Dialog.Trigger>
        ))}
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="reel-overlay" />
        <Dialog.Content
          className="gallery-dialog"
          aria-describedby={undefined}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            trigger.current?.focus();
          }}
        >
          <div className="reel-dialog-header">
            <Dialog.Title>
              {title} — image {active === null ? 1 : active + 1} of{" "}
              {photos.length}
            </Dialog.Title>
            <Dialog.Close className="gallery-close">Close ×</Dialog.Close>
          </div>
          {active !== null && (
            <Image
              src={photos[active].image}
              alt={photos[active].alt}
              sizes="90vw"
              className="gallery-full"
            />
          )}
          {photos.length > 1 && (
            <div className="gallery-controls">
              <button
                onClick={() =>
                  setActive(
                    (i) => ((i ?? 0) - 1 + photos.length) % photos.length,
                  )
                }
              >
                ← Previous
              </button>
              <button
                onClick={() => setActive((i) => ((i ?? 0) + 1) % photos.length)}
              >
                Next →
              </button>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
