'use client'
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from 'next/navigation'
import { ModeToggle } from "./Theme-Toggle.Shadcn";
import { AvatarDemo } from "./Avatar";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentPath = usePathname()
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },

    {
      name: "About",
      link: "/about",
    },
    {
      name: "Resources",
      link: "/resources",
    },

    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const mobileLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "About",
      link: "/about",
    },

    {
      name: "Resources",
      link: "/resources",
    },
    {
      name: "Freelancing",
      link: "/freelance",
    },
  ];

  return (
    <>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <section id='desktop' className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
        <Desktop
          links={links}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          path={currentPath}
        />
      </section>
      <section id="mobile" className="block sm:hidden" >
        <Mobile links={mobileLinks} />
      </section>
      <ModeToggle />
      {/* <AvatarDemo /> */}
    </>
  )
}
export const Mobile = ({ links }) => {
  const [open, setOpen] = useState(false);
  const dropIn = {
    hidden: {
      y: "-4vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "4vh",
      opacity: 0,
    },
  };


  return (
    <section id='mobile' className="w-full flex flex-row items-center space-x-2">
      <Link
        href={links[0]?.link}
        onClick={() => setOpen(!open)}
        className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"

      >
        {links[0]?.name}
      </Link>
      <Link
        href={links[1]?.link}
        onClick={() => setOpen(!open)}
        className="relative rounded-lg px-1 py-1 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"

      >
        {links[1]?.name}
      </Link>


      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-black dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

      </button>
      <AnimatePresence //burger menu
        initial={false}
        mode="wait"
        onExitComplete={() => null}
      >
        {open && (
          <motion.div
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 mx-auto top-20 flex flex-col w-[90%]   p-4 rounded-lg shadow-xl z-[999] bg-white dark:bg-gray-800 divide-y dark:divide-gray-700"
          >
            {[...links].splice(2).map((el) => (
              <Link
                key={el?.link}
                href={el.link}
                className="relative font-bold px-1 py-4 sm:px-4 sm:py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 text-left"
              >
                <AnimatePresence>
                  <span className="relative z-10">{el.name}</span>
                </AnimatePresence>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export const Desktop = ({ links, hoveredIndex, setHoveredIndex, path }) => {
  return (
    <section id="Desktop">
      {links.map((navLink, index) => (
        <Link key={`navLink${index}`} href={navLink.link}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0  transform bg-gray-50 dark:bg-zinc-900"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <span
            className={cn(
              'hello relative z-10',
              {
                'text-teal-600': path === navLink.link,
                'text-gray-600 dark:text-gray-50': path !== navLink.link,
              }
            )}
          // className={`hello relative z-10 ${path === navLink.link
          //   ? "text-teal-600"
          //   : "text-gray-600 dark:text-gray-50"
          //   }`}
          >
            {/* {navLink.name} */}
          </span>
          {path === navLink.link && (
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
          )}
        </Link>
      ))}
    </section>
  );
};
