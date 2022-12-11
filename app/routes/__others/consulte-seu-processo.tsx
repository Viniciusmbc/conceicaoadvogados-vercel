export default function ConsulteSeuProcesso() {
  return (
    <section className="mx-auto flex h-screen py-6 px-6  max-w-screen-xl  flex-col items-center">
      <h1 className=" flex mt-24 text-xl md:text-center ">
        {" "}
        Para consultar seu processo, basta copiar e colar o número do processo
        fornecido pelo seu advogado em um dos links abaixo!
      </h1>

      <div className=" my-6 ">
        <p className=" my-5 text-lg">
          Acesso ao sites dos Principais Tribunais do Rio Grande do Sul:
        </p>
        <ul className=" px-3 list-item list-disc space-y-4 text-brown underline underline-offset-1">
          <li className=" hover:text-gray">
            <a href="https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index">
              Tribunal de Justiça do Rio Grande do Sul (tjrs) (Justiça Estadual)
            </a>
          </li>
          <li className=" hover:text-gray">
            <a href="https://www.trt4.jus.br/portais/trt4/consulta-rapida">
              TRT 4 (Justiça do Trabalho)
            </a>
          </li>
          <li className=" hover:text-gray">
            <a href="https://consulta.trf4.jus.br/trf4/controlador.php?acao=consulta_processual_pesquisa">
              TRF 4 (Justiça Federal)
            </a>
          </li>
        </ul>
      </div>
      <p className=" mb-3 text-lg">Ficou com alguma dúvida? </p>
      <p className=" mb-3 text-lg">
        Entre em contato com um de nossos advogados!{" "}
      </p>
      <p className=" text-lg">
        Eles irão te <span className=" text-brown my-1">auxiliar</span> e{" "}
        <span className=" text-brown my-1">esclarecer</span> sobre qualquer
        dúvida de seu processo!
      </p>
    </section>
  );
}
