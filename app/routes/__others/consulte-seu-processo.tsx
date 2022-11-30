import { Link } from "@remix-run/react";

export default function ConsulteSeuProcesso() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-screen-xl  flex-col items-center">
      <h1>
        {" "}
        Para consultar seu processo, basta copiar e colar o número do processo
        que seu advogado forneceu em um dos links abaixo!
      </h1>

      <p>Acesso ao sites dos Principais Tribunais do Rio Grande do Sul:</p>
      <Link to="https://www.tjrs.jus.br/novo/busca/?return=proc&client=wp_index">
        Tribunal de Justiça do Rio Grande do Sul (tjrs) (Justiça Estadual)
      </Link>
      <Link to="https://www.trt4.jus.br/portais/trt4/consulta-rapida">
        TRT 4 (Justiça do Trabalho)
      </Link>
      <Link to="https://consulta.trf4.jus.br/trf4/controlador.php?acao=consulta_processual_pesquisa">
        TRF 4 (Justiça Federal)
      </Link>
    </section>
  );
}
