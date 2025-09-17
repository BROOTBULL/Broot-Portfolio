import Image from "next/image";

export default function Header() {
  return (
    <div className="h-15 md:h-30 w-full absolute p-2 overflow-x-clip">
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
        <div className="hidden md:flex self-center play-regular flex-row gap-5 lg:gap-12 mr-5 mt-2 text-sm">
          <button className=" flex flex-col text-left">
            <div className="bg-linear-to-r from-red-800 to-red-800 via-red-500 w-23 lg:w-30 h-[1px] "></div>
            <div className=" flex flex-row items-center text-[10px] lg:text-sm pl-1 text-gray-300">
              My Projects
              <Image
                height={25}
                width={25}
                alt=""
                src={"/media/redirect.png"}
                className="ml-auto size-5 lg:size-6"
              />
            </div>
            <div className="text-[8px] lg:text-[11px] px-1 text-gray-600">
              {"See all of my projects i have done"}
            </div>
          </button>
          <button className=" flex flex-col text-left">
            <div className="bg-linear-to-r from-red-800 to-red-800 via-red-500 w-23 lg:w-30 h-[1px] "></div>
            <div className=" flex flex-row items-center text-[10px] lg:text-sm pl-1 text-gray-300">
              About me
              <Image
                height={25}
                width={25}
                alt=""
                src={"/media/redirect.png"}
                className="ml-auto size-5 lg:size-6"
              />
            </div>
            <div className="text-[8px] lg:text-[11px] px-1 text-gray-600">
              {"Learn about what i do"}
            </div>
          </button>
          <button className=" flex flex-col text-left">
            <div className="bg-linear-to-r from-red-800 to-red-800 via-red-500 w-23 lg:w-30 h-[1px] "></div>
            <div className=" flex flex-row items-center text-[10px] lg:text-sm pl-1 text-gray-300">
              Contect me
              <Image
                height={25}
                width={25}
                alt=""
                src={"/media/redirect.png"}
                className="ml-auto size-5 lg:size-6"
              />
            </div>
            <div className="text-[8px] lg:text-[11px] px-1 text-gray-600">
              {"Arjit0228@gmail.com"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
