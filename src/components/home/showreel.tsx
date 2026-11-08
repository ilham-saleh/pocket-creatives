"use client";

import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { HomePhoto } from "./home-photo";
import type { HomePhoto as Photo } from "@/content/home";

export function Showreel({ photo }: { photo: Photo }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="reel-frame">
        <HomePhoto photo={photo} />
        <div className="reel-shade" />
        <Dialog.Trigger asChild>
          <button
            className="reel-trigger"
            aria-label="Play Pocket Creatives showreel"
          >
            <span>Play</span>
            <span className="reel-play" aria-hidden="true">
              ▶
            </span>
            <span>Reel</span>
          </button>
        </Dialog.Trigger>
        <p className="reel-caption">
          Pocket Creatives in 73 Seconds — This Is Us
        </p>
      </div>
      <p className="reel-source">
        Watch on Vimeo <span aria-hidden="true">↗</span>{" "}
        <a href="https://vimeo.com/1101645222">Open the showreel</a>
      </p>
      <Dialog.Portal>
        <Dialog.Overlay className="reel-overlay" />
        <Dialog.Content className="reel-dialog" aria-describedby="reel-privacy">
          <div className="reel-dialog-header">
            <Dialog.Title>Pocket Creatives — showreel</Dialog.Title>
            <Dialog.Close asChild>
              <button className="menu-close" aria-label="Close showreel">
                <span />
                <span />
              </button>
            </Dialog.Close>
          </div>
          {open && (
            <iframe
              title="Pocket Creatives in 73 Seconds — This Is Us"
              src="https://player.vimeo.com/video/1101645222?autoplay=1&dnt=1&title=0&byline=0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
          <p id="reel-privacy">
            Video hosted by Vimeo.{" "}
            <a
              href="https://vimeo.com/1101645222"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open on Vimeo if playback is unavailable
            </a>
            .
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
