import { Eye, Pencil, Plus, Trash2, Users } from "lucide-react";
import SearchBar from "./SearchBar";
import Button from "./Button";

export default function Encontros() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Gerenciar Encontros</h1>

        <Button>
          <Plus /> Criar Novo Encontro
        </Button>
      </div>

      <SearchBar placeholder="Buscar encontros por nome, local..." />

      <div className="flex gap-2">
        <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold text-[#690a6c] bg-[#e1cee2]">
          Todos
        </button>
        <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold">
          Próximos
        </button>
        <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold">
          Passados
        </button>
      </div>

      <div className="border border-[#ccc] rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-[#e9e9e9] text-[#656565]">
              <th className="px-4 py-3 rounded-tl-lg">NOME</th>
              <th className="px-4 py-3">DATA</th>
              <th className="px-4 py-3">LOCAL</th>
              <th className="px-4 py-3">STATUS</th>
              <th className="px-4 py-3 rounded-tr-lg text-right">AÇÕES</th>
            </tr>
          </thead>

          <tbody className="text-[#555555]">
            <tr>
              <td className="p-4 font-semibold border-t border-[#ccc]">
                Treino Técnico
              </td>
              <td className="p-4 border-t border-[#ccc]">
                15 de Novembro de 2025
              </td>
              <td className="p-4 border-t border-[#ccc]">Arena Bela Vista</td>
              <td className="p-4 border-t border-[#ccc]">
                <span className="py-1 px-4 rounded-full bg-[#e4eaf6] text-[#4c8bf6] text-sm font-semibold">
                  Agendado
                </span>
              </td>
              <td className="p-4 border-t border-[#ccc]">
                <div className="flex justify-between">
                  <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Users size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Trash2
                    size={20}
                    strokeWidth={1.8}
                    cursor={"pointer"}
                    color="red"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td className="p-4 font-semibold border-t border-[#ccc]">
                Futebol de Areia
              </td>
              <td className="p-4 border-t border-[#ccc]">
                06 de Outubro de 2025
              </td>
              <td className="p-4 border-t border-[#ccc]">Praia do Futuro</td>
              <td className="p-4 border-t border-[#ccc]">
                <span className="py-1 px-4 rounded-full bg-[#e4eaf6] text-[#4c8bf6] text-sm font-semibold">
                  Agendado
                </span>
              </td>
              <td className="p-4 border-t border-[#ccc]">
                <div className="flex justify-between">
                  <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Users size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Trash2
                    size={20}
                    strokeWidth={1.8}
                    cursor={"pointer"}
                    color="red"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td className="p-4 font-semibold border-t border-[#ccc]">
                Amistoso de Fim de Ano
              </td>
              <td className="p-4 border-t border-[#ccc]">
                30 de Dezembro de 2024
              </td>
              <td className="p-4 border-t border-[#ccc]">Campo Leste</td>
              <td className="p-4 border-t border-[#ccc]">
                <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#6cd693] text-sm font-semibold">
                  Concluído
                </span>
              </td>
              <td className="p-4 border-t border-[#ccc]">
                <div className="flex justify-between">
                  <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Users size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Trash2
                    size={20}
                    strokeWidth={1.8}
                    cursor={"pointer"}
                    color="red"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td className="p-4 font-semibold border-t border-[#ccc]">
                Treino Coletivo
              </td>
              <td className="p-4 border-t border-[#ccc]">
                13 de Julho de 2025
              </td>
              <td className="p-4 border-t border-[#ccc]">
                Parque Marinha do Brasil
              </td>
              <td className="p-4 border-t border-[#ccc]">
                <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#6cd693] text-sm font-semibold">
                  Concluído
                </span>
              </td>
              <td className="p-4 border-t border-[#ccc]">
                <div className="flex gap-2 justify-between">
                  <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Users size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Trash2
                    size={20}
                    strokeWidth={1.8}
                    cursor={"pointer"}
                    color="red"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
