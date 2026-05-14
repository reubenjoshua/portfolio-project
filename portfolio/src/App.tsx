import { useEffect } from "react";
import { SiteLayout } from "./components/layout/SiteLayout";
import { EditorialShell } from "./components/layout/EditorialShell";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { SITE } from "./data/site";

export default function App() {
  useEffect(() => {
    document.title = SITE.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", SITE.metaDescription);
  }, []);

  return (
    <SiteLayout>
      <EditorialShell>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </EditorialShell>
    </SiteLayout>
  );
}