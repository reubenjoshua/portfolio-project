import { SITE } from "../../data/site";
import { Magnetic } from "../effects/Magnetic";
import { TiltCard } from "../effects/TiltCard";
import { LocalTime } from "../ui/LocalTime";
import { RotatingBadge } from "../ui/RotatingBadge";

function SplitWord({ word, delayMs = 0 }: { word: string; delayMs?: number }) {
  return (
    <span className="letter-mask" aria-hidden>
      {[...word].map((ch, i) => (
        <span key={i} className="letter" style={{ animationDelay: `${delayMs + i * 45}ms` }}>
          {ch}
        </span>
      ))}
    </span>
  );
}

/** WebKit (Safari, and every iOS browser) renders VP9 alpha with a black backdrop. */
function canPlayAlphaWebm() {
  const ua = navigator.userAgent;
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (ua.includes("Mac") && navigator.maxTouchPoints > 1);
  const isSafari = /^((?!chrome|chromium|android|edg|crios|fxios).)*safari/i.test(ua);
  return !isIOS && !isSafari;
}

export function Hero() {
  const [firstName, ...rest] = SITE.fullName.split(" ");
  const lastName = rest.join(" ");

  return (
    <section id="top" aria-label="Introduction" className="relative">
      <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 pb-10 pt-24 sm:px-6 lg:px-10">
        <div className="fade-in flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-brand">
          <span>{SITE.role}</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Available for work
          </span>
          <span>
            {SITE.location} · <LocalTime timeZone={SITE.timeZone} />
          </span>
        </div>

        <div className="mt-10 grid flex-1 items-center gap-12 lg:grid-cols-[1fr_auto]">
          <h1 className="font-display text-[clamp(4rem,14vw,10.5rem)] font-semibold leading-[0.88] tracking-[-0.03em] text-ink">
            <span className="sr-only">
              {SITE.fullName}, {SITE.role}
            </span>
            <span className="block">
              <SplitWord word={firstName} />
            </span>
            <span className="block pl-[10vw] font-serif font-normal italic tracking-[-0.01em] text-brand lg:pl-28">
              <SplitWord word={`${lastName}.`} delayMs={280} />
            </span>
          </h1>

          <div className="fade-in relative justify-self-center lg:justify-self-end" style={{ animationDelay: "500ms" }}>
            <TiltCard className="w-80 sm:w-[26rem]" glare={false}>
              <div className="relative aspect-square">
                <div
                  className="float-shadow absolute bottom-[9%] left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-[50%] bg-black/30 blur-xl"
                  aria-hidden
                />
                <div className="float-soft absolute inset-0">
                  {SITE.heroVideoSrc && canPlayAlphaWebm() ? (
                    <video
                      className="h-full w-full object-contain"
                      src={SITE.heroVideoSrc}
                      poster={SITE.heroCutoutSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={SITE.heroVideoAlt}
                    />
                  ) : (
                    <img src={SITE.heroCutoutSrc} alt={SITE.heroVideoAlt} className="h-full w-full object-contain" />
                  )}
                </div>
              </div>
            </TiltCard>
            <RotatingBadge
              href="#work"
              text="Scroll to work · Scroll to work · "
              className="absolute bottom-4 -left-4 h-24 w-24 border border-line shadow-md sm:h-28 sm:w-28"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="fade-in" style={{ animationDelay: "700ms" }}>
            <p className="max-w-xl font-display text-2xl leading-snug text-ink sm:text-3xl">{SITE.tagline}</p>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-brand">{SITE.heroSummary}</p>
          </div>
          <div className="fade-in flex flex-wrap gap-3" style={{ animationDelay: "850ms" }}>
            <Magnetic>
              <a
                href="#work"
                className="inline-flex h-12 items-center rounded-full bg-ink px-6 text-sm font-medium text-cream transition-colors hover:bg-brand-hover"
              >
                See selected work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full border border-ink/30 px-6 text-sm font-medium text-ink transition-colors hover:bg-blush/50"
              >
                Let&apos;s talk
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
