import carteiradetrabalho from "../../../public/carteira-de-trabalho.jpeg";
import criminalImagem from "../../../public/criminalImagem.jpeg";
import { oldmenIcon, policeIcon } from "../common/Icons";

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
      imagem: criminalImagem,
      alt: "Algemas",
      autor: "Matheus Conceição",
      data: "08 de Junho de 2002",
      icone: policeIcon,
      titulo:
        "Consumidor por pedir reembolso de passagem de ônibus?",
      descricao:
        "Sim, é necessário solicitar o reembolso da passagem com no mínimo 3 horas de antecedência do horário previsto para o início da viagem. "
    },
    {
      imagem: carteiradetrabalho,
      alt: "Carteira de Trabalho",
      autor: "Matheus Conceição",
      data: "08 de Junho de 2002",
      icone: oldmenIcon,
      titulo:
        "Partilha de Imóvel Financiado: Como Funciona?",
      descricao:
        "É perfeitamente possível a partilha de imóvel financiado. Sob a luz que o casal vive sob o regime de comunhão parcial de bens, que é o mais comum no Brasil, se tem o seguinte solução para o conflito...",
    },
    {
      imagem: carteiradetrabalho,
      alt: "Carteira de Trabalho",
      autor: "Matheus Conceição",
      data: "08 de Junho de 2002",
      icone: oldmenIcon,
      titulo:
        "Revisão de Toda Vida",
      descricao:
        "O Supremo Tribunal Federal aprovou, na data de 25 de fevereiro, a Revisão da Vida Toda. Neste post, traremos algumas informações para tentar sanar as dúvidas mais frequentes a respeito deste direito. ",
    },
  ];