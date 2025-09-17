import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-fit w-full bg-linear-to-b from-red-800/80 to-red-900/80 p-3">
      <div className="flex flex-col-reverse lg:flex-row h-fit w-full border-1 border-white/30 pt-4">
        <div className="league-font flex items-end text-[100px] mt-auto h-50 lg:text-[200px] bg-gradient-to-b from-white/70 lg:h-fit to-red-500 bg-clip-text text-transparent pl-5 lg:p-5">
          {"I'm Arjit"}
        </div>

        <div className="flex-grow w-full lg:w-[60%] ml-auto lg:p-15">
          <div className=" h-full w-full px-5 flex flex-col">
            <div className=" play-regular justify-end flex flex-col gap-3 max-w-[1000px] mt-2 text-sm w-full mb-5">
              <button className=" flex flex-row w-full items-center h-8 text-left border-b-1 border-white/50">
                My Projects
                <div className="text-[10px] lg:text-[11px] px-1 ml-auto text-white/60">
                  {"See all of my projects i have done"}
                </div>
                <Image
                  height={25}
                  width={25}
                  alt=""
                  src={"/media/redirect.png"}
                  className="size-5 "
                />
              </button>
              <button className=" flex flex-row w-full items-center h-8 text-left border-b-1 border-white/50">
                About me
                <div className="text-[10px] lg:text-[11px] px-1 ml-auto text-white/60">
                  {"Learn about what i do"}
                </div>
                <Image
                  height={25}
                  width={25}
                  alt=""
                  src={"/media/redirect.png"}
                  className="size-5 "
                />
              </button>
              <button className=" flex flex-row w-full items-center h-8 text-left border-b-1 border-white/50">
                Contect me
                <div className="text-[10px] lg:text-[11px] px-1 ml-auto text-white/60">
                  {"Arjit0228@gmail.com"}
                </div>
                <Image
                  height={25}
                  width={25}
                  alt=""
                  src={"/media/redirect.png"}
                  className="size-5 "
                />
              </button>
            </div>
            <div className=" lg:mt-auto mt-5 play-regular justify-end flex flex-row gap-5 text-sm">
              <button className=" flex flex-row items-center text-white bg-white/10 p-2 rounded-md">
                <Image
                  height={20}
                  width={20}
                  alt=""
                  src={"/media/linkedin.png"}
                  className="ml-auto size-4 "
                />
              </button>
              <button className=" flex flex-row items-center  bg-white/10 p-2 rounded-md text-white">
                <Image
                  height={20}
                  width={20}
                  alt=""
                  src={"/media/twitter.png"}
                  className="ml-auto size-4 invert"
                />
              </button>
              <button className=" flex flex-row items-center bg-white/10 p-2 rounded-md text-white">
                <Image
                  height={20}
                  width={20}
                  alt=""
                  src={"/media/github.png"}
                  className="ml-auto size-4 invert"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
