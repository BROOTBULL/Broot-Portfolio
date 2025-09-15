import AboutMe from "./landing-components/aboutMe";
import ContactMe from "./landing-components/contactMe";
import Footer from "./landing-components/footer";
import Header from "./landing-components/hader";
import Hero from "./landing-components/hero";
import Lables from "./landing-components/lables";
import MyProjects from "./landing-components/MyProjects";
import MySkills from "./landing-components/mySkills";

export default function Home() {
  return (
    <div className=" w-full flex flex-col">
     <Header/>
     <Hero/>
     <Lables/>
     <MyProjects/>
     <MySkills/>
     <AboutMe/>
     <ContactMe/>
     <Footer/>
    </div>
  );
}
