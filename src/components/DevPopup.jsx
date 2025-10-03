import { MonitorCog } from "lucide-react";

export default function DevPopup() {
  return (
    <div
      id="devpopup"
      className="hidden items-center justify-center p-5 fixed top-0 left-0 bg-black/50 w-[100vw] h-[100vh]"
    >
      <div className="absolute z-40 w-full max-w-[400px] overflow-hidden top-1/2 left-1/2 ml-[-200px] mt-[-64px] bg-white rounded-lg p-8 shadow-lg flex gap-5 items-center transition-all duration-300">
        <span className="p-5 rounded-full bg-[#f8e7fc] text-[#af54c4] relative">
          <MonitorCog />
        </span>
        <h1 className="text-base md:text-lg">
          Funcionalidade em desenvolvimento.
        </h1>
        <div
          id="devpopup-bar"
          className="h-1 w-full bg-[#af54c4] absolute bottom-0 left-0 transition-all duration-2950 ease-linear"
        ></div>
      </div>
    </div>
  );
}
