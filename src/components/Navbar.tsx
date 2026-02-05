"use client";
import { useState, useRef } from "react";

import { navLinks } from "@/constants/";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <Link href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
);

export const Navbar = () => {
  const navBar = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useGSAP(() => {
    const tl = gsap.timeline({ scope: navBar.current });
    tl.fromTo(
      ".nav-logo",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "back.out" },
    );
    tl.fromTo(
      ".nav-ul",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "back.out" },
      "-=0.3",
    );
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--black-4)]"
      ref={navBar}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mx-auto py-4 px-4 md:px-0">
          <Link
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors nav-logo"
          >
            <Image
              src="/assets/03-Logo-blanco.svg"
              alt="Carlos Mora"
              width={100}
              height={100}
              className="w-20 md:w-[100px] h-auto"
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <Image
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              width={60}
              height={60}
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};
