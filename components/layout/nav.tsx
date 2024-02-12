"use client";
import React from "react";
import Link from "next/link";
import { DateTime } from "luxon";
import { useState, useEffect } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Projects,", target: "#projects-section" },
  { href: "/about", label: "About,", target: "top" },
  { href: "", label: "Contact", target: "bottom" },
];

const Nav = () => {
  const [seconds, setSeconds] = useState("0:00:00 NA");

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(() =>
        DateTime.now()
          .setZone("America/New_York")
          .setLocale("en")
          .toLocaleString(DateTime.TIME_WITH_SECONDS)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const lenis = useLenis(({ scroll }) => {});
  const path = usePathname();

  return (
    <div className="flex flex-row w-screen px-4 4k:px-10 py-3 backdrop-blur-[0.75px] justify-between bg-green bg-opacity-10 uppercase tracking-wider sm:max-4k:text-[1rem] 4k:text-[1.5rem] border-b fixed z-50">
      <Link href="/" className="w-fit">
        <p className="hidden md:block">PORTFOLIO 24&apos; ©</p>
        <p className="md:hidden">SYL 24&apos; ©</p>
      </Link>
      <div className="hidden sm:flex w-fit">
        Toronto, ON&nbsp;&nbsp;•&nbsp;&nbsp;{seconds}
      </div>
      <div className="flex flex-row w-fit gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            className="relative hover:opacity-70 hover:italic group transition"
            href={link.href}
            onClick={() =>
              lenis.scrollTo(link.target, { lerp: 0.1, lock: true })
            }
          >
            {link.label}
            {link.href === path && (
              // line change
              <motion.span className="block w-[95%] border-b-[1px] -mt-1"></motion.span>
            )}
            {link.href !== path && (
              // underline
              <span className="block max-w-0 group-hover:max-w-[90%] transition-all duration-500 h-[1px] bg-off-white -mt-1"></span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
