import { Plus } from "lucide-react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import CardHistoria from "./CardHistoria";

export default function Historia() {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Gerenciar História</h1>

        <Button>
          <Plus /> Criar Novo Card
        </Button>
      </div>

      <SearchBar placeholder="Buscar histórias por título, ano..." />

      <div className="grid grid-cols-2 gap-5">
        <CardHistoria
          href="/historia/historia01"
          src="/images/historia-01.png"
          alt=""
          year="1920"
          title="O começo"
          description="As primeiras referências de partidas de futebol disputadas por mulheres surgiram nos anos 20. Os registros de jornais mostram a prática, ainda de forma muito tímida, no Rio de Janeiro, São Paulo e Rio Grande do Norte."
        />
        <CardHistoria
          href="/historia/historia02"
          src="/images/historia-02.png"
          alt=""
          year="1941"
          title="A proibição"
          description="A primeira proibição ocorreu através de um processo de regulamentação do esporte no Brasil. Criou-se o CND (Conselho Nacional de Desportos). Na época, sob a alçada do Ministério da Educação."
        />
        <CardHistoria
          href="/historia/historia03"
          src="/images/historia-03.png"
          alt=""
          year="1979"
          title="Fim da proibição"
          description="Apenas no fim da década de 70 foi revogada a lei que proibia as mulheres de jogarem futebol. É o início de uma nova jornada para a modalidade entre as mulheres."
        />
        <CardHistoria
          href="/historia/historia04"
          src="/images/historia-04.png"
          alt=""
          year="1983"
          title="Regulamentação"
          description="Apenas em 1983 a modalidade foi regulamentada. Com isso, foi permitido que se pudesse competir, criar calendários, utilizar estádios, ensinar nas escolas. Clubes como o Radar e Saad surgem como pioneiros no profissionalismo. Eram alguns dos times competitivos da época."
        />
        <CardHistoria
          href="/historia/historia05"
          src="/images/historia-05.png"
          alt=""
          year="1988"
          title="Torneio experimental"
          description="Em 1988, a Fifa realizou, na China, um Mundial de caráter experimental. Em inglês, foi chamado de Women's Invitational Tournament. A seleção montada para a competição tinha como bases o Radar, do Rio, e o Juventus (SP) - que tinha talvez o time mais forte feminino do país naquele momento. Não houve nenhuma confecção especial de roupas para as jogadoras. Viajaram para o Mundial com as sobras das roupas dos homens."
        />
        <CardHistoria
          href="/historia/historia06"
          src="/images/historia-06.png"
          alt=""
          year="1991"
          title="Primeira Copa FIFA"
          description="É o ano da primeira Copa do Mundo Fifa de Futebol Feminino. A CBF assumiu o time oficialmente, mas o tratamento ainda era muito amador. O Brasil viajou com boa parte das atletas que disputaram o torneio experimental. Pretinha, ainda muito jovem, também fez parte da seleção comandada pelo técnico Fernando Pires."
        />
      </div>
    </section>
  );
}
