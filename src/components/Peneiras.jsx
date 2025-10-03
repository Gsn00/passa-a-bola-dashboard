import {
  ChartPie,
  CircleCheck,
  CircleX,
  Eye,
  Pencil,
  ToggleRight,
  UserCheck,
  Users,
} from "lucide-react";
import SearchBar from "./SearchBar";
import Button from "./Button";
import TransparentButton from "./TransparentButton";
import PerguntasFrequentes from "./PerguntasFrequentes";

export default function Peneiras() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Gerenciar Peneiras
        </h1>

        <div className="flex flex-col md:flex-row gap-5">
          <TransparentButton>
            <Pencil /> Editar Formulário
          </TransparentButton>
          <Button>
            <ToggleRight /> Ativar/Desativar Inscrições
          </Button>
        </div>
      </div>

      <div className="flex flex-col 2xl:flex-row gap-10">
        <div className="flex flex-col gap-5 2xl:w-2/3">
          <SearchBar placeholder="Buscar inscritas por nome, posição..." />

          <div className="flex flex-col md:flex-row gap-2 border border-[#ccc] rounded-lg p-4">
            <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold text-[#690a6c] bg-[#e1cee2]">
              Todas
            </button>
            <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold">
              Aprovadas
            </button>
            <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold">
              Pendentes
            </button>
            <button className="py-2 px-4 rounded-lg cursor-pointer font-semibold">
              Recusadas
            </button>
          </div>

          <div className="hidden md:block border border-[#ccc] rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="text-left bg-[#e9e9e9] text-[#656565]">
                  <th className="px-4 py-3 rounded-tl-lg">NOME</th>
                  <th className="px-4 py-3">IDADE</th>
                  <th className="px-4 py-3">POSIÇÃO</th>
                  <th className="px-4 py-3">STATUS</th>
                  <th className="px-4 py-3 rounded-tr-lg text-right">AÇÕES</th>
                </tr>
              </thead>

              <tbody className="text-[#555555]">
                <tr>
                  <td className="p-4 font-semibold border-t border-[#ccc]">
                    Ana Silva
                  </td>
                  <td className="p-4 border-t border-[#ccc]">18</td>
                  <td className="p-4 border-t border-[#ccc]">Atacante</td>
                  <td className="p-4 border-t border-[#ccc]">
                    <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#54d081] text-sm font-semibold">
                      Aprovada
                    </span>
                  </td>
                  <td className="p-4 border-t border-[#ccc]">
                    <div className="flex justify-between">
                      <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                      <CircleCheck
                        size={20}
                        strokeWidth={1.8}
                        cursor={"pointer"}
                        color="green"
                      />
                      <CircleX
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
                    Juliana Costa
                  </td>
                  <td className="p-4 border-t border-[#ccc]">20</td>
                  <td className="p-4 border-t border-[#ccc]">Meio-campo</td>
                  <td className="p-4 border-t border-[#ccc]">
                    <span className="py-1 px-4 rounded-full bg-[#f6efde] text-[#eec64e] text-sm font-semibold">
                      Pendente
                    </span>
                  </td>
                  <td className="p-4 border-t border-[#ccc]">
                    <div className="flex justify-between">
                      <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                      <CircleCheck
                        size={20}
                        strokeWidth={1.8}
                        cursor={"pointer"}
                        color="green"
                      />
                      <CircleX
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
                    Carla Martins
                  </td>
                  <td className="p-4 border-t border-[#ccc]">21</td>
                  <td className="p-4 border-t border-[#ccc]">Defensora</td>
                  <td className="p-4 border-t border-[#ccc]">
                    <span className="py-1 px-4 rounded-full bg-[#f6e4e4] text-[#ef4d4d] text-sm font-semibold">
                      Recusada
                    </span>
                  </td>
                  <td className="p-4 border-t border-[#ccc]">
                    <div className="flex justify-between">
                      <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                      <CircleCheck
                        size={20}
                        strokeWidth={1.8}
                        cursor={"pointer"}
                        color="green"
                      />
                      <CircleX
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
                    Fernanda Lima
                  </td>
                  <td className="p-4 border-t border-[#ccc]">19</td>
                  <td className="p-4 border-t border-[#ccc]">Goleira</td>
                  <td className="p-4 border-t border-[#ccc]">
                    <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#54d081] text-sm font-semibold">
                      Aprovada
                    </span>
                  </td>
                  <td className="p-4 border-t border-[#ccc]">
                    <div className="flex justify-between">
                      <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                      <CircleCheck
                        size={20}
                        strokeWidth={1.8}
                        cursor={"pointer"}
                        color="green"
                      />
                      <CircleX
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

          <div className="flex md:hidden flex-col gap-5">
            <div className="w-full flex flex-col gap-3 rounded-lg bg-white shadow-lg p-6 text-sm">
              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">NOME</h3>
                <p className="text-right">Ana Silva</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">IDADE</h3>
                <p className="text-right">18</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">POSIÇÃO</h3>
                <p className="text-right">Atacante</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">STATUS</h3>
                <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#54d081] text-sm font-semibold">
                  Aprovada
                </span>
              </div>

              <div className="flex justify-center gap-8 pt-8">
                <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                <CircleCheck
                  size={20}
                  strokeWidth={1.8}
                  cursor={"pointer"}
                  color="green"
                />
                <CircleX
                  size={20}
                  strokeWidth={1.8}
                  cursor={"pointer"}
                  color="red"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 rounded-lg bg-white shadow-lg p-6 text-sm">
              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">NOME</h3>
                <p className="text-right">Juliana Costa</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">IDADE</h3>
                <p className="text-right">20</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">POSIÇÃO</h3>
                <p className="text-right">Meio-campo</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">STATUS</h3>
                <span className="py-1 px-4 rounded-full bg-[#f6efde] text-[#eec64e] text-sm font-semibold">
                  Pendente
                </span>
              </div>

              <div className="flex justify-center gap-8 pt-8">
                <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                <CircleCheck
                  size={20}
                  strokeWidth={1.8}
                  cursor={"pointer"}
                  color="green"
                />
                <CircleX
                  size={20}
                  strokeWidth={1.8}
                  cursor={"pointer"}
                  color="red"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 rounded-lg bg-white shadow-lg p-6 text-sm">
              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">NOME</h3>
                <p className="text-right">Carla Martins</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">IDADE</h3>
                <p className="text-right">21</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">POSIÇÃO</h3>
                <p className="text-right">Defensora</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">STATUS</h3>
                <span className="py-1 px-4 rounded-full bg-[#f6e4e4] text-[#ef4d4d] text-sm font-semibold">
                  Recusada
                </span>
              </div>

              <div className="flex justify-center gap-8 pt-8">
                <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                <CircleCheck
                  size={20}
                  strokeWidth={1.8}
                  cursor={"pointer"}
                  color="green"
                />
                <CircleX
                  size={20}
                  strokeWidth={1.8}
                  cursor={"pointer"}
                  color="red"
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 rounded-lg bg-white shadow-lg p-6 text-sm">
              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">NOME</h3>
                <p className="text-right">Fernanda Lima</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">IDADE</h3>
                <p className="text-right">19</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">POSIÇÃO</h3>
                <p className="text-right">Goleira</p>
              </div>

              <div className="flex justify-between">
                <h3 className="pr-10 font-semibold">STATUS</h3>
                <span className="py-1 px-4 rounded-full bg-[#e1f1e7] text-[#54d081] text-sm font-semibold">
                  Aprovada
                </span>
              </div>

              <div className="flex justify-center gap-8 pt-8">
                <Eye size={20} strokeWidth={1.8} cursor={"pointer"} />
                <CircleCheck
                  size={20}
                  strokeWidth={1.8}
                  cursor={"pointer"}
                  color="green"
                />
                <CircleX
                  size={20}
                  strokeWidth={1.8}
                  cursor={"pointer"}
                  color="red"
                />
              </div>
            </div>
          </div>
        </div>
        {/*---------------------------------------------------------------------------------*/}
        <div className="flex flex-col gap-5 2xl:w-1/3 p-7 rounded-lg border border-[#ccc]">
          <h2 className="text-2xl font-semibold">Relatórios e Métricas</h2>

          <div className="bg-[#ebe9e9] p-5 rounded-lg flex justify-between">
            <div>
              <p className="text-[#555555]">Total de Inscritas</p>
              <h1 className="font-semibold text-3xl">125</h1>
            </div>
            <span className="p-5 rounded-full bg-[#e1cee2] text-[#7f1b8b]">
              <Users />
            </span>
          </div>

          <div className="bg-[#ebe9e9] p-5 rounded-lg flex justify-between">
            <div>
              <p className="text-[#555555]">Aprovadas</p>
              <h1 className="font-semibold text-3xl text-[#2fc767]">48</h1>
            </div>
            <span className="p-5 rounded-full bg-[#d6e5db] text-[#2fc767]">
              <UserCheck />
            </span>
          </div>

          <div className="bg-[#ebe9e9] p-5 rounded-lg flex justify-between">
            <div>
              <p className="text-[#555555]">Taxa de Aprovação</p>
              <h1 className="font-semibold text-3xl text-[#3e84f6]">38.4%</h1>
            </div>
            <span className="p-5 rounded-full bg-[#d9deea] text-[#3e84f6]">
              <ChartPie />
            </span>
          </div>
        </div>
      </div>

      <PerguntasFrequentes />
    </section>
  );
}
