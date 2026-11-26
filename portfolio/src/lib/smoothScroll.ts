import Lenis from "lenis";

let instance: Lenis | null = null;

/** Starts smooth scrolling for wheel/trackpad. Touch keeps native scrolling. */
export function startSmoothScroll() {
  if (instance) return instance;
  instance = new Lenis({
    autoRaf: true,
    lerp: 0.1,
    // Fixed header is ~4.5rem tall; keep section titles clear of it.
    anchors: { offset: -72 },
  });
  return instance;
}

export function destroySmoothScroll() {
  instance?.destroy();
  instance = null;
}

/** Freeze page scroll while an overlay (e.g. the project modal) is open. */
export function lockScroll(locked: boolean) {
  if (locked) instance?.stop();
  else instance?.start();
}
