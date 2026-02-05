import { Hero, About, Projects, WorkBenefits, WorkExperience } from "./ux/";
import { Shape1, Shape2, Shape3, Shape4 } from "@/components";

export default function Home() {
  return (
    <main className="mx-auto relative">
      <Hero />
      <Shape1 />
      <About />
      <Shape2 />
      <Projects />
      <Shape3 />
      <WorkBenefits />
      <Shape4 />
      <WorkExperience />
    </main>
  );
}
