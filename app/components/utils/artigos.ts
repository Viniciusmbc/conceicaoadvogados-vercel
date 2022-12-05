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
      imagem: "https://instagram.fpoa41-1.fna.fbcdn.net/v/t51.2885-15/236517012_2934366336832117_5745806041068595682_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fpoa41-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=0-a2UQ4oUn4AX-X3Le8&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjYzOTUxMzUyMzk3MjEyOTM2OQ%3D%3D.2-ccb7-5&oh=00_AfDwB9eMqNrWHAyW1bmY4Gn6ECTfnx3JjAyXPKv0nVforA&oe=6391C117&_nc_sid=30a2ef",
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