import React from "react";
import { FlipWords } from "./flip-words";

export function FlipWordsComponent() {
  const words = ["secure", "modern"];

  return (
    <div id="flipWordsComponent" className="">
      <h1 className=" mx-auto self-center font-serif text-2xl text-neutral-200 ">
        Building
        <FlipWords words={words} /> <br />
        web apps
      </h1>
    </div>
  );
}
