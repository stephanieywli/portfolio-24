"use client";
import React, { useEffect, useState } from "react";
import Cursor from "@/components/layout/cursor";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import Link from "next/link";
import Triangle from "@/components/icons/triangle";
import { Typewriter } from "react-simple-typewriter";
import Loader from "@/components/transitions/loader";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useLenis } from "@studio-freight/react-lenis";

const awards = [
  { title: "Awards" },
  { title: "UWaterloo HackRx" },
  { title: "ElleHacks RBC Challenge" },
  { title: "McMaster UX/UI Designathon" },
];
const roles = [
  { title: "Web Development" },
  { title: "Databases" },
  { title: "UX/UI" },
  { title: "Algorithms" },
  { title: "Debugging" },
  { title: "Machine Learning" },
];
const skillsDes = [
  { tool: "Figma" },
  { tool: "Illustrator" },
  { tool: "Photoshop" },
  { tool: "AfterEffects" },
  { tool: "PremierePro" },
];
const skillsDev = [
  { tool: "HTML" },
  { tool: "CSS" },
  { tool: "React" },
  { tool: "Javascript" },
  { tool: "Next.js" },
  { tool: "Tailwind" },
  { tool: "Bootstrap" },
  { tool: "Node.js" },
  { tool: "NetsJS" },
  { tool: "Django" },
  { tool: "Git" },
  { tool: "MySQL" },
  { tool: "Python" },
];
const hobbies = [
  { title: "r.n.b. listener" },
  { title: "weightlifter" },
  { title: "clothing thrifter" },
  { title: "cat mother" },
  { title: "mountain lover" },
  { title: "whiskey drinker" },
  { title: "published researcher" },
  { title: "swimmer" },
  { title: "neuroscience lover" },
  { title: "grass-toucher" },
  { title: "art admirer" },
];

