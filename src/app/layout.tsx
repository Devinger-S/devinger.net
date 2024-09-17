import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { cn } from "@/lib/utils";
import Script from "next/script";
import {
  FloatingDockDesktop,
  FloatingDockMobile,
} from "./components/floatingDock/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconHome2,
  IconMail,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { Briefcase } from "lucide-react";
import Navbar from "./../components/Navbar.jsx";
import Nav from "@/components/header/nav/Nav";
import Header from "@/components/header/Header";
import { BlogIcon } from "@/components/SvgProvider";

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
  const links = [
    {
      title: "Home",
      icon: <IconHome2 className="h-full w-full text-neutral-500 " />,
      href: "/",
    },

    {
      title: "Blog",
      icon: <BlogIcon />,
      href: "/blog",
    },
    {
      title: "Projects",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Devinger-S",
    },
  ];
  return (
    <html lang="en">
      <body
        className={cn(
          "overflow-x-hidden flex flex-col min-h-screen relative",
          inter.className
        )}
      >
        <Header />
        <FloatingDockDesktop items={links} />
        <Providers>
          <main
            id="mainContent"
            className="flex-grow flex flex-col    relative w-full"
          >
            {children}
          </main>
        </Providers>
        <TailwindIndicator />

        <Script
          strategy="beforeInteractive"
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        />
      </body>
    </html>
  );
}
