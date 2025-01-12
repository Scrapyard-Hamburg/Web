/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scrapyard Hamburg",
  description:
    "Scrapyard Hamburg, der einzige von Schülern organisierte Hackathon Deutschlands",
  applicationName: "Scrapyard Hamburg",
  authors: [{ name: "Jack Ruder", url: "https://jack.djl.foundation" }],
  generator: "Next.js",
  keywords: [
    "Hackathon",
    "Germany",
    "Deutschland",
    "DJL",
    "JackatDJL",
    "DJL Foundation",
  ],
  referrer: "origin-when-cross-origin",
  themeColor: "#337D78",
  creator: "Scrapyard Hamburg Team",
  publisher: "Vercel",
  robots: "index, follow",
  icons: "https://cloud-il9x5472t-hack-club-bot.vercel.app/0icon.svg",
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://scrapyard.de",
    title: "Scrapyard Hamburg",
    description:
      "Scrapyard Hamburg, der einzige von Schülern organisierte Hackathon Deutschlands",
    siteName: "Scrapyard Hamburg",
    images: {
      url: "https://scrapyard.de/pics/outernet.png",
    },
  },
  twitter: {
    card: "summary",
    site: "@jackatdjl",
    creator: "@jackatdjl",
    images: "https://scrapyard.de/pics/outernet.png",
    title: "Scrapyard Hamburg",
    description:
      "Scrapyard Hamburg, der einzige von Schülern organisierte Hackathon Deutschlands",
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Galindo&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/eml6dsh.css"
        ></link>
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
