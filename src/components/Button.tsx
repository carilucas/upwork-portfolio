"use client";

interface ButtonProps {
    name: string;
    isBeam?: boolean;
    containerClass?: string;
    href: string;
}

export const Button = ({ name, isBeam = true, containerClass, href }: ButtonProps) => {
    return (
        <a href={href} className={`btn ${containerClass}`} target="_blank" rel="noopener noreferrer">
          {isBeam && (
            <span className="relative flex h-3 w-3">
              <span className="btn-ping"></span>
              <span className="btn-ping_dot"></span>
            </span>
          )}
          {name}
        </a>
      );
}
