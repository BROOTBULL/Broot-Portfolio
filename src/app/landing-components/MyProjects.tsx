"use client"
import { useRouter } from "next/navigation";
import Projects from "./Projects";

export default function MyProjects() {
  const router=useRouter()
  return (
    <div className="h-fit w-full relative pb-20">
      <div className="flex flex-col text-xs h-full w-full px-5 ">
        <div className="flex flex-col">
          <div className="text-[40px] lg:text-[80px] syncopate-regular text-gray-300 border-b-2 w-full lg:w-[50%] border-red-800 my-2">
            {"MY PROJECTS"}
          </div>
        </div>
        <Projects />
      </div>

      <button
      onClick={()=>router.push("/MyProjects")}
      className="w-full h-8 flex flex-col justify-center text-sm text-gray-200/50 cursor-pointer group hover:text-gray-200 duration-200 lg:text-base mt-10 items-center">
        See All Projects
        <div className="h-[2px] w-[80%] bg-linear-to-r from-trasnparent group-hover:via-red-800 transition duration-200 via-red-950 to-transparent rounded-[100%]"></div>
        <div className="h-3 w-full bg-linear-to-r rounded-[100%] from-transparent via-red-500/40 to-transparent blur-xl mt-6 absolute"></div>
      </button>
    </div>
  );
}
