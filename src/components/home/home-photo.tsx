import Image from "next/image";
import type { HomePhoto as Photo } from "@/content/home";

export function HomePhoto({
  photo,
  className = "",
  sizes = "100vw",
  eager = false,
  decorative = false,
}: {
  photo: Photo;
  className?: string;
  sizes?: string;
  eager?: boolean;
  decorative?: boolean;
}) {
  return (
    <Image
      src={photo.image}
      alt={decorative ? "" : photo.alt}
      fill
      sizes={sizes}
      className={`home-photo ${className}`}
      style={{ objectPosition: photo.position }}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      placeholder="blur"
    />
  );
}
