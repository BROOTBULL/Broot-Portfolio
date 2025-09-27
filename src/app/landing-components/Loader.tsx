export default function Loader() {
  return (
    <div className="flex items-center justify-center h-fit scale-50 lg:scale-80 w-fit">
      <div className=" h-60 w-30 perspective-[1000px] relative overflow-clip ml-4">
        <div className="loadingTile bg-linear-to-br from-red-800 to-red-500 border-3 border-t-transparent border-l-transparent border-b-red-950 border-r-red-400 absolute size-30 transform rotate-x-46 rotate-z-45 -left-16 top-1"></div>
        <div className="loadingTile2 bg-linear-to-br from-red-800 to-red-500 border-3 border-t-transparent border-l-transparent border-b-red-950 border-r-red-400 absolute h-29 w-13 transform rotate-x-46 rotate-z-45 -left-3 top-22"></div>
      </div>
      <div className="h-60 w-10 perspective-[1000px] absolute ml-14">
        <div className="loadingFallingTile bg-linear-to-br from-red-800 to-red-500 border-3 border-t-transparent border-l-transparent border-b-red-950 border-r-red-400 absolute size-10 transform rotate-x-46 rotate-z-45 top-20"></div>
        <div className="loadingFallingTile2 bg-linear-to-br from-red-800 to-red-500 border-3 border-t-transparent border-l-transparent border-b-red-950 border-r-red-400 absolute size-10 transform rotate-x-46 rotate-z-45 top-35"></div>
      </div>
    </div>
  );
}
