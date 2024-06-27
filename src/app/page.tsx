import React from "react";
import Hero from "./../components/Hero";
import ProjectCard from "../components/ProjectCard";
import userData from "@/data/siteConf";
import AccordionIntroduction from "@/components/AccordionIntroduction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   ">
      <Hero />
      {/* <h1 className=" text-[white] px-4  text-4xl md:text-8xl lg:text-9xl font-bold py-2 my-20 md:text-left"> */}
      {/*   What do I do? */}
      {/* </h1> */}
      <AccordionIntroduction />
      <h3 id='#projects' className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {userData.projects.map((proj, idx) => (
          <ProjectCard
            key={`proj-${idx}`}
            title={proj.title}
            description={proj.description}
            href={proj.href}
            tags={proj.tags}
          />
        ))}
      </div>

    </main>
  );
}
