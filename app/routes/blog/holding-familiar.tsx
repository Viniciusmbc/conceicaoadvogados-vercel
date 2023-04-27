import type { MetaFunction } from "@remix-run/node";
import { agendaIcon, personIcon } from "~/components/common/Icons";
import { getSeo } from "~/components/utils/seo";

let [seoMeta, seoLinks] = getSeo({
  title: "Holding familiar: planejamento e blindagem do património",
  description:
    "A holding familiar é uma estratégia de planejamento e proteção patrimonial bastante utilizada por famílias empresárias no Brasil. Essa estrutura jurídica permite a gestão de um grupo de empresas e a proteção dos bens e recursos financeiros das mesmas contra possíveis riscos.",
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
        <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
          <path d="M10.6 35.95V19h3v16.95Zm12.1 0V19h3v16.95Zm-18.7 6v-3h40v3Zm30.4-6V19h3v16.95ZM4 16v-2.65l20-11.4 20 11.4V16Zm6.7-3h26.6Zm0 0h26.6L24 5.4Z" />
        </svg>
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
                href="#e-legal-utilizar-a-holding-familiar-para-proteger-o-patrimonio"
                className="hover:underline  hover:underline-offset-2"
              >
                5. É legal utilizar a holding familiar para proteger o
                patrimônio?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#quando-e-vantajoso-criar-uma-holding-familiar"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                6. Quando é vantajoso criar uma holding familiar
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#como-constituir-uma-holding-familiar"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                7. Como constituir uma holding familiar?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#qual-o-papel-de-um-advogado-na-constituicao-de-um-holding-familiar"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                8. Qual o papel de um advogado na constituição de um holding
                familiar?
              </a>
            </li>
            <li className=" text-brown hover:text-gray">
              <a
                href="#quem-administra-a-holding-familiar"
                className=" hover:underline  hover:underline-offset-2"
              >
                9. Quem administra a holding familiar?
              </a>
            </li>
            <li className=" text-brown hover:text-gray">
              <a
                href="#holding-familiar-e-sucessões"
                className=" hover:underline  hover:underline-offset-2"
              >
                10. Holding familiar em sucessões
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
          Uma <i>holding familiar</i> é uma empresa constituída para controlar
          um grupo de empresas familiares. Ela pode ser utilizada para facilitar
          a gestão dos negócios, centralizando as decisões e permitindo a
          criação de uma estrutura organizacional mais eficiente. Além disso,
          pode ser utilizada para proteger os bens e recursos financeiros da
          família empresária
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Um exemplo de holding familiar é a <b>JBS</b>, uma das maiores
          empresas do mundo no ramo de alimentos. Ela é controlada pela holding
          J&F Investimentos, que é de propriedade da família Batista
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          No Brasil, a legislação que regula a criação e funcionamento de
          holdings familiares é o Código Civil Brasileiro. A{" "}
          <b>Lei nº 10.406/2002 </b>
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
          A holding <b>pura </b> é aquela que tem como objetivo{" "}
          <b>exclusivo </b> o controle de outras empresas, sem ter atividades
          operacionais próprias além da gestão das empresas controladas. Essa
          holding tem como função gerir o patrimônio e as atividades das
          empresas controladas.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Já a holding <b>mista </b>, além de controlar outras empresas, também
          possui <b>atividades empresariais próprias</b>, ou seja, além da
          gestão das empresas controladas, ela também realiza atividades
          operacionais.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Um exemplo de holding pura no Brasil é a <b>Itaúsa</b>, que controla o
          Banco Itaú e outras empresas do grupo.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Já um exemplo de holding mista é a <b>Ultrapar</b>, que controla
          empresas como a Ipiranga e a Oxiteno, além de possuir atividades
          operacionais próprias na área de distribuição de combustíveis.
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
          planejamento patrimonial é o seguinte:{" "}
          <i>
            suponha que uma família tenha uma empresa que fabrica e vende
            produtos. Para proteger o patrimônio, a família decide criar uma
            holding familiar, que se tornará a proprietária das ações da
            empresa. A família, por sua vez, será acionista da holding familiar,
            que passará a controlar a gestão dos negócios
          </i>
        </p>
        <p className="text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
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
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed ">
          A holding familiar pode ser utilizada na blindagem do patrimônio, uma
          vez que sua estruturação permite a separação entre o patrimônio
          pessoal dos sócios e o patrimônio empresarial, além de proporcionar
          uma gestão mais eficiente e proteçãopatrimonial. Abaixo, estão alguns
          tópicos que exemplificam como a holding familiar pode ser utilizada na
          blindagem do patrimônio:
        </p>{" "}
        <ol className=" list-decimal list-inside text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed space-y-4">
          <li>
            <b> Separação de patrimônio:</b>
            <p>
              a criação da holding familiar permite a separação entre o
              patrimônio pessoal dos sócios e o patrimônio empresarial. Dessa
              forma, em caso de dívidas ou processos judiciais envolvendo os
              sócios, o patrimônio empresarial fica protegido e não é afetado.
            </p>
          </li>
          <li>
            <b> Proteção contra credores: </b>
            <p>
              a estruturação da holding familiar também permite a proteção do
              patrimônio empresarial contra credores, uma vez que a holding se
              torna a proprietária das ações das empresas controladas. Isso
              dificulta o acesso dos credores aos ativos das empresas, pois a
              holding se torna uma barreira jurídica.
            </p>
          </li>
          <li>
            <b>Gestão centralizada:</b>
            <p>
              a holding familiar também permite uma gestão mais centralizada dos
              negócios, uma vez que é responsável pela administração das
              empresas controladas. Isso garante uma gestão mais eficiente e
              otimização dos recursos, além de diminuir a exposição ao risco por
              parte dos sócios.
            </p>
          </li>
          <li>
            <b>Planejamento sucessório:</b>
            <p>
              a holding familiar pode ser utilizada como uma ferramenta de
              planejamento sucessório, permitindo que os sócios estabeleçam
              regras claras de sucessão e administração do patrimônio familiar.
              Dessa forma, é possível evitar conflitos familiares e garantir a
              continuidade dos negócios.
            </p>
          </li>
        </ol>
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
        <ol className=" list-decimal list-inside text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed space-y-4 ml-4">
          <li>
            Quando se busca proteger o patrimônio dos sócios e suas famílias de
            eventuais riscos, como processos judiciais, dívidas e outras
            situações que possam afetar os bens e direitos.
          </li>
          <li>
            Quando se almeja garantir a transmissão dos bens de forma adequada,
            evitando conflitos entre herdeiros e minimizando o impacto
            tributário
          </li>
          <li>
            Quando se necessita organizar a gestão das empresas familiares,
            visando aprofundar a separação entre o patrimônio pessoal e
            empresarial, reduzir riscos e maximizar a rentabilidade.
          </li>
          <li>
            Quando se deseja realizar investimentos em novos negócios, visando a
            diversificação de investimentos e a criação de novas fontes de
            renda.
          </li>
          <li>
            Quando se pretende reduzir a carga tributária sobre os rendimentos,
            patrimônio e investimentos dos sócios, aproveitando os benefícios
            fiscais e a estruturação adequada da holding familiar.
          </li>
        </ol>
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
        <ol className=" list-decimal list-inside text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed space-y-4 ml-4">
          <li>
            <b>Defina os objetivos: </b> antes de constituir a holding familiar,
            é importante definir quais são os objetivos a serem alcançados, como
            proteção patrimonial, gestão centralizada, planejamento sucessório,
            entre outros.
          </li>
          <li>
            <b>Escolha do tipo de holding: </b> existem dois tipos de holding
            familiar: a pura, que possui apenas a função de controlar outras
            empresas, e a mista, que além de controlar outras empresas, também
            atua na prestação de serviços.
          </li>
          <li>
            <b>Crie a empresa: </b>é necessário criar a empresa, registrando-a
            na Junta Comercial do estado em que ela será instalada. Além disso,
            é preciso definir o capital social e a estrutura societária da
            holding familiar.
          </li>
          <li>
            <b>Faça a transferência de ações: </b> a transferência das ações das
            empresas controladas para a holding familiar é um processo
            importante na constituição da holding. É necessário avaliar o valor
            das empresas controladas e definir a participação de cada sócio na
            holding.
          </li>
          <li>
            <b>Elaboração do contrato social: </b>o contrato social da holding
            familiar deve conter informações sobre a gestão da empresa,
            distribuição de lucros, sucessão empresarial, entre outros.
          </li>
          <li>
            <b>Planejamento tributário: </b>é fundamental fazer um planejamento
            tributário para a holding familiar, visando a redução de impostos e
            a utilização de benefícios fiscais.
          </li>
          <li>
            <b>Registro na Receita Federal: </b>é necessário fazer o registro da
            holding familiar na Receita Federal, obtendo o CNPJ e cumprindo as
            obrigações fiscais.
          </li>
        </ol>
        <h2
          id="qual-o-papel-do-advogado-na-constituição-de-um-holding-familiar"
          className=" text-4xl my-7"
        >
          8. Qual o papel de um advogado na constituição de um holding familiar?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O <u>advogado especializado em direito empresarial</u> tem um papel
          fundamental na estruturação da holding familiar, uma vez que ele é
          responsável por orientar e auxiliar na elaboração dos documentos
          necessários para a constituição da empresa. Entre as principais
          atividades que podem ser desempenhadas por um advogado especializado
          em holding familiar, destacam-se:
        </p>
        <ol className=" list-decimal list-inside text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed space-y-4 ml-4">
          <li>
            <b>Análise da viabilidade jurídica: </b> o advogado especializado
            irá analisar se a estruturação da holding familiar é viável do ponto
            de vista jurídico, avaliando as normas legais e tributárias que
            podem afetar a empresa.
          </li>
          <li>
            <b>Elaboração do contrato social: </b> o advogado especializado irá
            elaborar o contrato social da holding familiar, contendo informações
            sobre a gestão da empresa, a distribuição de lucros, o planejamento
            sucessório, entre outros.
          </li>
          <li>
            <b>Transferência de ações: </b>o advogado irá orientar na
            transferência das ações das empresas controladas para a holding
            familiar, avaliando o valor das empresas e a participação dos sócios
            na holding.
          </li>
          <li>
            <b>Planejamento tributário: </b>o advogado especializado irá
            realizar o planejamento tributário da holding familiar, visando a
            redução de impostos e a utilização de benefícios fiscais.
          </li>
          <li>
            <b>Proteção patrimonial: </b>o advogado irá auxiliar na
            implementação de medidas de proteção patrimonial para os sócios da
            holding familiar, visando a segurança dos seus bens e direitos.
          </li>
          <li>
            <b>Sucessão empresarial: </b>o advogado irá orientar na estruturação
            do planejamento sucessório da holding familiar, visando a
            transmissão dos bens de forma adequada e a minimização de conflitos
            entre os herdeiros.
          </li>
        </ol>
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
          ajuda de um{" "}
          <b>
            advogado especializado em direito sucessório e em holding familiar
          </b>
          , para garantir que a transferência dos bens ocorra de forma segura e
          de acordo com a legislação aplicável
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
        Se você tem interesse em constituir uma <b> holding familiar</b> ou quer
        saber mais sobre como a holding pode ajudar no seu planejamento
        patrimonial e sucessório, entre em contato com nossos advogados
        especializados em direito empresarial e sucessório. Estamos à disposição
        para ajudá-lo! <br></br>
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
      </article>
    </article>
  );
}
