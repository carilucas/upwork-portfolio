

import { Hero, About, Projects, WorkBenefits, WorkExperience } from "./ux/";
import { Contact } from "@/components";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Hero />
      <About />
      <Projects />
      <WorkBenefits />
      <WorkExperience />
      <Contact />
    </main>
  );
}
