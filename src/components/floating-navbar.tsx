"use client";
import { usePathname } from 'next/navigation'
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
// import { DrawerDialog } from './../components/Drawer'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ThemeToggle } from "./Theme-Toggle";
import Header from "./header/Header";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const currentPath = usePathname()

  const [visible, setVisible] = useState(true);
  useEffect(() => { console.log(visible) }, [visible])

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <section id='floatingNavBar' className='fixed  z-[5000]     '>
      <AnimatePresence mode="wait">
        <motion.div
          // initial={{
          //   opacity: 1,
          //   y: 0,
          // }}
          // animate={{
          //   y: visible ? 100 : 100,
          //   opacity: visible ? 1 : 1,
          // }}
          // transition={{
          //   duration: 0.4,
          // }}
          className={cn(
            " max-w-fit hidden sm:flex dark:ring-accent ring-1 backdrop-blur-xl ring-white/30   fixed bottom-2 inset-x-0 mx-auto     rounded-full    shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4 dark:z-[5000]",

            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block ">{navItem.icon}</span>
              <span

                className={cn(
                  'text-sm',
                  {
                    ' font-bold text-accent text-md': currentPath === navItem.link,
                    '': currentPath !== navItem.link,
                  }
                )}
              // className="  text-sm"
              >{navItem.name}</span>
            </Link>
          ))}
          {/* </Button> */}
          <span><ThemeToggle /></span>
        </motion.div>
        <motion.div className="sm:hidden">
          <Header />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
