import { useState } from "react";
import { Link } from "react-router-dom";
import { genericHamburgerLine } from "~/components/common/Icons";

export default function Noticias() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-auto flex w-screen gap-x-7 bg-white">
      <aside className=" mt-16 ml-auto mr-16 flex max-w-screen-xl flex-col items-center  ">
        <ul className=" text-xl">
          Últimas Postagens
          <li>assunto x</li>
          <li>assunto x</li>
          <li>assunto x</li>
          <li>assunto x</li>
          <li>assunto x</li>
        </ul>
      </aside>
      <section className=" mr-auto flex flex-wrap max-w-7xl flex-col gap-4">
        <h1 className=" mt-4 text-center  text-4xl text-brown mx-auto">
          Nossos Artigos
        </h1>

        <div>
          <ul className=" mb-7 flex-wrap   justify-center gap-x-10 hidden md:flex">
            <li>
              <button aria-label="clique para ver assuntos sobre Direito Penal">
                Direito Penal
              </button>
            </li>
            <li>
              <button aria-label="clique para ver assuntos sobre Direito de Familia">
                Direito de Familía
              </button>
            </li>
            <li>
              <button aria-label="clique para ver assuntos sobre Direito Consumidor">
                Direito do Consumidor
              </button>
            </li>
            <li>
              <button aria-label="clique para ver assuntos sobre Direito Previdenciario">
                Direito Previdenciário
              </button>
            </li>
          </ul>
          <button
            className=" group absolute z-50 mt-2 ml-2 flex h-12 w-12 flex-col items-center justify-center rounded border-2 border-brown md:hidden "
            aria-label="abre o menu de navegação"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
          <article>
            <div className=" mb-10 flex flex-wrap gap-x-10">
              <img
                src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/static/optimized/rev-cd6c4c6/app/uploads/2022/09/When-Is-Guardianship-or-Conservatorship-Needed.jpg"
                width={250}
                height={180}
                alt="Familiar"
              />
              <div>
                <h2 className=" text-lg font-bold">
                  <Link to="/quem-tem-direito-a-herança">
                    Quem tem direito a herança?
                  </Link>
                </h2>
                <p className=" text-sm">Postado em 10/10/10</p>
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
            <div className=" mb-10 flex flex-wrap  gap-x-10 ">
              <img
                src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/static/optimized/rev-cd6c4c6/app/uploads/2022/09/When-Is-Guardianship-or-Conservatorship-Needed.jpg"
                width={250}
                height={180}
                alt="Familiar"
              />
              <div>
                <header className=" text-lg font-bold">
                  Quem tem direito a herança?
                </header>
                <p className=" text-sm">Postado em 10/10/10</p>
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
            <div className=" mb-10 flex flex-wrap  gap-x-10 ">
              <img
                src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/static/optimized/rev-cd6c4c6/app/uploads/2022/09/When-Is-Guardianship-or-Conservatorship-Needed.jpg"
                width={250}
                height={180}
                alt="Familiar"
              />
              <div>
                <header className=" text-lg font-bold">
                  Quem tem direito a herança?
                </header>
                <p className=" text-sm">Postado em 10/10/10</p>
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
            <div className=" mb-10 flex flex-wrap  gap-x-10 ">
              <img
                src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/static/optimized/rev-cd6c4c6/app/uploads/2022/09/When-Is-Guardianship-or-Conservatorship-Needed.jpg"
                width={250}
                height={180}
                alt="Familiar"
              />
              <div>
                <header className=" text-lg font-bold">
                  Quem tem direito a herança?
                </header>
                <p className=" text-sm">Postado em 10/10/10</p>
                <p className=" max-w-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus velit fugiat quod nam aperiam quam excepturi qui
                  itaque nesciunt? Suscipit, quis atque ab dolorum amet
                  veritatis possimus nemo reprehenderit ipsam!
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
