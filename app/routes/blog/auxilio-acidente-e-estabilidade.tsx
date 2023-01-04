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
        Auxílio Acidente E Estabilidade
      </h1>
      <p className=" text-gray mb-4 flex items-center justify-center ">
        <span itemProp="author" itemScope itemType="http://schema.org/Person">
          {personIcon}
        </span>
        Guilherme Batú <span className=" ml-2">{agendaIcon}</span> Dez 28, 2022{" "}
        <span className=" ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
            <path d="M12.5 27.417h9.875v-1.334H12.5Zm0-6.75h15v-1.334h-15Zm0-6.75h15v-1.375h-15ZM9.125 33.208q-.958 0-1.646-.687-.687-.688-.687-1.646V9.125q0-.958.687-1.646.688-.687 1.646-.687h21.75q.958 0 1.646.687.687.688.687 1.646v21.75q0 .958-.687 1.646-.688.687-1.646.687Zm.042-1.333h21.666q.417 0 .729-.313.313-.312.313-.729V9.167q0-.417-.313-.729-.312-.313-.729-.313H9.167q-.417 0-.729.313-.313.312-.313.729v21.666q0 .417.313.729.312.313.729.313ZM8.125 8.125V31.875 8.125Z" />
          </svg>
        </span>{" "}
        Direito Previdenciário
      </p>
      <p className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg">
        A história dos acidentes de trabalho é milenar. Entretanto, foi em
        meados dos anos 1700, na Inglaterra da Revolução Industrial, que a
        quantidade de acidentes em atividades laborais suscitou uma pressão
        popular que culminou na “lei da saúde e moral dos aprendizes”, a qual
        estabelecia jornada de trabalho de 12 horas, proibia o trabalho noturno
        e tornava obrigatória a ventilação das instalações
      </p>
      <p className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg">
        Atualmente, observamos avanços nas práticas de segurança do trabalho,
        como a utilização de Equipamentos Individuais de Segurança (EPI), a
        observância de aspectos ergonômicos, adicionais de insalubridade e
        periculosidade e, ainda, a garantia de amparo em caso de acidentes que
        não tenham ocorrido no trabalho, mas que prejudiquem o exercício da
        função. No entanto, ainda não são raros os acidentes e as doenças
        decorrentes da atividade laboral ou que tenham um nexo causal com o
        exercício da função desempenhada pelo trabalhador.
      </p>
      <p className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg">
        Se você sofreu um acidente ou ferimento no trabalho, é importante
        compreender seus direitos e opções sob auxílio-acidente. Um advogado
        pode ajudá-lo a apresentar um pedido de benefícios, e pode orientá-lo
        durante o processo.
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
                href="#o-que-e-auxilio-acidente"
                className=" hover:underline  hover:underline-offset-2"
              >
                1. O que é auxílio-acidente?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#quem-tem-direito-a-esse-beneficio"
                className=" hover:underline  hover:underline-offset-2"
              >
                {" "}
                2. Quem tem direito a esse benefício?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#quais-sao-os-criterios-para-receber-o-auxili-acidente"
                className=" hover:underline  hover:underline-offset-2"
              >
                3. Quais são os critérios para receber o auxílio-acidente?
              </a>
            </li>
            <li className=" text-brown  hover:text-gray">
              <a
                href="#caso-exemplo"
                className="hover:underline  hover:underline-offset-2"
              >
                4. Caso Exemplo
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
        <h2 id="o-que-e-auxilio-acidente" className=" text-4xl my-7">
          1. O que é auxílio-acidente?
        </h2>
        <p
          className=" mb-4 mx-auto text-[#4A5659]  leading-relaxed text-lg"
          id="#o-que-é-uma-ação-revisional-de-juros"
        >
          O auxílio-acidente é um benefício de natureza indenizatória, concedido
          pelo INSS aos trabalhadores que sofrerem acidentes em que as
          consequências resultem em sequelas permanentes e, ainda, reduzam a
          capacidade de exercer a função desempenhada pelo trabalhador. No
          entanto, o Superior Tribunal de Justiça (STJ) já determinou que o
          auxílio-acidente pode ser pedido mesmo que as{" "}
          <strong>lesões sejam mínimas</strong>
          (REsp 1109591/SC) e mesmo que as{" "}
          <strong>sequelas sejam reversíveis</strong> (AgRg REsp 557560/SP).
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          De acordo com o artigo 86 da lei 8.213/91:
          <blockquote className=" italic text-justify px-28 pb-5">
            “O auxílio-acidente será concedido, como indenização, ao segurado
            quando, após consolidação das lesões decorrentes de acidente de
            qualquer natureza, resultarem sequelas que impliquem redução da
            capacidade para o trabalho que habitualmente exercia.”
          </blockquote>
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          É importante ressaltar que o auxílio-acidente se trata de uma
          indenização. Isso quer dizer que ele será incorporado permanentemente
          ao salário, que continuará a ser pago.
        </p>
        <h2 id="quem-tem-direito-a-esse-beneficio" className=" text-4xl my-7">
          2. Quem tem direito a esse benefício?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Somente empregados urbanos e rurais, segurados especiais, empregados
          domésticos e trabalhadores avulsos têm esse direito assegurado e não
          há um tempo mínimo de contribuição exigido. Contribuintes individuais
          ou facultativos não estão elegíveis para pleitear esse benefício.
        </p>
        <h2
          id="quais-sao-os-criterios-para-receber-auxilio-acidente"
          className=" text-4xl my-7"
        >
          3. Quais são os critérios para receber o auxílio-acidente?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Em primeiro lugar, o você deve estar contribuindo para o INSS ou estar
          no período de graça. O período de graça significa o tempo definido em
          lei que o trabalhador <strong>deixa de contribuir</strong> para o
          INSS, mas que ainda <strong>mantém</strong> a qualidade de segurado.
        </p>
        <p className="text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Além disso, deve ter
          <strong className=" ml-1">
            sofrido acidente ou adquirido doença de qualquer natureza
          </strong>
          , desde que acarrete em{" "}
          <strong>
            redução parcial e permanente da capacidade para o trabalho.
          </strong>{" "}
          Deve-se atentar que é necessária a existência do{" "}
          <strong>nexo causal</strong> , ou seja, uma relação entre o acidente e
          a redução da capacidade laboral, o qual será atestado por um{" "}
          <strong>perito </strong>
          designado pelo INSS.
        </p>
        <h2 id="caso-exemplo" className=" text-4xl my-7">
          4. Caso Exemplo
        </h2>
        <img
          className=" mx-auto"
          src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,w_726/v1672235017/imagemMartaExemplo_vdzv3h.webp"
          width={726}
          height={454}
          alt="Ilustração de Serviços Gerais"
        />
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed font-bold">
          Para compreender melhor como funciona o auxílio-acidente, vamos tomar
          como exemplo o caso da nossa personagem Marta:
        </p>{" "}
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Marta é uma <strong>trabalhadora dos serviços gerais</strong> em uma
          empresa terceirizada por um estabelecimento escolar da cidade. O
          trabalho de Marta consiste em{" "}
          <strong>
            limpar os banheiros, passar pano nos corredores, limpar as salas de
            aula, as salas dos professores e cuidar do lixo ao final do dia.
          </strong>{" "}
          Ela está em constante movimento e precisa subir e descer vários lances
          de escada ao longo da sua jornada laboral.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Certo dia, ao voltar para casa, Marta foi vítima de um{" "}
          <strong>atropelamento</strong>, cujas sequelas a tornaram{" "}
          <strong> paraplégica</strong>.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Neste caso, Marta terá <strong>direito ao auxílio-acidente:</strong>
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          {" "}
          <br></br> Em primeiro lugar, Marta é empregada de uma empresa privada,
          logo, pode-se presumir que ela seja{" "}
          <strong>segurada do INSS. </strong>
          Em segundo lugar, sofreu um acidente não relacionado ao trabalho, mas
          que deixou <strong>sequelas para o resto da vida</strong>, sobretudo
          para o desempenho das suas funções no trabalho. Houve redução parcial
          da capacidade de trabalho, pois Marta{" "}
          <strong> pode ser readaptada a outra função na empresa</strong> ,
          porém a redução da capacidade é permanente, uma vez que a condição
          como paraplégica <strong>é para o resto da vida</strong>. Há{" "}
          <strong>
            relação entre o acidente e a redução da capacidade de trabalho
          </strong>
          , porque as funções desempenhadas por ela consistem em utilizar suas
          capacidades locomotoras.
        </p>
        <h2 id="qual-o-valor-do-auxilio-acidente" className=" text-4xl my-7">
          5. Qual o valor do auxílio-acidente?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O cálculo do valor do Auxílio-Acidente dependerá de quando ocorreu o
          fato gerador. Isso porque, em decorrência da MP 905/2019, acidentes
          ocorridos entre 12/11/2019 e 19/04/2020 estão sob o que definido nessa
          medida provisória. Entretanto, como essa MP não foi convertida lei, os
          acidentes ocorridos depois disso, contam com regras distintas.
        </p>
        <em className="mb-4 text-3xl text-[#4A5659]">
          Acidentes ocorridos até 11/11/2019
        </em>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O benefício será <strong>50% do valor da sua média.</strong>{" "}
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Sendo assim, será feita a média aritmética dos seus 80% maiores
          salários de contribuição desde julho de 1994.
        </p>
        <em className="mb-4 text-3xl text-[#4A5659]">
          Acidentes ocorridos entre 12/11/2019 e 19/04/2020
        </em>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Quem se acidentou entre 12/11/2019 e 19/04/2020, está sujeito ao que
          foi estabelecido pela MP 905/2019. Desse modo, o valor do
          auxílio-acidente será 50% do valor da aposentadoria por invalidez.
        </p>
        <em className="mb-4 text-3xl text-[#4A5659]">
          Acidentes ocorridos a partir de 20/04/2020
        </em>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O valor do benefício será de 50% da média, assim como para os
          acidentes ocorridos até 11/11/2019
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          No entanto, agora é a média aritmética de todos (100%) os seus
          salários de contribuição, desde julho de 1994.
        </p>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O auxílio-acidente paga
          <strong className="mx-1">
            50% sobre a média de todas as contribuições previdenciárias.
          </strong>
          Assim, o valor pode ficar abaixo do piso da Previdência Social, o que
          significa que pode vir abaixo do salário-mínimo conforme a lei
          estabelece:
        </p>
        <blockquote className=" italic text-justify px-28 pb-5">
          § 1º O auxílio-acidente mensal corresponderá a cinquenta por cento do
          salário-de-benefício e será devido, observado o disposto no § 5º, até
          a véspera do início de qualquer aposentadoria ou até a data do óbito
          do segurado. (artigos. 34 e 86, § 1º, da Lei 8.213/91)
        </blockquote>
        <h2
          id="a-partir-de-quando-e-devido-o-auxilio"
          className=" text-4xl my-7"
        >
          6. A partir de quando é devido o Auxílio?
        </h2>
        <p className="text-lg mb-4 mx-auto text-[#556367]  leading-relaxed">
          O Auxílio-Acidente será devido no <strong>dia seguinte</strong> ao
          <strong> término </strong>do <strong>Auxílio-Doença.</strong>
        </p>
        <p className="text-lg mb-4 mx-auto text-[#556367]  leading-relaxed">
          O Auxílio-Acidente terá como início a data em que você entrou com o
          requerimento do benefício no INSS ou, no dia seguinte ao término do
          auxílio-doença, caso tenha sido solicitado.
        </p>
        <h2
          id="poss-acumular-esse-auxilio-com-outros-beneficios-previdenciarios"
          className=" text-4xl my-7"
        >
          7. Posso acumular esse auxílio com outros benefícios previdenciários?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          O Auxílio-Acidente poderá ser cumulado com quaisquer outros benefícios
          do INSS, exceto com auxílio-doença (desde que se trate da mesma doença
          ou acidente), com qualquer categoria de aposentadoria ou com outro
          auxílio-acidente.
        </p>
        <h2
          id="quem-recebe-auxilio-acidente-tem-direito-a-estabilidade"
          className=" text-4xl my-7"
        >
          8. Quem recebe auxílio-acidente tem direito à estabilidade?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          No <strong>período mínimo de 12 meses</strong>, o trabalhador terá o{" "}
          <strong>seu emprego assegurado</strong>. Portanto, a manutenção do
          contrato é garantida mesmo após o encerramento do auxílio-doença, uma
          vez que este independe do recebimento do auxílio-acidente.
        </p>
        <h2
          id="auxilio-acidente-acumula-com-aposentadoria"
          className=" text-4xl my-7"
        >
          9. Auxílio-Acidente acumula com aposentadoria?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          A jurisprudência do Superior Tribunal de Justiça preconiza que é
          possível acumular auxílio-acidente e aposentadoria,
          <strong>
            desde que ambos os benefícios sejam anteriores à vigência da Lei n.
            9.528/97
          </strong>
          , que vedou a cumulação do auxílio-acidente com a aposentadoria. (RESP
          n.º 1.296.673-MG,, consolidada pela edição da Súmula n.º 507 do
          Tribunal da Cidadania,
        </p>
        <blockquote className=" italic text-justify px-28 pb-5">
          “a acumulação de auxílio-acidente com aposentadoria pressupõe que a
          lesão incapacitante e a aposentadoria sejam anteriores a 11/11/97,
          observado o critério do artigo 23 da lei 8.213/91 para definição do
          momento da lesão nos casos de doença profissional ou do trabalho.”
        </blockquote>
        <h2
          id="como-dar-entrada-no-auxilio-acidente"
          className=" text-4xl my-7"
        >
          10. Como dar entrada no Auxílio-Acidente?
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Em um primeiro momento, deve-se agendar uma perícia médica por meio do
          site Meu INSS (https://meu.inss.gov.br)
        </p>
        <img
          src="https://res.cloudinary.com/deaejawfj/image/upload/c_scale,w_800/v1672236230/imagemINSS_pf9jrt.webp"
          width={800}
          height={671}
          alt="Imagem referente ao meu INSS para pedir auxílio-Acidente"
          className=" mb-4"
        />
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Em seguida, você deve reunir os documentos{" "}
          <strong>
            {" "}
            (CPF, Carteira de Trabalho, RG ou Carteira de Motorista, Atestados
            médicos, receitas médicas, exames, Comunicação de acidente de
            trabalho (CAT), caso aplicável ao seu caso)
          </strong>{" "}
          que comprovem a redução da sua capacidade de trabalho. Após, você vai
          comparecer à perícia médica, em que passará por uma entrevista e por
          exames. Feito isso, você deve aguardar e proceder à consulta no site
          para verificar se o seu auxílio-acidente foi concedido ou não.
        </p>
        <h2 id="conclusao" className=" text-4xl my-7">
          Conclusão
        </h2>
        <p className=" text-lg mb-4 mx-auto text-[#4A5659]  leading-relaxed">
          Em resumo, o artigo aborda algumas das perguntas mais comumente feitas
          sobre
          <strong className="mx-1">
            auxílio-acidente e direito à estabilidade do trabalhador.
          </strong>
          Se você tiver alguma pergunta adicional, ou quiser mais informações,
          não hesite em{" "}
          <strong> entrar em contato com nosso escritório. </strong>
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
