import type { IconType } from "react-icons";
import { FaCode } from "react-icons/fa";
import {
  SiDotnet,
  SiGit,
  SiGithubactions,
  SiMysql,
  SiNodedotjs,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type SkillIconEntry = { Icon: IconType; colorClass: string };

const SKILL_ICONS: Record<string, SkillIconEntry> = {
  TypeScript: { Icon: SiTypescript, colorClass: "text-[#3178C6]" },
  React: { Icon: SiReact, colorClass: "text-[#61DAFB]" },
  "Node.js": { Icon: SiNodedotjs, colorClass: "text-[#5FA04E]" },
  "Tailwind CSS": { Icon: SiTailwindcss, colorClass: "text-[#06B6D4]" },
  Git: { Icon: SiGit, colorClass: "text-[#F05032]" },
  Python: { Icon: SiPython, colorClass: "text-[#3776AB]" },
  "Next.js": { Icon: SiNextdotjs, colorClass: "text-[var(--color-ink)]" },
  SQL: { Icon: SiMysql, colorClass: "text-[#4479A1]" },
  "C#": { Icon: SiDotnet, colorClass: "text-[#512BD4]" },
  "CI/CD": { Icon: SiGithubactions, colorClass: "text-[#2088FF]" },
};

type SkillIconProps = {
  name: string;
  className?: string;
  /** Use the surrounding text color instead of the brand color. */
  monochrome?: boolean;
};

export function SkillIcon({ name, className = "h-5 w-5", monochrome = false }: SkillIconProps) {
  const entry = SKILL_ICONS[name] ?? {
    Icon: FaCode,
    colorClass: "text-slate-400",
  };
  const { Icon, colorClass } = entry;
  return <Icon className={`shrink-0 ${monochrome ? "" : colorClass} ${className}`} aria-hidden />;
}
