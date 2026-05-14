import { Section } from "../ui/Section";
import { PROJECTS } from "../../data/projects";
import type { Project } from "../../types/content";

const INTRO =
  "Webapps I had deployed, Solution for business needs.";

function getInitials(title: string) {
  const parts = title.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return title.slice(0, 2).toUpperCase();
}

function ProjectThumb({ project }: { project: Project }) {
  if (project.imageSrc) {
    return (
      <img
        src={project.imageSrc}
        alt=""
        width={640}
        height={274}
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <div
      className="flex h-full min-h-[140px] w-full items-center justify-center bg-gradient-to-br from-cyan-500/15 to-violet-600/20 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white/90"
      aria-hidden
    >
      {getInitials(project.title)}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" titleId="projects-heading" title="Projects" intro={INTRO}>
      <ul className="grid gap-6 sm:grid-cols-2 sm:gap-7 lg:gap-8">
        {PROJECTS.map((p) => (
          <li key={p.id}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent shadow-lg shadow-slate-950/40 ring-1 ring-white/5 transition motion-safe:duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:border-cyan-400/35 motion-safe:hover:shadow-cyan-500/10">
              <div className="aspect-[16/9] min-h-[148px] w-full overflow-hidden border-b border-white/10 bg-slate-900/80 sm:min-h-[160px]">
                <ProjectThumb project={p} />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400 sm:text-base">{p.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies for ${p.title}`}>
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-white/5 bg-slate-900/80 px-2 py-0.5 text-xs font-medium text-[var(--color-brand)]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={p.href}
                    className="text-sm font-semibold text-[var(--color-brand)] transition hover:text-[var(--color-brand-hover)]"
                  >
                    Live demo →
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm font-semibold text-slate-400 transition hover:text-white"
                  >
                    Source →
                  </a>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}