"use client";

import { robotoSlab } from "@/config/fonts";
import { workBenefits } from "@/constants";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const WorkBenefits = () => {

  useGSAP(() => {
    const tl = gsap.timeline();
    const grid: [number, number] = [2, 6];
    gsap.registerPlugin(ScrollTrigger);
    const mediaQuery = gsap.matchMedia();
    mediaQuery.add("(min-width: 1024px)", () => {
    tl.from(
      ".client-review",{
        y: 300,
        scale: 0,
        duration: 1,
        ease: "power2.out",
        stagger: {
          amount: 0.2,
          from: "center",
          axis: undefined,
          grid: grid,
        },
        scrollTrigger: {
          trigger: "#workBenefits",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
    });
  }, []);
  return (
    <section className="c-space my-20" id="workBenefits">
      <h3 className={`head-text ${robotoSlab.className}`}>Why work with me?</h3>

      <div className="client-container">
        {workBenefits.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="font-semibold text-white-800">{item.title}</p>
              <p className="text-white-800 font-light">{item.desc}</p>

              <div className="client-content">
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Image
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      width={20}
                      height={20}
                      className="w-4 h-4"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
