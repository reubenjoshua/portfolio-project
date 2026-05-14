import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  titleId: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, titleId, title, eyebrow, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="border-t border-white/10 py-16 sm:py-20"
    >
      <div className="w-full max-w-none">
        {eyebrow ? (
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={titleId}
          className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-3 h-px w-12 bg-gradient-to-r from-[var(--color-brand)] to-transparent" aria-hidden />
        {intro ? (
          <p className="mt-5 max-w-prose text-base leading-relaxed text-slate-400 sm:text-lg">{intro}</p>
        ) : null}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}