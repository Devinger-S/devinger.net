'use client'

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export const BlurImage = ({ src, alt, className, ...rest }: any) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      alt={alt}
      className={clsx(
        "transition duration-500",
        isLoading ? "blur-sm scale-100" : " blur-0 scale-100",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      loading="lazy"
      decoding="async"
      blurDataURL={src}
      {...rest}
    />
  );
};
