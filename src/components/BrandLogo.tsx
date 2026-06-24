import Image from "next/image";

import { brandAssets } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BrandLogoVariant = "horizontal" | "vertical" | "monogram";
type BrandLogoTone = "dark" | "white" | "terracotta";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  tone?: BrandLogoTone;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

const assetMap: Record<BrandLogoVariant, Record<BrandLogoTone, string>> = {
  horizontal: {
    dark: brandAssets.logoHorizontalDark,
    white: brandAssets.logoHorizontalWhite,
    terracotta: brandAssets.logoHorizontalTerracotta,
  },
  vertical: {
    dark: brandAssets.logoVerticalDark,
    white: brandAssets.logoVerticalWhite,
    terracotta: brandAssets.logoVerticalTerracotta,
  },
  monogram: {
    dark: brandAssets.monogramDark,
    white: brandAssets.monogramWhite,
    terracotta: brandAssets.monogramTerracotta,
  },
};

const sizeMap: Record<BrandLogoVariant, { width: number; height: number }> = {
  horizontal: { width: 900, height: 250 },
  vertical: { width: 700, height: 560 },
  monogram: { width: 560, height: 440 },
};

const altMap: Record<BrandLogoVariant, string> = {
  horizontal: "Sabrina Pires",
  vertical: "Sabrina Pires",
  monogram: "Monograma SP Sabrina Pires",
};

export function BrandLogo({
  variant = "horizontal",
  tone = "dark",
  className,
  imageClassName,
  priority = false,
  sizes,
}: BrandLogoProps) {
  const size = sizeMap[variant];

  return (
    <Image
      alt={altMap[variant]}
      className={cn(
        "block h-auto max-w-full select-none object-contain",
        className,
        imageClassName,
      )}
      draggable={false}
      height={size.height}
      priority={priority}
      quality={95}
      sizes={sizes ?? (
        variant === "horizontal"
          ? "244px"
          : variant === "vertical"
            ? "(min-width: 768px) 320px, 70vw"
            : "72px"
      )}
      src={assetMap[variant][tone]}
      width={size.width}
    />
  );
}
