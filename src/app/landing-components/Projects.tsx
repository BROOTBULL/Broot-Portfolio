"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProjectData } from "@/app/data.config";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const router = useRouter();
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectsRef.current.forEach((projectEl) => {
      if (!projectEl) return;

      const mainImg = projectEl.querySelector(".main-img");
      const leftImg = projectEl.querySelector(".left-img");
      const rightImg = projectEl.querySelector(".right-img");
      const projectName = projectEl.querySelector(".projectName");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: projectEl,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        mainImg,
        { scale: 0.8, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.6, ease: "power.out" }
      );
      tl.fromTo(
        [leftImg, rightImg], // both elements
        { x: (i) => (i === 0 ? 100 : -100), opacity: 0 }, // different start positions
        { x: 0, opacity: 1, duration: 0.6, ease: "power1.out" }
      );
      tl.fromTo(
        projectName,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power.out" }
      );
    });
  }, []);

  return (
    <>
      {ProjectData.map((project, i) => (
        <div
          key={i}
          ref={(el) => {
            projectsRef.current[i] = el;
          }}
          className="relative h-fit w-full max-w-[1400px] my-3 md:my-10 self-center flex flex-row justify-center items-center"
        >
          <div className="flex flex-col h-fit w-240 items-center justify-start gap-5">
            {/* Project Name */}
            <div className="flex projectName flex-row z-5 items-center">
              <Image
                className="h-6 w-4 lg:h-9 lg:w-6"
                height={60}
                width={25}
                src={"/media/BrootW.png"}
                alt="Broot"
              />
              <div className="text-[11px] lg:text-base !font-[900] mt-3 ml-1 play-regular">
                {project.projectName}
              </div>
            </div>

            {/* Images */}
            <div className="flex flex-row justify-center items-center">
              <Image
                className={`rounded-sm z-4 main-img w-68 h-38 lg:h-80 lg:w-140 drop-shadow-2xl/90 ${project.dropShadow}`}
                height={300}
                width={250}
                src={`/media/${project.name}1.png`}
                alt="project main"
              />
              <Image
                className="rounded-sm left-img absolute left-0 lg:left-25 z-3 h-27 w-45 lg:h-60 lg:w-110 brightness-80 drop-shadow-2xl/90 blur-[2px]"
                height={300}
                width={350}
                src={`/media/${project.name}2.png`}
                alt="project side 1"
              />
              <Image
                className="rounded-sm absolute right-img right-0 lg:right-25 z-3 h-27 w-45 lg:h-60 lg:w-110 brightness-80 drop-shadow-2xl/90 blur-[2px]"
                height={300}
                width={650}
                src={`/media/${project.name}3.png`}
                alt="project side 2"
              />
            </div>

            {/* Glow background */}
            <div
              className={`w-[80%] ${project.blurColor} blur-3xl -z-1 rounded-[100%] absolute h-full`}
            ></div>

            {/* Content */}
            <div className="w-full h-fit">
              <div>
                <div
                  className={`flex flex-row justify-between items-center border-b-1 ${project.labelColor} rounded-md p-1.5 px-2 ${project.border} h-8 lg:h-fit mb-2 w-full`}
                >
                  <div className="text-[12px] lg:text-lg play-regular !font-bold ">
                    {project.title.length > 45
                      ? project.title.slice(0, 40) + "..."
                      : project.title}
                  </div>
                  <button
                    onClick={() =>
                      router.push("/project/" + project.projectName)
                    }
                    className="flex flex-row items-center select-none text-gray-300 hover:text-white duration-200 cursor-pointer hover:bg-gray-500/10 p-1 w-26 justify-end rounded-md"
                  >
                    <div>Learn more</div>
                    <Image
                      height={30}
                      width={30}
                      className="size-4 lg:size-6"
                      src={"/media/redirect.png"}
                      alt="redirect"
                    />
                  </button>
                </div>

                {/* Brief + Buttons */}
                <div className="flex lg:flex-row flex-col lg:items-center gap-2 w-full px-1">
                  <div className="play-regular mt-1 text-[11px] lg:text-sm gray-300 text-gray-400">
                    {project.brief}
                  </div>
                  <div className="w-full h-fit flex flex-row gap-2">
                    <div className="ml-auto flex flex-col group items-center ">
                      <button
                        onClick={() =>
                          window.open(
                            `https://github.com/BROOTBULL/${project.projectName}`,
                            "_blank"
                          )
                        }
                        className="text-[10px] lg:text-xs p-2 group text-gray-300 group-hover:text-white duration-200 hover:bg-black/30 bg-black rounded-md border-1 cursor-pointer border-white/10"
                      >
                        View Code
                      </button>
                      <div className="h-[1px] w-[90%] bg-linear-to-r from-transparent via-white/50 transition duration-200 group-hover:via-white to-transparent"></div>
                    </div>
                    <div className="flex flex-col items-center group">
                      <button
                        onClick={() => window.open(`${project.link}`, "_blank")}
                        className={`text-[10px] lg:text-xs p-2 rounded-sm ${project.buttonColor} cursor-pointer border-1 text-gray-300 group-hover:text-white duration-200`}
                      >
                        View Project
                      </button>
                      <div className="h-[1px] w-[90%] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:via-white transition duration-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
