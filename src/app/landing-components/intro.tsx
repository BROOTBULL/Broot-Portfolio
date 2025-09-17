export default function Info() {
  return (
    <div className="h-full w-full lg:w-[50%] flex flex-col items-center text-center md:items-start md:text-left">

      <div className="play-regular text-[11px] md:text-sm md:w-full w-[80%] text-gray-300 h-fit ">
        {"Hello! I’m Arjit "}
        <div className="font-bold  text-[15px] md:text-2xl text-gray-300/90 text-shadow-[0_0_10px_rgb(250_250_250_/.4)]">
          {"I'm a Full Stack Web Developer"}
        </div>
      </div>
        <div className="h-[1px] w-[90%] rounded-[100%] bg-linear-to-r from-red-800 via-red-500 to-red-800"></div>

      <div className="play-regular text-[12px] md:text-base text-gray-400 mt-2 w-[85%]">{" I'm a"} <span className="font-bold text-gray-300">Full-stack dev</span> who loves building <span className="font-bold text-gray-300">real-time apps , cool
        UIs, and full-stack products .</span>I design my own stuff, experiment with new
        tech, and turn ideas into things people actually use.
      </div>
    </div>
  );
}
