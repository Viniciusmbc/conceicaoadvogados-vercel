import CardsAtuacao from "~/components/Cards/CardsAtuacao";

// Components
import CardsArtigos from "~/components/Cards/CardsArtigos";
import CarouselWithDots from "~/components/Carousel/CarouselWithDots";

// Typewriter Effect
import type { Key } from "react";
import Typewriter from "typewriter-effect";
import { whatsappIcon } from "~/components/common/Icons";
import Navbar from "~/components/Layout/Navbar/Navbar";
import { artigos } from "~/components/utils/artigos";

import { cards } from "~/components/utils/atuacao";
import { slide } from "~/components/utils/slide";

export default function Index() {
  return (
    <>
      <Navbar navbar={true} />

      <section className=" h-[100vh] overflow-x-hidden overflow-y-hidden">
        <CarouselWithDots slides={slide} texto={""} escritorio={false} />
      </section>
      <section className="backgroundImage m-auto min-h-screen items-center justify-center bg-cover bg-fixed bg-center py-10">
        <strong className=" flex mx-auto py-10 text-2xl text-center font-extrabold text-white md:text-center md:text-4xl justify-center items-center ">
          QUEM SOMOS
        </strong>

        <article className=" grid grid-flow-row auto-rows-max items-center    justify-items-center max-w-screen-xl justify-center mx-auto ">
          <div className=" mx-auto px-5 text-lg">
            <p className=" text-justify  md:pt-5 leading-loose text-white">
              <strong>CONCEIÇÃO ADVOGADOS</strong> é um escritório moderno,
              versátil e dinâmico, cujo objetivo é levar soluções criativas e
              eficazes aos clientes, tendo como sócio fundador{" "}
              <b>Dr. José Inácio Conceição</b>, profissional com sólida formação
              e vasta experiência em questões de grande complexidade.
            </p>
            <img
              className=" h-[344px] w-80 mx-auto my-5"
              src="https://res.cloudinary.com/deaejawfj/image/upload/v1670108037/imagem-socio-fundador-conceica-advogados.webp"
              alt="Imagem do Sócio Fundador do Conceiçaao Advogados"
              srcSet="https://res.cloudinary.com/deaejawfj/image/upload/v1670108037/imagem-socio-fundador-conceica-advogados.webp 1x"
            />

            <p className=" text-justify  leading-loose text-white">
              De fato, nossa atuação abarca a experiência adquirida em mais de
              30 anos de advocacia, estando em total sinergia com a
              proatividade, resultando em um serviço diferenciado e
              personalizado ao cliente.
            </p>
            <p className=" text-justify leading-loose text-white">
              Somos mais que prestadores de serviços, estamos comprometidos em
              buscar sempre a solução ideal para nosso cliente, trazendo
              resultados objetivos quanto à estratégia traçada.
            </p>

            <p className=" text-justify leading-loose text-white">
              Sendo assim, disponibilizamos aos nossos clientes uma assessoria
              jurídica focada nos principais objetivos estratégicos projetados,
              tanto na área consultiva quanto na área contenciosa.
            </p>
          </div>
        </article>
      </section>

      <div className=" w-screen overflow-x-hidden bg-brown">
        <section className="mx-auto flex w-screen max-w-screen-xl  flex-col py-7">
          <strong className=" flex mx-auto my-5 text-4xl text-white">
            Equipe
          </strong>
          <p className="  leading-loose text-white px-5 text-center">
            Nossa equipe é formada por profissionais experientes,
            especializados, com formação sólida e em constante aperfeiçoamento,
            capaz de proporcionar todo suporte para o desenvolvimento dos
            trabalhos, com eficácia e qualidade.
          </p>
          <div className=" grid grid-rows-3 mx-auto px-5 md:grid-flow-col  gap-8 md:grid-cols-3 md:grid-rows-1  mt-10 ">
            <article className=" h-auto w-80 p-6 flex flex-col justify-center border border-white">
              <h2 className=" mt-1 mx-auto text-center text-2xl text-[#D6D6D6]">
                MISSÃO
              </h2>
              <p className="  text-center leading-loose text-[#D6D6D6] ">
                Promover um serviço personalizado, de qualidade e humanizado
                para levar, aos nossos clientes, as melhores soluções aos seus
                conflitos e para que alcancem os seus objetivos.
              </p>
            </article>
            <article className="h-auto w-80 p-6 flex flex-col justify-center border border-white">
              <h2 className=" pb-4 mx-auto text-center text-2xl text-[#D6D6D6]">
                VALORES
              </h2>
              <p className=" pb-2 px-6 text-center  leading-loose text-white">
                Transparência, respeito, ética, honestidade, sigilo de
                informações e lealdade.
              </p>
            </article>
            <article className="h-auto w-80 p-6 flex flex-col justify-center border border-white">
              <h2 className=" mx-auto text-center text-2xl text-[#D6D6D6]">
                VISÃO
              </h2>
              <p className=" text-center  leading-loose text-white ">
                Manter-se como um escritório de advocacia de referência nas
                esferas em que atuamos, proporcionando constantemente
                atendimento eficaz aos clientes.
              </p>
            </article>
          </div>
        </section>
      </div>

      <div className=" w-screen overflow-x-hidden bg-gray/25">
        <section className="mx-auto flex w-screen max-w-screen-xl  flex-col py-7">
          <div className=" flex w-full flex-col  text-center">
            <div className=" flex  justify-center gap-x-2 text-center text-base md:text-2xl ">
              <p> Problemas com </p>
              <Typewriter
                options={{
                  strings: [
                    "Direito do Trabalho?",
                    "Direito de Família?",
                    "Direito Previdenciário?",
                    "Direito Penal?",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            <div className=" flex ">
              <p className=" my-4 mx-auto flex w-full flex-wrap items-center justify-center text-base md:text-2xl ">
                {" "}
                Fale com um de nossos advogados pelo nosso{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://wa.me/5555992560707?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+advogado"
                  }
                  className=" flex max-w-fit items-center justify-center gap-x-1   text-[#1BE817] border border-black ml-2 py-2 px-4   bg-[#332015]   "
                >
                  <span className=" text-[#1BE817]">{whatsappIcon}</span>
                  WhatsApp !
                </a>
              </p>
            </div>
            <p className=" px-4 md:px-0">
              Atendimento <i>ágil</i> e <i>transparante</i> para que seu
              problema seja solucionado o mais <i>rápido</i> possível!
            </p>
          </div>
          <h3 className=" mx-auto my-10 text-4xl text-brown">
            Áreas de Atuação
          </h3>
          <div className="mx-auto grid grid-flow-row grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 md:gap-6">
            {cards.map(
              (
                {
                  icon,
                  titulo,
                  descricao,
                }: { icon: any; titulo: string; descricao: any },
                index: Key | null | undefined
              ) => (
                <CardsAtuacao
                  key={index}
                  icon={icon}
                  titulo={titulo}
                  descricao={descricao}
                />
              )
            )}
          </div>
        </section>
      </div>

      <div className="w-screen bg-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 10"
          preserveAspectRatio="none"
          fill="#FBFBFB"
          className=" mt-4"
        >
          <path d="M350,10L340,0h20L350,10z"></path>
        </svg>
        <section className="mx-auto flex max-w-screen-xl flex-col items-center justify-center  md:h-auto">
          <strong className="mx-auto  mt-8 flex items-center justify-center  text-center text-3xl md:text-left md:text-4xl">
            Últimos de Nossos Artigos
          </strong>

          <div className=" overflow-y-scroll min-h-screen md:py-6 md:h-auto flex w-screen max-w-screen-xl flex-wrap items-center justify-around gap-y-8 ">
            {artigos.map(
              (
                { imagem, alt, autor, data, icone, titulo, descricao },
                index
              ) => (
                <CardsArtigos
                  key={index}
                  imagem={imagem}
                  alt={alt}
                  autor={autor}
                  data={data}
                  icone={icone}
                  titulo={titulo}
                  descricao={descricao}
                />
              )
            )}
          </div>
        </section>
      </div>

      <div className=" min-w-[100vw] bg-brown py-10 ">
        <section className=" mx-auto flex h-auto  w-screen max-w-screen-xl flex-col items-center justify-center gap-4 px-3  text-[#F5F5F5] md:p-0 ">
          <div className=" flex items-center justify-center">
            <strong className=" text-center text-4xl mb-5">
              Fale Conosco! <br className=" md:hidden"></br> Estamos aqui para
              te ouvir!
            </strong>
          </div>
          <div className=" flex flex-col gap-4 text-center">
            <p>
              Estamos localizados em <b>dois endereços</b> na cidade de{" "}
              <u>Santa Maria</u>, Rio Grande do Sul.
            </p>
            <p>
              Atendemos de Segunda-Feira à Sexta-feira, das 8:30 ao meio-dia e
              das 14 horas às 18 horas.
            </p>

            <address className=" flex flex-wrap justify-around gap-y-4">
              <div>
                <a
                  href="https://goo.gl/maps/iW4J74Rqbn2boJC67"
                  className=" flex flex-col  items-center justify-center"
                >
                  ​ Rua André Marques, 718, centro. <br></br> Telefone para
                  Contato:{" "}
                </a>
                <a href="tel:+555533175978" target={"_blank"} rel="noreferrer">
                  {" "}
                  (55) 3317.5978
                </a>
              </div>
              <span className=" border border-r-white hidden md:block"></span>
              <div>
                <a
                  href="https://goo.gl/maps/KhwPt2e9uodKqoNN8"
                  className=" flex flex-col items-center justify-center"
                >
                  Av Walter Jobim, 987, Patronato. <br></br> Telefone para
                  Contato:{" "}
                </a>
                <a href="tel:+555530275978" target={"_blank"} rel="noreferrer">
                  {" "}
                  (55) 3027.5978
                </a>{" "}
              </div>
            </address>
          </div>
          <p className=" text-center mt-6">
            Nossa equipe de advogados também atende via telefone ou e-mail.{" "}
            <br></br> Para nos contatar mais rapidamente, clique no{" "}
            <span className="text-[#25d366] mr-1">botão verde</span>e você será
            redirecionado para o whatsapp do escritório.
          </p>
        </section>{" "}
      </div>
    </>
  );
}
