import { Menu, Pen, Plus, Trash, Trash2 } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

export default function PerguntasFrequentes(props) {
  return (
    <div
      className={`flex flex-col h-fit gap-5 p-7 rounded-lg border border-[#ccc] ${props.className}`}
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">Perguntas Frequentes (FAQ)</h2>
        <Button>
          <Plus />
          Adicionar Pergunta
        </Button>
      </div>

      <div className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md">
        <div className="flex gap-5 items-center">
          <Input disabled type="text" value="Título da pertunta 01..?" />
          <Pen cursor="pointer" />
          <Trash2 color="red" cursor="pointer" />
          <Menu cursor="grab" />
        </div>
        <Textarea disabled>Resposta para a pergunta 01...</Textarea>
      </div>

      <div className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md">
        <div className="flex gap-5 items-center">
          <Input disabled type="text" value="Título da pertunta 02..?" />
          <Pen cursor="pointer" />
          <Trash2 color="red" cursor="pointer" />
          <Menu cursor="grab" />
        </div>
        <Textarea disabled>Resposta para a pergunta 02...</Textarea>
      </div>
      <Button className="ml-auto">Salvar Alterações (FAQ)</Button>
    </div>
  );
}
