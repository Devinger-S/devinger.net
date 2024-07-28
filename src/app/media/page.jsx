
"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "/src/components/LayoutGrid";

export default function MediaPage() {

  const cards = [
    {
      id: 1,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/za.jpg",
    },
    {
      id: 2,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/vertig.jpg",
    },
    {
      id: 3,
      // content: <SkeletonThree />,
      className: "col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/DSC03310.jpg",
    },
    {
      id: 4,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_3632.jpg",
    },
    {
      id: 5,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_3736.jpg",
    },
    {
      id: 6,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_4615.jpg",
    },
    {
      id: 7,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_4619.jpg",
    },
    {
      id: 8,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_4622.jpg",
    },
    {
      id: 9,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_4624.jpg",
    },
    {
      id: 10,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_4625.jpg",
    },
    {
      id: 11,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_4626.jpg",
    },
    {
      id: 12,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_4629.jpg",
    },
    {
      id: 13,
      // content: <SkeletonOne />,
      className: "md:col-span-1 min-h-[500px]",
      thumbnail:
        "/mediaPhoto/IMG_4630.jpg",
    },

  ];
  return (
    <section id="media" className="py-20">
      <LayoutGrid cards={cards} />
    </section>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

