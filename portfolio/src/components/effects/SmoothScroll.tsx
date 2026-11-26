import { useEffect } from "react";
import "lenis/dist/lenis.css";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { destroySmoothScroll, startSmoothScroll } from "../../lib/smoothScroll";

export function SmoothScroll() {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    startSmoothScroll();
    return destroySmoothScroll;
  }, [reduced]);

  return null;
}
