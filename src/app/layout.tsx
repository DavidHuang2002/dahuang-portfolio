import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "David Huang - Portfolio",
  description: "Life is short. Let's use it to do something cool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${manrope.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
