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
  title: "Supermom Case Study - Marketing Strategy",
  description: "A comprehensive marketing strategy case study for preschool brands, focusing on lead generation and enrollment growth through zero-party data activation.",
  keywords: "marketing strategy, preschool marketing, lead generation, zero-party data, enrollment growth",
  authors: [{ name: "Supermom Marketing Team" }],
  openGraph: {
    title: "Supermom Case Study - Marketing Strategy",
    description: "A comprehensive marketing strategy case study for preschool brands.",
    type: "website",
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
