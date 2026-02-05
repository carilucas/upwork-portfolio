"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Button, Robot } from "@/components";
import { workExperiences } from "@/constants";
import { fredoka } from "@/config/fonts";
import Image from "next/image";

export const WorkExperience = () => {
  return (
    <section className="bg-[var(--cyan-1)] py-20 work-experience">
      <div className="c-space max-w-7xl mx-auto diamond-background-cyan">
        <div className="w-full text-white-600">
          <Image
            src="assets/13-w.svg"
            width={300}
            height={300}
            className="w-[200px] block m-auto mb-3.5"
            alt="Carlos Mora"
          />
          <p
            className={`head-text ${fredoka.className} text-center text-[var(--blue-1)]`}
          >
            My Work Experience
          </p>

          <div className="work-container glass">
            <div className="work-canvas">
              <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ antialias: true }}
              >
                <ambientLight intensity={1.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, 10]} />
                <Suspense fallback={null}>
                  <Float floatIntensity={3}>
                    <Robot
                      position={[0, -1.5, 0]}
                      scale={0.3}
                      rotation={[0, Math.PI / 2, 0]}
                    />
                  </Float>
                  <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    autoRotateSpeed={1}
                  />
                </Suspense>
              </Canvas>
            </div>

            <div className="work-content">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                {workExperiences.map((item, index) => (
                  <div key={index} className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <Image
                          className="w-full h-full"
                          src={item.icon}
                          alt=""
                          width={60}
                          height={60}
                        />
                      </div>

                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-[var(--black-4)]">
                        {item.name}
                      </p>
                      <p className="text-sm mb-5 text-[var(--black-4)] font-semibold">
                        {item.pos} -- <span>{item.duration}</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500 text-[var(--black-4)]">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button
        name="Contact Me"
        isBeam
        containerClass="w-[300px] mt-10 bg-[var(--blue-1)]"
        href="https://www.upwork.com/freelancers/carlosmora"
      />
    </section>
  );
};
