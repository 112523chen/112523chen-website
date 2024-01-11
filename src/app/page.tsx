"use client";
import { useEffect } from "react";
import About from "~/components/About";
import Display from "~/components/Display";
import Footer from "~/components/Footer";
import Skillset from "~/components/Skillset";
import Professional from "~/components/Professional";
import ProjectsSection from "~/components/ProjectsSection";
import WhatAmIDoSection from "~/components/WhatAmIDoSection";
import { handleVisibilityChange } from "~/utils";

export default function HomePage() {
  useEffect(() => {
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <main className="bg-gray-100 dark:bg-gray-800">
      <Display />
      <About />
      <Skillset />
      <Professional />
      <ProjectsSection />
      <WhatAmIDoSection />
      <Footer />
    </main>
  );
}
