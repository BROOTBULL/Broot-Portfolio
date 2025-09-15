import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-fit w-full bg-linear-to-b from-red-800/80 to-red-900 p-3">
      <div className="flex flex-row h-fit w-full border-1 border-white/30">
        <div className="league-font text-[200px] bg-gradient-to-b from-white h-fit to-red-400 bg-clip-text text-transparent p-5">
          {"I'm Arjit"}
        </div>

        <div className="flex-grow w-[60%] ml-auto p-15">
          <div className=" h-full w-full flex flex-col ">
            <div className=" play-regular justify-end flex flex-row gap-15 mr-5 mt-2 text-sm">
              <button className=" flex flex-col max-w-30 text-left">
                <div className="border-t-1 border-white h-[1px] "></div>
                <div className=" flex flex-row items-center pl-1 text-white">
                  My Projects
                  <Image
                    height={25}
                    width={25}
                    alt=""
                    src={"/media/redirect.png"}
                    className="ml-auto"
                  />
                </div>
                <div className="text-[11px] px-1 text-white/60">
                  {"See all of my projects i have done"}
                </div>
              </button>
              <button className=" flex flex-col">
                <div className="border-t-1 border-white w-30 h-[1px] "></div>
                <div className=" flex flex-row items-center pl-1 text-white">
                  About me
                  <Image
                    height={25}
                    width={25}
                    alt=""
                    src={"/media/redirect.png"}
                    className="ml-auto"
                  />
                </div>
                <div className="text-[11px] px-1 text-white/60">
                  {"Learn about what i do"}
                </div>
              </button>
              <button className=" flex flex-col">
                <div className="border-t-1 border-white w-30 h-[1px] "></div>
                <div className=" flex flex-row items-center pl-1 text-white">
                  Contect me
                  <Image
                    height={25}
                    width={25}
                    alt=""
                    src={"/media/redirect.png"}
                    className="ml-auto"
                  />
                </div>
                <div className="text-[11px] px-1 text-white/60">
                  {"Arjit0228@gmail.com"}
                </div>
              </button>
            </div>
            <div className=" mt-auto play-regular justify-end flex flex-row gap-5 mr-5 text-sm">
              <button className=" flex flex-col max-w-30 text-left">
                <div className=" flex flex-row items-center text-white bg-red-300/40 p-2 rounded-md">
                  <Image
                    height={20}
                    width={20}
                    alt=""
                    src={"/media/linkedin.png"}
                    className="ml-auto"
                  />
                </div>
              </button>
              <button className=" flex flex-col">
                <div className=" flex flex-row items-center  bg-red-300/40 p-2 rounded-md text-white">
                  <Image
                    height={20}
                    width={20}
                    alt=""
                    src={"/media/twitter.png"}
                    className="ml-auto invert"
                  />
                </div>
              </button>
              <button className=" flex flex-col">
                <div className=" flex flex-row items-center bg-red-300/40 p-2 rounded-md text-white">
                  <Image
                    height={20}
                    width={20}
                    alt=""
                    src={"/media/github.png"}
                    className="ml-auto invert"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
