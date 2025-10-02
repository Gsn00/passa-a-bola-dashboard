import Button from "./Button";
import TransparentButton from "./TransparentButton";
import Input from "./Input";
import Toggle from "./Toggle";
import { GitBranch, Save, Users, Wallpaper } from "lucide-react";
import PerguntasFrequentes from "./PerguntasFrequentes";

export default function Copa() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Gerenciar Copa</h1>

        <div className="flex items-center gap-5">
          <p>Ativar/Desativar Página da Copa</p>
          <Toggle />
        </div>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col gap-5 w-2/3 p-7 rounded-lg border border-[#ccc]">
          <h2 className="text-2xl font-semibold">
            Informações Gerais do Evento
          </h2>

          <Input
            title="Nome do Evento"
            type="text"
            placeholder="Digite o nome do evento..."
            value="Copa do Passa a Bola 2025"
          />

          <Input title="Data" type="date" value="2025-12-15" />

          <Input
            title="Local"
            type="text"
            placeholder="Digite o local do evento..."
            value="Estádio Municipal"
          />

          <Button className="ml-auto">
            <Save /> Salvar Alterações
          </Button>
        </div>

        <div className="flex flex-col gap-5 w-1/3 p-7 rounded-lg border border-[#ccc]">
          <h2 className="text-2xl font-semibold">Gerenciamento</h2>

          <TransparentButton className="w-full">
            <Users /> Gerenciar Equipes
          </TransparentButton>
          <Button className="w-full">
            <GitBranch /> Gerenciar Chaveamento
          </Button>
          <Button className="w-full">
            <Wallpaper /> Alterar Banner da Copa
          </Button>
        </div>
      </div>

      <PerguntasFrequentes />
    </section>
  );
}
