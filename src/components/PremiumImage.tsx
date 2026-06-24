import Image from "next/image";

import { cn } from "@/lib/utils";

type PremiumImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  objectPosition?: string;
  sizes: string;
  quality?: number;
  reveal?: boolean;
  parallax?: boolean;
};

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMzInIHZpZXdCb3g9JzAgMCAyNCAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9J2cnIHgxPScwJyB4Mj0nMScgeTE9JzAnIHkyPScxJz48c3RvcCBzdG9wLWNvbG9yPScjRkZGOEYzJy8+PHN0b3Agb2Zmc2V0PScuNTUnIHN0b3AtY29sb3I9JyNGM0RERDUnLz48c3RvcCBvZmZzZXQ9JzEnIHN0b3AtY29sb3I9JyNDOTgyOEUnLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0nMjQnIGhlaWdodD0nMzInIGZpbGw9J3VybCgjZyknLz48L3N2Zz4=";

export function PremiumImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  imageClassName,
  objectPosition = "50% 50%",
  sizes,
  quality = 90,
  reveal = true,
  parallax = false,
}: PremiumImageProps) {
  return (
    <div
      className={cn(
        "image-mask relative overflow-hidden border border-white/80 bg-white shadow-[0_24px_70px_rgba(90,62,54,0.14)]",
        className,
      )}
      data-image-reveal={reveal ? "" : undefined}
      data-parallax={parallax ? "" : undefined}
    >
      <Image
        alt={alt}
        className={cn("h-auto w-full object-cover transition duration-500", imageClassName)}
        height={height}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
        quality={quality}
        sizes={sizes}
        src={src}
        style={{ objectPosition }}
        width={width}
      />
    </div>
  );
}
