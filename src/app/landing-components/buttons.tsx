import Image from "next/image";

export default function Buttons() {
  return (
    <div className="h-full w-110 flex justify-end items-center gap-8 play-regular text-lg">
      <button className="h-fit">
        <div className="h-[1px] w-full bg-linear-to-r from-red-950 via-red-200 to-red-950"></div>
        <div className=" border-1 border-red-800 rounded-sm px-6 py-3 text-gray-200 bg-red-950/60 ">
          {"Let's talk"}
        </div>
      </button>
      <button className="h-fit border-b-1 border-gray-500 rounded-sm px-6 py-3 flex flex-row items-center">
        {"Download Cv"}
        <Image
          height={25}
          width={25}
          alt=""
          src={"/media/redirect.png"}
          className="ml-auto rotate-135"
        />
      </button>
    </div>
  );
}
