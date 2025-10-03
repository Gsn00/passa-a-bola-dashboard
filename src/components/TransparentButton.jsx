import { useState } from "react";

export default function TransparentButton({ children, onClick, className }) {
  const [popupTimeout, setPopupTimeout] = useState();

  function showDevpopup() {
    clearTimeout(popupTimeout);

    const popup = document.getElementById("devpopup");
    const bar = document.getElementById("devpopup-bar");
    bar.style["width"] = "100%";
    popup.style["display"] = "flex";
    popup.style["opacity"] = "0";

    setTimeout(() => {
      popup.style["opacity"] = "1";
      bar.style["width"] = "0";
    }, 50);
    setPopupTimeout(
      setTimeout(() => {
        popup.style["opacity"] = "0";
        popup.style["display"] = "none";
      }, 3000)
    );
  }
  return (
    <button
      onClick={showDevpopup}
      className={`py-1 px-4 h-[48px] flex gap-2 w-full md:w-auto text-[#690a6c] border-2 border-[#690a6c] rounded-lg shadow-lg cursor-pointer justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
}
