"use client";

import { robotoSlab } from "@/config/fonts";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
interface Props {
  subtitle1: string;
  subtitle2: string;
  description1: string;
  description2: string;
  img: string;
  href: string;
}
export const Section3 = ({
  subtitle1,
  subtitle2,
  description1,
  description2,
  img,
  href,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="c-space w-full h-screen flex flex-col lg:flex-row items-center justify-center py-10 gap-20  mb-15">
      <div
        className={`flex-1 w-full h-full overflow-hidden relative ${
          isHovered ? "animatedProject" : ""
        }`}
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <Image
          src={img}
          alt="project"
          width={700}
          height={700}
          className="object-cover absolute top-0 left-0 w-full object-top"
        />
      </div>
      <div className="flex-1 w-full">
        <h2 className={`text-xl md:text-4xl mb-7 ${robotoSlab.className} `}>
          {subtitle1}
        </h2>
        <p className=" text-pretty mb-9">{description1}</p>
        <h2 className={`text-xl md:text-4xl mb-7 ${robotoSlab.className} `}>
          {subtitle2}
        </h2>
        <p className=" text-pretty">{description2}</p>
        <div className="mt-8 flex justify-between items-center gap-5">
          <a
            className="flex-1 flex justify-center items-center gap-2 cursor-pointer text-white mb-4 border border-black-200 px-5 py-2 rounded-lg text-center hover:bg-black-200 transition-all duration-300"
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <p>Live Site</p>
            <Image
              src="/assets/arrow-up.png"
              alt="arrow"
              width={60}
              height={60}
              className="w-3 h-3"
            />
          </a>
          <Link
            className="flex-1 flex justify-center items-center gap-2 cursor-pointer text-white mb-4 border border-black-200 px-5 py-2 rounded-lg text-center hover:bg-black-200 transition-all duration-300"
            href="https://www.upwork.com/freelancers/carlosmora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>Contact me</p>
            <Image
              src="/assets/arrow-up.png"
              alt="arrow"
              width={60}
              height={60}
              className="w-3 h-3"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
