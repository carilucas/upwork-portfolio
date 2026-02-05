"use client";

import { useState } from "react";
import Image from "next/image";
import { myProjects } from "@/constants";
import { useTransitionRouter } from "next-view-transitions";
import { pageAnimation } from "@/view-transitions";

export const ProjectsPagination = ({ slug }: { slug: string }) => {
  const slugProjectsArray = myProjects.map((project) => project.slug);
  const slugIndex = slugProjectsArray.indexOf(slug);
  const totalProjects = myProjects.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(slugIndex);
  const router = useTransitionRouter();

  const handleNavigation = (direction: string) => {
    let newIndex;

    if (direction === "previous") {
      newIndex =
        selectedProjectIndex === 0
          ? totalProjects - 1
          : selectedProjectIndex - 1;
    } else {
      newIndex =
        selectedProjectIndex === totalProjects - 1
          ? 0
          : selectedProjectIndex + 1;
    }

    setSelectedProjectIndex(newIndex);

    router.push(`/projects/${myProjects[newIndex].slug}`, {
      onTransitionReady: pageAnimation,
    });
  };
  return (
    <div className="c-space mx-auto pb-10 bg-[var(--cyan-1)]">
      <div className="flex justify-between items-center w-full gap-5 max-w-md mx-auto pl-5 pr-3">
        <button
          className="arrow-btn flex justify-center items-center gap-2"
          onClick={() => handleNavigation("previous")}
        >
          <Image
            src="/assets/left-arrow.png"
            alt="left arrow"
            width={60}
            height={60}
          />
          <span>Previous</span>
        </button>

        <button
          className="arrow-btn flex justify-center items-center gap-2"
          onClick={() => handleNavigation("next")}
        >
          <span>Next</span>
          <Image
            src="/assets/right-arrow.png"
            alt="right arrow"
            width={60}
            height={60}
          />
        </button>
      </div>
    </div>
  );
};
