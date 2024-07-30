
"use client";
import LottieAnimationWrapper from "@/components/LottieAnimationWrapper";

import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Hero from "./../components/Hero";
import development from './../../public/development.json'
import pictureUpload from './../../public/pictureUpload.json'
import support from './../../public/support.json'
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import { useTheme } from "next-themes";
import ContactSection from "@/components/ContactSection";



export default function Home() {
  const { theme, setTheme } = useTheme();
  const content = [
    {
      title: "Building Your Online Space",
      description:
        " Building beautiful, responsive websites using WordPress, Next.js, and React.js. Whether you need a simple landing page or a dynamic web app, I’m here to bring your ideas to life. Let's create something that not only looks great but works seamlessly across all devices. Ready to stand out online?",
      content:
        <LottieAnimationWrapper source={development} />
    },
    {
      title: "Adding visuals",
      description:
        "Great visuals make a world of difference. I specialize in product and lifestyle photography, tailored to elevate your brand. From eye-catching product shots to engaging lifestyle imagery, I’ll help tell your story through stunning visuals. Let's make your brand shine with photos that speak volumes.",
      content:
        <LottieAnimationWrapper source={pictureUpload} />
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "My commitment doesn’t end with the launch. I’m here for you every step of the way, offering ongoing support and maintenance to keep your website running smoothly. From resolving technical issues to making updates as needed, I ensure your online presence remains strong and effective.",
      content: <LottieAnimationWrapper source={support} />
    },
    {
      title: "Job Opportunities",
      description: <ContactSection />,
      content: ''
    },
  ];
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start end", "end end"],
  });

  const cardLength = content.length;
  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    // const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const cardsBreakpoints = [0.5, 0.8, 0.81, 1];
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



  return (
    <motion.main ref={ref} className="   h-screen overflow-y-auto   relative flex-col    "
      style={{ scrollbarWidth: "none" }}
    >
      <section className="flex  sticky top-0 justify-center items-center  h-screen">
        <Hero />
      </section>
      <section id='mobile' className="lg:hidden relative  bg-background ">

        <FeaturesSectionDemo content={content} />
      </section>
      <motion.section
        // animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
        className=" hidden lg:flex relative z-20    bg-background    gap-10">
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
                  opacity: activeCard === index ? 1 : 0.5,
                }}
                className="text-xl font-bold "
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
                className="text-xl max-w-sm mt-10"
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
          {content[activeCard] ? content[activeCard].content : ''}
        </div>
      </motion.section>

    </motion.main>
  );
}
