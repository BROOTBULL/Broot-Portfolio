"use client";
import { useEffect, useRef, useState } from "react";
import AboutMe from "./landing-components/aboutMe";
import ContactMe from "./landing-components/contactMe";
import Footer from "./landing-components/footer";
import Header from "./landing-components/hader";
import Hero from "./landing-components/hero";
import Labels from "./landing-components/lables";
import MyProjects from "./landing-components/MyProjects";
import MySkills from "./landing-components/mySkills";
import Loader from "./landing-components/Loader";
import gsap from "gsap";

export default function Home() {
  const mainRef = useRef(null);
  const loaderRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, {
        y: "-100%",
        duration: 2,
        ease: "circ.out",
        onComplete: () => setLoading(false),
      });
      gsap.fromTo(
        mainRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.5, ease: "circ.out" }
      );
    }, 3 * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          ref={loaderRef}
          className=" bg-[#0b0b0b] h-screen w-full flex items-center justify-center top-0 left-0 fixed z-200"
        >
          <Loader />
        </div>
      )}
      <div ref={mainRef} className="w-full flex flex-col z-120 relative">
        <Header />
        <Hero />
        <Labels />
        <MyProjects />
        <MySkills />
        <AboutMe />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}
