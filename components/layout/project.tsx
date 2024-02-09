import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const openImg = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

const fadeIn = {
  initial: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { opacity: 0 },
};

export default function Project({ project }: any) {
  const [isActive, setIsActive] = useState(false);
  const { title1, title2, src, type, details, slug } = project;
  const lenis = useLenis(({ scroll }) => {});

  return (
    <div
      id="project"
      className="flex flex-col w-[100%] items-center justify-between py-[0.8vw] cursor-pointer border-b leading-[10vh] sm:leading-[15vh]"
    >
      <Link
        href={`/projects/${slug}`}
        onClick={() => lenis.scrollTo("top", { lerp: 0.08, lock: true })}
        className="flex flex-row items-center justify-start text-[2rem] sm:max-lg:text-[4rem] lg:text-[6rem]
         hover:text-grey hover:font-light hover:italic hover:font-garamond hover:tracking-wide 
         hover:text-[2.25rem] sm:max-lg:hover:text-[4.5rem] lg:hover:text-[6.5rem]
         "
        onMouseEnter={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
      >
        <p className="=text-[6rem]">{title1}</p>
        <motion.div
          variants={openImg}
          animate={isActive ? "open" : "closed"}
          className="mx-[0.25rem] sm:max-lg:mx-[0.7rem] lg:mx-[1rem]"
        >
          <Image
            src={`${src}`}
            alt=""
            width={0}
            height={0}
            sizes="10vw"
            style={{ width: "auto", height: "10vh" }}
          />
        </motion.div>
        <p className="">{title2}</p>
      </Link>
      <motion.div
        className="flex flex-row w-[100%] self-center justify-center gap-2 tracking-wider absolute bottom-0 -my-[4rem] flex-nowrap text-nowrap leading-[1.1rem]"
        variants={fadeIn}
        animate={isActive ? "open" : "closed"}
      >
        <p className="place-self-center">{type}</p>•<p>{details}</p>
      </motion.div>
    </div>
  );
}
