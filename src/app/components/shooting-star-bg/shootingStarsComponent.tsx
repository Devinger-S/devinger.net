import { FlipWordsComponent } from "../flipWords/flipWordsComponent";
import { ShootingStars } from "./shooting-stars";
import { StarsBackground } from "./stars-background";

export function ShootingStarsAndStarsBackgroundComponent() {
  return (
    <>
      {/* <div className="h-screen rounded-md bg-neutral-900 flex flex-col items-center justify-center relative w-full"> 
    </div> */}
      <ShootingStars />
      <StarsBackground />
    </>
  );
}
