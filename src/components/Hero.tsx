
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "./RainbowHighlights";
import CallToAction from "@/components/cta";
import { StarsBackground } from "./StarsBackground";

export default function Hero() {
  const colors = [
    "#7dc4e4",
    "#8aadf4",];
  return (
    // <div id="hero" className="">
    <div className=" pl-4 " id="wrapper">

      <StarsBackground />
      <RoughNotationGroup show={true}>
        <div className="flex text-background  w-fit  mb-8 flex-col sm:text-[4em] font-bold   text-[2em] xl:flex-row  ">


          <RainbowHighlight
            // animationDuration={3500}
            color={colors[0]}
          >
            Developer.
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            Photographer
          </RainbowHighlight>
        </div>
        <RoughNotation
          strokeWidth={8}
          padding={[0, 0, 5, 0]}
          iterations={2}
          // brackets={['top', 'bottom']}
          animationDuration={1500}
          multiline={true}
          color={colors[1]}
          type="underline"
        >
          <span className='font-sans  font-bold text-wrap bg-clip-text text-lg '
          >

            Helping people stand out whit eye-catching websites and visuals
          </span>
        </RoughNotation>
        <CallToAction />
      </RoughNotationGroup>
    </div>
    //</div>
  );
}
