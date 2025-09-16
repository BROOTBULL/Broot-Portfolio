import Image from "next/image";

export default function Buttons() {
  return (
    <div className="h-full w-fit flex justify-center md:justify-end items-center gap-5 lg:gap-8 play-regular mt-5">
      <button className="h-fit flex flex-col items-center">
        <div className=" border-1  md:text-lg text-[12px]  border-red-800 rounded-sm md:px-6 md:py-3 px-3 py-1 text-gray-200 bg-red-950/60 ">
          {"Let's talk"}
        </div>
        <div className="h-[1px] w-[90%] bg-linear-to-r from-red-950 via-red-200 to-red-950 drop-shadow-[0_0_5px_rgb(250_250_250_/.6)]"></div>
      </button>
      <button className="h-fit flex flex-col items-center rounded-md pl-1.5">
        <div className="h-fit md:text-lg text-[12px] border-1 border-gray-500 rounded-sm md:pl-6 md:pr-4 md:py-3 pl-3 pr-1.5 py-1 flex flex-row items-center">
          {"Resume"}
          <Image
            height={25}
            width={25}
            alt=""
            src={"/media/redirect.png"}
            className="ml-auto rotate-135 size-4 md:size-6"
          />
        </div>
        <div className="h-[1px] w-[90%] bg-linear-to-r from-black via-white to-black drop-shadow-[0_0_5px_rgb(250_250_250_/.6)]"></div>
      </button>
    </div>
  );
}
