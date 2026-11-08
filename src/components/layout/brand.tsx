import Image from "next/image";
import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Pocket Creatives home">
      <Image
        src="/brand/pocket-creatives-logo.png"
        width={300}
        height={150}
        alt="Pocket Creatives"
        sizes="96px"
        preload
      />
    </Link>
  );
}
