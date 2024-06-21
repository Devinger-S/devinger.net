import React from "react";
import userData from "./../../data/siteConf";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      <div className="  fixed inset-0 bg-accent  mx-auto h-48 ">

        <h1 className="  text-4xl md:text-8xl lg:text-9xl font-bold py-2 my-20 mx-4 md:text-left">
          About me
        </h1>
      </div>

      <div className=" mt-52 z-2 opacity-95 bg-background ">
        <div className=" py-12 text-container  mx-auto ">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}. Currently working on{" "}
            <a
              className="bg-red-500 rounded-md px-2 py-1 "
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      {/* <div className=" px-4 bg-background z-2"> */}
      <div className="bg-background z-2 opacity-95 grid grid-cols-1 md:grid-cols-3  mx-auto gap-y-20 gap-x-20">
        {/* Social Buttons */}
        <div className="inline-flex flex-col">
          <div>
            <h1 className="text-xl font-semibold ">
              Contact
            </h1>
            <p className="text-lg mt-4">
              For any sort help / enquiry, shoot a{" "}
              <a
                href={`mailto:${userData.email}`}
                className=" border-b-2 border-gray-800 dark:border-gray-300 font-bold "
              >
                mail
              </a>{" "}
              and I&apos;ll get back. I swear.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-xl font-semibold ">
              Job Opportunities
            </h1>
            <p className="text-lg mt-4 ">
              I&apos;m looking for a job currently, If you see me as a good fit,
              check my{" "}
              <a
                href={userData.socialLinks.linkedin}
                target="__blank"
                className=" border-b-2 border-gray-800 dark:border-gray-300   font-bold "
              >
                LinkedIn
              </a>{" "}
              and I&apos;d love to work for you.
            </p>
          </div>
          {/* Social Links */}
          <h1 className="text-xl font-semibold  mt-8  ">
            Social Links
          </h1>
          <div className="mt-4 ml-4">
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.twitter}
                className="flex flex-row items-center space-x-4 group"
              >
                <div className="my-4">&rarr;</div>
                <div className="text-lg  font-mono relative overflow-hidden ">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                  Twitter
                </div>
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.github}
                className="flex flex-row items-center space-x-4 group"
              >
                <div className="my-4">&rarr;</div>
                <div className="text-lg  font-mono relative overflow-hidden ">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                  GitHub
                </div>
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.linkedin}
                className="flex flex-row items-center space-x-4 group"
              >
                <div className="my-4">&rarr;</div>
                <div className="text-lg  font-mono relative overflow-hidden ">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                  LinkedIn
                </div>
              </a>
            </div>
            <div className="flex flex-row justify-start items-center">
              <a
                href={userData.socialLinks.instagram}
                className="flex flex-row items-center space-x-4 group"
              >
                <div className="my-4">&rarr;</div>
                <div className="text-lg  font-mono relative overflow-hidden ">
                  <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                  Instagram
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Text area */}
        <div className="col-span-1 md:col-span-2">
          <h2> About me</h2>
          <article>
            I&apos;m Devinger, a front-end developer, programmer, and photographer. By day, I work at a company where I primarily build websites using WordPress, helping businesses establish their online presence. By night (and weekends), I dive into photography, capturing stunning product and fashion photos that bring websites to life.
          </article>
          <h2> My Journey</h2>
          <article>
            Ever since I wrote my first line of code, I&apos;ve been hooked on the world of web development. I love the challenge of turning ideas into visually appealing and functional websites. Working with WordPress allows me to create sites that are not only beautiful but also easy for clients to manage.
          </article>
          <h2> What I do </h2>
          <ul>
            <li><span className="font-bold">Front-End Development: </span>I specialize in creating responsive and user-friendly websites. Whether you&apos;re looking for a new site or need to refresh your current one, I&apos;ve got you covered.</li>
            <li>Programming: I bring functionality to your website, ensuring it runs smoothly and efficiently. From custom features to troubleshooting, I handle the technical details so you don’t have to.</li>
            <li>Photography: Great websites need great visuals. I take professional product and fashion photos to ensure your site looks polished and professional. Need a specific shot? Let&apos;s make it happen.</li>
          </ul>
          <article>
            Ever since I wrote my first line of code, I&apos;ve been hooked on the world of web development. I love the challenge of turning ideas into visually appealing and functional websites. Working with WordPress allows me to create sites that are not only beautiful but also easy for clients to manage.
          </article>

          <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold ">
            Tech Stack

          </h1>
          <div className="flex flex-row flex-wrap mt-8">
            <Image
              width={100}
              height={100}
              alt="javascript logo"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              className="  mx-4 my-4"
            />
            <Image
              width={100}
              height={100}
              alt="typescript logo"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
              className="  mx-4 my-4"
            />
            <Image
              width={100}
              height={100}
              alt="html logo"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              className="  mx-4 my-4"
            />
            <Image
              width={100}
              height={100}
              alt="css logo"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              className="  mx-4 my-4"
            />
            <Image
              width={100}
              height={100}
              alt="git logo"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
              className="  mx-4 my-4"
            />
            <Image
              width={100}
              height={100}
              alt="react logo"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              className="  mx-4 my-4"
            />

            <Image
              width={100}
              height={100}
              alt="postgresql logo"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
              className="  mx-4 my-4"
            />
          </div>
        </div>
      </div>
    </main >
  );
}