const Earth = dynamic(() => import("../../components/stylistic/earth"), {
  ssr: false,

  loading: () => (
    <Image
      src="/globe.svg"
      alt=""
      width={0}
      height={0}
      style={{ width: "auto", height: "100%", objectFit: "contain" }}
    ></Image>
  ),
});

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  const lenis = useLenis(({ scroll }) => {});

  return (
    <>
      <Head>
        <link rel="preload" href="/1.svg" as="image" />
      </Head>
      <Loader />
      <div
        id="content"
        className="w-screen h-auto min-h-screen min-w-screen max-w-[100%] overflow-hidden relative"
      >
        <Cursor />
        <section
          id="background-section"
          className="flex flex-col lg:flex-row w-screen lg:h-screen pt-[20vh] pb-[10vh] px-4 items-end justify-between text-grey-red"
        >
          <div
            id="1A"
            className="flex flex-col lg:flex-row lg:w-[60vw] items-start gap-6 4k:gap-20  -red"
          >
            <div id="about-section-title" className="gap-2 4k:gap-4 ">
              <Triangle />
              <p>Background</p>
            </div>
            <div className="flex flex-col justify-between w-fit lg:w-[40vw] h-full ">
              <div
                className="font-garamond font-light 
              text-[4.5rem] lg:max-2xl:text-[4rem] 2xl:max-3xl:text-[5.5rem] 3xl:text-[6.5rem]
              italic text-off-white leading-none -mt-4 lg:whitespace-nowrap"
              >
                <h1 className="max-w-fit">Designer by Instinct,</h1>
                <h1 className="max-w-fit">Developer by Design.</h1>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 pt-20 text-grey justify-between w-full h-max tracking-tight leading-snug">
                <div className="flex flex-col justify-between italic">
                  <p>
                    <Typewriter
                      words={["Hons. Neuroscience (B.Sc.)"]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      deleteSpeed={30}
                      delaySpeed={2000}
                    />
                  </p>
                  <div className="flex flex-col">
                    {awards.map((award) => (
                      <p key={award.title}>{award.title}</p>
                    ))}
                  </div>
                </div>
                <div className="w-[50%] lg:w-[40%] h-full text-justify">
                  A course about computational neuroscience and ML algorithms is
                  what initially sparked my interest in software development in
                  university. Since then I&#39;ve sought out any opportunity
                  that allows me to dive deeper into the world of software
                  design and development.
                </div>
              </div>
            </div>
          </div>
          <div
            id="1B"
            className="flex w-[55vw] sm:max-md:w-[45vw] md:max-lg:w-[40vw] lg:w-[25vw] items-end self-end justify-center relative sm:max-lg:mr-5 lg:max-xl:mr-10 xl:max-4k:mr-20 4k:mr-40"
          >
            <Image
              src="/Profile8.webp"
              alt=""
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
              quality={100}
              priority={true}
              className="rounded-full -z-10 lg:-mb-6"
            ></Image>
          </div>
        </section>
        <section
          id="skills-section"
          className="flex min-w-screen min-h-screen lg:h-screen items-center px-4 relative"
        >
          <div
            id="background text"
            className="flex flex-col font-medium absolute opacity-60 right-0 text-green-900
           text-[10rem] sm:max-2xl:text-[20rem] 2xl:text-[30rem] -z-50 leading-none
           -space-y-[1.5rem] sm:max-2xl:-space-y-[3.5rem] 2xl:-space-y-[5rem]"
          >
            <p className="">084</p>
            <p className="">c30</p>
          </div>
          <div className="flex flex-col gap-6 4k:gap-20 lg:flex-row w-[100%] items-start justify-between h-fit ">
            <div
              id="about-section-title"
              className="gap-2 4k:gap-4 w-[10vw] whitespace-nowrap "
            >
              <Triangle />
              What I do
            </div>
            <div
              className="flex flex-col w-[40vw] font-garamond font-light 
            text-[4.5rem] lg:max-2xl:text-[4rem] 2xl:max-3xl:text-[5.5rem] 3xl:text-[6.5rem]
            italic text-off-white leading-none -mt-4 "
            >
              {roles.map((role) => (
                <p key={role.title}>{role.title}</p>
              ))}
            </div>
            <div className="flex flex-row lg:w-[45vw] self-end justify-end items-end gap-x-40 lg:pr-40 text-grey ">
              <div className="flex flex-col">
                {skillsDes.map((skill) => (
                  <p key={skill.tool}>{skill.tool}</p>
                ))}
              </div>
              <div className="flex flex-col">
                {skillsDev.map((skill) => (
                  <p key={skill.tool}>{skill.tool}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="personal-section"
          className="flex flex-row h-screen w-screen min-w-screen min-h-screen lg:h-screen px-4 py-[20vh] relative  "
        >
          <div className="flex flex-col gap-6 4k:gap-20 lg:flex-row w-full h-full justify-between items-start">
            <div className="flex flex-col gap-6 4k:gap-20 lg:flex-row w-fit h-full justify-start items-start ">
              <div
                id="about-section-title"
                className="gap-2 4k:gap-4 whitespace-nowrap "
              >
                <Triangle />
                ME
              </div>
              <div className="flex flex-col justify-between lg:w-fit h-full ">
                <div
                  className="max-w-fit font-garamond font-light
                text-[4.5rem] lg:max-2xl:text-[4rem] 2xl:max-3xl:text-[5.5rem] 3xl:text-[6.5rem]
                italic text-off-white leading-none -mt-4 capitalize"
                >
                  In my spare time
                </div>
                <div className="flex flex-row justify-end sm:justify-between gap-10 w-full h-fit leading-snug text-grey">
                  <div className="flex flex-col italic">
                    Simple Pleasures...
                  </div>
                  <div className="flex flex-col lowercase">
                    {hobbies.map((hobby) => (
                      <p key={hobby.title}>{hobby.title}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className=" absolute right-0 -z-10 lg:static flex lg:h-full w-full lg:w-[50vw] items-center justify-center ">
              <Earth />
            </div>
          </div>
        </section>
        <section className="flex min-h-[70vh] items-center justify-center  text-grey italic">
          <Link
            href=""
            className="-mt-60 text-right hover:opacity-70"
            onClick={() => lenis.scrollTo("bottom", { lerp: 0.1, lock: true })}
          >
            <Typewriter
              words={["Interested in working together?"]}
              loop={0}
              cursor
              cursorStyle=""
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
}
