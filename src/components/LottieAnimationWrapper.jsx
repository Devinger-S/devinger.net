
'use client'
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimationWrapper = ({ source }) => {
  const containerRef = useRef(null);
  // if (!source) {console.log("no source")}else{console.log(source)}
  useEffect(() => {
    if (containerRef.current && source) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        animationData: source,
        // source, // Your animation data
        renderer: 'svg', // Optional: 'svg', 'canvas', 'html' to set the renderer
        loop: false,
        autoplay: true,
      });
      return () => {
        animation.destroy(); // Stops and cleans up the animation
      };
    }
  }, [source]);

  return <div className='h-full absolute w-full' ref={containerRef} />;
};

export default LottieAnimationWrapper;
