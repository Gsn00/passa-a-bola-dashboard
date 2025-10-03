import { Menu, Pen, Plus, Save, Trash, Trash2 } from "lucide-react";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";

export default function PerguntasFrequentes(props) {
  return (
    <div
      className={`flex flex-col h-fit gap-5 p-7 rounded-lg border border-[#ccc] ${props.className}`}
    >
      <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
        <h2 className="text-2xl font-semibold">Perguntas Frequentes (FAQ)</h2>
        <Button>
          <Plus />
          Adicionar Pergunta
        </Button>
      </div>

      <div className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md">
        <div className="flex flex-col-reverse md:flex-row gap-5 items-center">
          <Input disabled type="text" value="Título da pergunta 01" />
          <div className="flex gap-5">
            <Pen cursor="pointer" />
            <Trash2 color="red" cursor="pointer" />
            <Menu cursor="grab" />
          </div>
        </div>
        <Textarea
          disabled
          defaultValue="Resposta para a pergunta 01..."
        ></Textarea>
      </div>

      <div className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md">
        <div className="flex flex-col-reverse md:flex-row gap-5 items-center">
          <Input disabled type="text" value="Título da pergunta 02" />
          <div className="flex gap-5">
            <Pen cursor="pointer" />
            <Trash2 color="red" cursor="pointer" />
            <Menu cursor="grab" />
          </div>
        </div>
        <Textarea disabled value="Resposta para a pergunta 02..."></Textarea>
      </div>
      <Button className="ml-auto">
        <Save /> Salvar Alterações (FAQ)
      </Button>
    </div>
  );
}
