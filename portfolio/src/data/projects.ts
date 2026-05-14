import type { Project } from "../types/content";

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "TextFileSplitter",
    description: "Group each payment method and distinguish the same first four of ATM reference.",
    stack: ["React", "Python-Flask", "Tailwind"],
    href: "http://10.15.226.110:5003/",
    repo: "https://github.com/reubenjoshua/TextFileSplitterEprimeV2",
    imageSrc: "/project-screenshots/splitterPic.png",
  },
  {
    id: "p2",
    title: "Asset Management for IT Helpdesk",
    description: "Inventory tracking for Assets for the IT Helpdesk.",
    stack: ["TypeScript", "Tailwind", "Nextjs", "SQL"],
    href: "#",
    repo: "https://github.com/Makdoto/eprime-helpdesk-web-app/tree/main/it-helpdesk-web-app",
    imageSrc: "/project-screenshots/assetManagementPic.png",
  },
];