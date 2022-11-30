import carteiradetrabalho from "../../../public/carteira-de-trabalho.jpeg";
import consumidorImagem from "../../../public/consumidorImagem.jpeg";
import contratosImagem from "../../../public/contratosImagem.jpeg";
import criminalImagem from "../../../public/criminalImagem.jpeg"
import { TituloAdv } from "../Titulo/TituloAdv";

  export const slide: { imagem: any; texto: string | any }[] = [
    {
      imagem:
        "https://res.cloudinary.com/deaejawfj/image/upload/v1669579250/conceicaofotorecepcao_boyyos.webp",
      texto: TituloAdv
    },
    {
      imagem: criminalImagem,
      texto: "Direito Penal",
    },
    {
      imagem: carteiradetrabalho,
      texto: "Aposentadoria e Benefícios Previdenciários",
    },
    { imagem: consumidorImagem, texto: "Relações de Consumo" },
    {imagem: contratosImagem, texto: "Revisão de Contratos"},
  ];
