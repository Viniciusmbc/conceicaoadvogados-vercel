import { articleIcon, oldmenIcon } from "../common/Icons";

export const artigos: {
  imagem: any;
  alt: string;
  autor: string;
  data: string;
  icone: any;
  titulo: string;
  descricao: string;
}[] = [
  {
    imagem:
      "https://res.cloudinary.com/deaejawfj/image/upload/c_scale,w_440/v1670850655/revisionalCapa.webp",
    alt: "Imagem para Revisão de Contrato",
    autor: "Guilherme Batú",
    data: "12 de Dezembro de 2022",
    icone: articleIcon,
    titulo: "Revisional de Juros Abusivos",
    descricao:
      "Você está financiando um imóvel ou um veículo e percebeu que o valor dos juros cobrados nas prestações são muito altos? O banco esta cobrando juros abusivos nas faturas atrasadas do seu cartão de crédito? Você sabia que é direito seu pedir revisão dos juros e, também, o ressarcimento por cobranças indevidas? Leia nosso artigo e retire sua dúvidas!",
  },
  {
    imagem:
      "https://res.cloudinary.com/deaejawfj/image/upload/c_scale,q_auto:eco,w_440/v1672239768/people-with-home-safety-concept_zhvaj4.webp",
    alt: "Ilustração de um acidente de trabalho",
    autor: "Guilherme Batú",
    data: "28 de Dezembro de 2022",
    icone: oldmenIcon,
    titulo: "Auxilio-Acidente e Estabiidade",
    descricao:
      "O auxílio-acidente é um benefício previdenciário, concedido pelo INSS aos trabalhadores que sofrerem acidentes em que as consequências resultem em sequelas permanentes e, ainda, reduzam a capacidade de exercer a função desempenhada pelo trabalhador. Este artigo explica o que é o auxilio-acidente, casos em que se aplica e como requerer junto ao INSS. Confira!",
  },
];
