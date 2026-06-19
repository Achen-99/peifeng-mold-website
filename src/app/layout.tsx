import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd } from "@/components/shared/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Peifeng Precision Mold — China Injection, Die-Casting & Blow Mold Engineering",
    template: "%s | Peifeng Precision",
  },
  description:
    "Peifeng Precision provides mold engineering, DFM review, and QC management. Injection molds, die-casting molds, blow molds, and rapid tooling. Factory-level pricing, worldwide shipping from Shenzhen.",
  keywords: [
    "China mold supplier",
    "injection mold China",
    "mold manufacturing China",
    "plastic injection mold",
    "die casting mold",
    "blow mold",
    "mold maker China",
    "Peifeng Precision",
    "Shenzhen mold",
    "mold engineering services",
    "DFM review mold",
    "custom injection molds",
    "precision mold tooling",
    "China tooling supplier",
    "mold export China",
    "rapid tooling China",
    "prototype mold China",
    "HASCO mold",
    "DME mold standard",
    "mold quality inspection",
    "mold project management",
  ],
  authors: [{ name: "Peifeng Precision" }],
  creator: "Peifeng Precision",
  metadataBase: new URL("https://www.peifengmold.com"),
  alternates: {
    canonical: "https://www.peifengmold.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Peifeng Precision",
    title: "Peifeng Precision Mold — China Injection, Die-Casting & Blow Mold Engineering",
    description:
      "Mold engineering, DFM review, and QC management. Injection, die-casting, and blow molds. Factory-level pricing from Shenzhen, worldwide shipping.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peifeng Precision Mold — Injection, Die-Casting & Blow Molds",
    description:
      "Mold engineering, DFM review, and QC management. Injection, die-casting, and blow molds. Factory-level pricing, worldwide delivery.",
  },
  verification: {
    google: "O6oCGi21BTI6fC2GptvxnFsXiuLwDqGinj3qgblKU64",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <OrganizationJsonLd />
        <GoogleAnalytics gaId="G-1YL7WFXEJV" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
