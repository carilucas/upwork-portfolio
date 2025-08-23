

import { Hero, About, Projects, WorkBenefits } from "./ux/";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Hero />
      <About />
      <Projects />
      <WorkBenefits />
    </main>
  );
}
