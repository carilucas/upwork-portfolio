"use client";

import Image from "next/image";
import { fredoka } from "@/config/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Hero = () => {
  const hero = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ scope: hero.current });

    tl.fromTo(
      ".heroText",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "back.out", stagger: 0.4, delay: 0.3 },
    );
    tl.fromTo(
      ".profile-parent",
      { opacity: 0 },
      { opacity: 1, duration: 0.1, ease: "power.inOut" },
    );
    tl.fromTo(
      ".social-path a",
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power.inOut", stagger: 0.2 },
      "-=0.4",
    );
    tl.fromTo(
      ".brand-promise",
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power.inOut", stagger: 0.2 },
      "-=0.2",
    );

    const mediaQuery = gsap.matchMedia();

    mediaQuery.add("(min-width:1015px)", () => {
      tl.to(".profile-parent", {
        x: -250,
        y: 630,
        scale: 0.4,
        zIndex: "9",
        scrollTrigger: {
          trigger: ".hero",
          start: "30% 20%",
          end: "90% 30%",
          scrub: true,
          // markers: true,
        },
      });
    });
    mediaQuery.add("(min-width:1100px)", () => {
      tl.to(".profile-parent", {
        x: -300,
        y: 630,
        scale: 0.4,
        zIndex: "9",
        scrollTrigger: {
          trigger: ".hero",
          start: "30% 20%",
          end: "90% 30%",
          scrub: true,
          // markers: true,
        },
      });
    });
    mediaQuery.add("(min-width:1279px)", () => {
      tl.to(".profile-parent", {
        x: -410,
        y: 630,
        scale: 0.4,
        zIndex: "9",
        scrollTrigger: {
          trigger: ".hero",
          start: "30% 20%",
          end: "90% 30%",
          scrub: true,
          // markers: true,
        },
      });
    });
  }, []);

  return (
    <section
      className="hero w-full flex relative  bg-[linear-gradient(to_bottom,_var(--black-4)50%,_var(--blue-1))]"
      id="home"
      ref={hero}
    >
      <div className="c-container overflow-hidden absolute top-25 right-0 w-200 h-200">
        <Image
          src="/assets/02-c.svg"
          alt="Hero"
          width={400}
          height={400}
          className="max-w-[200px] object-cover absolute top-0 right-[-30px] rotate-325 hidden md:block"
        />
      </div>
      <div className="flex justify-center items-center relative z-1 w-full max-w-7xl mx-auto mt-30">
        <div className="w-full flex flex-col justify-center md:flex-row md:justify-between items-center gap-2 md:gap-5 flex-wrap px-5 lg:px-0">
          <div className="flex-1 mb-5 flex gap-2 flex-col">
            <p
              className={`text-2xl md:text-4xl font-medium heroText ${fredoka.className}`}
            >
              Hi, I&apos;m
            </p>
            <h1
              className={`text-2xl md:text-6xl ${fredoka.className} heroText`}
            >
              Carlos Mora
            </h1>
            <p className="text-xl md:text-3xl heroText">Code & Design</p>
            <div className="social-path flex justify-start items-center gap-5">
              <a
                href="https://github.com/carilucas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/github.svg"
                  alt="Hero"
                  width={50}
                  height={50}
                  className="max-w-[40px] max-h-[40px] object-cover opacity-50 hover:opacity-100 transition-all ease-in-out duration-700"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-mora-dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/work/tech/linkedin.png"
                  alt="Hero"
                  width={60}
                  height={60}
                  className="max-w-[40px] max-h-[40px] object-cover opacity-50 hover:opacity-100 transition-all ease-in-out duration-700"
                />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="profile-parent mx-auto relative overflow-hidden hover:scale-102 transition-all ease-in-out duration-700">
              <div className="mx-auto">
                <Image
                  src="/assets/01perfil-pic2.webp"
                  alt="Hero"
                  width={2000}
                  height={2000}
                  className="md:max-w-[550px] object-cover profile-pic"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 brand-promise hidden md:block">
            <div className="md:max-w-[460px] max-w-[360px] mx-auto relative overflow-hidden path-container hover:scale-102 transition-all ease-in-out duration-700">
              <div className="mx-auto max-w-[460px] max-h-[460px]">
                <h4
                  className={`text-[var(--cyan-2)] text-4xl ${fredoka.className}`}
                >
                  Lets build new experiences
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
