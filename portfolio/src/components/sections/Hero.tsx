import { SITE } from "../../data/site";

export function Hero() {
  return (
    <section id="top" className="pb-16 pt-6 sm:pb-20 sm:pt-10">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[minmax(0,1fr)_min(40%,240px)] md:gap-x-8 lg:gap-x-10">
        <div>
          <header className="text-center md:text-left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Issue № 01 · {new Date().getFullYear()}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
              {SITE.heroLead}
            </p>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-[var(--color-brand)] via-sky-400 to-[var(--color-accent)] bg-clip-text text-transparent">
                {SITE.name}
              </span>
              <br />
              {SITE.tagline}
            </h1>
            <p className="mx-auto mt-6 max-w-prose text-base leading-relaxed text-slate-400 sm:text-lg md:mx-0">
              {SITE.heroSummary}
            </p>
            <div
              className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-white/20 to-transparent md:mx-0"
              aria-hidden
            />
          </header>

          <div className="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-400/35 bg-transparent px-6 text-sm font-medium text-cyan-100 transition hover:border-cyan-400/55 hover:bg-cyan-400/10"
            >
              View projects
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-white/10"
            >
              GitHub
            </a>
            {SITE.linkedin ? (
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-white/10"
              >
                LinkedIn
              </a>
            ) : null}
            {SITE.resumeUrl ? (
              <a
                href={SITE.resumeUrl}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-white/10"
                download={SITE.resumeDownloadFilename || true}
              >
                Download CV
              </a>
            ) : null}
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-[280px] justify-self-center md:mx-0 md:max-w-none md:justify-self-end">
          <div
            className="pointer-events-none absolute -inset-4 rounded-[1.75rem] bg-gradient-to-br from-cyan-500/25 via-violet-500/15 to-blue-600/20 blur-xl"
            aria-hidden
          />
          <div className="relative rounded-3xl bg-gradient-to-br from-[var(--color-brand)]/70 via-[var(--color-accent)]/50 to-sky-500/60 p-px shadow-xl">
            <div className="overflow-hidden rounded-[calc(1.5rem-1px)] bg-slate-950 p-2">
              <img
                src={SITE.profileImageSrc}
                alt={SITE.profileImageAlt}
                width={480}
                height={480}
                className="aspect-square w-full rounded-2xl object-cover ring-1 ring-white/10"
              />
            </div>
          </div>
          <figcaption className="sr-only">Profile photo of {SITE.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}
