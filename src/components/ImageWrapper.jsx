import React from 'react';
import Link from 'next/link'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import {BlurImage} from './BlurImage'

export default function ImageWrapper() {
return (
<div className=" relative flex-shrink-1 lg:place-self-auto my-2 hidden lg:block  lg:order-last order-first">

    <Link
      href="https://www.linkedin.com/in/silviu-sindile-94a6aa132/"
      target="__blank"
      className="block  z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5  relative bg-transparent aspect-square  w-full"

    >
      <BlurImage
        alt="hero-image"
        // objectFit="cover"
        // layout="fill"
        fill
        className=" backdrop-blur-lg object-contain"

        src="/hero.png"
      />
    </Link>
    <div className="flex flex-row justify-between mt-4">
      <div className="flex flex-row space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-90deg-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
          />
        </svg>
        <RoughNotation animationDelay={1500} show={true} type="circle" color="#a6d189">
          <p className="font-mono">That&apos;s me</p>
        </RoughNotation>
      </div>
    </div>
    <div className="z-0">
      <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
      <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
      <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
      <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
      <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
        <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
          <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
        </div>
      </div>
    </div>
  </div>
)
}
// const ImageWrapper = () => (
//   <div className=" relative flex-shrink-1 lg:place-self-auto my-2 hidden lg:block  lg:order-last order-first">
//
//     <Link
//       href="https://www.linkedin.com/in/silviu-sindile-94a6aa132/"
//       target="__blank"
//       className="block  z-[5] overflow-hidden rounded shadow-xl ring-1 ring-slate-900/5  relative bg-transparent aspect-square  w-full"
//
//     >
//       <BlurImage
//         alt="hero-image"
//         // objectFit="cover"
//         // layout="fill"
//         fill
//         className=" backdrop-blur-lg object-contain"
//
//         src="/hero.png"
//       />
//     </Link>
//     <div className="flex flex-row justify-between mt-4">
//       <div className="flex flex-row space-x-4">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="16"
//           height="16"
//           fill="currentColor"
//           className="bi bi-arrow-90deg-up"
//           viewBox="0 0 16 16"
//         >
//           <path
//             fillRule="evenodd"
//             d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
//           />
//         </svg>
//         <RoughNotation animationDelay={4500} show={true} type="circle" color="#a6d189">
//           <p className="font-mono">That&apos;s me</p>
//         </RoughNotation>
//       </div>
//     </div>
//     <div className="z-0">
//       <div className="absolute left-0 -right-12 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
//       <div className="absolute -top-8 bottom-0 left-12 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
//       <div className="absolute left-0 -right-12 bottom-14 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
//       <div className="absolute right-0 -top-2 -bottom-8 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
//       <div className="absolute bottom-full right-10 -mb-px flex h-8 items-end overflow-hidden">
//         <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
//           <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
//           <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
//         </div>
//       </div>
//     </div>
//   </div>
// )
