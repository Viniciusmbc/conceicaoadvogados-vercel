import CardsHome from "~/components/Cards/CardsAtuacao";
import { cards } from "~/components/utils/atuacao";

export default function AreasDeAtuacao() {
  return (
    <section className=" mx-auto flex w-screen max-w-7xl flex-col flex-wrap items-center justify-center py-11">
      <h1 className=" mb-10 text-center text-4xl text-brown">
        Áreas de Atuação
      </h1>

      <div className=" grid grid-flow-row grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 md:gap-6">
        {cards.map(({ icon, titulo, descricao }, index) => (
          <CardsHome
            key={index}
            icon={icon}
            titulo={titulo}
            descricao={descricao}
          />
        ))}
      </div>
    </section>
  );
}
