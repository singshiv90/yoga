"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Drop-in replacement for next/image that shows a subtle shimmer
 * placeholder while the image is loading, then fades it in.
 */
export function ImageWithLoader({
  className,
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    if (typeof onLoad === "function") onLoad(e);
  };

  const shimmer = (
    <span
      className={cn(
        "absolute inset-0 z-[1] rounded-[inherit] bg-white/[0.06] transition-opacity duration-500",
        loaded ? "opacity-0 pointer-events-none" : "animate-pulse opacity-100",
      )}
      aria-hidden="true"
    />
  );

  const img = (
    <Image
      {...props}
      className={cn(
        "transition-opacity duration-500 ease-out",
        loaded ? "opacity-100" : "opacity-0",
        className,
      )}
      onLoad={handleLoad}
    />
  );

  // fill images: parent already has position:relative
  if (props.fill) {
    return (
      <>
        {shimmer}
        {img}
      </>
    );
  }

  // sized images: wrap in a relative container
  return (
    <span className="relative inline-block">
      {shimmer}
      {img}
    </span>
  );
}
