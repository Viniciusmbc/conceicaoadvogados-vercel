import type { MetaFunction } from "@remix-run/node";
import { agendaIcon, personIcon } from "~/components/common/Icons";
import { getSeo } from "~/components/utils/seo";

let [seoMeta, seoLinks] = getSeo({
  title: "Revisional de Juros Abusivos",
  description:
    "O banco está cobrando juros abusivos nas faturas atrasadas do seu cartão de crédito? Você sabia que é direito seu pedir revisão dos juros e,também, o ressarcimento por cobranças indevidas? Confira em nosso Artigo!",
});

export const meta: MetaFunction = () => ({
  ...seoMeta,
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function Artigos() {
  return (
    <article
      itemScope
      itemType="https://schema.org/Article"
      className="w-full px-7  max-w-screen-md mx-auto mt-14 md:px-0"
    >
      <h1
        itemProp="name"
        className="  text-center text-4xl font-bold text-brown mb-3"
      >
        Revisional de Juros Abusivos
      </h1>
      <p className=" text-gray mb-4 flex items-center justify-center ">
        <span itemProp="author" itemScope itemType="http://schema.org/Person">
          {personIcon}
        </span>
        Guilherme Batú <span className=" ml-2">{agendaIcon}</span> Dez 12, 2022{" "}
        <span className=" ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
            <path d="M12.5 27.417h9.875v-1.334H12.5Zm0-6.75h15v-1.334h-15Zm0-6.75h15v-1.375h-15ZM9.125 33.208q-.958 0-1.646-.687-.687-.688-.687-1.646V9.125q0-.958.687-1.646.688-.687 1.646-.687h21.75q.958 0 1.646.687.687.688.687 1.646v21.75q0 .958-.687 1.646-.688.687-1.646.687Zm.042-1.333h21.666q.417 0 .729-.313.313-.312.313-.729V9.167q0-.417-.313-.729-.312-.313-.729-.313H9.167q-.417 0-.729.313-.313.312-.313.729v21.666q0 .417.313.729.312.313.729.313ZM8.125 8.125V31.875 8.125Z" />
          </svg>
        </span>{" "}
        Direito Civil (Contratos)
      </p>
      <p className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg">
        Você esta financiando um imóvel ou um veículo e percebeu que o valor dos
        juros cobrados nas prestações são muito altos? O banco esta cobrando
        juros abusivos nas faturas atrasadas do seu cartão de crédito? Você
        sabia que é direito seu pedir revisão dos juros e, também, o
        ressarcimento por cobranças indevidas? Nesse artigo, você vai entender o
        que é a ação revisional, em quais casos ela se aplica e como solicitar.
        Confira!
      </p>
      <div className=" max-w-fit p-7 h-auto border border-brown">
        <nav>
          <ul>
            <li>Sumário</li>
            <li className=" text-brown   hover:text-gray">
              <a
                href="#o-que-e-uma-acao-revisional-de-juros"
                className=" hover:underline  hover:underline-offset-2"
              >
                1. O que é uma ação revisional de juros?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#o-que-sao-e-como-saber-se-estou-sofrendo-com-juros-abusivos"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                2. O que são e como saber se estou sofrendo com juros abusivos?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#o-que-acontece-se-forem-identificados-juros-abusivos"
                className=" hover:underline  hover:underline-offset-2"
              >
                3. O que acontece se forem identificados juros abusivos?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#acao-revisional-em-financiamento-de-imoveis"
                className="hover:underline  hover:underline-offset-2"
              >
                4. Ação revisional em financiamento de imóveis
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#acao-revisional-em-financiamento-de-veiculos"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                5. Ação revisional em financiamento de veículos
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#acao-revisional-dos-juros-no-cartao-de-credito"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                6. Ação revisional dos juros no cartão de crédito
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#assinei-o-contrato-ainda-posso-pedir-acao-revisional"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                7. Assinei o contrato, ainda posso pedir ação revisional?
              </a>
            </li>
            <li className=" text-brown hover:text-gray">
              <a
                href="#posso-parar-de-pagar-as-parcelas-quando-entra-com-a-acao"
                className=" hover:underline  hover:underline-offset-2"
              >
                8. Posso parar de pagar as parcelas quando entrar com a ação?
              </a>
            </li>
            <li className=" text-brown hover:text-gray">
              <a
                href="#o-que-preciso-para-solicitar-uma-acao-revisional-de-juros"
                className=" hover:underline  hover:underline-offset-2"
              >
                9. O que preciso para solicitar uma ação revisional de juros?
              </a>
            </li>
            <li className=" text-brown hover:text-gray">
              <a
                href="#quanto-tempo-demora-a-acao"
                className=" hover:underline  hover:underline-offset-2"
              >
                10. Quanto tempo demora a ação?
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h2 id="o-que-e-uma-acao-revisional-de-juros" className=" text-4xl my-7">
        1. O que é uma ação revisional de juros?
      </h2>
      <section itemProp="articleBody">
        <p
          className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg"
          id="#o-que-é-uma-ação-revisional-de-juros"
        >
          A ação revisional de juros constitui-se como um{" "}
          <strong>instrumento jurídico</strong>, cuja finalidade é apurar se o
          consumidor está{" "}
          <strong>
            pagando juros abusivos em financiamentos ou empréstimos
          </strong>
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed ">
          Dessa forma, quando são constatados os juros abusivos, existe a
          possibilidade de, juridicamente,{" "}
          <strong>reverter essa situação</strong> : revisão do contrato que você
          assinou e, também, ressarcimento por cobranças indevidas.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Nesse caso, se decidir recorrer à ação revisional de juros, você
          precisará de um <strong>advogado</strong>, uma vez que trata-se de uma
          <strong> ação jurídica.</strong>
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Para ilustrar, vamos supor que você fez um financiamento de imóvel,
          assinou o <strong>contrato</strong> e começou a pagar as prestações.
          Entretanto, após algum tempo, você encontra dificuldade para arcar com
          o pagamento das parcelas e percebe que o valor do seu financiamento,
          com os juros, soma um total muito maior do que o preço à vista do seu
          imóvel financiado. Nesse cenário, você poderia recorrer a uma ação
          revisional de juros e verificar se os juros do seu contrato são{" "}
          <strong>abusivos</strong>.
        </p>
        <h2
          id="o-que-sao-e-como-saber-se-estou-sofrendo-com-juros-abusivos"
          className=" text-4xl my-7"
        >
          2. O que são e como saber se estou sofrendo com juros abusivos?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Segundo entendimento do <strong>Superior Tribunal de Justiça</strong>{" "}
          (STJ), os juros podem ser considerados abusivos quando apresentam
          valores muito acima da média do mercado:
        </p>
        <blockquote
          className=" italic text-justify px-28 pb-5"
          cite="https://www.tjdft.jus.br/consultas/jurisprudencia/jurisprudencia-em-temas/jurisprudencia-em-detalhes/acao-revisional-de-contrato-bancario/juros-remuneratorios-superiores-a-12-ao-ano-2013-legalidade"
        >
          É admitida a revisão das taxas de juros remuneratórios em situações
          excepcionais, desde que caracterizada a relação de consumo e que a
          abusividade (capaz de colocar o consumidor em desvantagem exagerada
          (art. 51, § 1º, do CDC) fique cabalmente demonstrada, ante às
          peculiaridades do julgamento em concreto (REsp 1.061.530/RS, DJe
          10/03/2009 – Tema 27 e AgInt no AREsp 1539213/MS, DJe 24/11/2020).
        </blockquote>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Muitos contratos firmados no Brasil enquadram-se nos parâmetros das
          cláusulas abusivas que são prejudiciais aos contratantes, ou seja, o
          consumidor. Nesse sentido, estão englobados os juros abusivos, em que
          as taxas são consideradas{" "}
          <strong>
            {" "}
            extorisvas e cobradas acima de um valor máximo previsto pelo Banco
            Central.
          </strong>{" "}
          Em contratos firmados em financiamentos de automóveis, casas e bens,
          essas taxas podem acabar sendo camufladas pelas instituições
          financeiras.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Para saber se o seu contrato está inserido nesta prática, é{" "}
          <strong>
            possível calcular o valor efetivo que está sendo cobrado
          </strong>{" "}
          . Ou seja, com esse cálculo você consegue verificar o total que será
          pago ao final do financiamento e compará-lo ao valor que seria pago à
          vista. Dessa forma, você obterá o total dos juros que estão sendo
          cobrados. Para proceder a esse cálculo, existem calculadoras digitais,
          a exemplo da disponibilizada pelo Banco Central:
          <a
            className=" text-brown ml-1 hover:underline"
            href="https://www3.bcb.gov.br/CALCIDADAO/publico/exibirFormFinanciamentoPrestacoesFixas.do?method=exibirFormFinanciamentoPrestacoesFixas"
          >
            calculadora do cidadão.
          </a>{" "}
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          É importante ressaltar que, devido à complexidade do assunto, o ideal
          é consultar um advogado com conhecimento na área, pois ele será capaz
          de notar o que está certo e o que é abusivo no contrato.
        </p>
        <h2
          id="o-que-acontece-se-forem-identificados-juros-abusivos"
          className=" text-4xl my-7"
        >
          3. O que acontece se forem identificados juros abusivos?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          De acordo com o Código de Defesa do Consumidor (CDC), em seu art. 42:
        </p>
        <blockquote
          className=" italic text-justify px-28 pb-5"
          cite="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm#:~:text=Cobran%C3%A7a%20de%20D%C3%ADvidas-,Art.,Par%C3%A1grafo%20%C3%BAnico."
        >
          Art. 42. Na cobrança de débitos, o consumidor inadimplente não será
          exposto a ridículo, nem será submetido a qualquer tipo de
          constrangimento ou ameaça. <br></br> Parágrafo único. O consumidor
          cobrado em quantia indevida tem direito à repetição do indébito, por
          valor igual ao dobro do que pagou em excesso, acrescido de correção
          monetária e juros legais, salvo hipótese de engano justificável.
        </blockquote>
        <p className=" font-semibold text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Sendo assim, o juiz responsável pelo seu caso pode determinar que
          sejam devolvidos os valores em dobro a você. Isso só não acontece se
          esse juiz entender que existe um engano justificável pela instituição
          financiadora.
        </p>
        <h2
          id="acao-revisional-em-financiamento-de-imoveis"
          className=" text-4xl my-7"
        >
          4. Ação revisional em financiamento de imóveis
        </h2>
        <img
          className=" mx-auto"
          src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,q_auto:eco,w_700/v1670871635/financiamentoIm%C3%B3veisImagem.webp"
          width={700}
          height={482}
          alt="Imagem da Ação Revisional em Financiamento de imóveis"
        />
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Em uma ação de revisão em{" "}
          <strong>financiamentos imobiliários </strong>
          busca-se reduzir o preço das parcelas e, também, a devolução dos
          valores que já foram pagos. Diversos fatores podem ser analisados,
          desde os <strong> juros abusivos</strong> até{" "}
          <strong>venda casada</strong> e{" "}
          <strong>taxas de administração</strong>.
        </p>{" "}
        <h2
          id="acao-revisional-em-financiamento-de-veiculos"
          className=" text-4xl my-7"
        >
          5. Ação revisional em financiamento de veículos
        </h2>
        <img
          src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,q_auto:eco,w_700/v1670850654/6387974_xn34fb.webp"
          width={700}
          height={467}
          alt="Imagem da Ação Revisional em Financiamento de veículos"
          className=" mx-auto"
        />
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A ação revisional de financiamento de veículos tem como objetivo
          reduzir a prestação para o consumidor, de fmodo a cessar a cobrança de
          juros abusivos - bem <strong>acima da média do mercado</strong> - ou
          os juros sobre juros (anatocismo). Isso porque, algumas financeiras
          apresentam contratos em que o pagamento nunca ou muito lentamente será
          suficiente para reduzir o valor devido.
        </p>
        <h2
          id="acao-revisional-dos-juros-no-cartao-de-credito"
          className=" text-4xl my-7"
        >
          6. Ação revisional dos juros no cartão de crédito
        </h2>
        <img
          src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,q_auto:eco,w_700/v1670850653/3588982_p5oele.webp"
          width={700}
          height={467}
          alt="Imagem da Ação Revisional em Financiamento de veículos"
          className=" mx-auto"
        />
        <p className=" font-semibold text-lg mb-4 mx-auto text-[#556367]  leading-relaxed">
          Muitas vezes, os bancos e as financeiras cobram adicionais ilegais nas
          prestações. Ṕor isso, a ação revisional do cartão de crédito tem a
          finalidade de revisar os possíveis abusos cometidos nas faturas,
          sobretudo em relação aos juros abusivos.
        </p>
        <h2
          id="assinei-o-contrato-ainda-posso-pedir-acao-revisional"
          className=" text-4xl my-7"
        >
          7. Assinei o contrato, ainda posso pedir ação revisional?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Sim! A ação revisional de juros, geralmente, é uma alternativa
          procurada quando o consumidor já assinou o contrato e já iniciou o
          pagamento das parcelas, mas está se sentindo lesado pelos valores
          abusivos.
        </p>
        <h2
          id="posso-parar-de-pagar-as-parcelas-quando-entra-com-a-acao"
          className=" text-4xl my-7"
        >
          8. Posso parar de pagar as parcelas quando entrar com a ação?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Não! de fato você não pode parar de pagar nem no momento que entra com
          a ação e nem depois, o que muda é que conseguindo a liminar você passa
          a pagar um valor reduzido em juízo. Caso contrário, o seu bem estará
          sujeito a sofrer busca e apreensão.
        </p>
        <h2
          id="o-que-preciso-para-solicitar-uma-acao-revisional-de-juros"
          className=" text-4xl my-7"
        >
          9. O que preciso para solicitar uma ação revisional de juros?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Em primeiro lugar, você precisa entrar em contato com um advogado
          especializado no tema, para que ele análise minunciosamente o seu
          contrato.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Para isso, você deve portar o contrato e alguns documentos a serem
          anexados no pedido de revisão: contrato de financiamento, carnê de
          financiamento, RG e CPF, documento do veículo, comprovante de
          residência e comprovante de renda.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O advogado entrará, então, com o pedido de revisão contratual. Nesta
          petição, o advogado solicitará uma liminar para impedir que o banco
          negative o nome do cliente ou apreenda algum dos seus bens.
        </p>
        <h2 id="quanto-tempo-demora-a-acao" className=" text-4xl my-7">
          10. Quanto tempo demora a ação?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A liminar em média é obtida entre 15 a 45 dias, em média, a liminar é
          obtida. Ela pode ser concedida de forma parcial, completa ou negada.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Caso ela seja concedida, o autor da ação terá seu nome limpo e em
          posse do bem até a data do julgamento da causa ou revogação da
          liminar.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Neste ínterim, enquanto aguarda o julgamento, o contratante depositará
          em juízo o valor que entende dever, usualmente a metade do valor atual
          da parcela, de modo a juntar um montante suficiente para fazer um
          acordo com a financeira.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Caso seja negada, é possível entrar com recurso no Tribunal de
          Justiça.
        </p>
        <p className=" text-lg  font-bold">
          Portanto, se você desconfia de cobranças abusivas, procure um
          profissional!
        </p>
      </section>

      <p className="mb-8 mx-auto text-black  leading-relaxed text-center text-2xl">
        <br></br> Ficou com dúvidas? <br></br>Entre em contato com a nossa
        equipe! <br></br>{" "}
        <a
          href={
            "https://wa.me/5555992560707?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+advogado"
          }
          target="_blank"
          rel="noopener noreferrer"
          className=" font-bold text-[#006804] hover:underline mr-2"
        >
          Clique aqui
        </a>
        para nos enviar uma mensagem no WhatsApp.
      </p>
    </article>
  );
}
