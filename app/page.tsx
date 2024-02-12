"use client";
import React, { useEffect, useState } from "react";
import Preloader from "@/components/transitions/preloader";
import Cursor from "@/components/layout/cursor";
import HeroFooter from "@/components/layout/heroFooter";
import Marquee from "@/components/stylistic/marquee";
import Project from "@/components/layout/project";
import Footer from "@/components/layout/footer";
import { Typewriter } from "react-simple-typewriter";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/components/projects";
import "./globals.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div
        id="content"
        className="w-screen h-auto min-h-screen min-w-screen max-w-[100%] overflow-hidden relative"
      >
        {/* <Cursor /> */}
        <section
          id="hero-section"
          className="flex flex-col items-center justify-center w-screen h-screen max-w-[100%] overflow-hidden relative"
        >
          <div
            id="hero-wrap"
            className="flex flex-col max-w-[100%] items-center"
          >
            <div className="flex flex-row items-end justify-center justify-self-center self-center align-text-bottom">
              <h1 className="font-garamond text-[4rem] sm:max-lg:text-[7rem] lg:max-xl:text-[9rem] xl:text-[10rem] font-extralight italic capitalize">
                Stephanie
              </h1>
              <h2 className="text-[3.7rem] sm:pb-1 sm:max-lg:text-[6rem] lg:max-xl:text-[8rem] xl:text-[9rem] italic capitalize">
                Li
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-fit items-center justify-center pb-[8rem] text-center tracking-wider">
              <div className="flex flex-col justify-center gap-2">
                <div className="flex flex-row items-center">
                  <p>A&nbsp;&nbsp;</p>
                  <div className="italic p-[2px] px-3 border rounded-full text-grey">
                    <Typewriter
                      words={["full-stack", "creative", "web"]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={100}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </div>
                  <p>&nbsp;&nbsp;developer and neuroscience graduate</p>
                </div>
                <p>interested in digital solutions to human problems.</p>
              </div>
            </div>
          </div>
          <HeroFooter />
        </section>
        <Marquee />
        <section
          id="projects-section"
          className="flex flex-col items-center justify-center w-screen min-h-screen mb-[15vh] max-w-[100%] relative text-grey-100"
        >
          <div className="flex flex-col w-[70%] relative">
            <p className="flex justify-center w-[100%] pb-4 tracking-wider border-b">
              Featured Work
            </p>
            {projects.map((project) => {
              return <Project key={project.slug} project={project} />;
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
