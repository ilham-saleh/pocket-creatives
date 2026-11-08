"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { HomePhoto } from "@/components/home/home-photo";
import type { HomePhoto as Photo } from "@/content/home";
export function ProjectVideo({
  id,
  title,
  photo,
  portrait = false,
}: {
  id: string;
  title: string;
  photo: Photo;
  portrait?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className={`project-video ${portrait ? "contain-photo" : ""}`}>
        <HomePhoto photo={photo} eager />
        <Dialog.Trigger className="project-play" aria-label={`Play ${title}`}>
          ▶ <span>Watch the film</span>
        </Dialog.Trigger>
      </div>
      <p className="video-notice">
        Playing loads video from Vimeo.{" "}
        <a href={`https://vimeo.com/${id}`}>Watch on Vimeo ↗</a>
      </p>
      <Dialog.Portal>
        <Dialog.Overlay className="reel-overlay" />
        <Dialog.Content
          className="reel-dialog"
          aria-describedby="project-video-privacy"
        >
          <div className="reel-dialog-header">
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Close className="gallery-close">Close ×</Dialog.Close>
          </div>
          {open && (
            <iframe
              title={title}
              src={`https://player.vimeo.com/video/${id}?autoplay=1&dnt=1&title=0&byline=0`}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
          <p id="project-video-privacy">
            Hosted by Vimeo.{" "}
            <a
              href={`https://vimeo.com/${id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open video on Vimeo
            </a>
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
