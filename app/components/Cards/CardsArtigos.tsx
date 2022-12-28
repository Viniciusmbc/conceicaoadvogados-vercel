import { Link } from "react-router-dom";

interface CardsArtigosProps {
  imagem: any;
  alt: string;
  autor: string;
  data: string;
  icone: any;
  titulo: string;
  descricao: string;
}

export default function CardsArtigos({
  imagem,
  alt,
  autor,
  data,
  icone,
  titulo,
  descricao,
}: CardsArtigosProps) {
  return (
    <article className="w-80 max-w-full bg-white text-black shadow-lg h-auto ">
      <div className=" relative text-black">
        <img
          src={imagem}
          width={384}
          height={100}
          alt={`${alt}`}
          className="  h-52 max-h-full max-w-full"
        />
        <p className=" absolute top-2 right-0 left-3 mt-2 text-xs">
          <span className=" font-bold">{autor}</span>
          <br></br>
          <time dateTime="2022-03-22 19:00"> {data} </time>
        </p>
        <div className=" absolute right-3 top-3 max-w-fit border text-sm">
          {" "}
          {icone}{" "}
        </div>
      </div>

      <div className=" space-y-3 p-5 text-black">
        <h3 className=" text-lg font-bold text-[#6E452D] ">{titulo}</h3>
        <p className=" text-lg leading-relaxed text-[#4F4F4F]">{descricao}</p>
        <Link
          className=" text-[#22140B] font-bold hover:text-gray"
          to={`blog/${titulo
            .replace(/( )+/g, "-")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()}`}
        >
          Continue Lendo
        </Link>
      </div>
    </article>
  );
}
