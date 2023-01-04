import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { expandMoreIcon } from "~/components/common/Icons";
import { getSeo } from "~/components/utils/seo";

let [seoMeta, seoLinks] = getSeo({
  title: "Consulte seu Processo",
  description:
    "Consulte seu Processo nos Principais Tribunais do Rio Grande do Sul: TJ/RS, TRT 4 E TRF 4.",
});

export const meta: MetaFunction = () => ({
  ...seoMeta,
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function ConsulteSeuProcesso() {
  const [isOpenTj, setIsOpenTj] = useState(false);
  const [isOpenTRT, setIsOpenTRT] = useState(false);

  return (
    <section className="mx-auto flex h-screen py-6 px-6  max-w-screen-xl  flex-col items-center">
      <h1 className=" flex mt-24 text-xl md:text-center ">
        {" "}
        Para consultar seu processo, basta copiar e colar o número do processo
        fornecido pelo seu advogado em um dos links abaixo!
      </h1>

      <div className=" my-6 ">
        <p className=" my-5 text-lg">
          Acesso ao sites dos Principais Tribunais do Rio Grande do Sul:
        </p>
        <ul className=" px-3  space-y-4 text-brown underline underline-offset-1">
          <li className=" hover:text-gray">
            <button
              aria-label="Clicar para abrir o site do Tribunal de Justiça do Estado do Rio Grande do Sul"
              className=" flex justify-center items-center"
              onClick={() => setIsOpenTj(!isOpenTj)}
            >
              Tribunal de Justiça do Rio Grande do Sul (tjrs) (Justiça Estadual){" "}
              <span>{expandMoreIcon}</span>
            </button>
            {isOpenTj && (
              <iframe
                title="Site para Consulta Processual do Tribunal de Justiça do Estado do Rio Grande do Sul"
                src="https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index"
                width={500}
                height={400}
              >
                Tribunal de Justiça do Rio Grande do Sul (tjrs) (Justiça
                Estadual)
              </iframe>
            )}
          </li>
          <li className=" hover:text-gray">
            <button
              aria-label="Clicar para abrir o site do Tribunal de Justiça do Estado do Rio Grande do Sul"
              className=" flex justify-center items-center"
              onClick={() => setIsOpenTRT(!isOpenTRT)}
            >
              TRT 4 (Justiça do Trabalho)
              <span>{expandMoreIcon}</span>
            </button>
            {isOpenTRT && (
              <iframe
                title="Site para Consulta Processual do TRT 4 do Estado do Rio Grande do Sul"
                width={500}
                height={400}
                src="https://www.trt4.jus.br/portais/trt4/consulta-rapida"
              >
                TRT 4 (Justiça do Trabalho)
              </iframe>
            )}
          </li>
          <li className=" hover:text-gray">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://consulta.trf4.jus.br/trf4/controlador.php?acao=consulta_processual_pesquisa"
            >
              TRF 4 (Justiça Federal)
            </a>
          </li>
        </ul>
      </div>
      <p className=" mb-3 text-lg">Ficou com alguma dúvida? </p>
      <p className=" mb-3 text-lg">
        Entre em contato com um de nossos advogados pelo nosso Whatsapp!{" "}
      </p>
      <p className=" text-lg">
        Eles irão te <span className=" text-brown my-1">auxiliar</span> e{" "}
        <span className=" text-brown my-1">esclarecer</span> sobre qualquer
        dúvida de seu processo!
      </p>
    </section>
  );
}
