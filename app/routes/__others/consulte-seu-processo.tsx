export default function ConsulteSeuProcesso() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-screen-xl  flex-col items-center">
      <h1>
        {" "}
        Para consultar seu processo, basta copiar e colar o número do processo
        que seu advogado forneceu em um dos links abaixo!
      </h1>

      <p>Acesso ao sites dos Principais Tribunais do Rio Grande do Sul:</p>
      <ul>
        <li>
          <a href="https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index">
            Tribunal de Justiça do Rio Grande do Sul (tjrs) (Justiça Estadual)
          </a>
        </li>
        <li>
          <a href="https://www.trt4.jus.br/portais/trt4/consulta-rapida">
            TRT 4 (Justiça do Trabalho)
          </a>
        </li>
        <li>
          <a href="https://consulta.trf4.jus.br/trf4/controlador.php?acao=consulta_processual_pesquisa">
            TRF 4 (Justiça Federal)
          </a>
        </li>
      </ul>
      <p>Ficou com alguma dúvida?</p>
      <p>Entre em contato com um de nossos advogados!</p>
      <p>
        Eles irão te auxiliar e fazer esclarecimentos sobre qualquer dúvida de
        seu processo!
      </p>
    </section>
  );
}
