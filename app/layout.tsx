import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zevarbyus.com"),
  title: "ZevarByUs | Crafted For Every Soul",
  description:
    "The digital home of ZevarByUs, where jewellery is celebrated as art, craftsmanship, and joy for every woman.",
  keywords: [
    "ZevarByUs",
    "crafted jewellery",
    "Indian jewellery",
    "bridal jewellery",
    "everyday jewellery",
    "Crafted For Every Soul"
  ],
  openGraph: {
    title: "ZevarByUs | Crafted For Every Soul",
    description:
      "Explore handcrafted jewellery curated with beauty, warmth, and timeless design.",
    images: ["/images/zevar-hero.png"],
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
