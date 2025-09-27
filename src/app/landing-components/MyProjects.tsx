"use client";
import { useRouter } from "next/navigation";
import Projects from "./Projects";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MyProjects() {
  const router = useRouter();
  const headingRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current && borderRef.current) {
      const letters = headingRef.current.querySelectorAll(".heading-char");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // animate letters
      tl.fromTo(
        letters,
        { y: 50, opacity: 0, filter: "blur(5px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.08,
          ease: "back.out(1.7)",
          duration: 0.6,
        }
      );

      // animate border underline
      tl.fromTo(
        borderRef.current,
        { width: "0%" },
        { width: "100%", duration: 0.8, ease: "power2.out" },
        "-=0.3" // overlap a bit with last letters
      );
    }
  }, []);

  const text = "MY PROJECTS";

  return (
    <div className="h-fit w-full relative pb-20">
      <div className="flex flex-col text-xs h-full w-full px-5 ">
        <div className="flex flex-col">
          {/* Animated Heading */}
          <div className="relative w-full lg:w-[50%] my-2">
            <div
              ref={headingRef}
              className="text-[40px] lg:text-[80px] syncopate-regular text-gray-300 flex flex-wrap overflow-hidden"
            >
              {text.split("").map((char, i) => (
                <span
                  key={i}
                  className="heading-char inline-block overflow-hidden"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            {/* Border that animates */}
            <div
              ref={borderRef}
              className="h-[2px] bg-red-800 absolute left-0 bottom-0"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        <Projects />
      </div>

      {/* Button */}
      <button
        onClick={() => router.push("/MyProjects")}
        className="w-full h-8 flex flex-col justify-center text-sm text-gray-200/50 cursor-pointer group hover:text-gray-200 duration-200 lg:text-base mt-10 items-center"
      >
        See All Projects
        <div className="h-[2px] w-[80%] bg-linear-to-r from-trasnparent group-hover:via-red-800 transition duration-200 via-red-950 to-transparent rounded-[100%]"></div>
        <div className="h-3 w-full bg-linear-to-r rounded-[100%] from-transparent via-red-500/40 to-transparent blur-xl mt-6 absolute"></div>
      </button>
    </div>
  );
}
