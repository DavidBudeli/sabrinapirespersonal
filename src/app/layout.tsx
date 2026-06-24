import type { Metadata } from "next";
import { Geist_Mono, Manrope, Playfair_Display } from "next/font/google";
import { brandAssets } from "@/lib/constants";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://personal-sabrina-pires.com"),
  title: "Personal Sabrina Pires | Movimento com propósito",
  description:
    "Consultoria online, acompanhamento presencial e Pilates para quem busca força, mobilidade, definição muscular e qualidade de vida com orientação personalizada.",
  icons: {
    icon: [
      { url: brandAssets.favicon, type: "image/svg+xml" },
      { url: brandAssets.faviconIco, sizes: "any" },
    ],
    apple: [{ url: brandAssets.appleTouchIcon, sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Sabrina Pires",
    description: "Movimento com propósito para transformar seu corpo.",
    type: "website",
    images: [
      {
        url: brandAssets.ogImage,
        width: 1200,
        height: 630,
        alt: "Sabrina Pires - Movimento com propósito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabrina Pires",
    description: "Movimento com propósito para transformar seu corpo.",
    images: [brandAssets.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${playfair.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">{children}</body>
    </html>
  );
}
