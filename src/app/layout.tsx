import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
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
    default: "Peifeng Precision — Mold Engineering & Manufacturing | Shenzhen, China",
    template: "%s | Peifeng Precision",
  },
  description:
    "Shenzhen-based mold engineering and manufacturing management. In-house DFM and QC, audited factory partners. Injection, die-casting, and blow molds. Factory-level pricing, worldwide shipping.",
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
  ],
  authors: [{ name: "Peifeng Precision" }],
  creator: "Peifeng Precision",
  metadataBase: new URL("https://peifengmold.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Peifeng Precision",
    title: "Peifeng Precision — Mold Engineering & Manufacturing | Shenzhen",
    description:
      "In-house engineering and QC, audited manufacturing partners. Injection, die-casting, and blow molds. Factory-level pricing, one accountable contact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peifeng Precision — Mold Engineering & Manufacturing",
    description:
      "Mold engineering, DFM, QC, and manufacturing management. Injection, die-casting, blow molds. Factory-level pricing, worldwide delivery.",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
