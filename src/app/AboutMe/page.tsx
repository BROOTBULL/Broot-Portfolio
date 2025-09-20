import Image from "next/image";
import Footer from "../landing-components/footer";

export default function AboutMe() {
  return (
    <div className="h-[130vh] w-full relative pb-20 lg:mb-40">
      <div className="flex flex-col text-xs h-full w-full px-5">
        <div className="flex flex-col">
          <div className="text-[40px] lg:text-[80px] syncopate-regular text-gray-300 border-b-2 w-full border-red-800 my-5 text-center">
            {"ABOUT ME"}
          </div>
          <div className="h-fit w-full lg:p-2">
            <div className="h-200 w-230 absolute lg:flex hidden -z-1 flex-row gap-2 p-2 ">
              <div className="flex-col items-center justify-center flex flex-4 blur-[2px] hover:blur-none">
                <div className="w-full h-120 justify-center flex-col flex gap-2">
                  <Image
                    className=" ml-auto size-40"
                    height={1000}
                    width={800}
                    alt=""
                    src={"/media/gallery/sketch.jpg"}
                  />
                  <Image
                    className="scale-100 opacity-80 "
                    height={1000}
                    width={800}
                    alt=""
                    src={"/media/gallery/shadow.png"}
                  />
                  <Image
                    className="size-40 ml-auto"
                    height={1000}
                    width={800}
                    alt=""
                    src={"/media/gallery/chess.png"}
                  />
                </div>
              </div>
              <div className="flex-col items-center justify-center flex flex-5">
                <div className="w-full bg-linear-to-b  to-transparent via-white/30 from-transparent h-130 z-10 drop-shadow-2xl/90">
                  <Image
                    className="scale-130 "
                    height={1000}
                    width={800}
                    alt=""
                    src={"/media/gallery/profile.png"}
                  />
                </div>
              </div>
              <div className="flex-col items-center justify-center flex flex-4 blur-[2px] hover:blur-none">
                <div className="w-full h-120 flex flex-col gap-2">
                  <Image
                    className="aspect-square size-25"
                    height={1000}
                    width={800}
                    alt=""
                    src={"/media/gallery/Broot.png"}
                  />
                  <Image
                    className="scale-100 w-full"
                    height={1000}
                    width={800}
                    alt=""
                    src={"/media/gallery/Askull.jpg"}
                  />
                  <Image
                    className="h-40 w-30 opacity-80"
                    height={1000}
                    width={800}
                    alt=""
                    src={"/media/gallery/image.jpg"}
                  />
                </div>
              </div>
              <div className="flex-col items-center justify-center flex flex-2 blur-[2px] hover:blur-none">
                <div className="w-full h-30">
                  <Image
                    className="scale-100 "
                    height={1000}
                    width={800}
                    alt=""
                    src={"/media/gallery/sketch2.jpg"}
                  />
                </div>
              </div>
            </div>
            <div className="lg:p-8 text-[12px] lg:text-sm play-regular text-gray-400 w-full flex flex-col gap-5 z-10 ">
              <div className="max-w-[730px] w-full lg:w-[50%] h-fit ml-auto">
                {"Hi, I’m Arjit — a "}
                <span className="font-bold text-red-300/60">developer</span>
                {
                  " who enjoys turning ideas into working products. I’ve built projects ranging from a "
                }
                <span className="font-bold text-red-300/60">
                  multiplayer chess platform
                </span>
                {" with "}
                <span className="font-bold text-red-300/60">WebSockets</span>
                {" to a "}
                <span className="font-bold text-red-300/60">task manager</span>
                {" with "}
                <span className="font-bold text-red-300/60">AI features</span>
                {", and even some fun side projects like "}
                <span className="font-bold text-red-300/60">
                  mini piano games
                </span>
                {"."}
              </div>

              <div className="max-w-[730px] w-full lg:w-[50%] h-fit ml-auto">
                {"I like working across the stack — from "}
                <span className="font-bold text-red-300/60">
                  React/Next.js frontends
                </span>
                {" to "}
                <span className="font-bold text-red-300/60">
                  Node.js/Postgres backends
                </span>
                {" — and I enjoy experimenting with "}
                <span className="font-bold text-red-300/60">
                  real-time features
                </span>
                {", "}
                <span className="font-bold text-red-300/60">
                  authentication flows
                </span>
                {", and "}
                <span className="font-bold text-red-300/60">
                  clean UI design
                </span>
                {"."}
              </div>

              <Image
                className="scale-110 lg:hidden flex"
                height={1000}
                width={800}
                alt=""
                src={"/media/gallery/about.png"}
              />

              <div className="max-w-[500px] w-full lg:w-[50%] h-fit ml-auto lg:mt-15 ">
                <div className="text-[35px] lg:text-[40px] syncopate-regular text-gray-300 border-b-2 w-[80%] lg:w-[80%] ml-auto text-right border-red-800 my-2">
                  {"MY HOBBIES"}
                </div>
                <div className="max-w-[700px] text-[12px] w-[80%] h-fit ml-auto lg:mt-5 mt-0">
                  {"Beyond coding, I spend time on my creative side — "}
                  <div className="font-bold text-red-300/60">- Gaming</div>
                  <div className="font-bold text-red-300/60">- Sketching</div>
                  <div className="font-bold text-red-300/60">
                    - Graphic designing
                  </div>
                  <div className="font-bold text-red-300/60">- Photoshop</div>
                  -{" I design my own interfaces "}
                  {" and care about making apps that feel "}
                  <span className="font-bold text-red-300/60">smooth</span>
                  {" and "}
                  <span className="font-bold text-red-300/60">intuitive.</span>
                  <div />
                  {" Right now, I’m looking for opportunities where I can "}
                  <span className="font-bold text-red-300/60">learn</span>
                  {", "}
                  <span className="font-bold text-red-300/60">grow</span>
                  {", and "}
                  <span className="font-bold text-red-300/60">contribute</span>
                  {" to real-world products."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
