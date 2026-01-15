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

import { cvData } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL("https://jacobkotzee-cv.vercel.app"),
  title: {
    default: `${cvData.personal.name} | ${cvData.personal.title}`,
    template: `%s | ${cvData.personal.name}`,
  },
  description: cvData.summary,
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "UI/UX",
    "Jacob Kotzee",
    "Web Development",
  ],
  authors: [{ name: cvData.personal.name }],
  creator: cvData.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jacobkotzee-cv.vercel.app",
    title: `${cvData.personal.name} - ${cvData.personal.title}`,
    description: cvData.summary,
    siteName: `${cvData.personal.name} CV`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${cvData.personal.name} - ${cvData.personal.title}`,
    description: cvData.summary,
    creator: "@jakwakwa",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
