import type { Project } from "../types/content";

export const PROJECTS: Project[] = [
  {
    id: "bayadrent",
    title: "BayadRent",
    description: "Rent collection and payment tracking for Philippine landlords and renters.",
    purpose:
      "Replace chat-thread receipts and spreadsheet ledgers with one place to bill rent, collect GCash proof, and see who has paid.",
    audience: "Small landlords and their renters who settle rent monthly through GCash.",
    usersNote: "In production — web app and cloud-hosted API with managed Postgres and Redis.",
    longDescription:
      "A full-stack rent workspace: monthly invoices go out, renters upload GCash proof, landlords review it, and status, receipts and reminders take care of themselves.",
    highlights: [
      "Monthly invoices, GCash proof upload and landlord review",
      "Payment status tracking with generated receipts",
      "Email reminders run as background jobs on Redis/BullMQ",
      "JWT auth with landlord and renter roles, plus password reset",
      "GitHub Actions CI (lint/build) and continuous deployment to Render",
    ],
    specs: [
      { label: "Role", value: "Full-stack" },
      { label: "Type", value: "Product" },
      { label: "Status", value: "In production" },
    ],
    stack: ["Next.js", "NestJS", "PostgreSQL", "Redis/BullMQ", "Drizzle", "GitHub Actions"],
    href: "",
    repo: "",
    imageSrc: "/project-screenshots/bayadRent1.png",
    gallery: ["/project-screenshots/bayadRent.png"],
  },
  {
    id: "city-pulse",
    title: "City Pulse",
    description: "Neighborhood livability explorer — air quality, transit, green space and quietness in one view.",
    purpose:
      "Turn scattered civic data into a shareable explorer so anyone can compare how livable a neighborhood actually is.",
    audience: "Residents, movers and civic teams weighing where to live or what to improve.",
    usersNote: "Live on Vercel as a public demo.",
    longDescription:
      "A civic frontend with home, filter/sort, place detail and an editor for refreshing signals — built on Next.js App Router with production-minded data handling.",
    highlights: [
      "URL-synced filters (nuqs) so every view is shareable",
      "Debounced search and TanStack Query loading states",
      "Zod-validated data contracts",
      "Provenance badges show when data is Fresh, Aging or Stale",
      "Vitest coverage for filter/sort logic and GitHub Actions CI (lint/test/build)",
    ],
    specs: [
      { label: "Role", value: "Front-end" },
      { label: "Type", value: "Civic product" },
      { label: "Status", value: "Live demo" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "nuqs", "Zod", "Vitest", "GitHub Actions"],
    href: "",
    repo: "",
    imageSrc: "/project-screenshots/bayadRent1.png",
    gallery: ["/project-screenshots/bayadRent.png"],
  },
  {
    id: "p1",
    title: "TextFileSplitter",
    description:
      "Payment-file utility that groups methods and flags matching ATM reference prefixes.",
    purpose:
      "Turn messy payment text files into grouped, reviewable batches so reconciliation finishes faster with fewer missed matches.",
    audience: "Finance & ops teams who process bank/payment dumps daily.",
    usersNote: "In active use by internal operations for payment reconciliation workflows.",
    longDescription:
      "Upload a file, choose a payment mode, and let the tool group rows and surface matching ATM reference prefixes—without spreadsheet gymnastics.",
    highlights: [
      "Groups transactions by payment method automatically",
      "Flags matching ATM reference prefixes for review",
      "Built for real operator workflows, not demos",
    ],
    specs: [
      { label: "Role", value: "Full-stack" },
      { label: "Type", value: "Internal ops tool" },
      { label: "Status", value: "Deployed · in use" },
    ],
    stack: ["React", "Python-Flask", "Tailwind"],
    href: "http://10.15.226.110:5003/",
    repo: "https://github.com/reubenjoshua/TextFileSplitterEprimeV2",
    imageSrc: "/project-screenshots/splitterPic.png",
    gallery: ["/project-screenshots/splitterPic.png"],
  },
  {
    id: "p2",
    title: "Asset Management for IT Helpdesk",
    description: "Inventory tracking for Helpdesk assets—ownership, status, and lookups in one place.",
    purpose:
      "Give Helpdesk a single place to look up devices, ownership, and status during tickets and audits.",
    audience: "IT Helpdesk and asset owners who need fast, trustworthy inventory answers.",
    usersNote: "Used by Helpdesk staff for day-to-day asset lookups and tracking.",
    longDescription:
      "A typed Next.js front end with SQL-backed records so “where is that laptop?” stops being a scavenger hunt.",
    highlights: [
      "Central asset register for Helpdesk workflows",
      "Faster lookups during tickets and audits",
      "Structured records with a clear web UI",
    ],
    specs: [
      { label: "Role", value: "Full-stack" },
      { label: "Type", value: "Internal product" },
      { label: "Status", value: "Deployed · in use" },
    ],
    stack: ["TypeScript", "Tailwind", "Nextjs", "SQL"],
    href: "http://10.15.226.110:5100/",
    repo: "https://github.com/Makdoto/eprime-helpdesk-web-app/tree/main/it-helpdesk-web-app",
    imageSrc: "/project-screenshots/assetManagementPic.png",
    gallery: ["/project-screenshots/assetManagementPic.png"],
  },
  {
    id: "p3",
    title: "Kanban-Board",
    description: "A light Kanban board for organizing work across columns with smooth motion.",
    purpose:
      "Organize tasks in columns without the weight of a full project-management suite.",
    audience: "Individuals and small teams who want a clean board for personal or side work.",
    usersNote: "Live public demo—ready to try in the browser.",
    longDescription:
      "React + TypeScript UI with Tailwind and Framer Motion for approachable interactions and a focused workflow.",
    highlights: [
      "Clear column-based workflow",
      "Lightweight enough for personal use",
      "Motion that guides without distracting",
    ],
    specs: [
      { label: "Role", value: "Front-end" },
      { label: "Type", value: "Side project" },
      { label: "Status", value: "Live demo" },
    ],
    stack: ["TypeScript", "Tailwind", "Framer Motion", "React"],
    href: "https://kanban-board-xi-one.vercel.app/",
    repo: "https://github.com/reubenjoshua/kanban-board.git",
    imageSrc: "/project-screenshots/kanbanPic.png",
    gallery: ["/project-screenshots/kanbanPic.png"],
  },
];
