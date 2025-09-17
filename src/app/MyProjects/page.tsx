import Projects from "@/app/landing-components/Projects";


export default function MyProjects() {
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
    </div>
  );
}
