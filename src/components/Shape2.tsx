"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

export const Shape2 = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".shape-2", {
      y: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".shape-2",
        start: "top 80%",
        end: "200% bottom",
        scrub: true,
        // markers: true,
      },
    });
  });
  return (
    <div className="flex justify-center items-center shape-2 relative -z-10 translate-y-37">
      <Image
        src="assets/05-nube.svg"
        alt="Carlos Mora"
        width={300}
        height={300}
        className="w-60 h-auto"
      />
    </div>
  );
};
