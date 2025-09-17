import Image from "next/image";

export default function Buttons() {
  return (
    <div className="h-full w-fit flex justify-center md:justify-end items-center gap-5 lg:gap-8 play-regular mt-5">
      <button className="h-fit flex flex-col items-center">
        <div className=" border-1  md:text-lg text-sm border-red-800 rounded-sm w-25 lg:w-32 py-2 text-gray-200 bg-red-950/60 ">
          {"Let's talk"}
        </div>
        <div className="h-[1px] w-[90%] bg-linear-to-r from-red-950 via-red-200 to-red-950 drop-shadow-[0_0_5px_rgb(250_250_250_/.6)]"></div>
      </button>
      <button className="h-fit flex flex-col items-center rounded-md">
        <div className="h-fit md:text-lg text-sm border-1 border-gray-500 rounded-sm w-25 lg:w-32 py-2 flex flex-row justify-center items-center">
          <div className="pl-2">{"Resume"}</div>
          <Image
            height={25}
            width={25}
            alt=""
            src={"/media/redirect.png"}
            className="rotate-135 size-5 md:size-6"
          />
        </div>
        <div className="h-[1px] w-[90%] bg-linear-to-r from-black via-white to-black drop-shadow-[0_0_5px_rgb(250_250_250_/.6)]"></div>
      </button>
    </div>
  );
}
