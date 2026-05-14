import type { ReactNode } from "react";
import { SITE, NAV_LINKS } from "../../data/site";

export function EditorialShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-10">
      <nav
        aria-label="On this page"
        className="mb-10 border-b border-white/10 pb-6 lg:hidden"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
          On this page
        </p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-400">
          <li>
            <a href="#top" className="transition hover:text-white">
              Introduction
            </a>
          </li>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="lg:grid lg:grid-cols-[minmax(0,12rem)_minmax(0,48rem)] lg:gap-x-12 xl:gap-x-16">
        <aside className="hidden lg:sticky lg:top-6 lg:block lg:h-fit lg:self-start lg:pr-4 xl:pr-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
              Portfolio
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-sm font-bold leading-snug tracking-tight text-white">
              {SITE.name}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">{SITE.tagline}</p>

            <nav aria-label="On this page" className="mt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contents
              </p>
              <ul className="mt-3 space-y-2.5 text-sm text-slate-400">
                <li>
                  <a
                    href="#top"
                    className="transition hover:text-[var(--color-brand-hover)]"
                  >
                    Introduction
                  </a>
                </li>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition hover:text-[var(--color-brand-hover)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 space-y-2 border-t border-white/10 pt-6 text-xs text-slate-500">
              <a
                href={`mailto:${SITE.email}`}
                className="block break-all transition hover:text-slate-300"
              >
                {SITE.email}
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noreferrer noopener"
                className="block transition hover:text-slate-300"
              >
                GitHub
              </a>
              {SITE.linkedin ? (
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block transition hover:text-slate-300"
                >
                  LinkedIn
                </a>
              ) : null}
            </div>
        </aside>

        <div className="min-w-0 border-l border-transparent lg:border-white/10 lg:pl-10 xl:pl-14">
          {children}
        </div>
      </div>
    </div>
  );
}
