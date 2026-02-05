import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { inter } from "@/config/fonts";
import { ViewTransitions } from "next-view-transitions";

export const metadata: Metadata = {
  metadataBase: new URL("https://carlos-mora-portfolio.vercel.app/"),
  title: "Carlos Mora - Portfolio",
  description:
    "Web Developer specialized in React, Next.js and WordPress. Building fast, secure, SEO-optimized websites and web applications.",
  openGraph: {
    title: "Carlos Mora - Portfolio",
    description:
      "Web Developer specialized in React, Next.js and WordPress. Building fast, secure, SEO-optimized websites and web applications.",
    images: [`/assets/09-perfil-b.webp`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
