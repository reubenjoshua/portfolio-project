import { useRef, type MouseEvent, type ReactNode } from "react";
import { useFinePointer } from "../../hooks/useFinePointer";

type TiltCardProps = {
  children: ReactNode;
  /** Max rotation in degrees. */
  max?: number;
  /** Disable for unframed content, where a rectangular highlight would show its edges. */
  glare?: boolean;
  className?: string;
};

/** 3D tilt toward the pointer with a soft glare that tracks it. */
export function TiltCard({ children, max = 10, glare = true, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useFinePointer();

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !enabled) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(900px) rotateY(${(px - 0.5) * max * 2}deg) rotateX(${(0.5 - py) * max * 2}deg)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`group/tilt relative transition-transform duration-300 ease-out will-change-transform ${className}`}
    >
      {children}
      {glare ? (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
          style={{
            background:
              "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.28), transparent 55%)",
          }}
          aria-hidden
        />
      ) : null}
    </div>
  );
}
