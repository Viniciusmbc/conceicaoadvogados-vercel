import type { MetaFunction } from "@remix-run/node"; // or cloudflare/deno
import { useState } from "react";
import { Link } from "react-router-dom";
import { getSeo } from "~/components/utils/seo";

let [seoMeta, seoLinks] = getSeo({
  title: "Blog do Conceição Advogados",
  description:
    "Confira os artigos de nossa equipe de advogados sobre assuntos jurídicos relevantes, como auxílio-acidente e revisão de juros abusivos.",
});

export const meta: MetaFunction = () => ({
  ...seoMeta,
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function Blog() {
  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState("Direito Civil");

  return (
    <div className="mx-auto flex w-screen gap-x-7 bg-white">
      <aside className=" mt-16 ml-auto mr-16 max-w-screen-xl flex-col items-center px-4 hidden md:flex  ">
        <ul className=" mx-auto flex-col flex justify-center gap-y-3">
          <li className=" mx-auto text-2xl">Últimas Postagens</li>
          <li>
            <Link
              to="/blog/revisional-de-juros-abusivos"
              className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
            >
              Revisional de Juros Abusivos{" "}
            </Link>{" "}
          </li>
          <li>
            <Link
              to={"/blog/auxilio-acidente-e-estabilidade"}
              className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
            >
              Auxilio-Acidente e Estabilidade{" "}
            </Link>{" "}
          </li>
          <li>
            <Link
              to={"/blog/lei-de-stalking"}
              className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
            >
              Lei de stalking
            </Link>{" "}
          </li>
          <li>
            <Link
              to={"/blog/holding-familiar"}
              className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
            >
              Holding familiar
            </Link>{" "}
          </li>
          <li className=" max-w-xs">
            <Link
              to={"/blog/busca-e-apreensao-de-veiculos"}
              className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
            >
              Tudo o que você precisa saber sobre juros abusivos e busca e
              apreensão de veículos financiados
            </Link>{" "}
          </li>
        </ul>
      </aside>
      <section className=" mr-auto flex flex-wrap max-w-7xl flex-col gap-4 min-h-screen">
        <h1 className=" mt-4 text-center pt-14  text-4xl text-brown mx-auto">
          Nossos Artigos
        </h1>

        <div>
          <ul className=" mb-7 flex-wrap text-lg   justify-center gap-x-10 hidden md:flex">
            <li>
              <button
                onClick={() => setMenu("Direito Penal")}
                className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                aria-label="clique para ver assuntos sobre Direito Penal"
              >
                Direito Penal
              </button>
            </li>
            <li>
              <button
                onClick={() => setMenu("Direito Empresarial")}
                className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                aria-label="clique para ver assuntos sobre Direito Empresarial"
              >
                Direito Empresarial
              </button>
            </li>
            <li>
              <button
                onClick={() => setMenu("Direito do Consumidor")}
                className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                aria-label="clique para ver assuntos sobre Direito Consumidor"
              >
                Direito do Consumidor
              </button>
            </li>
            <li>
              <button
                onClick={() => setMenu("Direito Previdenciário")}
                className={` hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10 ${
                  menu === "Direito Previdenciário" &&
                  " text-gray underline underline-offset-2 bg-deer"
                }`}
                aria-label="clique para ver assuntos sobre Direito Previdenciario"
              >
                Direito Previdenciário
              </button>
            </li>
            <li>
              <button
                onClick={() => setMenu("Direito Civil")}
                className={` hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10 ${
                  menu === "Direito Civil" &&
                  " text-gray underline underline-offset-2 bg-deer"
                }`}
                aria-label="clique para ver assuntos sobre Direito Civil"
              >
                Direito Civil
              </button>
            </li>
          </ul>
          <div className=" bg-gray/10 my-4 h-12 flex  justify-center items-center md:hidden">
            <button
              className=" group ml-auto mr-8  flex h-10 w-12 flex-col items-center justify-center rounded border-2 border-black md:hidden "
              aria-label="abre o menu de navegação"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${"h-1 w-6 my-[2px]  rounded-full bg-black transition ease transform duration-300"} ${
                  isOpen
                    ? "translate-y-3 rotate-45  group-hover:opacity-100"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${"h-1 w-6 my-1  rounded-full bg-black transition ease transform duration-300"} ${
                  isOpen ? "opacity-0" : "opacity-70 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${"h-1 w-6 my-[2px] rounded-full bg-black transition ease transform duration-300"} ${
                  isOpen
                    ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              />
            </button>
            {isOpen ? (
              <ul className="  p-4 top-[38.5%] text-center mb-7 flex-wrap text-lg absolute  flex-col  justify-center gap-x-10 flex bg-grulo left-1/2">
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito Penal"
                  >
                    Direito Penal
                  </button>
                </li>
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito de Familia"
                  >
                    Direito de Familía
                  </button>
                </li>
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito Consumidor"
                    onClick={() => setMenu("Direito Empresarial")}
                  >
                    Direito Empresarial
                  </button>
                </li>
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito Previdenciario"
                    onClick={() => setMenu("Direito Previdenciário")}
                  >
                    Direito Previdenciário
                  </button>
                </li>
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito Previdenciario"
                    onClick={() => setMenu("Direito Civil")}
                  >
                    Direito Civil
                  </button>
                </li>
              </ul>
            ) : null}
          </div>

          <section className=" flex flex-col justify-center items-center mx-auto">
            {menu === "Direito Civil" && (
              <>
                <article>
                  <div className=" mb-10 flex flex-wrap gap-x-10 justify-center px-10 md:px-0">
                    <img
                      src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,w_440/v1670850655/revisionalCapa.webp"
                      width={300}
                      height={300}
                      alt="Imagem de Revisional de Juros Abusivos"
                    />
                    <div>
                      <h2 className=" text-lg font-bold">
                        <Link
                          className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
                          to="/blog/revisional-de-juros-abusivos"
                        >
                          Revisional de Juros Abusivos
                        </Link>
                      </h2>
                      <p className=" text-sm mb-2 text-grulo">
                        Postado em 12/12/22
                      </p>
                      <p className=" max-w-lg">
                        Você esta financiando um imóvel ou um veículo e percebeu
                        que o valor dos juros cobrados nas prestações são muito
                        altos? O banco esta cobrando juros abusivos nas faturas
                        atrasadas do seu cartão de crédito? Você sabia que é
                        direito seu pedir revisão dos juros e, também, o
                        ressarcimento por cobranças indevidas? Nesse artigo,
                        você vai entender o que é a ação revisional, em quais
                        casos ela se aplica e como solicitar. Confira!
                      </p>
                    </div>
                  </div>
                </article>
                <article>
                  <div className=" mb-10 flex flex-row-reverse flex-wrap gap-x-10 justify-center px-10 md:px-0">
                    <img
                      src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,w_440/v1670850655/revisionalCapa.webp"
                      width={300}
                      height={300}
                      alt="Imagem ilustrando uma busca e apreensão de veículo"
                    />
                    <div>
                      <h2 className=" text-lg font-bold max-w-md">
                        <Link
                          className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
                          to={"/blog/busca-e-apreensao-de-veiculos"}
                        >
                          Tudo o que você precisa saber sobre juros abusivos e
                          busca e apreensão de veículos financiados
                        </Link>
                      </h2>
                      <p className=" text-sm mb-2 text-grulo">
                        Postado em 24/04/2023
                      </p>
                      <p className=" max-w-lg">
                        Preparamos um guia sobre juros abusivos e busca e
                        apreensão de veículos financiados. Se você está
                        enfrentando dificuldades para pagar as parcelas do seu
                        financiamento de veículo, ou se o seu carro já foi alvo
                        de uma ação de busca e apreensão, este texto é para
                        você.
                      </p>
                    </div>
                  </div>
                </article>
              </>
            )}
            {menu === "Direito Previdenciário" && (
              <article>
                <div className=" mb-10 flex flex-wrap gap-x-10 justify-center px-10 md:px-0">
                  <img
                    src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,q_auto:eco,w_440/v1672239768/people-with-home-safety-concept_zhvaj4.webp"
                    width={300}
                    height={300}
                    alt="Imagem ilustrando um acidente de trabalho"
                  />
                  <div>
                    <h2 className=" text-lg font-bold">
                      <Link
                        className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
                        to="/blog/auxilio-acidente-e-estabilidade"
                      >
                        Auxílio Acidente E Estabilidade
                      </Link>
                    </h2>
                    <p className=" text-sm mb-2 text-grulo">
                      Postado em 28/12/22
                    </p>
                    <p className=" max-w-lg">
                      O auxílio-acidente é um benefício de natureza
                      indenizatória, concedido pelo INSS aos trabalhadores que
                      sofrerem acidentes em que as consequências resultem em
                      sequelas permanentes e, ainda, reduzam a capacidade de
                      exercer a função desempenhada pelo trabalhador. Nesse
                      artigo, você vai entender o que é o auxilio-acidente, em
                      quais casos se aplica e como requerer junto ao INSS.
                      Confira!
                    </p>
                  </div>
                </div>
              </article>
            )}
            {menu === "Direito Penal" && (
              <article>
                <div className=" mb-10 flex flex-wrap gap-x-10 justify-center px-10 md:px-0">
                  <img
                    src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,w_440/v1677285480/lei-de-stalking-imagem.webp"
                    width={300}
                    height={300}
                    alt="Imagem Ilustrando a Lei de Stalking"
                  />
                  <div>
                    <h2 className=" text-lg font-bold">
                      <Link
                        className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
                        to="/blog/lei-de-stalking"
                      >
                        Lei de stalking
                      </Link>
                    </h2>
                    <p className=" text-sm mb-2 text-grulo">
                      Postado em 24/02/23
                    </p>
                    <p className=" max-w-lg">
                      A Lei de Stalking, também conhecida como Lei nº
                      14.132/2021, é uma legislação brasileira que visa proteger
                      as vítimas de perseguição obsessiva e intimidatória,
                      conhecida como stalking. Em detrimento da atualidade do
                      assunto, ainda existem muitas dúvidas a respeito dessa lei
                      e de seus desdobramentos. A seguir, apresentamos
                      detalhadamente os seus principais aspectos.
                    </p>
                  </div>
                </div>
              </article>
            )}
            {menu === "Direito Empresarial" && (
              <article>
                <div className=" mb-10 flex flex-wrap gap-x-10 justify-center px-10 md:px-0">
                  <img
                    src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,w_440/v1677285480/lei-de-stalking-imagem.webp"
                    width={300}
                    height={300}
                    alt="Imagem de Revisional de Juros Abusivos"
                  />
                  <div>
                    <h2 className=" text-lg font-bold">
                      <Link
                        className=" text-lg font-bold mt-2 underline text-brown hover:text-gray hover:no-underline"
                        to="/blog/holding-familiar"
                      >
                        Holding familiar: planejamento e blindagem do
                        patrimônio.
                      </Link>
                    </h2>
                    <p className=" text-sm mb-2 text-grulo">
                      Postado em 26/04/2023
                    </p>
                    <p className=" max-w-lg">
                      A holding familiar é uma estratégia de planejamento e
                      proteção patrimonial bastante utilizada por famílias
                      empresárias no Brasil. Para te ajudar a entender melhor o
                      que é a holding familiar e como ela pode ser utilizada no
                      planejamento e blindagem do patrimônio, preparamos um
                      artigo com perguntas e respostas sobre o assunto. Confira!
                    </p>
                  </div>
                </div>
              </article>
            )}
          </section>
        </div>
      </section>
    </div>
  );
}
