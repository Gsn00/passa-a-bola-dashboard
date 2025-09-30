import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(true);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer 
        ${enabled ? "bg-purple-800" : "bg-gray-300"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform
          ${enabled ? "translate-x-[106%]" : "translate-x-[3px]"}`}
      />
    </button>
  );
}
