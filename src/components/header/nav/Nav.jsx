import React, { useState } from 'react'
import styles from '@/components/header/nav/style.module.scss'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '@/components/header/anim';
import Link from '@/components/header/nav/link/Link';
import Curve from '@/components/header/nav/curve/Curve'
import { ThemeToggle } from '@/components/Theme-Toggle';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Nav() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={styles.nav}>
          <div className={styles.header}>
            {/* <p>Navigation</p> */}
            <ThemeToggle />
          </div>
          <span className='h-[3px] w-screen bg-gray-300'></span>
          {
            navItems.map((data, index) => {
              return <Link key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
            })
          }
        </div>
        {/* <Footer /> */}
      </div>
      <Curve />
    </motion.div>
  )
}
