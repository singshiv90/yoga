"use client";

import Image, { type ImageProps } from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const shimmerStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(90deg, rgba(201,162,75,0.06) 25%, rgba(201,162,75,0.18) 50%, rgba(201,162,75,0.06) 75%)",
  backgroundSize: "200% 100%",
};

/** Safety timeout — force-show image after 4s even if onLoad never fires (iOS) */
const FALLBACK_MS = 4000;

/**
 * Drop-in replacement for next/image.
 *
 * Strategy: the image is **always rendered at full opacity** so it is
 * never invisible even if JS or the onLoad event fails.  A dark shimmer
 * overlay sits on top and fades out once the image has loaded.
 */
export function ImageWithLoader({
  className,
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const markLoaded = useCallback(() => {
    setLoaded(true);
    clearTimeout(timerRef.current);
  }, []);

  // Check if image was already cached / loaded before hydration
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      markLoaded();
      return;
    }
    // Fallback: force-show after timeout (covers iOS edge-cases)
    timerRef.current = setTimeout(markLoaded, FALLBACK_MS);
    return () => clearTimeout(timerRef.current);
  }, [markLoaded]);

  const refCallback = useCallback(
    (el: HTMLImageElement | null) => {
      imgRef.current = el;
      if (el?.complete && el.naturalWidth > 0) {
        markLoaded();
      }
    },
    [markLoaded],
  );

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    markLoaded();
    if (typeof onLoad === "function") onLoad(e);
  };

  const shimmer = (
    <span
      className={cn(
        "absolute inset-0 z-[1] rounded-[inherit] bg-ink transition-opacity duration-500",
        loaded
          ? "opacity-0 pointer-events-none"
          : "opacity-100 animate-shimmer",
      )}
      style={shimmerStyle}
      aria-hidden="true"
    />
  );

  // Image is always at full opacity — never hidden
  const img = (
    <Image
      {...props}
      ref={refCallback}
      className={className}
      onLoad={handleLoad}
      onError={markLoaded}
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
