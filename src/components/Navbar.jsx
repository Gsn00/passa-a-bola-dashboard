import {
  House,
  Calendar,
  Users,
  Trophy,
  BookOpen,
  Info,
  User,
  ChevronRight,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-[300px] h-[100vh] px-6 py-5 border-r border-[#e1cee2] flex flex-col">
      <h2 className="font-bold text-xl mb-2">Painel de Controle</h2>
      <p className="font-normal text-[#555555]">Administrador</p>

      <div className="mt-10">
        <ul className="space-y-2">
          <li className="flex items-center gap-2 w-full cursor-pointer px-4 py-2 bg-[#690a6c] text-white rounded-lg">
            <House size={22} strokeWidth={1.8} /> Visão Geral
          </li>
          <li className="flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out">
            <Calendar size={22} strokeWidth={1.8} /> Encontros{" "}
            <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
          </li>
          <li className="flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out">
            <Users size={22} strokeWidth={1.8} /> Peneiras{" "}
            <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
          </li>
          <li className="flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out">
            <Trophy size={22} strokeWidth={1.8} /> Copa{" "}
            <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
          </li>
          <li className="flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out">
            <BookOpen size={22} strokeWidth={1.8} /> História{" "}
            <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
          </li>
          <li className="flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out">
            <Info size={22} strokeWidth={1.8} /> Sobre{" "}
            <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
          </li>
          <li className="flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out">
            <User size={22} strokeWidth={1.8} /> Minha Conta{" "}
            <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
          </li>
        </ul>
      </div>

      <button className="flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg mt-auto hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out">
        <LogOut size={22} strokeWidth={1.8} /> Desconectar-se{" "}
      </button>
    </nav>
  );
}
