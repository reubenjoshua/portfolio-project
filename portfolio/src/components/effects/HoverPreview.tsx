import { useEffect, useRef, useState } from "react";
import { useFinePointer } from "../../hooks/useFinePointer";

type HoverPreviewProps = {
  src?: string;
  visible: boolean;
};

/** Floating screenshot that trails the pointer while a project row is hovered. */
export function HoverPreview({ src, visible }: HoverPreviewProps) {
  const enabled = useFinePointer();
  const ref = useRef<HTMLDivElement>(null);
  const [shownSrc, setShownSrc] = useState(src);

  useEffect(() => {
    if (src) setShownSrc(src);
  }, [src]);

  useEffect(() => {
    if (!enabled) return;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  const show = visible && Boolean(shownSrc);

  return (
    <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block" aria-hidden>
      <div
        className={`h-52 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-line bg-paper shadow-2xl transition-[opacity,scale,rotate] duration-300 ease-out ${
          show ? "scale-100 -rotate-3 opacity-100" : "scale-75 rotate-0 opacity-0"
        }`}
      >
        {shownSrc ? <img src={shownSrc} alt="" className="h-full w-full object-cover object-top" /> : null}
      </div>
    </div>
  );
}
