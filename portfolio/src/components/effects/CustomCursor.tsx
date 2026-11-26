import { useEffect, useRef, useState } from "react";
import { useFinePointer } from "../../hooks/useFinePointer";

type Mode = "default" | "hover" | "label";

const INTERACTIVE = "a, button, [role='button'], summary, input, textarea, label, .cursor-hover";

/** Dot follows the pointer exactly; the ring trails it. Elements with `data-cursor="Text"` turn the ring into a label. */
export function CustomCursor() {
  const enabled = useFinePointer();
  const [mode, setMode] = useState<Mode>("default");
  const [label, setLabel] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("custom-cursor");
    const target = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
      if (rootRef.current) rootRef.current.style.opacity = "1";
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      const labelled = el?.closest<HTMLElement>("[data-cursor]");
      if (labelled) {
        setLabel(labelled.dataset.cursor ?? "");
        setMode("label");
        return;
      }
      setMode(el?.closest(INTERACTIVE) ? "hover" : "default");
    };

    const onLeave = () => {
      if (rootRef.current) rootRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  const ringClass =
    mode === "label"
      ? "h-20 w-20 bg-ink text-cream"
      : mode === "hover"
        ? "h-12 w-12 border border-ink/50 bg-blush/40"
        : "h-8 w-8 border border-ink/40";

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-[100] opacity-0 transition-opacity duration-300"
      aria-hidden
    >
      <div ref={dotRef} className="absolute left-0 top-0">
        <div
          className={`h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink transition-transform duration-200 ${
            mode === "default" ? "scale-100" : "scale-0"
          }`}
        />
      </div>
      <div ref={ringRef} className="absolute left-0 top-0">
        <div
          className={`flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-300 ease-out ${ringClass}`}
        >
          <span
            className={`text-[11px] font-semibold uppercase tracking-[0.14em] transition-opacity duration-200 ${
              mode === "label" ? "opacity-100" : "opacity-0"
            }`}
          >
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
