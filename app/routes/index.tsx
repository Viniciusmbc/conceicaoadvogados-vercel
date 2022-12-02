import CardsAtuacao from "~/components/Cards/CardsAtuacao";

import depoimentosGoogle1 from "../../public/depoimento-2.jpg";

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
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export default function Index() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "deaejawfj",
    },
  });

  return (
    <>
      <Navbar navbar={true} />

      <section className=" h-[100vh] overflow-x-hidden overflow-y-hidden">
        <CarouselWithDots slides={slide} texto={""} escritorio={false} />
      </section>
      <section
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/deaejawfj/image/upload/v1669419285/AdobeStock_298230770_Preview_gndmje.jpg")',
        }}
        className="m-auto  min-h-screen items-center justify-center bg-cover bg-fixed bg-center"
      >
        <h2 className=" mx-auto py-12 text-center font-extrabold text-brown md:text-center md:text-4xl ">
          QUEM SOMOS
        </h2>

        <div className=" grid grid-cols-2  justify-items-center">
          <AdvancedImage
            alt={`Foto do sócio fundador Dr. José Inácio Conceição`}
            style={{
              maxWidth: "85%",
              maxHeight: "80%",
            }}
            cldImg={cld
              .image(`IMG-20221201-WA0037_qmehg7`)
              .format("auto")
              .quality("auto")}
            plugins={[responsive(), placeholder()]}
          />
          <div className=" pr-5 text-lg">
            <p className="  pt-5 leading-loose text-white">
              <strong>CONCEIÇÃO ADVOGADOS</strong> é um escritório moderno,
              versátil e dinâmico, cujo objetivo é levar soluções criativas e
              eficazes aos clientes, tendo como sócio fundador{" "}
              <b>Dr. José Inácio Conceição</b>, profissional com sólida formação
              e vasta experiência em questões de grande complexidade.
            </p>

            <p className="  leading-loose text-white">
              De fato, nossa atuação abarca a experiência adquirida em mais de
              30 anos de advocacia, estando em total sinergia com a
              proatividade, resultando em um serviço diferenciado e
              personalizado ao cliente.
            </p>
            <p className=" leading-loose text-white">
              Somos mais que prestadores de serviços, estamos comprometidos em
              buscar sempre a solução ideal para nosso cliente, trazendo
              resultados objetivos quanto à estratégia traçada.
            </p>

            <p className=" leading-loose text-white">
              Sendo assim, disponibilizamos aos nossos clientes uma assessoria
              jurídica focada nos principais objetivos estratégicos projetados,
              tanto na área consultiva quanto na área contenciosa.
            </p>
          </div>
        </div>
      </section>

      <div className=" w-screen overflow-x-hidden bg-gray/10">
        <section className="mx-auto flex w-screen max-w-screen-xl  flex-col py-7">
          <div className=" flex w-full flex-col  text-center">
            <p className=" flex  justify-center gap-x-2 text-center text-base md:text-2xl ">
              Problemas com  
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
            </p>
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
          <div className=" mx-auto grid grid-flow-row grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 md:gap-6">
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

      <section className="mx-auto max-w-screen-xl py-16 ">
        <h4 className=" mx-auto w-full text-center text-4xl">
          Veja as <span className=" text-brown"> Avaliações</span> de Nossos
          Clientes nas Redes Sociais
        </h4>
        <div className=" flex flex-wrap ">
          <img
            src={depoimentosGoogle1}
            alt="Depoimento de um cliente satisfeito"
          />
          <img
            src={depoimentosGoogle1}
            alt="Depoimento de um cliente satisfeito"
          />
          <img
            src={depoimentosGoogle1}
            alt="Depoimento de um cliente satisfeito"
          />
        </div>
      </section>

      <div className=" h-[100vh] w-screen bg-white ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 700 10"
          preserveAspectRatio="none"
          fill="#FBFBFB"
          className=" mt-4"
        >
          <path d="M350,10L340,0h20L350,10z"></path>
        </svg>
        <section className="mx-auto flex max-w-screen-xl flex-col items-center justify-center h-auto md:min-h-[90vh]">
          <strong className="mx-auto  mt-8 flex items-center justify-center  text-center text-3xl md:text-left md:text-4xl">
            Últimos de Nossos Artigos
          </strong>

          <div className=" h-auto  md:h-[100vh] flex w-screen max-w-screen-xl flex-wrap items-center justify-around gap-y-8 ">
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
        <section className=" mx-auto flex min-h-[50vh] w-screen max-w-screen-xl flex-col items-center justify-center gap-4 px-3  text-[#F5F5F5] md:p-0 ">
          <div className=" flex items-center justify-center">
            <strong className=" text-center text-4xl">
              Fale Conosco! <br className=" md:hidden"></br> Estamos aqui para
              te ouvir!
            </strong>
          </div>
          <div className=" flex flex-col gap-4 text-center">
            <p>
              Estamos localizados em dois endereços na cidade de Santa Maria,
              Rio Grande do Sul.
            </p>
            <p>
              Atendemos de Segunda-Feira à Sexta-feira, das 8:30 ao meio-dia e
              das 14 horas às 18 horas.
            </p>

            <address className=" flex flex-wrap justify-around gap-y-4">
              <a
                href="https://goo.gl/maps/iW4J74Rqbn2boJC67"
                className=" flex flex-col  items-center justify-center my-6"
              >
                ​ Rua André Marques, 718, centro. <br></br> Telefone para
                Contato:{" "}
              </a>
              <a href="tel:+555533175978" target={"_blank"} rel="noreferrer">
                {" "}
                (55) 3317.5978
              </a>
              <span className=" border border-r-white hidden md:block"></span>
              <a
                href="https://goo.gl/maps/KhwPt2e9uodKqoNN8"
                className=" flex flex-col items-center justify-center my-6"
              >
                Av Walter Jobim, 987, Patronato. <br></br> Telefone para
                Contato:{" "}
              </a>
              <a href="tel:+555530275978" target={"_blank"} rel="noreferrer">
                {" "}
                (55) 3027.5978
              </a>{" "}
            </address>
          </div>
          <p className=" text-center mt-6">
            Nossa equipe de advogados também atende via telefone ou e-mail.{" "}
            <br></br> Para nos contatar mais rapidamente, clique no botão verde
            ao lado que você será redirecionado para o whatsapp do escritório.
          </p>
        </section>{" "}
      </div>
    </>
  );
}
