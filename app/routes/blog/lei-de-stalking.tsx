import type { MetaFunction } from "@remix-run/node";
import { agendaIcon, personIcon } from "~/components/common/Icons";
import { getSeo } from "~/components/utils/seo";

let [seoMeta, seoLinks] = getSeo({
  title: "Lei de Stalking",
  description:
    "Aqui você a compreenderá o que fazer caso  sob auxílio acidente e estabilidade: como a apresentar um pedido de benefício, requisitos, e muito mais. Confira!",
});

export const meta: MetaFunction = () => ({
  ...seoMeta,
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function AuxilioAcidenteEstabilidade() {
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
        Lei de stalking: conheça a lei que protege as vítimas de perseguição e
        intimidação.
      </h1>
      <p className=" text-gray mb-4 flex items-center justify-center ">
        <span itemProp="author" itemScope itemType="http://schema.org/Person">
          {personIcon}
        </span>
        Guilherme Batú <span className=" ml-2">{agendaIcon}</span> Fev 24, 2023{" "}
        <span className=" ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
            <path d="M12.5 27.417h9.875v-1.334H12.5Zm0-6.75h15v-1.334h-15Zm0-6.75h15v-1.375h-15ZM9.125 33.208q-.958 0-1.646-.687-.687-.688-.687-1.646V9.125q0-.958.687-1.646.688-.687 1.646-.687h21.75q.958 0 1.646.687.687.688.687 1.646v21.75q0 .958-.687 1.646-.688.687-1.646.687Zm.042-1.333h21.666q.417 0 .729-.313.313-.312.313-.729V9.167q0-.417-.313-.729-.312-.313-.729-.313H9.167q-.417 0-.729.313-.313.312-.313.729v21.666q0 .417.313.729.312.313.729.313ZM8.125 8.125V31.875 8.125Z" />
          </svg>
        </span>{" "}
        Direito Penal
      </p>
      <p className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg">
        A Lei de Stalking, também conhecida como Lei nº 14.132/2021, é uma
        legislação brasileira que visa proteger as vítimas de perseguição
        obsessiva e intimidatória, conhecida como stalking. Em detrimento da
        atualidade do assunto, ainda existem muitas dúvidas a respeito dessa lei
        e de seus desdobramentos. A seguir, apresentamos detalhadamente os seus
        principais aspectos.
      </p>

      <div className=" max-w-fit p-7 h-auto border border-brown">
        <nav>
          <ul>
            <li>Sumário</li>
            <li className=" text-brown   hover:text-gray">
              <a
                href="#o-que-e-a-lei-de-stalking"
                className=" hover:underline  hover:underline-offset-2"
              >
                1. O que é a lei de stalking?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#quando-surgiu-a-lei-de-stalking"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                2. Quando surgiu a lei de stalking?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#qual-a-importancia-da-lei-de-stalking"
                className=" hover:underline  hover:underline-offset-2"
              >
                3. Qual a importância da lei de stalking?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#quais-são-as-categorias-abrangidas-pela-lei"
                className="hover:underline  hover:underline-offset-2"
              >
                4. Quais são as categorias abrangidas pela lei?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#como-proceder-se-esta-sendo-vítima-de-stalking"
                className="hover:underline  hover:underline-offset-2"
              >
                5. Como proceder se está sendo vítima de stalking?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#conclusao"
                className="hover:underline  hover:underline-offset-2"
              >
                6. Conclusão
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section itemProp="articleBody">
        <h2 id="o-que-e-a-lei-de-stalking" className=" text-4xl my-7">
          1. O que é a lei de stalking?
        </h2>
        <p
          className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg"
          id="#o-que-é-uma-ação-revisional-de-juros"
        >
          A Lei de Stalking (Lei nº 14.132/2021), a qual insere no código penal
          o art. 147-A, para tipificar o crime de perseguição, e tem como
          objetivo proteger as vítimas das práticas de stalking.
        </p>
        <blockquote className=" italic text-justify px-28 pb-5">
          Art. 147-A. Perseguir alguém, reiteradamente e por qualquer meio,
          ameaçando-lhe a integridade física ou psicológica, restringindo-lhe a
          capacidade de locomoção ou, de qualquer forma, invadindo ou
          perturbando sua esfera de liberdade ou privacidade. Pena – reclusão,
          de 6 (seis) meses a 2 (dois) anos, e multa.
        </blockquote>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Essa ação criminosa pode ser caracterizada por comportamentos como a
          vigilância excessiva, a invasão da privacidade e a comunicação
          insistentemente indesejada.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A lei surgiu em resposta à necessidade de oferecer{" "}
          <strong>proteção às vítimas de stalking,</strong> que muitas vezes
          sofrem danos emocionais e psicológicos graves, além de serem ameaçadas
          e constrangidas pelo agressor.
        </p>
        <h2 id="quando-surgiu-a-lei-de-stalking?" className=" text-4xl my-7">
          2. Quando surgiu a lei de stalking?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A Lei de Stalking foi sancionada em março de 2021, e entrou em vigor
          em abril do mesmo ano, tornando-se um importante instrumento de defesa
          dos direitos das vítimas.
        </p>
        <h2
          id="qual-a-importância-da-lei-de-stalking"
          className=" text-4xl my-7"
        >
          3. Qual a importância da lei de stalking?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A importância da Lei de Stalking se deve ao fato de que ela reconhece
          o stalking como uma prática criminosa e estabelece medidas para punir
          os agressores, como a pena de reclusão de{" "}
          <strong>6 meses a 2 anos,</strong> além de multa. Importante ressaltar
          que a pena será aumentada se o crime de perseguição for cometido
          contra criança, adolescente ou idoso, contra mulher por razões da
          condição de sexo feminino, nos termos do § 2º-A do art. 121 do código
          penal ou mediante concurso de 2 (duas) ou mais pessoas ou com o
          emprego de arma. Ainda, a lei prevê medidas de proteção à vítima, como
          a proibição de aproximação do perseguidor e o afastamento de locais
          frequentados pela vítima.
        </p>
        <h2
          id="quais-sao-as-categorias-abrangidas-pela-lei"
          className=" text-4xl my-7"
        >
          4. Quais são as categorias abrangidas pela lei?
        </h2>
        <ul className=" list-disc text-lg">
          <li className=" ml-6">
            Perseguição online:
            <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
              Também conhecida como cyberstalking, é uma forma de assédio que
              ocorre por meio da internet e de dispositivos eletrônicos. Ela se
              caracteriza pelo uso repetido de ameaças, assédio ou intimidação
              virtual para coagir ou perturbar o interlocutor. A perseguição
              online pode incluir o envio de mensagens ofensivas e ameaçadoras,
              monitoramento constante das atividades online de alguém, a criação
              de perfis falsos para difamar a vítima e outras formas de
              comportamento agressivo.
            </p>{" "}
          </li>
          <li className=" ml-6">
            Invasão da privacidade:
            <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
              É uma preocupação crescente na era digital. Referente à{" "}
              <strong>
                coleta, armazenamento ou compartilhamento não autorizado de
                informações pessoais.
              </strong>{" "}
              Isso pode incluir dados sensíveis como informações bancárias,
              endereços, números de identificação pessoal, histórico de
              navegação e outros dados pessoais que podem ser usados para fins
              fraudulentos ou criminosos. A invasão da privacidade pode ocorrer
              de diversas maneiras, incluindo o hacking de contas pessoais, a
              espionagem de dispositivos eletrônicos, a violação de dados por
              empresas ou organizações e outras formas de violação da
              privacidade. Pode acarretar em efeitos duradouros e prejudicar a
              vida pessoal, financeira e profissional das vítimas.
            </p>
          </li>
          <li className=" ml-6">
            Vigilância excessiva
            <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
              É uma preocupação crescente nas sociedades modernas. Diz respeito
              ao monitoramento constante das atividades e comportamentos das
              pessoas por meio de dispositivos eletrônicos ou outras
              tecnologias. Pode acontecer através do controle de comunicações
              pessoais, rastreamento de localização e fiscalização de atividades
              online. A vigilância excessiva pode ser realizada por governos,
              empresas ou indivíduos, e pode ser motivada por razões de
              segurança, marketing ou outras finalidades.
            </p>
          </li>
          <li className=" ml-6">
            Comunicação insistentemente indesejada
            <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
              Essa forma de assédio envolve o envio repetido de mensagens ou
              tentativas de contato, mesmo quando a outra parte deixa claro que
              não está interessada em se comunicar. Em geral, inclui o envio de
              mensagens de texto, e-mails, mensagens em redes sociais ou outras
              formas de comunicação. É comportamento extremamente perturbador e
              invasivo, e pode levar a sentimentos de ansiedade, estresse e
              desconforto emocional.{" "}
            </p>
          </li>
        </ul>

        <p className=" underline text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Todas essas práticas podem ser consideradas como stalking, e agora são
          puníveis por lei.
        </p>
        <h2
          id="como-proceder-se-esta-sendo-vítima-de-stalking"
          className=" text-4xl my-7"
        >
          5. Como proceder se está sendo vítima de stalking?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A primeira medida a ser tomada é procurar as autoridades competentes,
          como a polícia ou a delegacia da mulher. É importante que a vítima
          tenha em mãos provas do comportamento obsessivo do agressor, como
          mensagens, e-mails, fotos ou vídeos. Além disso, é recomendado buscar
          um advogado especializado em direito de família e direito penal para
          orientação e defesa de seus direitos.
        </p>

        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O <strong>papel do advogado nesses casos é essencial,</strong> pois
          ele pode orientar a vítima sobre os seus direitos, auxiliar na coleta
          de provas, além de representá-la judicialmente em caso de necessidade.
          O advogado também pode auxiliar na obtenção de medidas protetivas,
          como a proibição de aproximação do perseguidor.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A Lei de Stalking é uma importante ferramenta na luta contra essa
          prática criminosa, mas é importante que a sociedade esteja atenta e
          engajada em combater esse problema.
        </p>

        <h2 id="conclusao" className=" text-4xl my-7">
          6. Conclusão
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          <strong className="mx-1">
            Se você está sendo vítima de stalking, não hesite em procurar ajuda
            e denunciar o caso. Lembre-se de que você não está sozinho e que
            existem leis e profissionais que podem ajudá-lo a superar essa
            situação difícil.
          </strong>
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
