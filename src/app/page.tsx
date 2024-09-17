"use client";
import LottieAnimationWrapper from "@/components/LottieAnimationWrapper";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import development from "./../../public/development.json";
import support from "./../../public/support.json";
import laptop from "./../../public/Animationlaptop2.json";
import DotsBG from "@/components/dotsBackground";
import { Security } from "@/components/SvgProvider";
import { AnimatedTools } from "@/components/AnimatedTools";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  // const content = [
  //   {
  //     title: "Building Your Online Space",
  //     description: (
  //       <p>
  //         I’m always tinkering with web apps—whether it’s trying out something
  //         new in Next.js or tweaking WordPress sites. I enjoy getting my hands
  //         dirty with the code and figuring out how to make things work. Take a{" "}
  //         <a href="/projects" className="underline">
  //           look
  //         </a>{" "}
  //         at what I’ve been working on, and feel free to let me know what you
  //         think or how I can make it better.
  //       </p>
  //     ),

  //     image: <LottieAnimationWrapper source={development} />,
  //     tags: ["NextJS", "ReactJS", "PostgreSQL"],
  //   },
  //   {
  //     title: "Security First, Always",
  //     description: (
  //       <>
  //         As I dive deeper into cybersecurity, I`m incorporating what I learn
  //         into my projects. Security is something I`m getting more passionate
  //         about, and I`m starting to focus on making my apps not just good, but
  //         also safe. Check out my{" "}
  //         <a href="/blog" className="underline bold text-white">
  //           blog
  //         </a>{" "}
  //         where I document my journey into cybersecurity.
  //       </>
  //     ),

  //     image: <Security />,
  //     tags: ["kali linux", "burp", "OSAP"],
  //   },
  //   {
  //     title: "Ongoing Support & Maintenance",
  //     description:
  //       "Web apps are never really 'done'—there's always something new to learn or a bug to fix. I’m constantly updating, tweaking, and improving what I’ve built. Here, I’ll share the ongoing work I’m doing to keep my projects up-to-date and running smoothly, as well as lessons learned along the way.",
  //     image: <LottieAnimationWrapper source={support} />,
  //     tags: undefined,
  //   },
  //   {
  //     title: "Job Opportunities",
  //     description: <ContactSection />,
  //     image: "",
  //     tags: undefined,
  //   },
  // ];
  const content = [
    {
      title: "Building Your Online Space",
      description: (
        <p>
          I’m always experimenting with web apps—whether I’m trying out
          something new in Next.js or tweaking WordPress setups. I really enjoy
          diving into the code, figuring out how things work, and making them
          better. Take a{" "}
          <a href="/projects" className="underline">
            look
          </a>{" "}
          at what I’ve been working on lately. I’m always open to feedback or
          suggestions, so feel free to reach out if you have any thoughts!
        </p>
      ),
      image: <LottieAnimationWrapper source={development} />,
      tags: ["NextJS", "ReactJS", "PostgreSQL"],
    },
    {
      title: "Security First, Always",
      description: (
        <>
          As I explore more in the world of cybersecurity, I’ve started weaving
          what I learn into my projects. Security is becoming a big part of how
          I think about development—making sure my apps aren’t just functional,
          but also safe. If you’re curious, I’m sharing my learning journey and
          security projects over on my{" "}
          <a href="/blog" className="underline bold text-white">
            blog
          </a>
          . It’s all a work in progress, but that’s the fun part.
        </>
      ),
      image: <Security />,
      tags: ["Kali Linux", "Burp", "OWASP"],
    },
    {
      title: "Ongoing Support & Maintenance",
      description: (
        <p>
          Web apps are kind of like living things—there’s always something new
          to learn, a bug to fix, or an update to roll out. I’m constantly
          tweaking and improving the stuff I build. Here, I’ll be sharing the
          little things I’m working on to keep everything running smoothly, plus
          some of the lessons I pick up along the way.
        </p>
      ),
      image: <LottieAnimationWrapper source={support} />,
      tags: undefined,
    },
    {
      title: "Job Opportunities",
      description: (
        <>
          <p className="mb-8">
            If you’re curious about what I do or want to chat about potential
            opportunities, feel free to reach out. I’m always open to connecting
            with like-minded people!
          </p>
          <SocialIcons />
        </>
      ),
      image: <LottieAnimationWrapper source={laptop} />,
      tags: undefined,
    },
  ];

  return (
    <motion.main
      className="    overflow-y-auto h-screen     relative    "
      style={{ scrollbarWidth: "none" }}
    >
      <section className="   sticky top-0 h-screen w-screen  ">
        <DotsBG className="   h-full   flex items-start    " />
      </section>
      <section className="flex flex-col gap-4 max-w-4xl mx-auto  relative mb-32">
        {/* <Hero /> */}
        <AnimatedTools content={content[0]} />
        <AnimatedTools content={content[1]} />
        <AnimatedTools content={content[2]} />
        <AnimatedTools content={content[3]} />
      </section>
    </motion.main>
  );
}
