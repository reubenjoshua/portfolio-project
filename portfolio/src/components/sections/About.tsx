import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { SkillIcon } from "../ui/skillIcons";
import { StatusTerminal, type TerminalStat } from "../ui/StatusTerminal";
import { SITE } from "../../data/site";
import { PROJECTS } from "../../data/projects";

const STATS: TerminalStat[] = [
  { key: "products_shipped", value: String(PROJECTS.length).padStart(2, "0"), label: "Products shipped" },
  { key: "shipping_since", value: SITE.since, label: "Shipping professionally since" },
  { key: "tools_in_daily_use", value: String(SITE.skills.length).padStart(2, "0"), label: "Tools in daily use" },
];

export function About() {
  return (
    <Section id="about" titleId="about-heading" index="03" title="About" intro={SITE.aboutIntro}>
      <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <Reveal>
          <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">{SITE.bio}</p>
          <StatusTerminal stats={STATS} building={SITE.currentlyBuilding} />
        </Reveal>

        <Reveal delayMs={120}>
          <p className="text-[11px] font-mono font-medium uppercase tracking-[0.16em] text-brand">What I do</p>
          <ol className="mt-4">
            {SITE.capabilities.map((c, i) => (
              <li key={c.title} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-line py-6">
                <span className="font-mono text-xs tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand">{c.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <Reveal delayMs={160}>
        <p className="mt-16 text-[11px] font-mono font-medium uppercase tracking-[0.16em] text-brand">Toolbox</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
          {SITE.skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-2 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:border-brand/50"
            >
              <SkillIcon name={skill} className="h-4 w-4" />
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
