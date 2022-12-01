import { useState } from "react";
import { Link } from "react-router-dom";
import { genericHamburgerLine } from "~/components/common/Icons";

export default function Noticias() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto flex w-screen gap-x-7 bg-white">
      <aside className=" mt-16 ml-auto mr-16 max-w-screen-xl flex-col items-center hidden md:flex  ">
        <ul className=" text-xl">
          Últimas Postagens
          <li>Herança</li>
          <li>Beneficios Previdenciários</li>
          <li>Aposentadoria</li>
          <li>Habeas Corpus</li>
          <li>Contratos</li>
        </ul>
      </aside>
      <section className=" mr-auto flex flex-wrap max-w-7xl flex-col gap-4">
        <h1 className=" mt-4 text-center pt-14  text-4xl text-brown mx-auto">
          Nossos Artigos
        </h1>

        <div>
          <ul className=" mb-7 flex-wrap text-lg   justify-center gap-x-10 hidden md:flex">
            <li>
              <button
                className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                aria-label="clique para ver assuntos sobre Direito Penal"
              >
                Direito Penal
              </button>
            </li>
            <li>
              <button
                className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                aria-label="clique para ver assuntos sobre Direito de Familia"
              >
                Direito de Familía
              </button>
            </li>
            <li>
              <button
                className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                aria-label="clique para ver assuntos sobre Direito Consumidor"
              >
                Direito do Consumidor
              </button>
            </li>
            <li>
              <button
                className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                aria-label="clique para ver assuntos sobre Direito Previdenciario"
              >
                Direito Previdenciário
              </button>
            </li>
          </ul>
          <div className=" bg-gray/10 my-4 h-12 flex  justify-center items-center md:hidden">
            <button
              className=" group ml-auto mr-8  flex h-10 w-12 flex-col items-center justify-center rounded border-2 border-black md:hidden "
              aria-label="abre o menu de navegação"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div
                className={`${"h-1 w-6 my-[2px]  rounded-full bg-black transition ease transform duration-300"} ${
                  isOpen
                    ? "translate-y-3 rotate-45  group-hover:opacity-100"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${"h-1 w-6 my-1  rounded-full bg-black transition ease transform duration-300"} ${
                  isOpen ? "opacity-0" : "opacity-70 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${"h-1 w-6 my-[2px] rounded-full bg-black transition ease transform duration-300"} ${
                  isOpen
                    ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              />
            </button>
            {isOpen ? (
              <ul className="  p-4 top-[38.5%] text-center mb-7 flex-wrap text-lg absolute  flex-col  justify-center gap-x-10 flex bg-grulo left-1/2">
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito Penal"
                  >
                    Direito Penal
                  </button>
                </li>
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito de Familia"
                  >
                    Direito de Familía
                  </button>
                </li>
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito Consumidor"
                  >
                    Direito do Consumidor
                  </button>
                </li>
                <li className=" py-2">
                  <button
                    className="hover:underline hover:underline-offset-2 hover:text-brown hover:bg-gray/10"
                    aria-label="clique para ver assuntos sobre Direito Previdenciario"
                  >
                    Direito Previdenciário
                  </button>
                </li>
              </ul>
            ) : null}
          </div>

          <section className=" flex flex-col justify-center items-center mx-auto">
            <article>
              <div className=" mb-10 flex flex-wrap gap-x-10 justify-center px-10 md:px-0">
                <img
                  src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/static/optimized/rev-cd6c4c6/app/uploads/2022/09/When-Is-Guardianship-or-Conservatorship-Needed.jpg"
                  width={250}
                  height={180}
                  alt="Familiar"
                />
                <div>
                  <h2 className=" text-lg font-bold">
                    <Link
                      className=" text-lg font-bold mt-2"
                      to="/quem-tem-direito-a-herança"
                    >
                      Quem tem direito a herança?
                    </Link>
                  </h2>
                  <p className=" text-sm mb-2 text-grulo">
                    Postado em 10/10/10
                  </p>
                  <p className=" max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus velit fugiat quod nam aperiam quam excepturi qui
                    itaque nesciunt? Suscipit, quis atque ab dolorum amet
                    veritatis possimus nemo reprehenderit ipsam!
                  </p>
                </div>
              </div>
            </article>
            <article>
              <div className=" mb-10 flex flex-wrap  gap-x-10 justify-center px-10 md:px-0 ">
                <img
                  src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/static/optimized/rev-cd6c4c6/app/uploads/2022/09/When-Is-Guardianship-or-Conservatorship-Needed.jpg"
                  width={250}
                  height={180}
                  alt="Familiar"
                />
                <div>
                  <h2 className=" text-lg font-bold">
                    <Link
                      className=" text-lg font-bold my-2"
                      to="/quem-tem-direito-a-herança"
                    >
                      Quem tem direito a herança?
                    </Link>
                  </h2>
                  <p className=" text-sm mb-2">Postado em 10/10/10</p>
                  <p className=" max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus velit fugiat quod nam aperiam quam excepturi qui
                    itaque nesciunt? Suscipit, quis atque ab dolorum amet
                    veritatis possimus nemo reprehenderit ipsam!
                  </p>
                </div>
              </div>
            </article>
            <article>
              <div className=" mb-10 flex flex-wrap  gap-x-10 justify-center px-10 md:px-0 ">
                <img
                  src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/static/optimized/rev-cd6c4c6/app/uploads/2022/09/When-Is-Guardianship-or-Conservatorship-Needed.jpg"
                  width={250}
                  height={180}
                  alt="Familiar"
                />
                <div>
                  <h2 className=" text-lg font-bold">
                    <Link
                      className=" text-lg font-bold my-2"
                      to="/quem-tem-direito-a-herança"
                    >
                      Quem tem direito a herança?
                    </Link>
                  </h2>
                  <p className=" text-sm mb-2">Postado em 10/10/10</p>
                  <p className=" max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus velit fugiat quod nam aperiam quam excepturi qui
                    itaque nesciunt? Suscipit, quis atque ab dolorum amet
                    veritatis possimus nemo reprehenderit ipsam!
                  </p>
                </div>
              </div>
            </article>
            <article>
              <div className=" mb-10 flex flex-wrap  gap-x-10 justify-center px-10 md:px-0">
                <img
                  src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/static/optimized/rev-cd6c4c6/app/uploads/2022/09/When-Is-Guardianship-or-Conservatorship-Needed.jpg"
                  width={250}
                  height={180}
                  alt="Familiar"
                />
                <div>
                  <h2 className=" text-lg font-bold">
                    <Link
                      className=" text-lg font-bold my-2"
                      to="/quem-tem-direito-a-herança"
                    >
                      Quem tem direito a herança?
                    </Link>
                  </h2>
                  <p className=" text-sm mb-2">Postado em 10/10/10</p>
                  <p className=" max-w-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus velit fugiat quod nam aperiam quam excepturi qui
                    itaque nesciunt? Suscipit, quis atque ab dolorum amet
                    veritatis possimus nemo reprehenderit ipsam!
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
    </div>
  );
}
