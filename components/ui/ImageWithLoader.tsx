"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Drop-in replacement for next/image that shows a subtle shimmer
 * placeholder while the image is loading, then fades it in.
 *
 * Handles the edge-case where the browser finishes loading the image
 * before React hydrates (static export) by checking `img.complete`
 * on mount.
 */
export function ImageWithLoader({
  className,
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  // Catch images that loaded before hydration (SSG / static export)
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
        "absolute inset-0 z-[1] rounded-[inherit] bg-white/[0.06] transition-opacity duration-500",
        loaded ? "opacity-0 pointer-events-none" : "animate-pulse opacity-100",
      )}
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
