import type { MetaFunction } from "@remix-run/node";
import { agendaIcon, personIcon } from "~/components/common/Icons";
import { getSeo } from "~/components/utils/seo";

let [seoMeta, seoLinks] = getSeo({
  title: "Auxílio Acidente e Estabilidade",
  description:
    "Aqui você a compreenderá seus direitos sob auxílio acidente e estabilidade: como a apresentar um pedido de benefício, requisitos, e muito mais. Confira!",
});

export const meta: MetaFunction = () => ({
  ...seoMeta,
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function HoldingFamiliarPlanejamentoeBlindagemdoPatrimônio() {
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
        Holding familiar: planejamento e blindagem do patrimônio.
      </h1>
      <p className=" text-gray mb-4 flex items-center justify-center ">
        <span itemProp="author" itemScope itemType="http://schema.org/Person">
          {personIcon}
        </span>
        Guilherme Batú <span className=" ml-2">{agendaIcon}</span> Abr 26, 2023{" "}
        <span className=" ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
            <path d="M12.5 27.417h9.875v-1.334H12.5Zm0-6.75h15v-1.334h-15Zm0-6.75h15v-1.375h-15ZM9.125 33.208q-.958 0-1.646-.687-.687-.688-.687-1.646V9.125q0-.958.687-1.646.688-.687 1.646-.687h21.75q.958 0 1.646.687.687.688.687 1.646v21.75q0 .958-.687 1.646-.688.687-1.646.687Zm.042-1.333h21.666q.417 0 .729-.313.313-.312.313-.729V9.167q0-.417-.313-.729-.312-.313-.729-.313H9.167q-.417 0-.729.313-.313.312-.313.729v21.666q0 .417.313.729.312.313.729.313ZM8.125 8.125V31.875 8.125Z" />
          </svg>
        </span>{" "}
        Direito Empresarial
      </p>
      <p className=" mb-4 mx-auto text-[#4A5659] italic  leading-relaxed text-lg">
        A holding familiar é uma estratégia de planejamento e proteção
        patrimonial bastante utilizada por famílias empresárias no Brasil. Essa
        estrutura jurídica permite a gestão de um grupo de empresas e a proteção
        dos bens e recursos financeiros das mesmas contra possíveis riscos. Para
        ajudar a entender melhor o que é a holding familiar e como ela pode ser
        utilizada no planejamento e blindagem do patrimônio, nossos
        especialistas prepararam uma lista de perguntas e respostas sobre o
        assunto. Boa leitura!
      </p>

      <img
        src="https://res.cloudinary.com/deaejawfj/image/upload/v1672233878/imagemIntrodu%C3%A7%C3%A3oAcidente_afrznk.webp"
        width={400}
        height={400}
        alt="Imagem de introdução do artigo sobre Auxilio Acidente"
        className=" mx-auto"
      />
      <p className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg">
        Siga a leitura deste artigo para compreender o que é o{" "}
        <b>auxílio-acidente</b> , quais são os <b>critérios</b> para recebê-lo
        e, também, entender sobre o
        <b>direito à estabilidade em casos de acidentes.</b>
      </p>
      <div className=" max-w-fit p-7 h-auto border border-brown">
        <nav>
          <ul>
            <li>Sumário</li>
            <li className=" text-brown   hover:text-gray">
              <a
                href="#o-que-e-uma-holding-familiar"
                className=" hover:underline  hover:underline-offset-2"
              >
                1. O que é uma holding familiar?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#quais-sao-os-tipos-de-holding-familiar"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                2. Quais são os tipos de holding familiar?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#como-a-holding-familiar-pode-ser-utilizada-no-planejamento-patrimonial"
                className=" hover:underline  hover:underline-offset-2"
              >
                3. Como a holding familiar pode ser utilizada no planejamento
                patrimonial?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#como-a-holding-familiar-pode-ser-utilizada-na-blindagem-do-patrimonio"
                className="hover:underline  hover:underline-offset-2"
              >
                4. Como a holding familiar pode ser utilizada na blindagem do
                patrimônio?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#qual-o-valor-do-auxili-acidente"
                className="hover:underline  hover:underline-offset-2"
              >
                5. Qual o valor do auxílio-acidente?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#a-partir-de-quando-e-devido-o-auxilio"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                6. A partir de quando é devido o Auxílio?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#posso-acumular-esse-auxilio-com-outros-beneficios-previdenciarios"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                7. Posso acumular esse auxílio com outros benefícios
                previdenciários?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#quem-recebe-auxilio-acidente-tem-direito-a-estabilidade"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                8. Quem recebe auxílio-acidente tem direito à estabilidade?
              </a>
            </li>
            <li className=" text-brown hover:text-gray">
              <a
                href="#auxilio-acidente-acumula-com-aposentadoria"
                className=" hover:underline  hover:underline-offset-2"
              >
                9. Auxílio-Acidente acumula com aposentadoria?
              </a>
            </li>
            <li className=" text-brown hover:text-gray">
              <a
                href="#como-dar-entrada-no-auxilio-acidente"
                className=" hover:underline  hover:underline-offset-2"
              >
                10. Como dar entrada no Auxílio-Acidente?
              </a>
            </li>
            <li className=" text-brown hover:text-gray">
              <a
                href="#conclusao"
                className=" hover:underline  hover:underline-offset-2"
              >
                Conclusão
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section itemProp="articleBody">
        <h2 id="o-que-e-uma-holding-familiar" className=" text-4xl my-7">
          1. O que é uma holding familiar?
        </h2>
        <p className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg">
          Uma holding familiar é uma empresa constituída para controlar um grupo
          de empresas familiares. Ela pode ser utilizada para facilitar a gestão
          dos negócios, centralizando as decisões e permitindo a criação de uma
          estrutura organizacional mais eficiente. Além disso, pode ser
          utilizada para proteger os bens e recursos financeiros da família
          empresária
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Um exemplo de holding familiar é a JBS, uma das maiores empresas do
          mundo no ramo de alimentos. Ela é controlada pela holding J&F
          Investimentos, que é de propriedade da família Batista
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          No Brasil, a legislação que regula a criação e funcionamento de
          holdings familiares é o Código Civil Brasileiro. A Lei nº 10.406/2002
          dispõe sobre a constituição, o funcionamento e as responsabilidades
          das empresas, incluindo as holdings familiares.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Além disso, é importante ressaltar que a utilização da holding
          familiar deve ser feita dentro dos limites da lei, evitando qualquer
          tipo de fraude ou sonegação fiscal. A Lei de Falências e Recuperação
          de Empresas (Lei nº 11.101/2005) e o Código Tributário Nacional (Lei
          nº 5.172/1966) são exemplos de legislações que devem ser observadas
          pelos empresários que desejam utilizar a holding familiar como
          estratégia de planejamento e proteção patrimonial.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed"></p>
        <h2
          id="quais-sao-os-tipos-de-holding-familiar"
          className=" text-4xl my-7"
        >
          2. Quais são os tipos de holding familiar?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Existem dois tipos de holding familiar: a pura e a mista.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A holding pura é aquela que tem como objetivo exclusivo o controle de
          outras empresas, sem ter atividades operacionais próprias além da
          gestão das empresas controladas. Essa holding tem como função gerir o
          patrimônio e as atividades das empresas controladas.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Já a holding mista, além de controlar outras empresas, também possui
          atividades empresariais próprias, ou seja, além da gestão das empresas
          controladas, ela também realiza atividades operacionais.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Um exemplo de holding pura no Brasil é a Itaúsa, que controla o Banco
          Itaú e outras empresas do grupo.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Já um exemplo de holding mista é a Ultrapar, que controla empresas
          como a Ipiranga e a Oxiteno, além de possuir atividades operacionais
          próprias na área de distribuição de combustíveis.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          No Brasil, a Lei nº 6.404/76 (Lei das Sociedades por Ações) é a
          legislação que trata das holdings, tanto puras quanto mistas.{" "}
          <b>
            A lei permite a constituição de holdings e estabelece regras para o
            seu funcionamento, como a necessidade de elaboração de um estatuto
            social específico e a obrigatoriedade de divulgação de informações
            financeiras e contábeis das empresas controladas.
          </b>
        </p>
        <h2
          id="como-a-holding-familiar-pode-ser-utilizada-no-planejamento-patrimonial"
          className=" text-4xl my-7"
        >
          3. Como a holding familiar pode ser utilizada no planejamento
          patrimonial?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A holding familiar pode ser uma estratégia de planejamento patrimonial
          para proteger o patrimônio da família empresária e facilitar a gestão
          dos negócios familiares. Uma das formas de fazer isso é através da
          separação do patrimônio pessoal dos sócios e do patrimônio
          empresarial, que passa a ser gerido pela holding familiar.
        </p>
        <p className="text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Dessa forma, a holding familiar se torna a proprietária das ações das
          empresas controladas e os sócios passam a ser acionistas da holding.
          Isso permite a criação de uma estrutura organizacional mais eficiente
          e uma gestão mais centralizada, além de garantir a proteção
          patrimonial.
        </p>
        <p className="text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Um exemplo de como a holding familiar pode ser utilizada no
          planejamento patrimonial é o seguinte: suponha que uma família tenha
          uma empresa que fabrica e vende produtos. Para proteger o patrimônio,
          a família decide criar uma holding familiar, que se tornará a
          proprietária das ações da empresa. A família, por sua vez, será
          acionista da holding familiar, que passará a controlar a gestão dos
          negócios
        </p>
        <p>
          Dessa forma, a empresa fica protegida de eventuais riscos e, ao mesmo
          tempo, a gestão dos negócios é facilitada pela centralização das
          decisões na holding familiar.
        </p>
        <h2
          id="como-a-holding-familiar-pode-ser-utilizada-na-blindagem-do-patrimonio"
          className=" text-4xl my-7"
        >
          4. Como a holding familiar pode ser utilizada na blindagem do
          patrimônio?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed font-bold">
          A holding familiar pode ser utilizada na blindagem do patrimônio, uma
          vez que sua estruturação permite a separação entre o patrimônio
          pessoal dos sócios e o patrimônio empresarial, além de proporcionar
          uma gestão mais eficiente e proteçãopatrimonial. Abaixo, estão alguns
          tópicos que exemplificam como a holding familiar pode ser utilizada na
          blindagem do patrimônio:
        </p>{" "}
        <ul>
          <ol>
            Separação de patrimônio:
            <p>
              a criação da holding familiar permite a separação entre o
              patrimônio pessoal dos sócios e o patrimônio empresarial. Dessa
              forma, em caso de dívidas ou processos judiciais envolvendo os
              sócios, o patrimônio empresarial fica protegido e não é afetado.
            </p>
          </ol>
          <ol>
            Proteção contra credores:{" "}
            <p>
              a estruturação da holding familiar também permite a proteção do
              patrimônio empresarial contra credores, uma vez que a holding se
              torna a proprietária das ações das empresas controladas. Isso
              dificulta o acesso dos credores aos ativos das empresas, pois a
              holding se torna uma barreira jurídica.
            </p>
          </ol>
          <ol>
            Gestão centralizada:
            <p>
              a holding familiar também permite uma gestão mais centralizada dos
              negócios, uma vez que é responsável pela administração das
              empresas controladas. Isso garante uma gestão mais eficiente e
              otimização dos recursos, além de diminuir a exposição ao risco por
              parte dos sócios.
            </p>
          </ol>
          <ol>
            Planejamento sucessório:
            <p>
              a holding familiar pode ser utilizada como uma ferramenta de
              planejamento sucessório, permitindo que os sócios estabeleçam
              regras claras de sucessão e administração do patrimônio familiar.
              Dessa forma, é possível evitar conflitos familiares e garantir a
              continuidade dos negócios.
            </p>
          </ol>
        </ul>
        <h2
          id="e-legal-utilizar-a-holding-familiar-para-proteger-o-patrimonio"
          className=" text-4xl my-7"
        >
          5. É legal utilizar a holding familiar para proteger o patrimônio?
        </h2>
        <p className="text-lg mb-4 mx-auto text-[#556367]  leading-relaxed">
          Sim, a utilização da holding familiar para proteger o patrimônio é uma
          estratégia legal, desde que seja feita dentro dos limites da lei
        </p>
        <p className="text-lg mb-4 mx-auto text-[#556367]  leading-relaxed">
          No Brasil, a criação de holdings familiares é regulamentada pelo
          Código Civil Brasileiro, em seu artigo 2.031, que prevê a
          possibilidade de constituição de sociedades holding para o controle de
          outras empresas. Além disso, a Receita Federal do Brasil também
          reconhece a legalidade da utilização da holding familiar, desde que
          seja feita de forma transparente e dentro das normas fiscais vigentes.
        </p>
        <h2
          id="quando-e-vantajoso-criar-uma-holding-familiar"
          className=" text-4xl my-7"
        >
          6. Quando é vantajoso criar uma holding familiar?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Entre as principais situações em que vale a pena considerar a criação
          de uma holding familiar, podemos destacar:
        </p>
        <ul>
          <ol>
            Quando se busca proteger o patrimônio dos sócios e suas famílias de
            eventuais riscos, como processos judiciais, dívidas e outras
            situações que possam afetar os bens e direitos.
          </ol>
          <ol>
            Quando se almeja garantir a transmissão dos bens de forma adequada,
            evitando conflitos entre herdeiros e minimizando o impacto
            tributário
          </ol>
          <ol>
            Quando se necessita organizar a gestão das empresas familiares,
            visando aprofundar a separação entre o patrimônio pessoal e
            empresarial, reduzir riscos e maximizar a rentabilidade.
          </ol>
          <ol>
            Quando se deseja realizar investimentos em novos negócios, visando a
            diversificação de investimentos e a criação de novas fontes de
            renda.
          </ol>
          <ol>
            Quando se pretende reduzir a carga tributária sobre os rendimentos,
            patrimônio e investimentos dos sócios, aproveitando os benefícios
            fiscais e a estruturação adequada da holding familiar.
          </ol>
        </ul>
        <h2
          id="como-constituir-uma-holding-familiar"
          className=" text-4xl my-7"
        >
          7. Como constituir uma holding familiar?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Para constituir uma holding familiar, é importante seguir alguns
          passos e considerar questões legais e tributárias. Abaixo, listamos
          alguns tópicos que podem ajudar na constituição da holding familiar:
        </p>
        <ul>
          <ol>
            Defina os objetivos: antes de constituir a holding familiar, é
            importante definir quais são os objetivos a serem alcançados, como
            proteção patrimonial, gestão centralizada, planejamento sucessório,
            entre outros.
          </ol>
          <ol>
            Escolha do tipo de holding: existem dois tipos de holding familiar:
            a pura, que possui apenas a função de controlar outras empresas, e a
            mista, que além de controlar outras empresas, também atua na
            prestação de serviços.
          </ol>
          <ol>
            Crie a empresa: é necessário criar a empresa, registrando-a na Junta
            Comercial do estado em que ela será instalada. Além disso, é preciso
            definir o capital social e a estrutura societária da holding
            familiar.
          </ol>
          <ol>
            Faça a transferência de ações: a transferência das ações das
            empresas controladas para a holding familiar é um processo
            importante na constituição da holding. É necessário avaliar o valor
            das empresas controladas e definir a participação de cada sócio na
            holding.
          </ol>
          <ol>
            Elaboração do contrato social: o contrato social da holding familiar
            deve conter informações sobre a gestão da empresa, distribuição de
            lucros, sucessão empresarial, entre outros.
          </ol>
          <ol>
            Planejamento tributário: é fundamental fazer um planejamento
            tributário para a holding familiar, visando a redução de impostos e
            a utilização de benefícios fiscais.
          </ol>
          <ol>
            Registro na Receita Federal: é necessário fazer o registro da
            holding familiar na Receita Federal, obtendo o CNPJ e cumprindo as
            obrigações fiscais.
          </ol>
        </ul>
        <h2
          id="qual-o-papel-do-advogado-na-constituição-de-um-holding-familiar"
          className=" text-4xl my-7"
        >
          8. Qual o papel de um advogado na constituição de um holding familiar?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O advogado especializado em direito empresarial tem um papel
          fundamental na estruturação da holding familiar, uma vez que ele é
          responsável por orientar e auxiliar na elaboração dos documentos
          necessários para a constituição da empresa. Entre as principais
          atividades que podem ser desempenhadas por um advogado especializado
          em holding familiar, destacam-se:
        </p>
        <ul>
          <ol>
            Análise da viabilidade jurídica: o advogado especializado irá
            analisar se a estruturação da holding familiar é viável do ponto de
            vista jurídico, avaliando as normas legais e tributárias que podem
            afetar a empresa.
          </ol>
          <ol>
            Elaboração do contrato social: o advogado especializado irá elaborar
            o contrato social da holding familiar, contendo informações sobre a
            gestão da empresa, a distribuição de lucros, o planejamento
            sucessório, entre outros.
          </ol>
          <ol>
            Transferência de ações: o advogado irá orientar na transferência das
            ações das empresas controladas para a holding familiar, avaliando o
            valor das empresas e a participação dos sócios na holding.
          </ol>
          <ol>
            Planejamento tributário: o advogado especializado irá realizar o
            planejamento tributário da holding familiar, visando a redução de
            impostos e a utilização de benefícios fiscais.
          </ol>
          <ol>
            Proteção patrimonial: o advogado irá auxiliar na implementação de
            medidas de proteção patrimonial para os sócios da holding familiar,
            visando a segurança dos seus bens e direitos.
          </ol>
          <ol>
            Sucessão empresarial: o advogado irá orientar na estruturação do
            planejamento sucessório da holding familiar, visando a transmissão
            dos bens de forma adequada e a minimização de conflitos entre os
            herdeiros.
          </ol>
        </ul>
        <h2 id="quem-administra-a-holding-familiar" className=" text-4xl my-7">
          9. Quem administra a holding familiar?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A administração da holding familiar é realizada por um Conselho de
          Administração ou por um Administrador Único, que são eleitos pelos
          sócios ou acionistas da holding. O Conselho de Administração é formado
          por no mínimo três membros, que podem ser escolhidos dentre os
          próprios sócios ou de terceiros que possuam conhecimento e experiência
          para a gestão da empresa.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O Administrador Único, por sua vez, é responsável por tomar as
          decisões estratégicas da holding familiar e por supervisionar as
          atividades da empresa. Ele é escolhido pelos sócios ou acionistas da
          holding e pode ser uma pessoa física ou jurídica
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Além disso, é comum que a holding familiar conte com uma estrutura
          administrativa própria, que pode incluir departamentos financeiro,
          contábil, jurídico, recursos humanos, entre outros, para dar suporte à
          gestão dos negócios.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          É importante ressaltar que a administração da holding familiar deve
          ser pautada pela transparência, ética e profissionalismo, visando a
          maximização dos resultados e a proteção do patrimônio dos sócios e
          suas famílias.
        </p>
        <h2 id="holding-familiar-em-sucessões" className=" text-4xl my-7">
          10. Holding familiar em sucessões
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A holding familiar pode ser uma ferramenta útil para o planejamento
          sucessório, principalmente em caso de falecimento de um dos sócios.
          Isso porque a holding permite uma melhor organização e proteção do
          patrimônio, facilitando a transmissão dos bens aos herdeiros.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Em caso de falecimento de um dos sócios da holding familiar, a
          sucessão pode ocorrer de forma mais simplificada, uma vez que os bens
          já estão concentrados em uma única empresa. Assim, a transferência dos
          bens pode ocorrer por meio da transferência das cotas ou ações da
          holding aos herdeiros, evitando a necessidade de se proceder a
          partilha de cada um dos bens individualmente.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Além disso, a holding familiar também pode contar com um planejamento
          sucessório específico, que determina como será realizada a sucessão
          dos bens e quais serão os direitos e responsabilidades de cada um dos
          herdeiros
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Vale ressaltar que o planejamento sucessório deve ser elaborado com a
          ajuda de um advogado especializado em direito sucessório e em holding
          familiar, para garantir que a transferência dos bens ocorra de forma
          segura e de acordo com a legislação aplicável
        </p>
        <p
          id="conclusao"
          className=" italic text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed"
        >
          Em resumo, a holding familiar é uma ferramenta valiosa para o
          planejamento patrimonial e sucessório, permitindo a proteção e gestão
          do patrimônio da família de forma mais eficiente e segura. No entanto,
          é importante lembrar que a constituição de uma holding familiar deve
          ser feita com o auxílio de profissionais especializados, como
          advogados e contadores, para garantir que a empresa esteja em
          conformidade com a legislação e para elaborar um planejamento adequado
          às necessidades de cada família.
        </p>
      </section>

      <article className="mb-8 mx-auto text-black  leading-relaxed text-center text-2xl">
        Se você tem interesse em constituir uma holding familiar ou quer saber
        mais sobre como a holding pode ajudar no seu planejamento patrimonial e
        sucessório, entre em contato com nossos advogados especializados em
        direito empresarial e sucessório. Estamos à disposição para ajudá-lo!
      </article>
    </article>
  );
}
