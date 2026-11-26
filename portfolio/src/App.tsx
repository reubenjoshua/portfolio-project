import { useEffect } from "react";
import { SiteLayout } from "./components/layout/SiteLayout";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Marquee } from "./components/ui/Marquee";
import { SITE } from "./data/site";

export default function App() {
  useEffect(() => {
    document.title = SITE.title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", SITE.metaDescription);
  }, []);

  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <Projects />
      <Experience />
      <About />
      <Contact />
    </SiteLayout>
  );
}
