import { useEffect, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { SITE } from "../../data/site";
import { Magnetic } from "../effects/Magnetic";
import { Reveal } from "../ui/Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(id);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  const links = [
    { label: "GitHub", href: SITE.github },
    ...(SITE.linkedin ? [{ label: "LinkedIn", href: SITE.linkedin }] : []),
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-ink py-24 text-cream sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <Reveal>
          <p className="font-mono text-xs tabular-nums tracking-[0.2em] text-cream/60">(04)</p>
          <h2
            id="contact-heading"
            className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.03em]"
          >
            Have a workflow that needs a{" "}
            <span className="font-serif font-normal italic tracking-normal text-blush">better tool?</span>
          </h2>
        </Reveal>

        <Reveal delayMs={120}>
          <div className="mt-14 flex flex-col gap-6 border-t border-cream/15 pt-10 md:flex-row md:items-center md:justify-between">
            <Magnetic strength={0.2}>
              <a
                href={`mailto:${SITE.email}`}
                data-cursor="Write"
                className="group inline-flex items-center gap-4 font-display text-3xl sm:text-5xl"
              >
                <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-1 transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                  {SITE.email}
                </span>
                <HiArrowUpRight className="h-8 w-8 shrink-0 transition-transform duration-300 group-hover:rotate-45" aria-hidden />
              </a>
            </Magnetic>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex h-11 items-center self-start rounded-full border border-cream/30 px-5 text-sm font-medium transition-colors hover:bg-cream hover:text-ink md:self-auto"
              aria-live="polite"
            >
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-mono font-medium uppercase tracking-[0.16em] text-cream/60">Availability</p>
              <p className="mt-3 text-base text-cream/90">{SITE.availability}</p>
            </div>
            <div>
              <p className="text-[11px] font-mono font-medium uppercase tracking-[0.16em] text-cream/60">Elsewhere</p>
              <ul className="mt-3 space-y-1.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1.5 text-base text-cream/90 transition-colors hover:text-blush"
                    >
                      {l.label}
                      <HiArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {SITE.resumeUrl ? (
              <div>
                <p className="text-[11px] font-mono font-medium uppercase tracking-[0.16em] text-cream/60">Résumé</p>
                <a
                  href={SITE.resumeUrl}
                  download={SITE.resumeDownloadFilename || true}
                  className="mt-3 inline-flex text-base text-cream/90 transition-colors hover:text-blush"
                >
                  Download CV (PDF)
                </a>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
