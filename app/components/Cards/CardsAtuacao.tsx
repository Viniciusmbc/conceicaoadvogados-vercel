import { useState } from "react";

interface CardsAtuacaoProps {
  icon: any;
  titulo: string;
  descricao: any[];
}

export default function CardsAtuacao({
  icon,
  titulo,
  descricao,
}: CardsAtuacaoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className=" flex h-64 w-64 max-w-full  flex-col items-center justify-center border-2 border-gray bg-[#F5F5F5] p-2 text-center text-xl text-brown transition-all duration-700 hover:bg-gray"
    >
      {isHovered ? (
        <ul className=" list-disc gap-y-1 ">
          {descricao.map((descricao, index) => (
            <li
              key={index}
              className=" max-w-fit list-inside list-disc  items-center  justify-center text-ellipsis text-justify text-base text-white"
            >
              {descricao}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <span>{icon}</span>
          <strong className=" flex w-32 items-center justify-center text-xl font-light uppercase">
            {titulo}
          </strong>
        </>
      )}
    </article>
  );
}
