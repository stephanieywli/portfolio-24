import React from "react";
import Image from "next/image";
import Arrow from "../icons/arrow";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";

const links = [
  { href: "https://github.com/stephanieywli", label: "Github" },
  {
    href: "https://drive.google.com/file/d/1hTxWBjYAO05PADW06-igieT1ReZnjjAY/view?usp=sharing",
    label: "Resume",
  },
  { href: "https://www.linkedin.com/in/stephanieywli/", label: "LinkedIn" },
];

const Footer = () => {
  const lenis = useLenis(({ scroll }) => {});

  return (
    <>
      <div
        id="footer"
        className="hidden lg:flex flex-row self-end justify-self-end w-screen h-[auto] max-h-[70vh] max-w-[100%] overflow-hidden justify-between"
      >
        <div className="flex flex-col">
          <div className="group ml-[2.5vw] my-[20vh] font-garamond text-[8.5rem] xl:text-[10rem] italic font-light text-red letter-spacing-[-1vw] leading-[100%] text-nowrap">
            let&apos;s connect!
          </div>
          <Link
            href=""
            className="ml-[2.5vw] mb-5 leading-[100%] text-nowrap hover:opacity-70 hover:italic"
            onClick={() => lenis.scrollTo("top", { lerp: 0.08, lock: true })}
          >
            RETURN TO TOP ⇧
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center overflow-hidden bg-red min-w-fit w-[30vw] pl-20 pr-40 -mr-[2vw] relative rounded-t-full">
          <div className="flex flex-col h-[auto] items-end gap-2 mr-[25%] tracking-[0.085em] uppercase underline-offset-4 z-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                className="flex flex-row items-center hover:opacity-70 hover:italic"
              >
                {link.label}
                <Arrow />
              </Link>
            ))}
            <Link
              href="mailto:stephanieyw.li@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-row items-center underline hover:opacity-70"
            >
              stephanieyw.li@gmail.com
            </Link>
          </div>
          <Image
            src="/icons/charcoal.svg"
            alt="cat"
            width={0}
            height={0}
            sizes="auto"
            style={{ width: "22%", height: "auto" }}
            className="mb-[.5vw] mr-[3.5vw] absolute bottom-0 right-0"
          />
        </div>
      </div>
      <div
        id="footer-mobile"
        className="lg:hidden flex flex-col self-end justify-self-end items-center w-screen h-fit max-h-[70vh] max-w-[100%] pt-40 pb-5 overflow-hidden bg-red relative rounded-t-full"
      >
        <div className="font-garamond text-[5rem] sm:text-[6rem] xl:text-[10rem] italic font-light letter-spacing-[-1vw] leading-[100%] text-nowrap">
          let&apos;s connect!
        </div>
        <div className="items-center flex flex-col h-[auto] w-fit gap-2 pt-10 tracking-[0.085em] uppercase underline-offset-4 z-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              rel="noopener noreferrer"
              target="_blank"
              className="flex flex-row items-center hover:opacity-70 hover:italic"
            >
              {link.label}
              <Arrow />
            </Link>
          ))}
          <Link
            href="mailto:stephanieyw.li@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="flex flex-row items-center underline hover:opacity-70 hover:italic"
          >
            stephanieyw.li@gmail.com
          </Link>
          <Link
            href=""
            className="leading-[100%] text-nowrap hover:opacity-70 hover:italic opacity-50 pt-10"
            onClick={() => lenis.scrollTo("top", { lerp: 0.08, lock: true })}
          >
            RETURN TO TOP ⇧
          </Link>
        </div>
        <Image
          src="/icons/charcoal.svg"
          alt="cat"
          width={0}
          height={0}
          sizes="auto"
          style={{ width: "11%", height: "auto" }}
          className="mb-[.5vw] mr-[3.5vw] absolute bottom-0 right-0"
        />
      </div>
    </>
  );
};

export default Footer;
