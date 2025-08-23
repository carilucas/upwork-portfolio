"use client";

import { robotoSlab } from "@/config/fonts";
import { workBenefits } from "@/constants";
import Image from "next/image";

export const WorkBenefits = () => {
  return (
    <section className="c-space my-20">
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
