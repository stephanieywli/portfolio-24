"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, useScroll, useTransform } from "framer-motion";

function HeroFooter() {
  const lenis = useLenis(({ scroll }) => {});

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end 80vh"], //"target container"
  });
  const fade = useTransform(scrollYProgress, [0, 0.8, 1], [0, 0, 1]);

  return (
    <motion.div
      ref={ref} //target
      style={{ opacity: fade }}
      className="flex flex-row w-[100%] h-[2.5rem] 4k:h-[4rem] absolute bottom-0 my-4 px-5 justify-between text-grey uppercase"
    >
      <div className="flex flex-row gap-2">
        <Image
          src="/icons/footer-circles.svg"
          alt="footer img"
          width={0}
          height={0}
          sizes="auto"
          style={{ width: "auto", height: "100%" }}
          className="border"
        ></Image>
      </div>
      <div>
        <Link
          href="/"
          className="flex flex-row gap-2 4k:gap-4 hover:opacity-70 h-[2.5rem] 4k:h-[4rem]"
          onClick={() => lenis.scrollTo("#projects-section", { lerp: 0.07 })}
        >
          <div className="flex flex-col items-end leading-5 4k:leading-8">
            <p>scroll down</p> <p>to explore</p>
          </div>
          <Image
            src="/icons/footer-arrow.svg"
            alt="footer img"
            width={0}
            height={0}
            style={{ width: "auto", height: "100%" }}
          ></Image>
        </Link>
      </div>
    </motion.div>
  );
}

export default HeroFooter;
