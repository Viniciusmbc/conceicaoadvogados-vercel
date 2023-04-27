import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { agendaIcon, personIcon } from "~/components/common/Icons";
import { getSeo } from "~/components/utils/seo";

let [seoMeta, seoLinks] = getSeo({
  title:
    "Tudo o que você precisa saber sobre juros abusivos e busca e apreensão de veículos financiados",
  description:
    "Preparamos um guia sobre juros abusivos e busca e apreensão de veículos financiados.",
});

export const meta: MetaFunction = () => ({
  ...seoMeta,
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function BuscaApreensaoVeiculoFinanciado() {
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
        Tudo o que você precisa saber sobre juros abusivos e busca e apreensão
        de veículos financiados
      </h1>
      <p className=" text-gray mb-4 flex items-center justify-center ">
        <span itemProp="author" itemScope itemType="http://schema.org/Person">
          {personIcon}
        </span>
        Guilherme Batú <span className=" ml-2">{agendaIcon}</span> Abril 25,
        2023{" "}
        <span className=" ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
            <path d="M12.5 27.417h9.875v-1.334H12.5Zm0-6.75h15v-1.334h-15Zm0-6.75h15v-1.375h-15ZM9.125 33.208q-.958 0-1.646-.687-.687-.688-.687-1.646V9.125q0-.958.687-1.646.688-.687 1.646-.687h21.75q.958 0 1.646.687.687.688.687 1.646v21.75q0 .958-.687 1.646-.688.687-1.646.687Zm.042-1.333h21.666q.417 0 .729-.313.313-.312.313-.729V9.167q0-.417-.313-.729-.312-.313-.729-.313H9.167q-.417 0-.729.313-.313.312-.313.729v21.666q0 .417.313.729.312.313.729.313ZM8.125 8.125V31.875 8.125Z" />
          </svg>
        </span>{" "}
        Direito Civil (Contratos)
      </p>
      <p className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg">
        Preparamos um guia sobre juros abusivos e busca e apreensão de veículos
        financiados. Se você está enfrentando dificuldades para pagar as
        parcelas do seu financiamento de veículo, ou se o seu carro já foi alvo
        de uma ação de busca e apreensão, este texto é para você. Aqui, nossos
        especialistas responderão a algumas das perguntas mais frequentes sobre
        esses assuntos, ajudando você a entender melhor os seus direitos e
        deveres nesse tipo de situação. Boa leitura!
      </p>
      <div className=" max-w-fit p-7 h-auto border border-brown">
        <nav>
          <ul>
            <li>Sumário</li>
            <li className=" text-brown   hover:text-gray">
              <a
                href="#o-que-e-busca-e-apreensao-de-veiculo"
                className=" hover:underline  hover:underline-offset-2"
              >
                1. O que é busca e apreensão de veículo?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#o-que-e-mora-em-contratos-de-financiamento-de-veiculo"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                2. O que é mora em contratos de financiamento de veículo?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#o-que-sao-juros-abusivos-em-contratos-de-financiamento-de-veiculo"
                className=" hover:underline  hover:underline-offset-2"
              >
                3. O que são juros abusivos em contratos de financiamento de
                veículo?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#o-que-é-descaracterização-de-contrato-de-financiamento-de-veiculo"
                className="hover:underline  hover:underline-offset-2"
              >
                4. O que é descaracterização de contrato de financiamento de
                veículo?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#o-que-fazer-em-caso-de-busca-e-apreensão-de-veículo"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                5. O que fazer em caso de busca e apreensão de veículo?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#como-evitar-a-mora-em-contratos-de-financiamento-de-veículo"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                6. Como evitar a mora em contratos de financiamento de veículo?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#como-identificar-juros-abusivos-em-contratos-de-financiamento-de-veículo"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                7. Como identificar juros abusivos em contratos de financiamento
                de veículo?
              </a>
            </li>
            <li className=" text-brown hover:text-gray">
              <a
                href="#o-que-e-a-descaracterização-de-contrato-de-financiamento-de-veículo"
                className=" hover:underline  hover:underline-offset-2"
              >
                8. O que é a descaracterização de contrato de financiamento de
                veículo?
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section itemProp="articleBody">
        <h2
          id="o-que-e-busca-e-apreensao-de-veiculo"
          className=" text-4xl my-7"
        >
          1. O que é busca e apreensão de veículo?
        </h2>
        <p
          className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg"
          id="#o-que-é-uma-ação-revisional-de-juros"
        >
          A busca e apreensão de veículo é uma medida judicial que permite ao
          credor (aquele que vendeu o carro, por exemplo) recuperar um bem que
          foi dado em garantia em um contrato de financiamento e que não está
          sendo quitado pelo devedor.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed ">
          Alguns exemplos de situações em que pode ocorrer a busca e apreensão
          de veículo são:
        </p>
        <ul className=" list-inside list-disc font-bold text-lg mb-4 mx-auto text-[#4A5659] space-y-6  leading-relaxed">
          <li>Atraso no pagamento das parcelas do financiamento;</li>
          <li>Inadimplência no contrato de financiamento;</li>
          <li>Descumprimento das condições estabelecidas no contrato.</li>
        </ul>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A busca e apreensão de veículo é regulamentada pela{" "}
          <b>Lei no 13.043/2014</b>, que dispõe sobre a reorganização
          administrativa da Presidência da República e dos Ministérios.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Além disso, a medida é mencionada no <b>Código de Processo Civil</b>,
          no <b>artigo 139, inciso IV,</b> que prevê a possibilidade de o juiz
          determinar medidas necessárias para assegurar o cumprimento de ordem
          judicial, inclusive para entrega de coisa ou para a efetivação de
          busca e apreensão.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Vale ressaltar que a busca e apreensão de veículo{" "}
          <b>só pode ser realizada após autorização judicial</b>, que deve ser
          solicitada pelo credor e deferida pelo juiz. Além disso, o devedor
          deve ser <b>previamente notificado</b> sobre a medida e ter a
          oportunidade de se manifestar em juízo.
        </p>
        <p>
          Caso haja <b>irregularidades</b> no processo de busca e apreensão, o
          devedor pode <b> buscar reparação pelos danos causados</b> e contestar
          a medida judicialmente.
        </p>
        <h2
          id="o-que-e-mora-em-contratos-de-financiamento-de-veiculo"
          className=" text-4xl my-7"
        >
          2. O que é mora em contratos de financiamento de veículo?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A mora em contratos de financiamento de veículo ocorre quando o
          devedor atrasa o pagamento de uma ou mais parcelas do financiamento,
          ou seja, quando ele deixa de cumprir com suas obrigações previstas no
          contrato. É{" "}
          <b>importante destacar que a mora é diferente da inadimplência, </b>{" "}
          que ocorre quando o devedor não paga nenhuma parcela do financiamento.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Alguns exemplos de situações em que pode ocorrer a mora em contratos
          de financiamento de veículo são:
          <ul className=" list-inside list-disc font-bold text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
            <li>
              Atraso no pagamento de uma ou mais parcelas do financiamento;
            </li>
            <li>
              Descumprimento das condições estabelecidas no contrato, como não
              pagar o seguro obrigatório do veículo;
            </li>
            <li>
              Pagamento parcial das parcelas, o que pode levar ao acúmulo de
              juros e encargos.
            </li>
          </ul>
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A mora em contratos de financiamento de veículo é regulamentada pelo
          Código de Defesa do Consumidor, que prevê que o devedor deve ser
          notificado sobre a situação de atraso e ser concedido um prazo para
          regularizar a situação antes de ocorrer a rescisão do contrato.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Além disso, a <b>Lei nº 10.931/2004 </b> estabelece que a instituição
          financeira não pode exigir do devedor o pagamento integral da dívida
          em caso de mora, devendo oferecer opções para a quitação da dívida,
          como o parcelamento dos valores em atraso.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Caso ocorra a mora em contratos de financiamento de veículo, é
          importante que o devedor busque regularizar a situação o mais rápido
          possível, para evitar a aplicação de{" "}
          <b>juros abusivos, multas e outras sanções previstas no contrato.</b>
        </p>
        <h2
          id="o-que-sao-juros-abusivos-em-contratos-de-financiamento-de-veiculo"
          className=" text-4xl my-7"
        >
          3. O que são juros abusivos em contratos de financiamento de veículo?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          <Link
            className=" text-blue-600 hover:text-brown"
            to={"/blog/revisional-de-juros-abusivos"}
          >
            Juros abusivos
          </Link>{" "}
          em contratos de financiamento de veículo são taxas de juros
          excessivamente altas que são cobradas pelos credores, ultrapassando os
          limites legais e gerando prejuízos financeiros para o devedor.
        </p>
        <p className=" font-semibold text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Alguns exemplos de situações em que podem ocorrer juros abusivos em
          contratos de financiamento de veículo são:
          <ul className=" list-inside list-disc font-bold text-lg mb-4 mx-auto text-[#4A5659] italic space-y-6  leading-relaxed">
            <li>
              Taxas de juros que ultrapassam a média praticada pelo mercado;
            </li>
            <li>
              Adição de cláusulas contratuais que não são claras e que não
              permitem que o devedor compreenda o valor dos juros cobrados;
            </li>
            <li>Cobrança de juros sobre juros, o que é proibido por lei.</li>
          </ul>
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A cobrança de juros abusivos em contratos de financiamento de veículo
          é proibida pelo Código de Defesa do Consumidor, que prevê que as
          cláusulas contratuais devem ser claras e precisas, evitando qualquer
          tipo de abuso por parte dos credores. Além disso, a taxa de juros deve
          ser previamente acordada entre as partes e não pode ultrapassar os
          limites estabelecidos pelo Banco Central do Brasil.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Caso o devedor desconfie que está sendo cobrado juros abusivos em seu
          contrato de financiamento de veículo, é importante que ele busque
          orientação jurídica e conteste a cobrança judicialmente. Em caso de
          comprovação de juros abusivos, o devedor pode ter direito à revisão do
          contrato e à devolução de valores cobrados indevidamente.
        </p>
        <h2
          id="o-que-e-descaracterização-de-contrato-de-financiamento-de-veiculo"
          className=" text-4xl my-7"
        >
          4. O que é descaracterização de contrato de financiamento de veículo?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A descaracterização de contrato de financiamento de veículo ocorre
          quando há a constatação de que as{" "}
          <b>cláusulas contratuais são abusivas ou ilegais,</b> podendo resultar
          na <b>nulidade</b> do contrato ou na sua <b>revisão</b>. Essa prática
          pode ocorrer em contratos de financiamento de veículo que apresentam
          cláusulas que desrespeitam o Código de Defesa do Consumidor e outras
          normas legais.
        </p>{" "}
        <p className=" font-semibold text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Algumas situações que podem caracterizar a descaracterização de um
          contrato de financiamento de veículo são:
          <ul className=" list-inside list-disc font-bold text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
            <li>
              Cobrança de taxas e juros excessivamente altos, caracterizando
              juros abusivos;
            </li>
            <li>
              Inclusão de cláusulas que não são claras ou que não foram
              explicadas ao consumidor de forma adequada;
            </li>
            <li>
              Omissão de informações relevantes ao consumidor, como as taxas de
              juros e o valor total a ser pago.
            </li>
          </ul>
        </p>
        <p>
          A legislação brasileira prevê diversas normas que visam a proteção do
          consumidor em contratos de financiamento de veículo. Entre elas,
          podemos destacar o Código de Defesa do Consumidor, que prevê a
          obrigação dos fornecedores de produtos e serviços de informar o
          consumidor de forma clara e precisa sobre todas as condições do
          contrato, bem como a proibição de cláusulas abusivas. Além disso, a
          Resolução no 3.919/2010 do Banco Central do Brasil estabelece limites
          para as taxas de juros em contratos de financiamento de veículos.
        </p>
        <h2
          id="o-que-fazer-em-caso-de-busca-e-apreensão-de-veículo"
          className=" text-4xl my-7"
        >
          5. O que fazer em caso de busca e apreensão de veículo?
        </h2>
        <img
          src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,q_auto:eco,w_700/v1670850654/6387974_xn34fb.webp"
          width={700}
          height={467}
          alt="Imagem da Ação Revisional em Financiamento de veículos"
          className=" mx-auto"
        />
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Em caso de busca e apreensão de veículo, é importante que o
          proprietário do veículo tome algumas medidas para tentar resolver a
          situação da forma mais favorável possível. Veja a seguir algumas
          dicas:
          <ol className=" list-decimal list-inside text-lg my-4 mx-auto text-[#4A5659]  leading-relaxed space-y-6">
            <li>
              <b>
                {" "}
                Mantenha a calma e não tente resistir à ação de busca e
                apreensão:
              </b>
              tentar impedir a busca e apreensão pode agravar a situação e gerar
              consequências negativas.
            </li>
            <li>
              <b>
                {" "}
                Verifique se a ação de busca e apreensão está dentro da
                legalidade:
              </b>
              é importante que a ação de busca e apreensão esteja embasada em
              uma decisão judicial válida. Caso contrário, é possível questionar
              a legalidade da ação.
            </li>
            <li>
              <b>
                Entre em contato com o banco ou financeira responsável pelo
                financiamento:
              </b>
              E o proprietário do veículo pode tentar negociar com o banco ou
              financeira para regularizar a situação. É possível negociar a
              quitação da dívida, renegociação das parcelas ou até mesmo a
              devolução do veículo.
            </li>
            <li>
              <b>Busque orientação jurídica: </b>{" "}
              <u>
                é recomendável que o proprietário do veículo busque orientação
                jurídica de um advogado especializado em direito do consumidor
                para entender melhor a situação e avaliar as possibilidades de
                defesa.
              </u>{" "}
            </li>
            <li>
              <b>Caso necessário, recorra à justiça:</b>
              se não for possível chegar a um acordo extrajudicial, é possível
              entrar com uma ação judicial para contestar a ação de busca e
              apreensão ou para negociar as condições de pagamento da dívida.
            </li>
          </ol>
        </p>
        <h2
          id="como-evitar-a-mora-em-contratos-de-financiamento-de-veículo"
          className=" text-4xl my-7"
        >
          6. Como evitar a mora em contratos de financiamento de veículo?
        </h2>
        <img
          src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,q_auto:eco,w_700/v1670850653/3588982_p5oele.webp"
          width={700}
          height={467}
          alt="Imagem da Ação Revisional em Financiamento de veículos"
          className=" mx-auto"
        />
        <p className=" text-lg mb-4 mx-auto text-[#556367]  leading-relaxed">
          Para evitar a mora em contratos de financiamento de veículo, é
          importante que o proprietário do veículo adote algumas medidas
          preventivas. Veja a seguir algumas dicas:
          <ol className=" list-decimal list-inside text-lg my-4 mx-auto text-[#4A5659]  leading-relaxed space-y-6">
            <li>
              <b>Planeje a compra do veículo:</b> antes de financiar um veículo,
              é importante que o proprietário faça um planejamento financeiro
              para avaliar se será capaz de arcar com as parcelas do
              financiamento.
            </li>
            <li>
              <b>Verifique as condições do contrato:</b> é importante que o
              proprietário leia atentamente todas as cláusulas do contrato de
              financiamento antes de assiná-lo, verificando as taxas de juros,
              as condições de pagamento e as penalidades em caso de atraso.
            </li>
            <li>
              <b>Negocie as condições do contrato:</b> caso haja alguma cláusula
              que não seja vantajosa para o proprietário, é possível tentar
              negociar com o banco ou financeira antes de assinar o contrato.
            </li>
            <li>
              <b>Faça o pagamento das parcelas em dia:</b> para evitar a mora, é
              fundamental que o proprietário faça o pagamento das parcelas do
              financiamento em dia, evitando a cobrança de juros e multas.
            </li>
            <li>
              <b>Tenha reserva financeira:</b> é importante que o proprietário
              tenha uma reserva financeira para cobrir imprevistos, como
              despesas médicas ou perda de emprego, que possam comprometer o
              pagamento das parcelas do financiamento.
            </li>
            <li>
              <b>Renegocie o contrato, se necessário:</b>
              caso o proprietário esteja com dificuldades para pagar as parcelas
              do financiamento, é possível entrar em contato com o banco ou
              financeira para renegociar o contrato, negociando um novo prazo ou
              valor das parcelas.
            </li>
          </ol>
        </p>
        <h2
          id="como-identificar-juros-abusivos-em-contratos-de-financiamento-de-veículo"
          className=" text-4xl my-7"
        >
          7. Como identificar juros abusivos em contratos de financiamento de
          veículo?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          É importante realizar uma análise <b>minuciosa</b> do contrato de
          financiamento e comparar as taxas de juros cobradas com as praticadas
          pelo mercado. Em caso de dúvida, é recomendável buscar a orientação de
          um <b>advogado especializado em direito do consumidor.</b>
        </p>
        <h2
          id="o-que-e-a-descaracterização-de-contrato-de-financiamento-de-veículo"
          className=" text-4xl my-7"
        >
          8. O que é a descaracterização de contrato de financiamento de
          veículo?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A descaracterização de contrato de financiamento de veículo ocorre
          quando há a presença de cláusulas abusivas ou ilegais no contrato que
          violam os direitos do consumidor, ou ainda quando o veículo sofre uma
          depreciação acelerada e se torna impossível de ser quitado.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Algumas cláusulas abusivas ou ilegais que podem estar presentes nos
          contratos de financiamento de veículos{" "}
          <b>
            {" "}
            incluem a cobrança de tarifas indevidas, a imposição de taxas de
            juros excessivas, a inclusão de cláusulas que transferem para o
            consumidor a responsabilidade por eventuais danos causados ao
            veículo durante o transporte, entre outras.
          </b>
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Nesses casos, o consumidor pode buscar a descaracterização do
          contrato, o que significa que o contrato é considerado nulo, e o
          consumidor pode recuperar os valores já pagos, além de ter o direito
          de reaver o veículo, caso tenha sido apreendido.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A legislação brasileira que protege os direitos do consumidor em
          relação aos contratos de financiamento de veículos é o Código de
          Defesa do Consumidor (CDC), que estabelece que as cláusulas abusivas
          são nulas de pleno direito.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Para evitar a descaracterização do contrato de financiamento de
          veículo, é importante que o consumidor leia atentamente todas as
          cláusulas do contrato antes de assiná-lo, e busque orientação jurídica
          em caso de dúvidas ou suspeitas de abusividade.
        </p>
      </section>

      <article>
        <p className=" italic text-center  text-xl mb-4 mx-auto   leading-relaxed">
          É importante buscar um advogado especializado em direito do consumidor
          para auxiliar no processo de defesa dos seus direitos, que podem
          incluir a revisão do contrato de financiamento, a comprovação de
          possíveis irregularidades na cobrança de juros e multas e o pedido de
          suspensão da busca e apreensão.
        </p>
      </article>
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
