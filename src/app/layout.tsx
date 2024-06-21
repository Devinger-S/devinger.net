import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/floating-navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devinger",
  description: "Frontend developer professional portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-x-hidden flex flex-col min-h-screen relative", inter.className)}
      >
        <Providers>
          <FloatingNav navItems={[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Projects", link: "/projects" },
            { name: "Contact", link: "/contact" },

          ]} />
          <main id="mainContent"
            className='flex-grow relative w-full'
          >


            {children}
          </main>
        </Providers>
        <TailwindIndicator />
        <section id='footerWrapper'
          className=' w-full'
        >

          <Footer />

        </section>
      </body>
    </html >
  );
}
