import carteiradetrabalho from "../../../public/carteira-de-trabalho.jpeg";
import criminalImagem from "../../../public/criminalImagem.jpeg";
import { articleIcon, oldmenIcon, policeIcon } from "../common/Icons";

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
];
