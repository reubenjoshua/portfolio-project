import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { EXPERIENCE } from "../../data/experience";

const INTRO = "Where I ship product for real operators—systems that get used every day.";

export function Experience() {
  return (
    <Section id="experience" titleId="experience-heading" index="02" title="Experience" intro={INTRO}>
      <ol>
        {EXPERIENCE.map((job, i) => (
          <li key={job.id} className="border-b border-line last:border-b-0">
            <Reveal delayMs={i * 90}>
              <article className="grid gap-6 py-10 md:grid-cols-[13rem_1fr] md:gap-12">
                <div className="md:sticky md:top-28 md:self-start">
                  <p className="font-display text-2xl tabular-nums text-ink">{job.period}</p>
                  <p className="mt-2 text-sm text-brand">{job.company}</p>
                </div>
                <div>
                  <h3 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                    {job.role}
                  </h3>
                  {job.context ? <p className="mt-3 text-base text-brand">{job.context}</p> : null}
                  <ul className="mt-8 space-y-5">
                    {job.bullets.map((b, j) => (
                      <li
                        key={b}
                        className="grid grid-cols-[2rem_1fr] gap-3 border-t border-line pt-5 text-base leading-relaxed text-ink"
                      >
                        <span className="font-mono text-xs tabular-nums text-brand">{String(j + 1).padStart(2, "0")}</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
