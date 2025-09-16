import Image from "next/image";

export default function PortFolioProject() {
  return (
    <div className="relative h-fit w-full max-w-[1400px] my-10 self-center flex flex-row justify-center items-center">
      <div className="flex flex-col h-fit w-240 items-center justify-start gap-5">
        <div className="flex flex-row z-5 items-center">
          <Image
            className="h-9 w-6"
            height={60}
            width={25}
            src={"/media/BrootW.png"}
            alt="Broot"
          />
          <div className="text-base !font-[900] mt-3 ml-1 play-regular">
            Broot-Portfolio
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Image
            className="rounded-sm z-4 h-80 w-140 drop-shadow-2xl/90 drop-shadow-red-800/20"
            height={300}
            width={250}
            src={"/media/portfolioL.png"}
            alt="chess Landing Page"
          />
          <Image
            className="rounded-sm absolute left-20 z-3 h-60 w-110 brightness-50 blur-[1px]"
            height={300}
            width={350}
            src={"/media/portfolioP.png"}
            alt="chess Landing Page"
          />
          <Image
            className="rounded-sm absolute right-20 z-3 h-60 w-110 brightness-50 blur-[1px]"
            height={300}
            width={650}
            src={"/media/portfolioP.png"}
            alt="chess Landing Page"
          />
        </div>
        <div className="w-300 bg-red-900/10 blur-3xl rounded-full absolute h-fit"></div>

        <div className="w-full h-fit px-5">
          <div>
            <div className="flex flex-row justify-between border-b-1 border-red-800 w-full">
              <div className="text-lg play-regular !font-bold ">
                Broot-Portfolio : My Portfolio website
              </div>
              <div className="flex flex-row items-center text-nowrap text-gray-300">
                Learn more
                <Image
                  height={30}
                  width={30}
                  src={"/media/redirect.png"}
                  alt="chess Landing Page"
                />
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="play-regular text-sm gray-300 w-[50%] text-gray-400">
                A personal site showcasing my work with a modern UI, custom
                design, and interactive sections. Next.js · TailwindCSS · Custom
                UI Design.
              </div>
              <button className="ml-auto text-xs p-2 rounded-sm border-b-1 text-gray-300 border-gray-400 ">
                View Code
              </button>
              <button className="text-xs p-2 rounded-sm bg-red-800/20  border-red-900 ">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
