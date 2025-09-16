import Projects from "./Projects";


export default function MyProjects() {
  return (
    <div className="h-fit w-full relative pb-20">
      <div className="flex flex-col text-xs h-full w-full px-2 ">
        <div className="flex flex-col">
          <div className="text-[30px] lg:text-[80px] syncopate-regular text-gray-300 border-b-2 w-[90%] lg:w-[50%] border-red-800 my-2">
            {"MY PROJECTS"}
          </div>
          <div className="lg:px-2 text-[10px] lg:text-sm play-regular text-gray-400">
            {"Ideas turned into real products"}
          </div>
        </div>
        <Projects />
      </div>
    </div>
  );
}
