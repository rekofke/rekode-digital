import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  
title: "Web Design in Winnemucca, NV | Rekode Digital",

description:
  "Rekode Digital builds professional, affordable websites and practical digital solutions for small businesses in Winnemucca and Northern Nevada. Get a free visibility review.",

  keywords: [
    "Rekode Digital",
    "web design",
    "small business websites",
    "local business marketing",
    "local SEO",
    "digital solutions",
    "business websites",
    "Winnemucca web design",
    "Nevada web design",
  ],

  authors: [{ name: "Rekode Digital" }],
  creator: "Rekode Digital",

  openGraph: {
    title: "Rekode Digital | Helping Local Businesses Rewrite Their Future",
    description:
      "Modern websites and practical digital solutions built to help local businesses get found, look professional, and grow.",
    type: "website",
    locale: "en_US",
    siteName: "Rekode Digital",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
        `}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}