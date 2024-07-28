import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import NavBar from "./../components/Navbar.jsx";
import { FloatingNav } from "@/components/floating-navbar";
import { cn } from "@/lib/utils";
import GrainyBackground from "@/components/grainyBackground/GrainyBackground";
import { Grid } from "@/components/FeaturesSectionDemo";

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
            { name: "Media", link: "/media" },
            { name: "Projects", link: "/projects" },
          ]} />
          <main
            id="mainContent"
            className='flex-grow   relative w-full'

          >
            {children}

          </main>
        </Providers>
        <TailwindIndicator />
      </body>
    </html >
  );
}
