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
        <div className="flex flex-col">
          <div className="text-[80px] syncopate-regular text-gray-300 border-b-2 w-[50%] border-red-800 my-2 text-shadow-lg">
            {"CONTACT ME"}
          </div>
        </div>
        <div className="p-8 text-sm play-regular text-gray-300 w-full justify-center items-center flex flex-col gap-5 z-10 text-shadow-md">
          <div className="max-w-[700px] w-full h-fit text-center">
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
          <div className="play-default self-center h-fit mx-auto !font-bold text-4xl text-gray-300">
            {" — I’d love to connect"}{" "}
            <span className="text-red-300/60">{"!"}</span>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="max-w-[700px] w-full h-100 mt-10 rounded-md flex flex-col p-5"
          >
            <div className="ml-auto p-2 m-2 h-12 w-full justify-between flex flex-row items-center">
              <div className="text-gray-200 font-bold text-sm">{"Name :"}</div>
              <input
                type="text"
                className="outline-none w-[85%] border-b-2 p-2 border-red-800 rounded-md h-10"
                name="name"
                placeholder="Enter name"
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
              />
            </div>
            <div className="ml-auto p-2 m-2 h-12 w-full justify-between flex flex-row items-center">
              <div className="text-gray-200 font-bold text-sm">{"Email :"}</div>
              <input
                type="text"
                className="outline-none w-[85%] border-b-2 p-2 border-red-800 rounded-md h-10"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
              />
            </div>
            <div className="ml-auto p-2 m-2 h-12 w-full justify-between flex flex-row ">
              <div className="text-gray-200 font-bold text-sm">
                {"Message :"}
              </div>
              <TextareaAutosize
                className="outline-none w-[85%] border-b-2 p-2 text-sm border-red-800 rounded-md min-h-10 resize-none scroll-auto"
                minRows={1}
                maxRows={6}
                name="message"
                placeholder="Message"
                onChange={(e) => setMessage(e.currentTarget.value)}
                value={message}
              />
            </div>
            <button className="border-1 bg-red-950/40 border-red-800 rounded-lg h-11 w-fit ml-auto mt-5 px-5">
              {"Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
