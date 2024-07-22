
"use client";
import Image from "next/image";
import LottieAnimationWrapper from "@/components/LottieAnimationWrapper"; 
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Hero from "./../components/Hero";
import ProjectCard from "../components/ProjectCard";
import userData from "@/data/siteConf";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import ImageWrapper from "@/components/ImageWrapper";
import development from './../../public/development.json'
import pictureUpload from './../../public/pictureUpload.json'
import support from './../../public/support.json'



export default function Home() {
const content = [
  {
    title: "What do I do?",
    description:
      "I help businesses and creatives overcome digital invisibility so they can achieve a captivating online presence by crafting stunning websites and visuals. Because there's power in being seen.",
    content: <ImageWrapper/>
  },
  {
    title: "Building Your Online Space",
    description:
      "I create websites with a personal touch, using technologies like Next.js for dynamic web apps or WordPress for flexible solutions. Whether you need a sleek site or a fully custom experience, I’m here to bring your vision to life.",
    content:  
          <LottieAnimationWrapper source={development} />
  },
  {
    title: "Adding professional photos & videos",
    description:
      "I bring your brand to life with high-quality photos and videos that make a lasting impression. Whether it’s capturing stunning product shots or creating engaging video content, I ensure every visual element enhances your website and tells your story beautifully.",
    content: 
          <LottieAnimationWrapper source={pictureUpload} />
  },
  {
    title: "Ongoing Support & Maintenance",
    description:
      "My commitment doesn’t end with the launch. I’m here for you every step of the way, offering ongoing support and maintenance to keep your website running smoothly. From resolving technical issues to making updates as needed, I ensure your online presence remains strong and effective.",
    content: <LottieAnimationWrapper source={support} />
  },
];
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const {scrollYProgress} = useScroll({
      container: ref,
    offset: ["start end", "end end"],
  });

  const cardLength = content.length;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    // const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const cardsBreakpoints = [0.5,0.8,0.81,1];
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });
  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard,linearGradients]);

  return (
    <motion.main ref={ref} className="   h-screen overflow-y-auto   relative flex-col    "
      style={{scrollbarWidth: "none"}}
    >
      <section className="flex overflow-hidden">
      <Hero />
      </section>
      <motion.section
           animate={{backgroundColor: backgroundColors[activeCard % backgroundColors.length]}}
        className="flex  gap-10">
        <motion.div
          className=" pl-2  xl:pl-10 min-w-[50vw]  "
        >
          {content.map((item, index) => (
            <div key={item.title + index} className="my-10 mb-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </motion.div>
        <div
          className={cn(
          "hidden lg:block sticky top-10 h-60 w-80 col-span-2  rounded-md   "
          // contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.section>

    </motion.main>
  );
}
