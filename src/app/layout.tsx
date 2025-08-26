import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { montserrat } from "@/config/fonts";


export const metadata: Metadata = {
  title: "Carlos Mora - Portfolio",
  description:
    "Web Developer specialized in React, Next.js and WordPress. Building fast, secure, SEO-optimized websites and web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
