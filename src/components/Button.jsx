import { useState } from "react";

export default function Button({ children, className }) {
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
      className={`py-3 px-4 flex gap-2 h-[48px] w-full md:w-auto text-white bg-[#690a6c] rounded-lg shadow-lg cursor-pointer justify-center items-center  ${className}`}
    >
      {children}
    </button>
  );
}
