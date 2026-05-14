import { Section } from "../ui/Section";
import { EXPERIENCE } from "../../data/experience";

const INTRO =
  "Roles where I shipped features, improved reliability, and collaborated across design and backend.";

export function Experience() {
  return (
    <Section id="experience" titleId="experience-heading" title="Experience" intro={INTRO}>
      <ol className="space-y-6 border-l border-white/10 pl-5 sm:space-y-7 sm:pl-6">
        {EXPERIENCE.map((job) => (
          <li key={job.id} className="relative">
            <span
              className="absolute -left-[21px] top-2.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--color-brand)] bg-slate-950 sm:-left-[25px] sm:h-3 sm:w-3"
              aria-hidden
            />
            <article className="rounded-xl border border-white/10 bg-white/[0.03] p-5 shadow-md ring-1 ring-white/5 backdrop-blur-sm transition motion-safe:duration-200 motion-safe:hover:border-cyan-400/25 sm:rounded-2xl sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {job.role} <span className="font-normal text-slate-500">· {job.company}</span>
                  </h3>
                  {job.context ? (
                    <p className="mt-1 max-w-prose text-xs leading-relaxed text-slate-500 sm:text-sm">{job.context}</p>
                  ) : null}
                </div>
                <time className="shrink-0 text-xs tabular-nums text-cyan-300/90 sm:text-sm">{job.period}</time>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-slate-400 marker:text-slate-600 sm:mt-4 sm:space-y-2 sm:pl-5">
                {job.bullets.map((b) => (
                  <li key={b}>
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}