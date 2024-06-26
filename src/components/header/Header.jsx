'use client'
import styles from '@/components/header/style.module.scss'
import { useEffect, useState } from 'react';
import Nav from '@/components/header/nav/Nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {



  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false)
  }, [pathname])

  const toggleIsActive = () => {
    setIsActive((prevState) => !prevState);
    console.log(isActive)
  };

  return (
    <>
      <div className={styles.main}>

        <div className={styles.header}>
          <div
            onClick={toggleIsActive}
            className={styles.button}
          >
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>

      </div>
      <div
        onClick={toggleIsActive}
      >

        <AnimatePresence mode="wait">
          {isActive &&
            <Nav
            />}
        </AnimatePresence>
      </div>
    </>
  )
}
