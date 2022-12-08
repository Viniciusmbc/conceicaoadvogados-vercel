// Remix
import { Link } from "@remix-run/react";

// React
import { useEffect, useState } from "react";

// Icons
import {
  facebookIcon,
  genericHamburgerLine,
  InstagramIcon,
  phoneIcon,
  whatsappIcon,
} from "~/components/common/Icons";
import Logo from "~/components/common/Logo";

export default function Navbar({ navbar }: { navbar: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [changeNav, setChangeNav] = useState(false);

  const itensNav: string[] = ["Blog", "O Escritório"];

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 250) {
      setChangeNav(true);
    } else {
      setChangeNav(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header
      className={`${
        navbar
          ? "absolute top-0 z-50 h-auto  bg-gray/10"
          : " sticky  h-24 bg-gray"
      }   min-w-[100vw] overflow-x-hidden  border-b border-white ${
        changeNav ? "sticky bg-gray" : "absolute top-0 z-50   bg-gray/10"
      } `}
    >
      <div className=" flex min-w-full  border-b border-white  text-sm text-white ">
        {!changeNav && (
          <div
            className={` fill-white mx-auto flex w-full max-w-screen-xl items-center justify-center py-1 px-4 ${
              !navbar && "hidden"
            }`}
          >
            {" "}
            {phoneIcon}
            <a
              href="tel:+555530275978"
              target={"_blank"}
              rel="noreferrer"
              className=" mr-2"
            >
              (55) 3027 5978
            </a>
            |{" "}
            <a
              href="tel:+555533175978"
              target={"_blank"}
              rel="noreferrer"
              className="ml-2"
            >
              (55) 3317 5978
            </a>{" "}
            <div className=" ml-auto flex items-center justify-center pr-4">
              <a
                href="https://www.facebook.com/profile.php?id=773922122693598"
                target={"_blank"}
                rel="noreferrer"
                aria-label="clique para entrar no facebok do Escritório Conceição Advogados"
                className=" w-10 h-10 md:w-auto md:h-auto"
              >
                {facebookIcon}
              </a>
              <a
                href="https://www.instagram.com/conceicaoadvogadossm/"
                target={"_blank"}
                rel="noreferrer"
                aria-label="clique para entrar no instagram do Escritório Conceição Advogados"
                className=" w-10 h-10 md:w-auto md:h-auto"
              >
                {InstagramIcon}
              </a>
            </div>
          </div>
        )}
      </div>
      <nav className="  mx-auto w-[100vw] max-w-7xl pt-2  px-7">
        <ul className=" hidden md:flex md:items-center md:justify-end md:gap-x-8 md:px-5">
          {!changeNav ? (
            <li className=" mr-auto  pl-4">
              <figure
                className={`flex  w-fit max-w-full  flex-col items-center 
         justify-center
      `}
              >
                <img
                  src="https://res.cloudinary.com/deaejawfj/image/upload/v1669288514/logoconceicaoadv_pqd5oa_1_bhwvcx.png"
                  alt="logo do Conceição Advogados"
                  height={50}
                  width={50}
                  className={"w-12"}
                />
                <figcaption
                  className={
                    " mt-1 max-w-fit text-center  text-lg font-extrabold leading-none       text-white"
                  }
                >
                  CONCEIÇÃO <br></br>
                  <span
                    className={` text-sm
           font-light tracking-wider`}
                  >
                    ADVOGADOS
                  </span>{" "}
                </figcaption>
              </figure>
            </li>
          ) : null}{" "}
          {changeNav && (
            <li className=" mr-auto py-1 pl-1">
              <figure className=" flex items-center justify-center gap-x-2">
                <img
                  src="https://res.cloudinary.com/deaejawfj/image/upload/v1669288514/logoconceicaoadv_pqd5oa_1_bhwvcx.png"
                  alt="logo do Conceição Advogados"
                  height={40}
                  width={40}
                  className={" h-11 w-11"}
                />
                <figcaption className=" text-sm font-light uppercase tracking-wider text-white">
                  <span className=" font-bold">Conceição</span> <br></br>{" "}
                  Advogados
                </figcaption>
              </figure>
            </li>
          )}
          <li className=" text-lg text-white hover:bg-deer  hover:underline hover:decoration-2 hover:underline-offset-4">
            <Link to="/">Início</Link>
          </li>
          <li className="  text-lg text-white hover:bg-deer hover:underline hover:underline-offset-4">
            <Link
              to="/consulte-seu-processo
            "
            >
              Consulte seu Processo
            </Link>
          </li>
          <li
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link
              to="/areas-de-atuacao"
              className=" text-lg text-white hover:bg-deer  hover:underline hover:underline-offset-4"
            >
              Áreas de Atuação
            </Link>
          </li>
          {itensNav.map((item, index) => (
            <li
              className=" text-lg text-white hover:bg-deer hover:underline hover:underline-offset-4"
              key={index}
            >
              <Link
                to={`/${item
                  .replace(/( )+/g, "")
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase()}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <>
          <button
            className=" group absolute z-50  mt-4 flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-brown md:hidden "
            aria-label="abre o menu de navegação"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <span
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <span
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
          <div className=" ml-auto w-fit md:hidden">
            <Logo footer={false} />
          </div>
        </>
        {isOpen && (
          <nav
            className={`fixed top-0 left-0 bottom-0 flex w-[80%] max-w-sm flex-col overflow-y-auto border-r bg-gray py-6 px-6 `}
          >
            <ul className="z-50  mt-24 space-y-8">
              <li className=" hover:text-gold text-lg text-white">
                <Link to="/">Início</Link>{" "}
              </li>
              <li className=" hover:text-gold text-lg text-white">
                <Link to="/consulte-seu-processo">Consulte seu Processo</Link>{" "}
              </li>
              <li className="hover:text-gold text-lg text-white hover:underline-offset-1">
                <Link to="/areas-de-atuacao">Áreas de Atuação</Link>
              </li>

              <div>
                <ul>
                  <li className="hover:text-gold text-lg text-white">
                    <Link to="/blog" className=" hover:text-gold flex">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <li className="hover:text-gold text-lg text-white">
                <Link to="/oescritorio">O Escritório</Link>
              </li>
              <li>
                <Link
                  to="/"
                  className=" border-green hover:border-gold flex items-center justify-center gap-x-1 border p-3 text-xl text-[#128c7e] hover:text-white "
                >
                  <span className=" text-[#128c7e]">{whatsappIcon}</span>
                  WhatsApp
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </header>
  );
}
