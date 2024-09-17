import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "./RainbowHighlights";

export default function Hero() {
  const colors = ["#f38ba8", "#f9e2af", "#a6e3a1"];
  return (
    // <div id="hero" className="">
    <div
      className="  max-w-4xl mx-auto h-screen z-10 text-background mt-16 md:mt-36    "
      id="wrapper"
    >
      {/* <StarsBackground /> */}
      <RoughNotationGroup show={true}>
        <div className="flex  gap-2    w-fit  mb-8 flex-col sm:text-[4em] font-bold   text-[3em] sm:flex-row  ">
          <RainbowHighlight
            // animationDuration={3500}
            color={colors[0]}
          >
            <span className="px-4">Build </span>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <span className="px-4">Protect </span>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <span className="px-4">Maintain </span>
          </RainbowHighlight>
        </div>
        <RoughNotation
          strokeWidth={8}
          padding={[0, 0, 5, 0]}
          iterations={2}
          // brackets={['top', 'bottom']}
          animationDuration={1500}
          multiline={true}
          color={colors[2]}
          type="underline"
        >
          <span className="font-sans text-foreground    font-bold text-wrap bg-clip-text text-lg sm:text-2xl ">
            Web apps that work—and stay secure.
          </span>
        </RoughNotation>
        {/* <CallToAction />  */}
      </RoughNotationGroup>
    </div>
    //</div>
  );
}
