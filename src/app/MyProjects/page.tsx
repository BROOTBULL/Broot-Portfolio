import Projects from "@/app/landing-components/Projects";
import Footer from "../landing-components/footer";


export default function MyProjects() {
  return (
    <div className="h-fit w-full relative pt-10">
      <div className="flex flex-col text-xs h-full w-full px-5 mb-25">
        <div className="flex flex-col">
          <div className="text-[40px] lg:text-[80px] syncopate-regular text-gray-300 border-b-2 w-full border-red-800 my-5 text-center">
            {"MY PROJECTS"}
          </div>
        </div>
        <Projects />
      </div>
      <Footer/>
    </div>
  );
}
