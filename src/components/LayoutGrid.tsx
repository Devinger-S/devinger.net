"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import useScreenSize from "@/lib/useScreenSize";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };
  const { breakpoint, width } = useScreenSize();

  return (
    <div className="w-full  h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  max-w-7xl mx-auto gap-4 ">
      {cards.map((card, i) => (
        <motion.div

          key={i}
          initial={{
            opacity: 0,
            y: -50,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: i % 2 === 0 ? 3 : -3,
          }}
          transition={{ duration: 0.2, delay: i * 0.1 }}
          className={cn(card.className, "image-wrapper")}>
          <motion.div
            // onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer fixed inset-0 h-[80vh] w-full md:w-[80vw] m-auto z-50 flex justify-center items-center flex-wrap flex-col "
                : lastSelected?.id === card.id
                  ? "z-40  rounded-xl h-full w-full"
                  : " rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && width > 768 && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </motion.div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "fixed h-full w-screen backdrop-blur-xl left-0 top-0 bg-black opacity-50 z-10",

          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.5 : 0 }}
      />
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-contain  absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0,
        }}
        className="absolute inset-0 h-full w-full bg-background opacity-90 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
