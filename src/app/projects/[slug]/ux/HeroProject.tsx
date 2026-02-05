"use client";
import Image from "next/image";
import { fredoka } from "@/config/fonts";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
interface Props {
  img: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
}

export const HeroProject = ({
  img,
  title,
  subtitle,
  description,
  slug,
}: Props) => {
  useGSAP(() => {
    gsap.from(".animatedMockup", {
      opacity: 0,
      scale: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  });

  return (
    <section className="c-space min-h-screen w-full flex items-center justify-center bg-[linear-gradient(to_bottom,_var(--black-4)50%,_var(--blue-1))]">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-20 max-w-7xl mx-auto">
        <div className="flex-1 glass">
          <Image
            src={img}
            alt={title}
            width={2000}
            height={2000}
            className="object-cover animatedMockup rounded-2xl "
            style={{
              viewTransitionName: `mockup-${slug}`,
            }}
          />
        </div>
        <div className="flex-1 mb-5">
          <h1
            className={`text-2xl md:text-6xl text-gray_gradient mb-10 ${fredoka.className}`}
          >
            {title}
          </h1>
          <h2
            className={`text-xl md:text-4xl text-gray_gradient mb-3 ${fredoka.className}`}
          >
            {subtitle}
          </h2>
          <p className="text-pretty">{description}</p>
        </div>
      </div>
    </section>
  );
};
