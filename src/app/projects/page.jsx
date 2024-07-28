
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
      {/* </div> */}
    </section>
  );
}

// const ProjectCard = ({ title, link, imgUrl, number }) => {
//   return (
//     <a href={link} className="w-full block shadow-2xl">
//       <div className="relative overflow-hidden">
//         <div className="h-72 object-cover">
//           <img
//             src={imgUrl}
//             alt="portfolio"
//             className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
//           />
//         </div>
//         <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
//
//           {title}
//         </h1>
//         <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
//           {number.length === 1 ? "0" + number : number}
//         </h1>
//       </div>
//     </a>
//   );
// };
