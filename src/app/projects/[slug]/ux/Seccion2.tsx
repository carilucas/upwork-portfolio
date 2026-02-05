import { fredoka } from "@/config/fonts";
import Image from "next/image";

type techObject = {
  id: number;
  name: string;
  path: string;
};

interface Props {
  subtitle: string;
  description: string;
  techStack: techObject[];
}

export const Seccion2 = ({ subtitle, description, techStack }: Props) => {
  return (
    <section className="c-space w-full flex items-center justify-center bg-white py-30">
      <div className="w-full h-full max-w-4xl mx-auto">
        <h2
          className={`text-xl md:text-4xl text-black-200 mb-7 ${fredoka.className} text-center`}
        >
          {subtitle}
        </h2>
        <p className="text-black-200 text-center text-pretty mb-7">
          {description}
        </p>
        <h2
          className={`text-xl md:text-4xl text-black-200 mb-7 ${fredoka.className} text-center`}
        >
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-7">
          {techStack.map((tech) => (
            <div key={tech.id} className="flex flex-col items-center gap-5">
              <Image src={tech.path} alt={tech.name} width={35} height={35} />
              <p className="text-black-200 text-center text-pretty font-semibold text-sm">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
