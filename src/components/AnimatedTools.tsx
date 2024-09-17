"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

type ContentItem = {
  title: string;
  description: string | React.ReactNode;
  image?: React.ReactNode;
  tags?: string[];
};

type ContentProps = ContentItem[];

export function AnimatedTools({ content }: { content: ContentItem }) {
  return (
    <>
      <section
        className=" flex relative  bg-background border rounded-xl  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] "
        id="wrapper"
      >
        <Card>
          <CardTitle>{content.title}</CardTitle>
          <CardDescription>{content.description}</CardDescription>
          <div className="flex gap-2 ">
            {content.tags &&
              content.tags.map((tag, i) => {
                let colors = ["#a6e3a1", "#fab387", "#94e2d5"];
                return (
                  <Badge
                    variant="secondary"
                    style={{ backgroundColor: colors[i % colors.length] }}
                    key={tag}
                  >
                    {tag}
                  </Badge>
                );
              })}
          </div>
          {/* <CardSkeletonContainer>
             <Skeleton tags={content.tags} />
             </CardSkeletonContainer> */}
        </Card>
        <div className="hidden absolute top-10 right-10 w-64 sm:block ">
          {content.image}
        </div>
      </section>
    </>
  );
}

const Skeleton = ({ tags }: { tags: string[] | undefined }) => {
  const scale = [1, 1.1, 1];

  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  });
  return (
    <div className=" overflow-hidden h-full relative flex items-center ">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        {tags?.map((tag: string, idx: any) => (
          <Badge variant="outline" key={idx} id="badge" className=" p-2 ">
            {tag}
          </Badge>
        ))}
      </div>

      <div className="h-full w-px absolute  m-auto  bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `4px`,
            height: `4px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-foreground"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " p-2  sm:p-8 border flex flex-col flex-wrap w-full ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-xl font-semibold  py-2", className)}>{children}</h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-lg font-normal py-8 max-w-md break-words text-neutral-400 ",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[6rem] md:h-[6rem] rounded-xl ",
        className,
        showGradient && "  "
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        ` rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};
