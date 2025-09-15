import Image from "next/image";
import React from "react";
import Info from "./intro";
import Buttons from "./buttons";

export default function Hero() {
  return (
    <div className="flex h-[calc(100vh-60px)] w-full">
      <div className="league-font absolute top-30 left-[14%] text-[50px] bg-gradient-to-b from-white h-fit to-gray-400 bg-clip-text text-transparent z-20">
        Hello !
      </div>
      <div className="absolute w-full justify-center flex h-full ">
        <Image
          height={1900}
          width={1000}
          src={"/media/hero.png"}
          alt="profile image"
          className="absolute scale-90 z-10 mt-10"
        />
        <div className="h-120 w-300 bg-gray-400/10 absolute mt-20 blur-3xl rounded-full "></div>
      </div>
      <div className=" flex h-40 w-full self-end justify-between mx-13 ">
        <Info />
        <Buttons />
      </div>
    </div>
  );
}
