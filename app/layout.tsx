// package
import type { Metadata } from "next";
import { Inter, Noto_Sans_Sinhala, Poppins } from "next/font/google";

// lib
import { cn } from "@/lib/utils";

// css
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const sinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala", "latin"],
  weight: ["500", "600"],
  variable: "--font-sinhala",
});

export const metadata: Metadata = {
  title: "බොමු.lk",
  description:
    "Had a drink? A sober driver comes to you and drives you home, or wherever you need to go, in your own vehicle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(inter.variable, poppins.variable, sinhala.variable)}>
      <body>{children}</body>
    </html>
  );
}
