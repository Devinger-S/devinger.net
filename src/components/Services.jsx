
import userData from "./../data/siteConf.js";
import Image from "next/image";
import CurvedDivider from "@/components/curvedDivider/CurvedDivider";
import LottieAnimationWrapper from "@/components/LottieAnimationWrapper"; 
import development from './../../public/development.json'

export default function Services() {
  return (
    <div className=" relative min-h-screen ">

        <h1 
        className="text-2xl sticky -z-10 top-0 left-4 drop-shadow-2xl dark:shadow-lg  text-background dark:text-gray-300/10  dark:shadow-indigo-500/40 relative md:text-8xl lg:text-9xl font-bold   text-left"
        >
         Building
        </h1>
      <div className=" z-2 mt-8 opacity-95 bg-background/10 backdrop-blur-md grid  xl:grid-cols-2    mx-auto px-1 md:px-4">

        <div className="col-start-0 font-sans my-auto text-xl">
          <article>

            Think of me as your digital architect. I build custom websites that are both stylish and easy to use, like a well-designed coffee shop: inviting and functional. Imagine your website as the cozy spot everyone wants to visit!
            Lets create something amazing together!
          </article>
          <ul>
            <li>Custom Designs: Crafted to fit your personality.</li>
            <li>Adapts to any device just like your favorite sweater</li>
            <li>SEO Optimization: Helping you stand out in the digital crowd.</li>
          </ul>
{/*           <article> */}
{/*             Ever since I wrote my first line of code, I&apos;ve been hooked on the world of web development. I love the challenge of turning ideas into visually appealing and functional websites. Working with WordPress allows me to create sites that are not only beautiful but also easy for clients to manage. */}
{/*           </article> */}
{/* Photography: Great websites need great visuals. I take professional product and fashion photos to ensure your site looks polished and professional. Need a specific shot? Let&apos;s make it happen. */}
        {/*   <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold "> */}
        {/*     Tech Stack */}
        {/**/}
        {/*   </h1> */}
        {/*   <div className="flex flex-row flex-wrap mt-8"> */}
        {/*     <Image */}
        {/*       width={100} */}
        {/*       height={100} */}
        {/*       alt="javascript logo" */}
        {/*       src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" */}
        {/*       className="  mx-4 my-4" */}
        {/*     /> */}
        {/*     <Image */}
        {/*       width={100} */}
        {/*       height={100} */}
        {/*       alt="typescript logo" */}
        {/*       src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" */}
        {/*       className="  mx-4 my-4" */}
        {/*     /> */}
        {/*     <Image */}
        {/*       width={100} */}
        {/*       height={100} */}
        {/*       alt="html logo" */}
        {/*       src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" */}
        {/*       className="  mx-4 my-4" */}
        {/*     /> */}
        {/*     <Image */}
        {/*       width={100} */}
        {/*       height={100} */}
        {/*       alt="css logo" */}
        {/*       src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" */}
        {/*       className="  mx-4 my-4" */}
        {/*     /> */}
        {/*     <Image */}
        {/*       width={100} */}
        {/*       height={100} */}
        {/*       alt="git logo" */}
        {/*       src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png" */}
        {/*       className="  mx-4 my-4" */}
        {/*     /> */}
        {/*     <Image */}
        {/*       width={100} */}
        {/*       height={100} */}
        {/*       alt="react logo" */}
        {/*       src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" */}
        {/*       className="  mx-4 my-4" */}
        {/*     /> */}
        {/**/}
        {/*     <Image */}
        {/*       width={100} */}
        {/*       height={100} */}
        {/*       alt="postgresql logo" */}
        {/*       src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png" */}
        {/*       className="  mx-4 my-4" */}
        {/*     /> */}
        {/*   </div> */}
        </div>
 <div className="w-full xl:col-start-2  xl:p-4">
          <LottieAnimationWrapper source={development} />
        </div>
      </div>
    </div >
  );
}
