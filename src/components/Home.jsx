import { Calendar, ChevronRight, Trophy, User, Users } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col gap-15">
      <h1 className="text-4xl font-semibold">Visão Geral</h1>
      {/* ------------------------------------------- */}
      <div className="grid grid-cols-3 gap-5">
        <div className="p-10 rounded-lg bg-white flex flex-col gap-2 shadow-md">
          <p className="text-[#555555]">Total de Encontros</p>
          <h1 className="text-4xl font-semibold">19</h1>
        </div>

        <div className="p-10 rounded-lg bg-white flex flex-col gap-2 shadow-md">
          <p className="text-[#555555]">Total de Inscrições</p>
          <h1 className="text-4xl font-semibold">350</h1>
        </div>

        <div className="p-10 rounded-lg bg-white flex flex-col gap-2 shadow-md">
          <p className="text-[#555555]">Total de Visitantes</p>
          <h1 className="text-4xl font-semibold">1500</h1>
        </div>
      </div>
      {/* ------------------------------------------- */}
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Acesso Rápido</h2>

        <div className="grid grid-cols-3 gap-5">
          <button className="flex items-center gap-5 py-5 px-10 rounded-lg shadow-md bg-white cursor-pointer">
            <Calendar size={22} strokeWidth={1.8} color="#690a6c" />
            Gerenciar Encontros
            <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
          </button>

          <button className="flex items-center gap-5 py-5 px-10 rounded-lg shadow-md bg-white cursor-pointer">
            <Users size={22} strokeWidth={1.8} color="#690a6c" />
            Gerenciar Inscrições
            <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
          </button>

          <button className="flex items-center gap-5 py-5 px-10 rounded-lg shadow-md bg-white cursor-pointer">
            <Trophy size={22} strokeWidth={1.8} color="#690a6c" />
            Gerenciar Copa
            <ChevronRight className="ml-auto" size={22} strokeWidth={1.8} />
          </button>
        </div>
      </div>
      {/* ------------------------------------------- */}
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Atividades Recentes</h2>

        <div>
          <ul>
            <li className="flex gap-5 items-start py-6 relative">
              <div>
                <div className="bg-[#690a6c] p-3 rounded-full z-10 relative">
                  <Calendar size={28} strokeWidth={1.2} color="white" />
                </div>
                <div className="bg-[#e1cee2] absolute z-0 w-[2px] h-[100%] top-0 left-[25px]"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">
                  Novo encontro adicionado
                </h3>
                <p className="text-[#555555]">
                  Encontro 'Treino Técnico - Zona Norte (SP)' adicionado.
                </p>
              </div>
            </li>

            <li className="flex gap-5 items-start py-6 relative">
              <div>
                <div className="bg-[#690a6c] p-3 rounded-full z-10 relative">
                  <User size={28} strokeWidth={1.2} color="white" />
                </div>
                <div className="bg-[#e1cee2] absolute z-0 w-[2px] h-[100%] top-0 left-[25px]"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Inscrição recebida</h3>
                <p className="text-[#555555]">
                  Nova inscrição recebida para a peneira de 2025.
                </p>
              </div>
            </li>

            <li className="flex gap-5 items-start py-6 relative">
              <div>
                <div className="bg-[#690a6c] p-3 rounded-full z-10 relative">
                  <Trophy size={28} strokeWidth={1.2} color="white" />
                </div>
                <div className="bg-[#e1cee2] absolute z-0 w-[2px] h-[100%] top-0 left-[25px]"></div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Atualização na Copa</h3>
                <p className="text-[#555555]">
                  Fase de grupos da Copa atualizada.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
