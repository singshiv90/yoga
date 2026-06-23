"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const shimmerStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(90deg, rgba(201,162,75,0.06) 25%, rgba(201,162,75,0.18) 50%, rgba(201,162,75,0.06) 75%)",
  backgroundSize: "200% 100%",
};

/**
 * Drop-in replacement for next/image that shows a visible shimmer
 * skeleton while the image is loading, then fades it in.
 */
export function ImageWithLoader({
  className,
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const refCallback = useCallback((el: HTMLImageElement | null) => {
    imgRef.current = el;
    if (el?.complete && el.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    if (typeof onLoad === "function") onLoad(e);
  };

  const shimmer = (
    <span
      className={cn(
        "absolute inset-0 z-[1] rounded-[inherit] transition-opacity duration-500",
        loaded
          ? "opacity-0 pointer-events-none"
          : "opacity-100 animate-shimmer",
      )}
      style={shimmerStyle}
      aria-hidden="true"
    />
  );

  const img = (
    <Image
      {...props}
      ref={refCallback}
      className={cn(
        "transition-opacity duration-500 ease-out",
        loaded ? "opacity-100" : "opacity-0",
        className,
      )}
      onLoad={handleLoad}
    />
  );

  if (props.fill) {
    return (
      <>
        {shimmer}
        {img}
      </>
    );
  }

  return (
    <span className="relative inline-block">
      {shimmer}
      {img}
    </span>
  );
}
