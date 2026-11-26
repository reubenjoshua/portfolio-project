import { SITE, NAV_LINKS } from "../../data/site";
import { LocalTime } from "../ui/LocalTime";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-8 border-t border-cream/15 py-10 text-sm sm:grid-cols-3 sm:items-center">
          <p className="text-cream/70">
            © {new Date().getFullYear()} {SITE.fullName}
          </p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 sm:justify-center">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream/70 transition-colors hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-6 text-cream/70 sm:justify-end">
            <span>
              {SITE.location} · <LocalTime timeZone={SITE.timeZone} />
            </span>
            <a href="#top" className="transition-colors hover:text-cream">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
