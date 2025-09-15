import Image from "next/image";

export default function Header() {
  return (
    <div className="h-30 w-full absolute">
      <div className="flex flex-row h-full px-10 justify-between">
        <div className="drop-shadow-[0_0_18px_rgb(220_220_250_/0.3)] self-center">
          <div
            className="h-16 w-12 bg-gradient-to-b from-white to-gray-400/90 mask"
            style={{
              WebkitMaskImage: "url('/media/BrootW.png')",
              maskImage: "url('/media/BrootW.png')",
            }}
          />
        </div>

        <div className="self-center play-regular flex flex-row gap-12 mr-5 mt-2 text-sm">
          <button className=" flex flex-col max-w-30 text-left">
            <div className="border-t-1 border-red-800 h-[1px] "></div>
            <div className=" flex flex-row items-center pl-1 text-gray-300">
              My Projects
              <Image
                height={25}
                width={25}
                alt=""
                src={"/media/redirect.png"}
                className="ml-auto"
              />
            </div>
            <div className="text-[11px] px-1 text-gray-600">
              {"See all of my projects i have done"}
            </div>
          </button>
          <button className=" flex flex-col">
            <div className="border-t-1 border-red-800 w-30 h-[1px] "></div>
            <div className=" flex flex-row items-center pl-1 text-gray-300">
              About me
              <Image
                height={25}
                width={25}
                alt=""
                src={"/media/redirect.png"}
                className="ml-auto"
              />
            </div>
            <div className="text-[11px] px-1 text-gray-600">
              {"Learn about what i do"}
            </div>
          </button>
          <button className=" flex flex-col">
            <div className="border-t-1 border-red-800 w-30 h-[1px] "></div>
            <div className=" flex flex-row items-center pl-1 text-gray-300">
              Contect me
              <Image
                height={25}
                width={25}
                alt=""
                src={"/media/redirect.png"}
                className="ml-auto"
              />
            </div>
            <div className="text-[11px] px-1 text-gray-600">
              {"Arjit0228@gmail.com"}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
