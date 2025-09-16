"use client";
import Image from "next/image";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="h-fit w-full relative pb-20">
      <div className="flex flex-col text-xs h-full w-full px-2 ">
        <div className="flex flex-col lg:mb-10">
          <div className="text-[30px] lg:text-[80px] syncopate-regular text-gray-300 border-b-2 w-[90%] lg:w-[50%] border-red-800 my-2">
            {"CONTACT ME"}
          </div>
        </div>
        <div className="lg:p-8 play-regular w-full justify-center items-center flex flex-col gap-5 z-10 text-shadow-md">
          <div className="max-w-[700px] text-gray-400 text-[10px] lg:text-sm w-full h-fit lg:text-center">
            {"I’m actively looking for opportunities where I can "}
            <span className="font-bold text-red-300/60 text-shadow-none">
              learn
            </span>
            {", "}
            <span className="font-bold text-red-300/60 text-shadow-none">
              grow
            </span>
            {", and "}
            <span className="font-bold text-red-300/60 text-shadow-none">
              contribute
            </span>
            {" to real-world products."}
            {" If you’re hiring for a "}
            <span className="font-bold text-red-300/60 text-shadow-none">
              developer
            </span>
            {" who’s excited about "}
            <span className="font-bold text-red-300/60 text-shadow-none">
              building
            </span>
            {", "}
            <span className="font-bold text-red-300/60 text-shadow-none">
              problem-solving
            </span>
            {", and working with "}
            <span className="font-bold text-red-300/60 text-shadow-none">
              modern web technologies
            </span>
          </div>
          <div className="play-default self-center h-fit mx-auto !font-bold text-lg lg:text-4xl text-gray-300">
            {" — I’d love to connect"}{" "}
            <span className="text-red-300/60">{"!"}</span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="max-w-[700px] w-full h-fit lg:mt-10 rounded-md flex flex-col p-5 mb-10"
          >
            <div className="ml-auto p-2 m-2h-10 lg:h-12 w-full justify-between flex flex-col lg:flex-row lg:items-center">
              <div className="text-gray-200 font-bold text-[11px] lg:text-sm">
                {"Name :"}
              </div>
              <input
                type="text"
                className="outline-none bg-gray-700/10 text-[11px] lg:text-sm w-full lg:w-[85%] border-b-2 p-2 border-red-800 rounded-md h-10"
                name="name"
                placeholder="Enter name"
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
              />
            </div>
            <div className="ml-auto p-2 m-2h-10 lg:h-12 w-full justify-between flex flex-col lg:flex-row lg:items-center">
              <div className="text-gray-200 font-bold text-[11px] lg:text-sm">
                {"Email :"}
              </div>
              <input
                type="text"
                className="outline-none bg-gray-700/10 text-[11px] lg:text-sm w-full lg:w-[85%] border-b-2 p-2 border-red-800 rounded-md h-10"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
              />
            </div>
            <div className="ml-auto p-2 m-2 h-fit w-full justify-between flex flex-col lg:flex-row ">
              <div className="text-gray-200 font-bold text-[11px] lg:text-sm">
                {"Message :"}
              </div>
              <TextareaAutosize
                className="outline-none w-full lg:w-[85%] border-b-2 p-2 bg-gray-700/10 text-[11px] lg:text-sm border-red-800 rounded-md min-h-20 resize-none scroll-auto"
                minRows={1}
                maxRows={6}
                name="message"
                placeholder="Message..."
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
              />
            </div>
            <div className="flex flex-col items-center mt-5 lg:mt-10 mr-2 w-fit ml-auto">
              <button className="border-1 text-[11px] lg:base bg-red-950/40 border-red-800/70 rounded-md h-9 lg:h-11 w-fit px-3 md:px-5">
                {"Send Message"}
              </button>
              <div className="h-[1px] w-[90%] bg-linear-to-r from-red-950 via-red-300 to-red-950 drop-shadow-[0_0_5px_rgb(250_250_250_/.2)]"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
