

import { Hero, About, Projects, WorkBenefits, WorkExperience } from "./ux/";
import { Button } from "@/components";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Hero />
      <About />
      <Projects />
      <WorkBenefits />
      <WorkExperience />
      <Button name="Contact Me" isBeam containerClass="w-[300px] mt-10 mb-20" href="https://www.upwork.com/freelancers/carlosmora"/>
    </main>
  );
}
