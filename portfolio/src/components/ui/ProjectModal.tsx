import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { Project } from "../../types/content";
import { lockScroll } from "../../lib/smoothScroll";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  const gallery = useMemo(() => {
    if (!project) return [];
    const fromGallery = project.gallery?.filter(Boolean) ?? [];
    if (fromGallery.length) return fromGallery;
    return project.imageSrc ? [project.imageSrc] : [];
  }, [project]);

  useEffect(() => {
    setActiveImage(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lockScroll(true);
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!gallery.length) return;
      if (e.key === "ArrowRight") {
        setActiveImage((i) => (i + 1) % gallery.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveImage((i) => (i - 1 + gallery.length) % gallery.length);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      lockScroll(false);
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose, gallery.length]);

  if (!project) return null;

  const detail = project.longDescription ?? project.description;
  const currentSrc = gallery[activeImage];

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-5">
      <button
        type="button"
        className="absolute inset-0 bg-[var(--color-ink)]/40 backdrop-blur-[2px]"
        aria-label="Close project details"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-lenis-prevent
        className="relative z-10 flex max-h-[min(94dvh,920px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-[var(--color-line)] px-4 py-3 sm:px-5">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--color-brand)]">
            Featured work
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="cursor-hover rounded-md border border-[var(--color-line)] bg-[var(--color-cream)] px-3 py-1.5 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-blush)]/60"
          >
            Close
          </button>
        </div>

        <div className="grid min-h-0 flex-1 lg:grid-cols-[1.15fr_0.95fr]">
          {/* Left — product visuals */}
          <div className="flex min-h-0 flex-col border-b border-[var(--color-line)] bg-[var(--color-cream)] lg:border-b-0 lg:border-r">
            <div className="relative min-h-[220px] flex-1 overflow-hidden sm:min-h-[280px]">
              {currentSrc ? (
                <img
                  src={currentSrc}
                  alt={`${project.title} screenshot ${activeImage + 1}`}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              ) : (
                <div className="flex h-full min-h-[220px] items-center justify-center font-[family-name:var(--font-display)] text-5xl font-semibold text-[var(--color-brand)]">
                  {project.title.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>

            {gallery.length > 1 ? (
              <div className="flex gap-2 overflow-x-auto border-t border-[var(--color-line)] p-3">
                {gallery.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`cursor-hover h-14 w-20 shrink-0 overflow-hidden rounded-md border transition ${
                      i === activeImage
                        ? "border-[var(--color-brand)] ring-2 ring-[var(--color-brand)]/30"
                        : "border-[var(--color-line)] opacity-80 hover:opacity-100"
                    }`}
                    aria-label={`Show screenshot ${i + 1}`}
                    aria-current={i === activeImage}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Right — sales / product copy */}
          <div className="min-h-0 overflow-y-auto p-5 sm:p-7">
            <h3
              id={titleId}
              className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl"
            >
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-brand)] sm:text-base">
              {detail}
            </p>

            {(project.purpose || project.audience) && (
              <div className="mt-6 space-y-4 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream)] p-4">
                {project.purpose ? (
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                      Purpose
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink)]">
                      {project.purpose}
                    </p>
                  </div>
                ) : null}
                {project.audience ? (
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                      Who it&apos;s for
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink)]">
                      {project.audience}
                    </p>
                  </div>
                ) : null}
              </div>
            )}

            {project.usersNote ? (
              <p className="mt-5 rounded-lg border border-[var(--color-blush)]/50 bg-[var(--color-blush)]/25 px-3 py-2.5 text-sm text-[var(--color-ink)]">
                <span className="font-semibold">In use — </span>
                {project.usersNote}
              </p>
            ) : null}

            {project.highlights?.length ? (
              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                  Why teams pick it
                </p>
                <ul className="mt-3 space-y-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-[var(--color-ink)]">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]"
                        aria-hidden
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand)]">
                Stack
              </p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={`Technologies for ${project.title}`}>
                {project.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-[var(--color-line)] bg-[var(--color-cream)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink)]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {project.specs?.length ? (
              <dl className="mt-6 overflow-hidden rounded-xl border border-[var(--color-line)]">
                {project.specs.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[6.5rem_1fr] gap-2 border-b border-[var(--color-line)] px-3 py-2.5 text-sm last:border-b-0 sm:grid-cols-[7.5rem_1fr]"
                  >
                    <dt className="font-medium text-[var(--color-brand)]">{row.label}</dt>
                    <dd className="text-[var(--color-ink)]">{row.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-hover inline-flex min-h-11 items-center rounded-md bg-[var(--color-brand)] px-6 text-sm font-medium text-[var(--color-cream)] transition hover:bg-[var(--color-brand-hover)]"
                >
                  Live demo →
                </a>
              ) : null}
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="cursor-hover inline-flex min-h-11 items-center rounded-md border border-[var(--color-brand)]/35 px-6 text-sm font-medium text-[var(--color-ink)] transition hover:bg-[var(--color-blush)]/50"
                >
                  Source →
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
