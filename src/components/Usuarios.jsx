import { Eye, Pencil, Plus, ToggleLeft, ToggleRight } from "lucide-react";
import Button from "./Button";
import SearchBar from "./SearchBar";

export default function Usuarios() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <h1 className="text-4xl font-semibold">Gerenciar Encontros</h1>

        <Button>
          <Plus /> Criar Novo Usuário
        </Button>
      </div>

      <SearchBar placeholder="Buscar usuário por nome, e-mail..." />

      <div className="flex flex-col md:flex-row gap-2 border border-[#ccc] rounded-lg p-4">
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

      <div className="hidden md:block border border-[#ccc] rounded-lg">
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

      <div className="flex md:hidden flex-col gap-5 border border-[#ccc] rounded-lg p-4">
        <div className="w-full flex flex-col gap-3 rounded-lg bg-white shadow-lg p-6 text-sm">
          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">NOME</h3>
            <p className="text-right">Daniela Alves</p>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">EMAIL</h3>
            <p className="text-right">daniela.alves@example.com</p>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">STATUS</h3>
            <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#54d081] text-sm font-semibold">
              Ativo
            </span>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">FUNÇÃO</h3>
            <p className="text-right">Usuário</p>
          </div>

          <div className="flex justify-center gap-8 pt-8">
            <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
            <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
            <ToggleRight
              size={24}
              strokeWidth={1.8}
              cursor={"pointer"}
              color="green"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 rounded-lg bg-white shadow-lg p-6 text-sm">
          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">NOME</h3>
            <p className="text-right">Ana Silva</p>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">IDADE</h3>
            <p className="text-right">ana.silva@example.com</p>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">STATUS</h3>
            <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#54d081] text-sm font-semibold">
              Ativo
            </span>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">POSIÇÃO</h3>
            <p className="text-right">Administrador</p>
          </div>

          <div className="flex justify-center gap-8 pt-8">
            <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
            <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
            <ToggleRight
              size={24}
              strokeWidth={1.8}
              cursor={"pointer"}
              color="green"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 rounded-lg bg-white shadow-lg p-6 text-sm">
          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">NOME</h3>
            <p className="text-right">Carla Mendes</p>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">IDADE</h3>
            <p className="text-right">carla.mendes@example.com</p>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">STATUS</h3>
            <span className="py-1 px-4 rounded-full bg-[#f6e4e4] text-[#ef4d4d] text-sm font-semibold">
              Inativo
            </span>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">POSIÇÃO</h3>
            <p className="text-right">Usuário</p>
          </div>

          <div className="flex justify-center gap-8 pt-8">
            <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
            <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
            <ToggleRight
              size={24}
              strokeWidth={1.8}
              cursor={"pointer"}
              color="green"
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 rounded-lg bg-white shadow-lg p-6 text-sm">
          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">NOME</h3>
            <p className="text-right">Beatriz Costa</p>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">IDADE</h3>
            <p className="text-right">beatriz.costa@example.com</p>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">STATUS</h3>
            <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#54d081] text-sm font-semibold">
              Ativo
            </span>
          </div>

          <div className="flex justify-between">
            <h3 className="pr-10 font-semibold">POSIÇÃO</h3>
            <p className="text-right">Usuário</p>
          </div>

          <div className="flex justify-center gap-8 pt-8">
            <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
            <Pencil size={20} strokeWidth={1.8} cursor={"pointer"} />
            <ToggleRight
              size={24}
              strokeWidth={1.8}
              cursor={"pointer"}
              color="green"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
