'use client'
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import Image from 'next/image'
import LottieAnimationWrapper from "@/components/LottieAnimationWrapper"; 

import tracker from "/public/tracker.json"

export default function ProjectCard({ title, description, href, tags,icon }) {

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <a
      className="group mb-4 hover:shadow-lg dark:hover:shadow-lg rounded-xl  transition duration-200 relative border border-slate-200 dark:border-slate-700 w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
    >
      <HoverPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="relative h-full">
        <span className="absolute w-[40%] -bottom-px right-px h-[3px] bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <span className="absolute w-[4px] -left-px top-[50%] h-[40%] bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-blue-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-blue-400/0"></span>
        <div className="  flex flex-col items-start h-full   rounded p-4 relative">
          
          <div id="contentCard" className="relative grow">
            <div className="my-4">
            <div className="h-8 w-8 ml-2 mr-4">
          {/* <LottieAnimationWrapper source={tracker} /> */}
              <svg
                className="h-8 w-8 min-w-lg text-gray-900 dark:text-gray-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
            <h4 className="text-xl font-bold tracking-tight ">

              {title}
            </h4>
            <p className="leading-6 pt-4 ">
              {description}
            </p>
          </div>
          <div className="pt-4  flex md:flex-row flex-wrap">
            {tags?.map((tag, idx) => (
              <Image
                key={`${tag}-idx`}
                width={100}
                height={100}
                alt={`this is ${tag} logo`}
                className="h-8 w-8  sm:mx-2 sm:my-4"
                src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/${tag}/${tag}.png`}
              />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

function HoverPattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/50 to-teal-100/50 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      ></motion.div>
    </div>
  );
}
