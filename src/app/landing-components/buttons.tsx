"use client"
import Image from "next/image";

export default function Buttons() {
  return (
    <div className="h-full w-fit flex justify-center md:justify-end items-center gap-5 lg:gap-8 play-regular mt-5">
      <button
        onClick={() => {
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="h-fit flex flex-col group items-center hover:drop-shadow-[0_0_15px_rgb(250_20_20_/0.5)] "
      >
        <div className=" border-1  md:text-lg text-sm border-red-800 rounded-sm w-25 lg:w-32 py-2 text-gray-200 bg-red-950/60 group-hover:bg-red-900/40 duration-200 cursor-pointer ">
          {"Let's talk"}
        </div>
        <div className="h-[1px] w-[90%] rounded-[100%] group-hover:h-[2px] duration-200 transition bg-linear-to-r from-transparent group-hover:from-red-800/80 group-hover:to-red-800/80 group-hover:via-white via-red-300 to-transparent drop-shadow-[0_0_5px_rgb(250_250_250_/.6)]"></div>
      </button>
      <button className="h-fit flex group flex-col items-center rounded-md">
        <div className="h-fit cursor-pointer md:text-lg text-sm border-1 group-hover:bg-gray-500/20 duration-200 border-gray-500 rounded-sm w-25 lg:w-32 py-2 flex flex-row justify-center items-center">
          <div className="pl-2">{"Resume"}</div>
          <Image
            height={25}
            width={25}
            alt=""
            src={"/media/redirect.png"}
            className="rotate-135 size-5 md:size-6"
          />
        </div>
        <div className="h-[1px] w-[90%] bg-linear-to-r * group-hover:from-gray-800/50 group-hover:to-gray-800/50 duration-200 transition group-hover:h-[2px] rounded-[100%] from-black via-white to-black drop-shadow-[0_0_5px_rgb(250_250_250_/.6)]"></div>
      </button>
    </div>
  );
}
