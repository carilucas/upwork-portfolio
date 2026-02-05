"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

export const Shape1 = () => {
  const shapeContainer = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({ scope: shapeContainer.current });
    tl.fromTo(
      ".shape",
      { y: -150 },
      {
        y: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.4,
        delay: 0.3,
      },
    );
  });

  return (
    <div
      className="flex justify-center md:justify-between items-center shape-1 relative -z-10"
      ref={shapeContainer}
    >
      <Image
        src="assets/05-nube.svg"
        alt="Carlos Mora"
        width={300}
        height={300}
        className="rotate-180 shape w-60 h-auto"
      />
      <Image
        src="assets/05-nube.svg"
        alt="Carlos Mora"
        width={300}
        height={300}
        className="rotate-180 scale-x-[-1] hidden md:block shape w-60 h-auto"
      />
    </div>
  );
};
