import Image from "next/image";
import ChessProject from "./chessProject";
import TodoProject from "./todoProject";
import PortFolioProject from "./portfolioProject";

export default function MyProjects() {
  return (
    <div className="h-fit w-full relative pb-20">
      <div className="flex flex-col text-xs h-full w-full px-2 ">
        <div className="flex flex-col">
          <div className="text-[80px] syncopate-regular text-gray-300 border-b-2 w-[50%] border-red-800 my-2">
            {"MY PROJECTS"}
          </div>
          <div className="px-2 text-sm play-regular text-gray-400">
            {"Ideas turned into real products"}
          </div>
        </div>
        <ChessProject />
        <TodoProject />
        <PortFolioProject />
      </div>
    </div>
  );
}
