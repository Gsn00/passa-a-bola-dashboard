export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-4 flex gap-2 h-[48px] w-full md:w-auto text-white bg-[#690a6c] rounded-lg shadow-lg cursor-pointer justify-center items-center  ${className}`}
    >
      {children}
    </button>
  );
}
