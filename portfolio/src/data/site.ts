import type { NavLink } from "../types/content";

export const SITE = {
  name: "Reuben",
  title: "Reuben Palo · Software Developer",
  metaDescription:
    "Portfolio of Reuben Palo—software developer building modern, accessible web experiences with React and TypeScript.",
  email: "rubspalo@gmail.com",
  github: "https://github.com/reubenjoshua",
  /** Leave "" to hide the LinkedIn button. */
  linkedin: "https://www.linkedin.com/in/reuben-joshua-palo-a7195b210/",
  /** PDF in `portfolio/public/` (e.g. `cv.pdf` → `/cv.pdf`). Leave "" to hide CV download links. */
  resumeUrl: "/RESUME-PALO.pdf",
  /** Suggested filename when the browser saves the file (same-origin URLs only). */
  resumeDownloadFilename: "Reuben-Palo-CV.pdf",
  profileImageSrc: "/self.jpeg",
  profileImageAlt: "Reuben Palo, software developer",
  tagline: "I build things for the web.",
  heroLead: "Open to opportunities",
  heroSummary:
    "Building performant, accessible web experiences with React and TypeScript.",
  aboutIntro: "How I work and what I focus on when building products with a team.",
  bio: `I care about clear UX, solid TypeScript, and shipping incrementally with good tests and reviews. On a team, I communicate early, document decisions lightly, and help unblock others when I can.`,
  skills: ["TypeScript", "React", "Node.js", "Tailwind CSS", "Git", "Python", "Next.js", "SQL", "C#"] as const,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];