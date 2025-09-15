export default function Info() {
  return (
    <div className="h-full w-140 flex flex-col">
      <div className="play-regular text-sm w-full text-gray-300 border-b-2 border-red-800 h-fit">
        {"Hello! I’m Arjit "}
        <div className="font-bold text-2xl text-gray-300/90">
          {"I'm a Full Stack Web Developer"}
        </div>
      </div>
      <div className="play-regular text-sm text-gray-400 mt-2 w-[90%]">{" I'm a"} <span className="font-bold text-gray-300">Full-stack dev</span> who loves building <span className="font-bold text-gray-300">real-time apps , cool
        UIs, and full-stack products .</span>I design my own stuff, experiment with new
        tech, and turn ideas into things people actually use.
      </div>
    </div>
  );
}
