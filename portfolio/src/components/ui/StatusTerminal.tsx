import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

export type TerminalStat = { key: string; value: string; label: string };

type StatusTerminalProps = {
  stats: TerminalStat[];
  building: readonly string[];
};

const STATUS_CMD = "reuben --status";
const BUILD_CMD = "git log --current";

const sleep = (ms: number) => new Promise((r) => window.setTimeout(r, ms));

/** Types out stats like a shell session, then keeps cycling what's in progress. */
export function StatusTerminal({ stats, building }: StatusTerminalProps) {
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [cmd1, setCmd1] = useState("");
  const [shown, setShown] = useState(0);
  const [cmd2, setCmd2] = useState("");
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    if (reduced) {
      setCmd1(STATUS_CMD);
      setShown(stats.length);
      setCmd2(BUILD_CMD);
      setCurrent(building[0] ?? "");
      return;
    }

    let cancelled = false;
    const type = async (text: string, set: (s: string) => void, speed: number) => {
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        set(text.slice(0, i));
        await sleep(speed + Math.random() * speed);
      }
    };

    (async () => {
      await sleep(300);
      await type(STATUS_CMD, setCmd1, 40);
      for (let i = 1; i <= stats.length; i++) {
        await sleep(160);
        if (cancelled) return;
        setShown(i);
      }
      await sleep(500);
      await type(BUILD_CMD, setCmd2, 40);
      await sleep(300);

      for (let n = 0; !cancelled; n = (n + 1) % building.length) {
        const item = building[n];
        await type(item, setCurrent, 35);
        await sleep(1800);
        for (let i = item.length; i >= 0 && !cancelled; i--) {
          setCurrent(item.slice(0, i));
          await sleep(18);
        }
        await sleep(350);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [started, reduced, stats.length, building]);

  const caret = <span className="ml-0.5 inline-block h-[1.1em] w-[0.55em] translate-y-[0.15em] animate-pulse bg-brand" />;
  const typingCmd1 = cmd1.length < STATUS_CMD.length;
  const typingCmd2 = cmd2.length > 0;

  return (
    <div ref={rootRef} className="mt-12 overflow-hidden rounded-xl border border-line bg-paper shadow-sm">
      <dl className="sr-only">
        {stats.map((s) => (
          <div key={s.key}>
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
        <dt>Currently building</dt>
        <dd>{building.join(", ")}</dd>
      </dl>

      <div className="flex items-center justify-between border-b border-line px-4 py-2.5" aria-hidden>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[11px] text-brand">reuben@portfolio: ~</span>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-brand">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#28c840] opacity-70 motion-reduce:animate-none" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          </span>
          live
        </span>
      </div>

      <div className="min-h-[15.5rem] space-y-1.5 px-4 py-5 font-mono text-sm leading-relaxed text-ink sm:px-5" aria-hidden>
        <p>
          <span className="text-brand">$ </span>
          {cmd1}
          {started && typingCmd1 ? caret : null}
        </p>

        {stats.slice(0, shown).map((s) => (
          <p key={s.key} className="fade-in grid grid-cols-[1fr_auto] gap-4 pl-4" style={{ animationDuration: "0.3s" }}>
            <span className="text-brand">{s.key}</span>
            <span className="font-display text-2xl font-semibold leading-none text-ink">{s.value}</span>
          </p>
        ))}

        {shown === stats.length && stats.length > 0 ? (
          <>
            <p className="pt-3">
              <span className="text-brand">$ </span>
              {cmd2}
              {cmd2.length < BUILD_CMD.length && typingCmd2 ? caret : null}
            </p>
            {cmd2.length === BUILD_CMD.length ? (
              <p className="pl-4">
                <span className="text-[#28c840]">● </span>
                <span className="text-brand">building </span>
                {current}
                {caret}
              </p>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}
