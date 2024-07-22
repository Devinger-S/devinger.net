
import React from "react";
import { RoughNotation } from "react-rough-notation";

const RainbowHighlight = ({ color, children }: { color: string, children: any }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      brackets={['top', 'bottom']}
      animationDuration={1500}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};
export default RainbowHighlight
