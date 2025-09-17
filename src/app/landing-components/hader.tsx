"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <div className="h-15 md:h-30 w-full absolute p-2 overflow-x-clip z-100">
      <div className="flex flex-row h-full lg:px-10 justify-between items-center">
        <div className="w-full h-fit z-100 flex flex-col justify-between items-center">
          <div className="drop-shadow-[0_0_18px_rgb(220_220_250_/0.3)] h-fit w-full self-center">
            <div
              className="md:h-16 md:w-12 h-11 w-9 bg-gradient-to-b from-white to-gray-400/90 mask"
              style={{
                WebkitMaskImage: "url('/media/BrootW.png')",
                maskImage: "url('/media/BrootW.png')",
              }}
            />
          </div>
        </div>
        <div className="hidden md:flex self-center play-regular flex-row gap-5 lg:gap-8 mr-5 mt-2">
          <button
            className=" flex flex-col select-none cursor-pointer hover:drop-shadow-[0_0_10px_rgb(220_0_0_/.4)] group text-left"
            onClick={() => router.push("/MyProjects")}
          >
            <div className="bg-linear-to-r group-hover:from-red-800 group-hover:to-red-800 group-hover:via-red-500 from-trasnparent to-trasnparent via-red-500/80 w-23 lg:w-28 h-[1px] duration-300 transition"></div>
            <div className=" flex flex-row items-center text-[10px] lg:text-[12px] pl-1 text-gray-300">
              My Projects
              <Image
                height={25}
                width={25}
                alt=""
                src={"/media/redirect.png"}
                className="ml-auto size-5 lg:size-6"
              />
            </div>
            <div className="text-[9px] px-1 text-gray-600">
              {"See all of my projects i have done"}
            </div>
          </button>
          <button 
           onClick={() => router.push("/AboutMe")}
          className=" flex flex-col hover:drop-shadow-[0_0_10px_rgb(220_0_0_/.4)] group cursor-pointer text-left">
            <div className="bg-linear-to-r group-hover:from-red-800 group-hover:to-red-800 group-hover:via-red-500 from-trasnparent to-trasnparent via-red-500/80 w-23 lg:w-28 h-[1px] duration-300 transition"></div>

            <div className=" flex flex-row items-center text-[12px] pl-1 text-gray-300">
              About me
              <Image
                height={25}
                width={25}
                alt=""
                src={"/media/redirect.png"}
                className="ml-auto size-5 lg:size-6"
              />
            </div>
            <div className="text-[9px] px-1 text-gray-600">
              {"Learn about what i do"}
            </div>
          </button>
          <button className=" flex flex-col hover:drop-shadow-[0_0_10px_rgb(220_0_0_/.4)] group text-left cursor-pointer">
            <div className="bg-linear-to-r drop-shadow-[0_0_20px_rgb(220_0_0_/1)] group-hover:from-red-800 group-hover:to-red-800 group-hover:via-red-500 from-trasnparent to-trasnparent via-red-500/80 w-23 lg:w-28 h-[1px] duration-300 transition"></div>

            <div className=" flex flex-row items-center cursor-pointer text-[12px] pl-1 text-gray-300">
              Contect me
              <Image
                height={25}
                width={25}
                alt=""
                src={"/media/redirect.png"}
                className="ml-auto size-5 lg:size-6"
              />
            </div>
            <div className="text-[9px] px-1 text-gray-600">
              {"Arjit0228@gmail.com"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
