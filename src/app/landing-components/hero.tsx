"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Info from "./intro";
import Buttons from "./buttons";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
useEffect(() => {
  if (heroRef.current) {
    const tl = gsap.timeline();

    // Image animation
    tl.fromTo(
      heroRef.current.querySelectorAll(".hero-img"),
      { y: 100, scale: 1.8, opacity: 0, filter: "blur(5px)" },
      {
        y: 0,
        scale: 0.9,
        opacity: 1,
        delay: 4.5,
        duration: 1,
        ease: "circ.out",
        filter: "blur(0px)",
      }
    );

    // Blur background animation
    tl.fromTo(
      heroRef.current.querySelectorAll(".hero-blur"),
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        delay: -0.5,
        duration: 1.5,
        ease: "circ.out",
      }
    );
    tl.fromTo(
      heroRef.current.querySelectorAll(".hero-text"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay:1.5,
        ease: "circ.out(1.7)", 
        stagger: 0.2, 
        duration: 0.5,
      },
      "-=0.5"
    );
  }
}, []);


  return (
    <div
      ref={heroRef}
      className="flex lg:h-[calc(100vh-60px)] h-[calc(100vh-120px)] w-full flex-col"
    >
      <div className="w-full justify-center items-center mt-20 md:mt-0 flex lg:h-full h-[52%] min-[400px]:h-[58%] relative">
        <div className="lg:h-130 h-fit relative w-fit md:px-20 flex flex-col">
          <div className="league-font gap-0.5 absolute sm:top-20 md:top-8 left-3 md:left-10 top-3 lg:top-15 text-[30px] md:text-[50px] text-gray-300/80 h-15 w-40 overflow-clip z-20">
            <span className="hero-text inline-block">H</span>
            <span className="hero-text inline-block">e</span>
            <span className="hero-text inline-block">l</span>
            <span className="hero-text inline-block">l</span>
            <span className="hero-text inline-block">o</span>
            <span className="hero-text inline-block mx-1 text-red-600/70">!</span>
          </div>
          <Image
            height={600}
            width={1000}
            src={"/media/hero.png"}
            alt="profile image"
            priority
            className="scale-90 z-10 hero-img"
          />
          <div className="h-[90%] w-full inset-0 absolute bg-gray-400/10 mt-8 blur-2xl md:blur-3xl rounded-full hero-blur"></div>
        </div>
      </div>
      <div className="flex h-40 w-full justify-between items-center flex-col md:flex-row p-2 lg:px-13">
        <Info />
        <Buttons />
      </div>
    </div>
  );
}
