export default function Labels() {
  const items = [
    "✦ FULL STACK DEV",
    "✦ NEXT.JS",
    "✦ REAL-TIME APPS",
    "✦ WEBSOCKETS",
    "✦ REACT",
    "✦ NODE.JS",
    "✦ UI/UX",
    "✦ DESIGN",
    "✦ PHOTOSHOP",
    "✦ AUTH & SECURITY",
    "✦ MONGODB",
    "✦ OPEN SOURCE",
    "✦ AI INTEGRATIONS",
    "✦ TYPESCRIPT",
  ];

  return (
    <div className="h-40 lg:h-70  w-screen flex justify-center items-center relative overflow-hidden -top-10">
      {/* Top Scrolling Bar */}
      <div className="absolute rotate-5 z-20 h-10 lg:h-15 drop-shadow-xl/50 w-[200vw] bg-gradient-to-b from-red-800 to-red-900 brightness-90 overflow-hidden flex items-center">
        <div className="animate-scroll flex whitespace-nowrap font-bold text-sm text-white text-shadow-xs/90 justify-between flex-row h-7 lg:h-11 items-center border-y-1 border-gray-200">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={`top-${i}`} className="flex">
              {items.map((item, idx) => (
                <span key={`top-${i}-${idx}`} className="mx-6">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Scrolling Bar */}
      <div className="absolute -rotate-5 z-10 h-10 lg:h-15 w-[200vw] bg-gradient-to-b from-red-800 to-red-900 brightness-70 overflow-hidden flex items-center">
        <div className="animate-scroll-reverse flex whitespace-nowrap font-bold text-sm text-white text-shadow-xs/90 h-7 lg:h-11 items-center border-y-1 border-gray-200">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={`bottom-${i}`} className="flex">
              {items.map((item, idx) => (
                <span key={`bottom-${i}-${idx}`} className="mx-6">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
