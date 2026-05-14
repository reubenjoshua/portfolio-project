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
  description: string;
  stack: string[];
  href: string;
  repo: string;
  /** Optional screenshot; if omitted, a gradient + initials tile is shown. */
  imageSrc?: string;
};