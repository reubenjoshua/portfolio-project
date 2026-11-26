import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  titleId: string;
  title: string;
  /** Section number shown above the title, e.g. "01". */
  index?: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, titleId, title, index, intro, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={titleId} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="mb-12 grid gap-6 border-b border-line pb-8 md:grid-cols-[1fr_minmax(0,22rem)] md:items-end">
            <div>
              {index ? (
                <p className="mb-4 font-mono text-xs tabular-nums tracking-[0.2em] text-brand">({index})</p>
              ) : null}
              <h2
                id={titleId}
                className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-ink sm:text-7xl"
              >
                {title}
              </h2>
            </div>
            {intro ? (
              <p className="text-base leading-relaxed text-brand md:text-right">{intro}</p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
