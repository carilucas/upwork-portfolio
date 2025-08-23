import Image from "next/image";
import { robotoSlab } from "@/config/fonts";

export const Hero = () => {
  return (
    <section className="min-h-screen w-full flex relative overflow-hidden" id="home">
      <Image
        src="/assets/01-back.webp"
        alt="Hero"
        width={1920}
        height={1080}
        className="w-full h-full absolute inset-0 object-cover opacity-10 floatingImage"
      />
      <div className="flex justify-center items-center relative z-1 w-full max-w-6xl mx-auto mt-20">
        <div className="w-full h-full md:flex justify-between items-center gap-2 md:gap-5 flex-wrap px-5 lg:px-0">
          <div className="flex-1 mb-5">
            <p className="text-2xl lg">
              Hi, I'm <span className="font-bold">Carlos Mora</span>
            </p>
            <h1
              className={`text-2xl md:text-6xl text-gray_gradient mb-3 ${robotoSlab.className}`}
            >
              Building new experiences
            </h1>
            <p>Let's create something amazing</p>
          </div>
          <div className="flex-1">
            <div className="md:max-w-[460px] max-w-[360px] mx-auto relative overflow-hidden path-container hover:scale-102 transition-all ease-in-out duration-700">
              <div className="mx-auto max-w-[460px] max-h-[460px] path-profile ">
                <Image
                  src="/assets/09-perfil-b.webp"
                  alt="Hero"
                  width={2000}
                  height={2000}
                  className="max-w-[460px] max-h-[460px] object-cover"
                />
              </div>
              <div className="social-path absolute inset-0  top-67 left-0  h-[150px] w-[50px] z-1 flex justify-start items-center flex-col gap-5">
                <a href="https://github.com/carlosmora" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/github.svg"
                    alt="Hero"
                    width={50}
                    height={50}
                    className="max-w-[460px] max-h-[460px] object-cover opacity-50 hover:opacity-100 transition-all ease-in-out duration-700"
                  />
                </a>
                <a href="https://github.com/carlosmora" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/assets/github.svg"
                    alt="Hero"
                    width={50}
                    height={50}
                    className="max-w-[460px] max-h-[460px] object-cover opacity-50 hover:opacity-100 transition-all ease-in-out duration-700"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
