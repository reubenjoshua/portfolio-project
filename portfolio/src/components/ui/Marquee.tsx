import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import { SITE } from "../../data/site";
import { SkillIcon } from "./skillIcons";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

/** Speeds the ribbons up while the page is scrolling, then eases back to cruise speed. */
function useScrollBoost(rootRef: RefObject<HTMLElement | null>) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;

    let lastY = window.scrollY;
    let boost = 0;
    let raf = 0;

    const tick = () => {
      const y = window.scrollY;
      boost = Math.max(boost * 0.92, Math.min(Math.abs(y - lastY) / 6, 5));
      lastY = y;
      for (const anim of root.getAnimations({ subtree: true })) {
        anim.playbackRate = 1 + boost;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [rootRef, reduced]);
}

function Ribbon({
  children,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`marquee -mx-[5%] w-[110%] overflow-hidden py-4 sm:py-5 ${className}`}>
      <div className={`marquee-track flex w-max items-center ${reverse ? "marquee-reverse" : ""}`} aria-hidden>
        {children}
        {children}
      </div>
    </div>
  );
}

export function Marquee() {
  const rootRef = useRef<HTMLDivElement>(null);
  useScrollBoost(rootRef);

  return (
    <div ref={rootRef} className="relative overflow-hidden py-14 sm:py-20" role="region" aria-label="Skills and focus">
      <ul className="sr-only">
        {SITE.skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <Ribbon reverse className="absolute inset-x-0 top-1/2 -translate-y-1/2 rotate-[2.5deg] bg-blush text-ink">
        {SITE.services.map((s) => (
          <span key={s} className="flex items-center gap-8 pr-8 font-serif text-3xl italic sm:text-4xl">
            {s}
            <span className="font-mono text-sm not-italic text-brand">/</span>
          </span>
        ))}
      </Ribbon>

      <Ribbon className="relative -rotate-[2deg] bg-ink text-cream shadow-[0_20px_40px_-20px_rgba(0,0,0,0.45)]">
        {SITE.skills.map((s) => (
          <span key={s} className="flex items-center gap-4 pr-10">
            <SkillIcon name={s} monochrome className="h-7 w-7 opacity-80 sm:h-8 sm:w-8" />
            <span className="font-display text-3xl font-semibold tracking-tight sm:text-5xl">{s}</span>
            <span className="ml-6 text-xl text-blush">✳</span>
          </span>
        ))}
      </Ribbon>
    </div>
  );
}
