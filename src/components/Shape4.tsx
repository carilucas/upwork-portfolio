"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

export const Shape4 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".shape-4",
      {
        y: 135,
      },
      {
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".work-experience",
          start: "top 90%",
          end: "25% bottom",
          scrub: true,
          // markers: true,
        },
      },
    );
  });
  return (
    <div className="flex justify-center items-center shape-4 relative -z-10">
      <Image
        src="assets/12-shape-1.svg"
        alt="Carlos Mora"
        width="300"
        height="300"
        className="w-90 h-auto"
      />
      <Image
        src="assets/12-shape-2.svg"
        alt="Carlos Mora"
        width="300"
        height="300"
        className="hidden md:block w-90 h-auto"
      />
    </div>
  );
};
