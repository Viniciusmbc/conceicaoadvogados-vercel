import { mailIcon, phoneIcon } from "~/components/common/Icons";
import Logo from "~/components/common/Logo";

export default function Footer() {
  return (
    <footer className=" min-h-[175px] w-screen bg-gray">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center py-6 md:justify-around">
        <Logo footer={true} />
        <div className="  border-r-2 border-brown"></div>
        <address className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white md:mt-0 md:flex-row ">
          <div className=" w-56 text-center text-lg">
            Rua André Marques, 718, Térreo, Centro, <br></br> Santa Maria - RS
          </div>
          <div className=" w-56 text-center text-lg">
            Av. Walter Jobim, 987, Patronato,<br></br> Santa Maria - RS
          </div>
          <div className=" flex flex-col items-center justify-center gap-x-4 ">
            <div className=" flex justify-between gap-y-5 text-white md:gap-y-0 ">
              <span className=" fill-white">{phoneIcon}</span>
              (55) 3027 5978 | (55) 3317 5978
            </div>
          </div>
        </address>
      </div>
      <div className=" mx-auto flex w-full flex-col items-center justify-center gap-x-2 text-sm  text-[#EB9C6E]">
      <a
        className="hover:text-deer "
        href={
          "https://wa.me/53981132509?text=Ol%C3%A1%2C+vi+o+site+que+você+fez+para+o+conceicao+advogados"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>
          Desenvolvido por Vinicius Cáceres{" "}
          <i>
            {" "}
            Web Developer <br></br>{" "}
          </i>
        </p>
        </a>
        <p>Copyright © 2022. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
