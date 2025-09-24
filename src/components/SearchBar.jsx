import { Search } from "lucide-react";

export default function SearchBar(props) {
  return (
    <div className="flex">
      <div className="border-l border-t border-b border-[#ccc] p-4 rounded-tl-lg rounded-bl-lg">
        <Search color="#757575" />
      </div>
      <input
        className="border-r border-t border-b border-[#ccc] w-full py-4 pr-4 outline-0 rounded-tr-lg rounded-br-lg font-semibold"
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
}
