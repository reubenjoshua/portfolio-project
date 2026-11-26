import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";
import { ProjectModal } from "../ui/ProjectModal";
import { HoverPreview } from "../effects/HoverPreview";
import { PROJECTS } from "../../data/projects";
import type { Project } from "../../types/content";

const INTRO = "Products built for real teams. Hover to preview, click for the full breakdown.";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [hovered, setHovered] = useState<Project | null>(null);

  const open = (p: Project) => {
    setHovered(null);
    setActive(p);
  };

  return (
    <Section id="work" titleId="work-heading" index="01" title="Selected work" intro={INTRO}>
      <ul className="group/list" onMouseLeave={() => setHovered(null)}>
        {PROJECTS.map((p, i) => (
          <li key={p.id} className="border-b border-line">
            <Reveal delayMs={i * 80}>
              <button
                type="button"
                data-cursor="View"
                onMouseEnter={() => setHovered(p)}
                onClick={() => open(p)}
                className="group/row grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-4 py-8 text-left transition-opacity duration-300 group-hover/list:[&:not(:hover)]:opacity-40 sm:grid-cols-[3.5rem_1fr_15rem_2.5rem] sm:py-10"
              >
                <span className="self-start pt-3 font-mono text-xs tabular-nums text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-3xl font-semibold leading-tight tracking-tight text-ink transition-transform duration-500 ease-out group-hover/row:translate-x-3 sm:text-5xl">
                    {p.title}
                  </span>
                  <span className="mt-3 block max-w-xl text-sm leading-relaxed text-brand sm:text-base">
                    {p.description}
                  </span>
                  {p.imageSrc ? (
                    <span className="mt-5 block overflow-hidden rounded-xl border border-line md:hidden">
                      <img src={p.imageSrc} alt="" className="aspect-[16/10] w-full object-cover object-top" />
                    </span>
                  ) : null}
                </span>
                <span className="hidden flex-wrap justify-end gap-1.5 sm:flex">
                  {p.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-0.5 text-[11px] font-medium text-ink"
                    >
                      {t}
                    </span>
                  ))}
                </span>
                <span className="grid h-10 w-10 place-items-center justify-self-end rounded-full border border-line text-ink transition-all duration-300 group-hover/row:rotate-45 group-hover/row:border-ink group-hover/row:bg-ink group-hover/row:text-cream">
                  <HiArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      <HoverPreview src={hovered?.imageSrc} visible={Boolean(hovered) && !active} />
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
