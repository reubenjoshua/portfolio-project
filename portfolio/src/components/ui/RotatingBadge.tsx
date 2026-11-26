import { useId } from "react";
import { HiArrowDownRight } from "react-icons/hi2";

type RotatingBadgeProps = {
  text: string;
  href: string;
  className?: string;
};

/** Circular spinning text around an arrow — links to the next section. */
export function RotatingBadge({ text, href, className = "" }: RotatingBadgeProps) {
  const pathId = useId();

  return (
    <a
      href={href}
      className={`relative grid place-items-center rounded-full bg-cream ${className}`}
      aria-label={text.replace(/·/g, "").trim()}
    >
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <path id={pathId} d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink font-mono text-[8.5px] font-medium uppercase">
          <textPath href={`#${pathId}`} textLength="236" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <HiArrowDownRight className="h-6 w-6 text-ink" aria-hidden />
    </a>
  );
}
