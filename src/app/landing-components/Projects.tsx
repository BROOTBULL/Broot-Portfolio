import Image from "next/image";

const ProjectData = [
  {
    projectName: "Broot-Chess",
    name: "chess",
    title: "Broot-Chess : A Multiplayer Chess",
    brief:
      "A full-featured multiplayer chess platform. Play in real time with WebSockets, challenge friends, request undos, offer draws,and explore player profiles with match stats.",
    blurColor: "bg-gray-700/20",
    labelColor: "bg-gray-600/30",
    dropShadow: "drop-shadow-gray-400/10",
    buttonColor:
      "bg-[rgb(10_10_12_/.5)] drop-shadow-[0_0_15px_rgb(190_190_250_/0.1)] border-white/30",
    border: "border-gray-400",
  },
  {
    projectName: "Broot-Todo",
    name: "todo",
    title: "Broot-Todo : A Task-Manager + AI Project Generator",
    brief:
      "A task manager with sections, filters, and status tracking — plus an AI tool that suggests new project ideas based on your tasks. Built with Next.js, MongoDB, Zustand, and JWT Auth.",
    blurColor: "bg-indigo-900/10",
    labelColor: "bg-indigo-800/20",
    dropShadow: "drop-shadow-gray-800/30",
    buttonColor:
      "bg-slate-950 drop-shadow-[0_0_15px_rgb(20_20_250_/0.2)] border-indigo-950",
    border: "border-indigo-800/80",
  },
  {
    projectName: "Broot-Portfolio",
    name: "portfolio",
    title: "Broot-Portfolio : My Portfolio website",
    brief:
      "A personal site showcasing my work with a modern UI, customdesign, and interactive sections. Next.js · TailwindCSS · Custom UI Design.",
    blurColor: "bg-red-950/10",
    labelColor: "bg-red-600/10",
    dropShadow: "drop-shadow-red-800/10",
    buttonColor:
      "bg-[rgb(28_8_8)] drop-shadow-[0_0_15px_rgb(250_20_20_/0.2)]  border-red-900/80 ",
    border: "border-red-800/80",
  },
];

export default function Projects() {
  return (
    <>
      {ProjectData.map((project, i) => (
        <div
          key={i}
          className="relative h-fit w-full max-w-[1400px] my-3 md:my-10  self-center flex flex-row justify-center items-center"
        >
          <div className="flex flex-col h-fit w-240 items-center justify-start gap-5">
            <div className="flex flex-row z-5 items-center">
              <Image
                className="h-6 w-4 lg:h-9 lg:w-6 "
                height={60}
                width={25}
                src={"/media/BrootW.png"}
                alt="Broot"
              />
              <div className="text-[11px] lg:text-base !font-[900] mt-3 ml-1 play-regular">
                {project.projectName}
              </div>
            </div>
            <div className="flex flex-row justify-center items-center">
              <Image
                className={`rounded-sm z-4 w-68 h-38 lg:h-80 lg:w-140 drop-shadow-2xl/90  ${project.dropShadow}`}
                height={300}
                width={250}
                src={`/media/${project.name}1.png`}
                alt="chess Landing Page"
              />
              <Image
                className="rounded-sm absolute left-0 lg:left-25 z-3 h-27 w-45 lg:h-60 lg:w-110 brightness-80 drop-shadow-2xl/90 blur-[2px]"
                height={300}
                width={350}
                src={`/media/${project.name}2.png`}
                alt="chess Landing Page"
              />
              <Image
                className="rounded-sm absolute right-0 lg:right-25 z-3 h-27 w-45 lg:h-60 lg:w-110 brightness-80 drop-shadow-2xl/90 blur-[2px]"
                height={300}
                width={650}
                src={`/media/${project.name}3.png`}
                alt="chess Landing Page"
              />
            </div>
            <div
              className={`w-[80%] ${project.blurColor} blur-3xl rounded-[100%] absolute h-full`}
            ></div>

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
                  <div className="flex flex-row items-center text-nowrap text-gray-300">
                    Learn more
                    <Image
                      height={30}
                      width={30}
                      className="size-4 lg:size-6"
                      src={"/media/redirect.png"}
                      alt="chess Landing Page"
                    />
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:items-center gap-2 w-full px-1">
                  <div className="play-regular mt-1 text-[11px] lg:text-sm gray-300 text-gray-400">
                    {project.brief}
                  </div>
                  <div className="w-full h-fit flex flex-row gap-2">
                    <div className="ml-auto flex flex-col items-center ">
                      <button className="text-[10px] lg:text-xs p-2 text-gray-300 bg-black rounded-md border-1 border-white/10">
                        View Code
                      </button>
                      <div className="h-[1px] w-[90%] bg-linear-to-r from-transparent via-white/50 to-transparent"></div>
                    </div>
                    <div className="flex flex-col items-center ">
                      <button
                        className={`text-[10px] lg:text-xs p-2 rounded-sm ${project.buttonColor} border-1 text-gray-300 `}
                      >
                        View Project
                      </button>
                      <div className="h-[1px] w-[90%] bg-linear-to-r from-transparent via-white/70 to-transparent"></div>
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
