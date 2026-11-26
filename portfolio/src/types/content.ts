export type NavLink = { label: string; href: string };

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  /** One line: what the company does or your team focus (optional). */
  context?: string;
  period: string;
  bullets: string[];
};

export type Project = {
  id: string;
  title: string;
  /** Short card summary. */
  description: string;
  /** Longer pitch in the product modal. */
  longDescription?: string;
  /** What problem it solves / product purpose. */
  purpose?: string;
  /** Who the product is for. */
  audience?: string;
  /** Social proof line, e.g. who uses it today. */
  usersNote?: string;
  /** Product-style selling points. */
  highlights?: string[];
  /** Spec rows (label → value). */
  specs?: { label: string; value: string }[];
  stack: string[];
  href: string;
  repo: string;
  /** Primary screenshot. */
  imageSrc?: string;
  /** Extra screenshots for the modal gallery (falls back to imageSrc). */
  gallery?: string[];
};
