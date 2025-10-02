import { Eye, Pencil, Plus, ToggleLeft, ToggleRight } from "lucide-react";
import Button from "./Button";
import SearchBar from "./SearchBar";

export default function Usuarios() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Gerenciar Encontros</h1>

        <Button>
          <Plus /> Criar Novo Usuário
        </Button>
      </div>

      <SearchBar placeholder="Buscar usuário por nome, e-mail..." />

      <div className="flex gap-2">
        <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold text-[#690a6c] bg-[#e1cee2]">
          Todos
        </button>
        <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold">
          Ativos
        </button>
        <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold">
          Inativos
        </button>
        <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold">
          Administradores
        </button>
      </div>

      <div className="border border-[#ccc] rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="text-left bg-[#e9e9e9] text-[#656565]">
              <th className="px-4 py-3 rounded-tl-lg">NOME</th>
              <th className="px-4 py-3">EMAIL</th>
              <th className="px-4 py-3">STATUS</th>
              <th className="px-4 py-3">FUNÇÃO</th>
              <th className="px-4 py-3 rounded-tr-lg text-right">AÇÕES</th>
            </tr>
          </thead>

          <tbody className="text-[#555555]">
            <tr>
              <td className="p-4 font-semibold border-t border-[#ccc]">
                Daniela Alves
              </td>
              <td className="p-4 border-t border-[#ccc]">
                daniela.alves@example.com
              </td>
              <td className="p-4 border-t border-[#ccc]">
                <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#6cd693] text-sm font-semibold">
                  Ativo
                </span>
              </td>
              <td className="p-4 border-t border-[#ccc]">Usuário</td>
              <td className="p-4 border-t border-[#ccc]">
                <div className="flex gap-2 justify-between items-center">
                  <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <ToggleRight
                    size={24}
                    strokeWidth={1.8}
                    cursor={"pointer"}
                    color="green"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td className="p-4 font-semibold border-t border-[#ccc]">
                Ana Silva
              </td>
              <td className="p-4 border-t border-[#ccc]">
                ana.silva@example.com
              </td>
              <td className="p-4 border-t border-[#ccc]">
                <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#6cd693] text-sm font-semibold">
                  Ativo
                </span>
              </td>
              <td className="p-4 border-t border-[#ccc]">Administrador</td>
              <td className="p-4 border-t border-[#ccc]">
                <div className="flex gap-2 justify-between items-center">
                  <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <ToggleRight
                    size={24}
                    strokeWidth={1.8}
                    cursor={"pointer"}
                    color="green"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td className="p-4 font-semibold border-t border-[#ccc]">
                Carla Mendes
              </td>
              <td className="p-4 border-t border-[#ccc]">
                carla.mendes@example.com
              </td>
              <td className="p-4 border-t border-[#ccc]">
                <span className="py-1 px-4 rounded-full bg-[#f6e4e4] text-[#ef4d4d] text-sm font-semibold">
                  Inativo
                </span>
              </td>
              <td className="p-4 border-t border-[#ccc]">Usuário</td>
              <td className="p-4 border-t border-[#ccc]">
                <div className="flex gap-2 justify-between items-center">
                  <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <ToggleLeft
                    size={24}
                    strokeWidth={1.8}
                    cursor={"pointer"}
                    color="red"
                  />
                </div>
              </td>
            </tr>

            <tr>
              <td className="p-4 font-semibold border-t border-[#ccc]">
                Beatriz Costa
              </td>
              <td className="p-4 border-t border-[#ccc]">
                beatriz.costa@example.com
              </td>
              <td className="p-4 border-t border-[#ccc]">
                <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#6cd693] text-sm font-semibold">
                  Ativo
                </span>
              </td>
              <td className="p-4 border-t border-[#ccc]">Usuário</td>
              <td className="p-4 border-t border-[#ccc]">
                <div className="flex gap-2 justify-between items-center">
                  <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
                  <ToggleRight
                    size={24}
                    strokeWidth={1.8}
                    cursor={"pointer"}
                    color="green"
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
