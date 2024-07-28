
"use client";

import { useWindowSize } from 'usehooks-ts';

const useScreenSize = () => {
  const { width, height } = useWindowSize();

  const getBreakpoint = () => {
    if (width < 640) return 'sm';
    if (width < 768) return 'md';
    if (width < 1024) return 'lg';
    if (width < 1280) return 'xl';
    return '2xl';
  };

  return {
    width,
    height,
    breakpoint: getBreakpoint(),
  };
};

export default useScreenSize;
