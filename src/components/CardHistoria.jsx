import { Book, BookText, Pen, Trash2 } from "lucide-react";

export default function CardHistoria(props) {
  return (
    <div
      href={props.href}
      className="select-none h-auto lg:h-[220px] rounded-2xl mx-auto overflow-hidden bg-white flex flex-col lg:flex-row w-full shadow-md transition-transform duration-300 hover:shadow-xl"
    >
      <img
        src={props.src}
        alt={props.alt}
        className="w-auto lg:w-[300px] h-auto lg:h-[220px] object-cover"
      />
      <div className="p-5 gap-2 flex flex-col">
        <div className="flex justify-between">
          <span className="text-[#690A6C]! font-bold text-lg flex items-center gap-2">
            <BookText size={20} color="#242424" /> {props.year}
          </span>

          <div className="flex gap-3">
            <Pen cursor="pointer" />
            <Trash2 cursor="pointer" color="red" />
          </div>
        </div>

        <h2 className="font-bold text-lg">{props.title}</h2>
        <p className="text-gray-600! line-clamp-4 w-full">
          {props.description}
        </p>
      </div>
    </div>
  );
}
