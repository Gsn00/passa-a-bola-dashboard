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
          <Input disabled type="text" value="Quem pode inscrever um time?" />
          <Pen cursor="pointer" />
          <Trash2 cursor="pointer" />
          <Menu cursor="grab" />
        </div>
        <Textarea disabled>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          hic laboriosam maxime deleniti ipsa quia deserunt fugit. Esse numquam
          est impedit nesciunt eum, debitis aliquam nisi. Distinctio vitae
          officia repellat?
        </Textarea>
      </div>

      <div className="flex flex-col gap-5 bg-white p-5 rounded-lg shadow-md">
        <div className="flex gap-5 items-center">
          <Input
            disabled
            type="text"
            value="Qual o valor da inscrição por time e o que está incluso?"
          />
          <Pen cursor="pointer" />
          <Trash2 cursor="pointer" />
          <Menu cursor="grab" />
        </div>
        <Textarea disabled>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          hic laboriosam maxime deleniti ipsa quia deserunt fugit. Esse numquam
          est impedit nesciunt eum, debitis aliquam nisi. Distinctio vitae
          officia repellat?
        </Textarea>
      </div>
      <Button className="ml-auto">Salvar Alterações (FAQ)</Button>
    </div>
  );
}
