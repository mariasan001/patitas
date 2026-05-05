import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { absoluteUrl, siteConfig } from "@/lib/siteConfig";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "Pet grooming",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: absoluteUrl(),
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: absoluteUrl(),
    siteName: siteConfig.name,
    type: "website",
    locale: "es_MX",
    images: [
      {
        url: absoluteUrl(siteConfig.image),
        width: 1536,
        height: 1024,
        alt: "Patitas Spa Condesa, baño y grooming para mascotas en CDMX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.image)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={quicksand.variable}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/img/hero_web_sin_fondo.webp"
          type="image/webp"
          media="(min-width: 769px)"
        />
        <link
          rel="preload"
          as="image"
          href="/img/hero_movil.webp"
          type="image/webp"
          media="(max-width: 768px)"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
