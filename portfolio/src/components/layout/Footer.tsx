import { SITE } from "../../data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/85 py-12 text-center text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <nav aria-label="Social and contact" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <a
          href={`mailto:${SITE.email}`}
          className="text-slate-400 transition-colors hover:text-[var(--color-brand-hover)]"
        >
          Email
        </a>
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer noopener"
          className="text-slate-400 transition-colors hover:text-[var(--color-brand-hover)]"
        >
          GitHub
        </a>
        {SITE.linkedin ? (
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-slate-400 transition-colors hover:text-[var(--color-brand-hover)]"
          >
            LinkedIn
          </a>
        ) : null}
        {SITE.resumeUrl ? (
          <a
            href={SITE.resumeUrl}
            className="text-slate-400 transition-colors hover:text-[var(--color-brand-hover)]"
            download={SITE.resumeDownloadFilename || true}
          >
            Download CV
          </a>
        ) : null}
        </nav>
        <p className="mt-8">
          © {new Date().getFullYear()} {SITE.name}. Built with React, Vite, TypeScript &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}