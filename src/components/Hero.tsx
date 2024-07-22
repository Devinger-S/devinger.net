
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { BlurImage } from "./BlurImage";
import RainbowHighlight from "./RainbowHighlights";
// import "./../app/globals.css";
import Image from "next/image";
import CallToAction from "@/components/cta";

export default function Hero() {
  const colors = [
    "#81c8be",

    "#303446",   ];
  return (
    <div id="hero" className="  flex    relative overflow-hidden h-screen    flex-col  justify-around items-start      w-full ">

      <div className=" -z-10   fixed   " id="wrapper">
        <RoughNotationGroup  show={true}>
          <div className="flex w-fit mb-8 flex-col sm:text-[3em] font-bold text-accent  text-[2.5em] lg:flex-row  ">

            <RainbowHighlight
              // animationDuration={3500}
              color={colors[0]}
            >
              Developer.
            </RainbowHighlight>
            <RainbowHighlight color={colors[1]}>
                Visual Creator.
            </RainbowHighlight> 
          </div>
          <RoughNotation
            strokeWidth={8}
      padding={20}
      iterations={2}
      brackets={['top', 'bottom']}
      animationDuration={1500}
            multiline={true}
            color={colors[0]} 
                          type="underline"
          >
            <span  className='font-sans  font-bold text-wrap bg-clip-text text-2xl ' 
 >

            Helping people shine online with beautiful websites and stunning visuals.
            </span>
            </RoughNotation>
            <CallToAction />
         </RoughNotationGroup> 
      </div>
    </div>
  );
}
