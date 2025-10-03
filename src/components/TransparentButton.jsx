export default function TransparentButton({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`py-1 px-4 h-[48px] flex gap-2 w-full md:w-auto text-[#690a6c] border-2 border-[#690a6c] rounded-lg shadow-lg cursor-pointer justify-center items-center ${className}`}
    >
      {children}
    </button>
  );
}
