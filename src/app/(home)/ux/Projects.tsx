"use client";

import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { myProjects } from "@/constants";
import Image from "next/image";
import { fredoka } from "@/config/fonts";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTransitionRouter } from "next-view-transitions";
import { imageAnimation } from "@/view-transitions/imageAnimation";
import { Button } from "@/components";

const projectCount = myProjects.length;

export const Projects = () => {
  const router = useTransitionRouter();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: string) => {
    if (direction === "previous") {
      setSelectedProjectIndex((prevIndex) =>
        prevIndex === 0 ? projectCount - 1 : prevIndex - 1,
      );
    } else {
      setSelectedProjectIndex((prevIndex) =>
        prevIndex === projectCount - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mediaQuery = gsap.matchMedia();
    mediaQuery.add("(min-width: 1024px)", () => {
      gsap.from(".work-wrappper", {
        scale: 0,
        scrollTrigger: {
          trigger: "#work",
          start: "top 90%",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });
  }, [selectedProjectIndex]);

  useGSAP(() => {
    gsap.fromTo(
      `.animatedText`,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.inOut" },
    );
  }, [selectedProjectIndex]);

  useGSAP(() => {
    gsap.fromTo(
      `.animatedMockup`,
      { opacity: 0 },
      { opacity: 1, duration: 1, stagger: 0.2, ease: "power2.inOut" },
    );
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  const handleImageAnimation = () => {
    router.push(`/projects/${currentProject.slug}`, {
      onTransitionReady: () => imageAnimation(`mockup-${currentProject.slug}`),
    });
  };
  return (
    <section className=" bg-[var(--blue-1)] py-20 work-projects">
      <div
        className="diamond-background-blue max-w-7xl mx-auto c-space"
        id="work"
      >
        <Image
          src="assets/02-c.svg"
          width={300}
          height={300}
          className="w-[200px] block m-auto mb-3.5"
          alt="Carlos Mora"
        />
        <p className={`head-text ${fredoka.className} text-center`}>
          My Selected Work
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full work-wrappper">
          <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 glass">
            <div className="absolute top-0 right-0">
              <Image
                src={currentProject.spotlight}
                alt="spotlight"
                width={60}
                height={60}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
              style={currentProject.logoStyle}
            >
              <Image
                className="w-10 h-10 shadow-sm"
                src={currentProject.logo}
                alt="logo"
                width={60}
                height={60}
              />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-[var(--blue-3)] text-2xl font-semibold animatedText">
                {currentProject.title}
              </p>

              <p className="animatedText text-[var(--black-4)]">
                {currentProject.desc}
              </p>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <Image
                      src={tag.path}
                      alt={tag.name}
                      width={60}
                      height={60}
                      title={tag.name}
                    />
                  </div>
                ))}
              </div>
              <div className="relative z-1">
                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600 mb-4"
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="text-[var(--black-4)]">Live Site</p>
                  <Image
                    src="/assets/arrow-up-right.png"
                    alt="arrow"
                    width={60}
                    height={60}
                    className="w-5 h-5"
                  />
                </a>
                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600"
                  // href={`/projects/${currentProject.slug}`}
                  onClick={handleImageAnimation}
                >
                  <p className="text-[var(--black-4)]">More info</p>
                  <Image
                    src="/assets/arrow-up-right.png"
                    alt="arrow"
                    width={60}
                    height={60}
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center mt-7 w-full lg:absolute lg:bottom-5 lg:left-0 lg:p-5">
              <button
                className="arrow-btn"
                onClick={() => handleNavigation("previous")}
              >
                <Image
                  src="/assets/left-arrow.png"
                  alt="left arrow"
                  width={60}
                  height={60}
                />
              </button>

              <button
                className="arrow-btn"
                onClick={() => handleNavigation("next")}
              >
                <Image
                  src="/assets/right-arrow.png"
                  alt="right arrow"
                  width={60}
                  height={60}
                />
              </button>
            </div>
          </div>

          <div className="rounded-lg h-96 md:h-full glass">
            <a onClick={handleImageAnimation}>
              <Image
                src={currentProject.mockup || ""}
                alt="project"
                width={800}
                height={800}
                className="w-full h-full object-cover animatedMockup cursor-pointer rounded-2xl"
                style={{
                  viewTransitionName: `mockup-${currentProject.slug}`,
                }}
              />
            </a>
          </div>
        </div>
        <Button
          name="Case Studies"
          isBeam
          containerClass="w-[300px] mt-10 mb-20 bg-[var(--cyan-3)]"
          href="/projects/ifci-orchestras-web-platform"
        />
      </div>
    </section>
  );
};
