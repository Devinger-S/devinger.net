
import React from "react";
import userData from "@/data/siteConf";
import ProjectCard from "@/components/ProjectCard";
import tracker from "/public/tracker.json"

export default function Projects() {
  return (
    <section className="relative">
      <div className="  fixed inset-0  mx-auto h-48 ">

        <h1 className=" dark:text-accent/40 text-slate-600   text-4xl md:text-8xl lg:text-9xl font-bold py-2 my-20 text-center md:text-left">

          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      {/* <div> */}
      <div className="max-w-6xl mt-52  grid grid-cols-1 lg:grid-cols-2 gap-8 backdrop-blur-xl   opacity-95 z-2 relative   ">
        {userData.projects.map((proj, idx) => (
          <ProjectCard
            key={`proj-${idx}`}
            title={proj.title}
            description={proj.description}
            href={proj.href}
            tags={proj.tags}
            icon={tracker}
          />
        ))}
      </div>
    </section>
  );
}

