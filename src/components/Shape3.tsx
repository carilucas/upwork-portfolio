"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

export const Shape3 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".shape-3", {
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".shape-3",
        start: "top 70%",
        end: "190% 85%",
        scrub: true,
        // markers: true,
      },
    });
  });
  return (
    <div className="flex justify-center items-center shape-3 relative -translate-y-30">
      <Image
        src="assets/11-shape.svg"
        alt="Carlos Mora"
        width="300"
        height="300"
      />
    </div>
  );
};
