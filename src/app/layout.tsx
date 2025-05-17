import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import "./globals.css";

const fustat = Fustat({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Larnova - Lab, STEM & Tech Services | Aura AI",
  description:
    "We’re a team of audacious visionaries—some might call us self-delusionists—on a mission to invent zero-to-one software products that will put us on the global map.",
  icons: "/logo-metadata.png",
  openGraph: {
    title: "Larnova - Lab, STEM & Tech Services | Aura AI",
    description:
      "We’re a team of audacious visionaries—some might call us self-delusionists—on a mission to invent zero-to-one software products that will put us on the global map.",
    images: "/home-bg-wb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fustat.className} antialiased`}>{children}</body>
    </html>
  );
}
