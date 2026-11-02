import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://rekodedigital.com"),

  title: {
    default: "Web Design in Winnemucca, NV | Rekode Digital",
    template: "%s | Rekode Digital",
  },

  description:
    "Rekode Digital builds professional websites and practical digital solutions for small businesses in Winnemucca and Northern Nevada. Get a free Business Visibility Review.",

  keywords: [
    "Rekode Digital",
    "Winnemucca web design",
    "Northern Nevada website design",
    "small business websites",
    "local SEO",
    "Google Business Profile",
    "digital marketing Northern Nevada",
  ],

  authors: [{ name: "Rekode Digital" }],
  creator: "Rekode Digital",

  openGraph: {
    title: "Rekode Digital | Web Design in Northern Nevada",
    description:
      "Get found, look professional, and grow online. Websites, branding, local SEO, and practical digital solutions for small businesses.",
    url: "https://rekodedigital.com",
    siteName: "Rekode Digital",
    locale: "en_US",
    type: "website",
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
          ${geistSans.variable}
          ${geistMono.variable}
        `}
      >
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-25QZMHJ7H3" />
    </html>
  );
}