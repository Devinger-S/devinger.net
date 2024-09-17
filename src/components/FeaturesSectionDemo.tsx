import React from "react";
import { useId } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type ContentItem = {
  title: string;
  description: string | React.ReactNode;
  content?: React.ReactNode;
};

type ContentProps = ContentItem[];

export function FeaturesSectionDemo({ content }: { content: ContentProps }) {
  const [build, protect, maintain, contact] = content;
  return (
    <div className="grid grid-cols-1 text-xl  gap-10 md:gap-4  mx-auto sm:px-8 ">
      <Card
        className="relative sm:w-[90vw] text-foreground mx-auto  bg-gradient-to-t  from-[rgba(38,38,38,0)_0%]
              via-[rgba(38,38,38,1)_20%] to-[rgba(38,38,38,1)_100%]  p-6 rounded-3xl overflow-hidden"
      >
        <CardTitle className="pl-0">{build.title}</CardTitle>
        <CardHeader className=" flex p-0 sm:p-6 flex-col items-center sm:flex-row ">
          <span className="">{build.description}</span>
          <span className="grow">{build.content}</span>
        </CardHeader>

        <CardFooter id="footer"> {/* <AnimatedTools />{" "} */}</CardFooter>
      </Card>

      <Card
        className="relative mx-auto  sm:w-[90vw] text-foreground   bg-gradient-to-t  from-transparent/30
              to-neutral-900 p-6 rounded-3xl overflow-hidden"
      >
        <CardTitle className="p-6">{protect.title}</CardTitle>
        <CardHeader className=" flex flex-col items-center sm:flex-row ">
          <span className="">{protect.description}</span>
          <span className="grow">{protect.content}</span>
        </CardHeader>

        <CardFooter id="footer">{/* <AnimatedTools /> */}</CardFooter>
      </Card>

      <Card
        className="relative mx-auto  sm:w-[90vw] text-foreground  bg-gradient-to-t  from-neutral-600
              to-neutral-900 p-6 rounded-3xl overflow-hidden"
      >
        <CardTitle className="p-6">{maintain.title}</CardTitle>
        <CardHeader className=" flex flex-col items-center sm:flex-row ">
          <span className="">{maintain.description}</span>
          <span className="grow">{maintain.content}</span>
        </CardHeader>

        <CardFooter id="footer">{/* <AnimatedTools /> */}</CardFooter>
      </Card>
      <Card
        className="relative mx-auto sm:w-[90vw] text-foreground  bg-gradient-to-t  from-neutral-600
              to-neutral-900 p-6 rounded-3xl overflow-hidden"
      >
        <CardTitle>{contact.title}</CardTitle>
        <CardHeader className=" flex flex-col items-center sm:flex-row ">
          <span className="">{contact.description}</span>
          <span className="grow">{contact.content}</span>
        </CardHeader>

        <CardFooter id="footer">{/* <AnimatedTools /> */}</CardFooter>
      </Card>
    </div>
  );
}
