import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type SiteLayoutProps = { children: ReactNode };

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Skip to main content
      </a>
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.25),transparent),radial-gradient(ellipse_60%_40%_at_100%_0%,rgba(168,85,247,0.2),transparent),radial-gradient(ellipse_50%_30%_at_0%_100%,rgba(59,130,246,0.15),transparent)]"
        aria-hidden
      />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}