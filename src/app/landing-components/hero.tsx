import Image from "next/image";
import React from "react";
import Info from "./intro";
import Buttons from "./buttons";

export default function Hero() {
  return (
    <div className="flex lg:h-[calc(100vh-60px)] h-[calc(100vh-140px)] w-full flex-col">
      <div className=" w-full justify-center items-center mt-20 md:mt-0 flex lg:h-full h-[90%] relative">
        <div className="lg:h-130 h-fit relative w-fit md:px-20 flex flex-col">
          <div className="league-font absolute left-3 md:left-10 top-3 lg:top-15 text-[30px] md:text-[50px] bg-gradient-to-b from-white h-fit to-gray-400 bg-clip-text text-transparent z-20">
            Hello !
          </div>
          <Image
            height={1900}
            width={1000}
            src={"/media/hero.png"}
            alt="profile image"
            className="scale-90  z-10"
          />
          <div className="h-[90%] w-full inset-0 absolute bg-gray-400/10 mt-8 blur-2xl md:blur-3xl rounded-full"></div>
        </div>
      </div>
      <div className=" flex h-40 w-full justify-between items-center flex-col md:flex-row p-2 lg:px-13">
        <Info />
        <Buttons />
      </div>
    </div>
  );
}
