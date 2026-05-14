import { Section } from "../ui/Section";
import { SkillIcon } from "../ui/skillIcons";
import { SITE } from "../../data/site";

export function About() {
  return (
    <Section
      id="about"
      titleId="about-heading"
      title="About me"
      eyebrow="Background"
      intro={SITE.aboutIntro}
    >
      <p className="max-w-prose text-base leading-relaxed text-slate-400 sm:text-lg">{SITE.bio}</p>
      <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
        Skills & tools
      </p>
      <ul
        className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2"
        aria-label="Skills"
      >
        {SITE.skills.map((skill) => (
          <li key={skill}>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200 ring-1 ring-white/5 transition motion-safe:duration-200 motion-safe:hover:border-cyan-400/20 motion-safe:hover:bg-white/[0.06]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-950/80 ring-1 ring-white/10">
                <SkillIcon name={skill} className="h-6 w-6" />
              </span>
              <span>{skill}</span>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}