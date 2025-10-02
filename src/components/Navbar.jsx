import {
  House,
  Calendar,
  Users,
  Trophy,
  BookOpen,
  Info,
  ChevronRight,
  LogOut,
  UserCog,
} from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <section className="min-w-[300px]">
      <nav className="w-[300px] h-[100vh] px-6 py-5 border-r border-[#e1cee2] flex flex-col fixed">
        <h2 className="font-bold text-xl mb-2">Painel de Controle</h2>
        <p className="font-normal text-[#555555]">Administrador</p>

        <div className="mt-10">
          <div className="space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out ${
                  isActive ? "bg-[#690a6c] text-white" : ""
                }`
              }
            >
              <House size={22} strokeWidth={1.8} /> Visão Geral
            </NavLink>
            <NavLink
              to="/encontros"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out ${
                  isActive ? "bg-[#690a6c] text-white" : ""
                }`
              }
            >
              <Calendar size={22} strokeWidth={1.8} /> Encontros{" "}
              <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
            </NavLink>
            <NavLink
              to="/peneiras"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out ${
                  isActive ? "bg-[#690a6c] text-white" : ""
                }`
              }
            >
              <Users size={22} strokeWidth={1.8} /> Peneiras{" "}
              <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
            </NavLink>
            <NavLink
              to="/copa"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out ${
                  isActive ? "bg-[#690a6c] text-white" : ""
                }`
              }
            >
              <Trophy size={22} strokeWidth={1.8} /> Copa{" "}
              <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
            </NavLink>
            <NavLink
              to="/historia"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out ${
                  isActive ? "bg-[#690a6c] text-white" : ""
                }`
              }
            >
              <BookOpen size={22} strokeWidth={1.8} /> História{" "}
              <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
            </NavLink>
            <NavLink
              to="/sobre"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out ${
                  isActive ? "bg-[#690a6c] text-white" : ""
                }`
              }
            >
              <Info size={22} strokeWidth={1.8} /> Sobre{" "}
              <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
            </NavLink>
            <NavLink
              to="/usuarios"
              className={({ isActive }) =>
                `flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out ${
                  isActive ? "bg-[#690a6c] text-white" : ""
                }`
              }
            >
              <UserCog size={22} strokeWidth={1.8} /> Usuários{" "}
              <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
            </NavLink>
          </div>
        </div>

        <button className="flex items-center gap-2 w-full cursor-pointer px-4 py-2 rounded-lg mt-auto hover:bg-[#7f1b8b] hover:text-white transition-discrete transition duration-300 ease-in-out">
          <LogOut size={22} strokeWidth={1.8} /> Desconectar-se{" "}
        </button>
      </nav>
    </section>
  );
}
