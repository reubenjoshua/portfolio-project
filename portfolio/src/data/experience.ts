import type { ExperienceItem } from "../types/content";

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "1",
    role: "Software Developer",
    company: "ePrime Business Solutions, Inc",
    context: "Full-stack developer · building internal systems for finance, IT and operations.",
    period: "2025 — Present",
    bullets: [
      "Automated Billing & Collection payment reconciliation using React and Python (Flask) REST APIs to group transactions by reference prefixes, reducing manual matching for finance.",
      "Led the Helpdesk / IT Asset Management system (React, TypeScript, Next.js, MSSQL)—wrote specs and guided teammates to replace manual tracking with lifecycle and ticket workflows.",
      "Developed the NRW Management Information System (MIS) portal (React, TypeScript, Flask, MSSQL) with multi-level approvals and WebSocket dashboards for real-time operational visibility.",
      "Enhanced and supported an ASP.NET MVC and SQL Server check-request system (prepare, evaluate, modify, post, transmit), delivering accounting search/reporting upgrades, approver attachment recovery, and critical fixes for approval routing and transmittal.",
      "Implemented CI/CD pipelines with GitHub Actions to automate build, lint, and test on push, and continuous deployment of releases to production environments.",
      "Configured and managed production deployments on Windows Server using IIS and Docker, setting up application pools, reverse proxies, and secure routing rules for high availability.",
      "Designed and normalized relational database schemas in MSSQL from scratch while maintaining legacy project databases, writing optimized SQL queries, joins, and stored procedures to eliminate redundancy and ensure accurate, reliable data retrieval.",
    ],
  },
];
