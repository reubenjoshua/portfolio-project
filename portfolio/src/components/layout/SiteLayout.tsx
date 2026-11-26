import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomCursor } from "../effects/CustomCursor";
import { ScrollProgress } from "../effects/ScrollProgress";
import { SmoothScroll } from "../effects/SmoothScroll";

type SiteLayoutProps = { children: ReactNode };

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to main content
      </a>
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_80%_0%,var(--color-glow-a),transparent),radial-gradient(ellipse_50%_40%_at_0%_100%,var(--color-glow-b),transparent)]"
        aria-hidden
      />
      <SmoothScroll />
      <ScrollProgress />
      <CustomCursor />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
