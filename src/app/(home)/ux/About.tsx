"use client";

import {  useRef } from "react";
import { Button } from "@/components";
import { robotoSlab } from "@/config/fonts";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const Globe = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[326px] flex items-center justify-center">
        Loading globe...
      </div>
    ),
  }
);


export const About = () => {
  // const [hasCopied, setHasCopied] = useState(false);

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(" adrian@jsmastery.pro");
  //   setHasCopied(true);

  //   setTimeout(() => {
  //     setHasCopied(false);
  //   }, 2000);
  // };

  const about = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mediaQuery = gsap.matchMedia();
    mediaQuery.add("(min-width: 1024px)", () => {
    gsap.from(
      ".animatedBox",{
        y: 300,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".animatedBox",
          start: "top 90%",
          end: "50% bottom",
          scrub: true,
        },
      }
    );
    });
  }, []);
  return (
    <section className="c-space my-20" id="about" ref={about}>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container animatedBox">
            <Image
              src="/assets/grid1.webp"
              alt="grid-1"
              width={1920}
              height={1080}
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className={`grid-headtext ${robotoSlab.className}`}>
                Web Developer + Creative Edge
              </p>
              <p className="grid-subtext">
                I am a certified web developer with over 10 years of experience,
                specializing in creating tailor-made websites and web
                applications for industries such as banking, tourism, education,
                food, and automotive.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3 animatedBox">
          <div className="grid-container">
            <Image
              src="/assets/grid2.webp"
              alt="grid-2"
              width={1920}
              height={1080}
              className="w-full sm:h-[276px] h-fit object-contain"
            />

            <div>
              <p className={`grid-headtext ${robotoSlab.className}`}>
                Tech Stack
              </p>
              <p className="grid-subtext">
                From corporate solutions to NGO projects, I work with modern
                technologies such as React, Next.js, WordPress, PHP, PostgreSQL,
                HTML, CSS, JavaScript, MySQL and more, optimizing every
                development for performance, usability, and SEO.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4 animatedBox">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lng: -0.22985,
                    lat: -78.52495,
                    text: "Quito, Ecuador",
                    color: "white",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className={`grid-headtext ${robotoSlab.className}`}>
                Very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based Ecuador, but I can work remotely from any
                location.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid3.png"
              alt="grid-3"
              width={1920}
              height={1080}
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className={`grid-headtext ${robotoSlab.className}`}>
                Web solutions that drive results
              </p>
              <p className="grid-subtext">
                Your business deserves a digital platform that not only works but delivers real impact. Fast, secure, and optimized websites and web applications, designed to connect with your audience and turn visitors into customers. From coding to visual design, every project is built to maximize your online presence and make your brand stand out.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <Image
              src="/assets/grid4.png"
              alt="grid-4"
              width={1920}
              height={1080}
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p
                className={`grid-headtext text-center ${robotoSlab.className}`}
              >
                Stay in touch
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" href="https://www.upwork.com/freelancers/carlosmora"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
