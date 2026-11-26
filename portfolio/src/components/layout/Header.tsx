import { useEffect, useState } from "react";
import { SITE, NAV_LINKS } from "../../data/site";
import { useActiveSection } from "../../hooks/useActiveSection";
import { ThemeToggle } from "../ui/ThemeToggle";

const SECTION_IDS = ["top", ...NAV_LINKS.map((l) => l.href.slice(1))];

export function Header() {
  const active = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color] duration-300 ${
        scrolled ? "border-line bg-cream/80 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5 justify-self-start">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-cream">
            RP
          </span>
          <span className="hidden text-sm font-medium text-ink sm:inline">{SITE.fullName}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-paper/80 p-1 backdrop-blur">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-full px-4 py-1.5 text-sm transition-colors duration-200 ${
                      isActive ? "bg-ink text-cream" : "text-brand hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="col-start-3 flex items-center gap-2 justify-self-end">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  return (
    <details className="relative md:hidden">
      <summary className="list-none cursor-pointer rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink marker:hidden [&::-webkit-details-marker]:hidden">
        Menu
      </summary>
      <div className="absolute right-0 z-50 mt-2 w-56 rounded-2xl border border-line bg-paper p-2 shadow-lg">
        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            className="flex items-baseline gap-3 rounded-xl px-3 py-2.5 text-ink hover:bg-blush/50"
          >
            <span className="font-mono text-xs tabular-nums text-brand">{String(i + 1).padStart(2, "0")}</span>
            {link.label}
          </a>
        ))}
        {SITE.resumeUrl ? (
          <a
            href={SITE.resumeUrl}
            download={SITE.resumeDownloadFilename || true}
            className="mt-1 block rounded-xl bg-blush px-3 py-2.5 text-center text-sm font-medium text-ink"
          >
            Download CV
          </a>
        ) : null}
      </div>
    </details>
  );
}
