import type { NavLink } from "../types/content";

export const SITE = {
  name: "Reuben",
  fullName: "Reuben Palo",
  role: "Software Developer",
  location: "Philippines",
  timeZone: "Asia/Manila",
  /** Year you started shipping professionally. */
  since: "2025",
  title: "Reuben Palo · Software Developer",
  metaDescription:
    "Portfolio of Reuben Palo—software developer building internal tools and web apps with React, Next.js and TypeScript.",
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
  /** Transparent (VP9 alpha) loop for the hero. Leave "" to show `heroCutoutSrc` instead. */
  heroVideoSrc: "/hero-voxel.webm",
  /** Transparent still of the same character — poster, and fallback for Safari/iOS which can't play WebM alpha. */
  heroCutoutSrc: "/hero-voxel-cutout.png",
  heroVideoAlt: "Animated voxel-style character inspired by Reuben, coding on a floating keyboard",
  tagline: "I build tools teams actually use.",
  heroSummary:
    "Mostly React and TypeScript—shipping internal tools, dashboards, and the glue that makes ops work less painful.",
  availability: "Open to full-time roles and freelance builds.",
  aboutIntro: "How I work day to day, not a mission statement.",
  bio: `I like small, honest UIs, typed codebases, and shipping in slices instead of big-bang releases. On a team I ask early, write things down lightly, and try to leave the next person a clearer path than I found.`,
  capabilities: [
    {
      title: "Internal tools",
      body: "Dashboards, reconciliation utilities and admin workflows that replace spreadsheets and manual steps.",
    },
    {
      title: "Full-stack delivery",
      body: "React and Next.js up front, Flask or Node with SQL behind it, deployed end to end—including IIS.",
    },
    {
      title: "Working with teams",
      body: "Small reviewable changes, clear handoffs, and asking the awkward question early.",
    },
  ],
  /** Cycled in the About terminal's "currently building" line. */
  currentlyBuilding: [
    "BayadRent — new landlord features",
    "City Pulse — more livability signals",
    "internal tools at ePrime",
    "this portfolio, v3",
  ],
  /** Second marquee ribbon: what you build, not what you use. */
  services: ["Internal tools", "Dashboards", "Admin workflows", "Full-stack apps", "Automation", "Shipping in slices"],
  skills: ["TypeScript", "React", "Node.js", "Tailwind CSS", "Git", "Python", "Next.js", "SQL", "C#", "CI/CD"] as const,
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
