import { useState } from "react";
import { Link } from "react-router-dom";
import { getSeo } from "~/components/utils/seo";
import type { MetaFunction } from "@remix-run/node"; // or cloudflare/deno

let [seoMeta, seoLinks] = getSeo({
  title: "Blog do Conceição Advogados",
  description:
    "Aqui você confere as nossas postagens sobre diversas assuntos jurídicos relevantes.",
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
      <aside className=" mt-16 ml-auto mr-16 max-w-screen-xl flex-col items-center hidden md:flex  ">
        <ul className=" mx-auto flex-col flex justify-center">
          <li className=" mx-auto">Últimas Postagens</li>
          <li> </li>
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
                onClick={() => setMenu("Direito de Familía")}
                className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                aria-label="clique para ver assuntos sobre Direito de Familia"
              >
                Direito de Familía
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
                aria-label="clique para ver assuntos sobre Direito Previdenciario"
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
                  >
                    Direito do Consumidor
                  </button>
                </li>
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito Previdenciario"
                  >
                    Direito Previdenciário
                  </button>
                </li>
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito Previdenciario"
                  >
                    Direito Civil
                  </button>
                </li>
              </ul>
            ) : null}
          </div>

          <section className=" flex flex-col justify-center items-center mx-auto">
            {menu === "Direito Civil" && (
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
                        className=" text-lg font-bold mt-2 hover:underline hover:text-brown"
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
                      ressarcimento por cobranças indevidas? Nesse artigo, você
                      vai entender o que é a ação revisional, em quais casos ela
                      se aplica e como solicitar. Confira!
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
