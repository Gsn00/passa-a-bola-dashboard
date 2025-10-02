import { Eye, Image, Save } from "lucide-react";
import Textarea from "./Textarea";
import TransparentButton from "./TransparentButton";
import Button from "./Button";

export default function Sobre() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Gerenciar Sobre</h1>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-5 w-full">
          <div className="w-full">
            <p>Primeiro Parágrafo</p>
            <Textarea
              className="min-h-[150px] w-full"
              value="O Passa a Bola nasceu com a missão de transformar o cenário do futebol feminino no Brasil, oferecendo visibilidade, oportunidades e apoio a mulheres que vivem a paixão pelo esporte. Mais do que um projeto, somos uma comunidade que acredita no poder do futebol como ferramenta de inclusão, empoderamento e transformação social."
            />
          </div>
          <div className="w-full">
            <p>Segundo Parágrafo</p>
            <Textarea
              className="min-h-[150px] w-full"
              value="Nosso objetivo é criar pontes entre atletas, treinadoras, torcedoras e profissionais do meio esportivo, promovendo o crescimento e a valorização do futebol feminino em todas as suas dimensões. Atuamos com foco na informação, na formação e no incentivo à prática esportiva, sempre colocando a mulher como protagonista dentro e fora das quatro linhas."
            />
          </div>
        </div>

        <TransparentButton className="mr-auto">
          <Image /> Selecionar Imagem
        </TransparentButton>

        <div className="flex gap-5 w-full">
          <div className="w-full">
            <p>Terceiro Parágrafo</p>
            <Textarea
              className="min-h-[150px] w-full"
              value="Por meio de conteúdo digital, encontros presenciais, peneiras e parcerias, buscamos ampliar o acesso das mulheres ao futebol de maneira democrática e acolhedora. O Passa a Bola é também um espaço para compartilhar histórias inspiradoras, conquistas, desafios e iniciativas que constroem um futuro mais justo e diverso para o esporte."
            />
          </div>

          <div className="w-full">
            <p>Quarto Parágrafo</p>
            <Textarea
              className="min-h-[150px] w-full"
              value="Se você joga, treina, torce ou apenas acredita no potencial transformador do futebol, o Passa a Bola é para você. Junte-se a nós nessa rede que não para de crescer e ajude a dar o próximo passo rumo a um futebol mais feminino, mais forte e mais livre."
            />
          </div>
        </div>

        <div className="flex gap-5 ml-auto">
          <TransparentButton>
            <Eye /> Pré-visualizar
          </TransparentButton>
          <Button>
            <Save /> Salvar Alterações
          </Button>
        </div>
      </div>
    </section>
  );
}
