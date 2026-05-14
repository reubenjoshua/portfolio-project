import { SITE, NAV_LINKS } from "../../data/site";

export function Header() {
  return (
    <header className="relative z-40 bg-transparent">
      <div className="relative mx-auto flex max-w-5xl items-center justify-center px-4 py-3 sm:px-6">
        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-7 text-sm font-medium tracking-wide text-slate-400 sm:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="min-h-10 min-w-10 content-center text-center transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="min-h-10 shrink-0 rounded-full border border-cyan-400/35 bg-transparent px-4 py-2 text-center text-sm font-medium text-cyan-100 transition hover:border-cyan-400/55 hover:bg-cyan-400/10"
          >
            Contact
          </a>
        </nav>

        <div className="flex w-full justify-center sm:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative sm:hidden">
      <summary className="list-none cursor-pointer rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white marker:hidden [&::-webkit-details-marker]:hidden">
        <span className="sr-only">Open menu</span>
        Menu
      </summary>
      <div className="absolute left-1/2 z-50 mt-2 w-52 -translate-x-1/2 rounded-xl border border-white/10 bg-slate-900/95 p-2 shadow-xl backdrop-blur-md">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block min-h-11 rounded-lg px-3 py-2.5 text-slate-200 hover:bg-white/10"
          >
            {link.label}
          </a>
        ))}
        {SITE.resumeUrl ? (
          <a
            href={SITE.resumeUrl}
            download={SITE.resumeDownloadFilename || true}
            className="block min-h-11 rounded-lg px-3 py-2.5 text-slate-200 hover:bg-white/10"
          >
            Download CV
          </a>
        ) : null}
        <a
          href={`mailto:${SITE.email}`}
          className="mt-1 block min-h-11 rounded-lg border border-cyan-400/35 py-2.5 text-center text-sm font-medium text-cyan-100 transition hover:bg-cyan-400/10"
        >
          Contact
        </a>
      </div>
    </details>
  );
}
