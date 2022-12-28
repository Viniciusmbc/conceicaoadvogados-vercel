import type { MetaFunction } from "@remix-run/node";
import CarouselWithDots from "~/components/Carousel/CarouselWithDots";
import Navbar from "~/components/Layout/Navbar/Navbar";
import { getSeo } from "~/components/utils/seo";
import { slideEscritório } from "~/components/utils/slides_escritorio";

let [seoMeta, seoLinks] = getSeo({
  title: "Escritório de Advocacia em Santa Maria",
  description:
    "Nosso Escritório de Advocacia possuí duas sedes em Santa Maria - RS localizadas no Centro e no Bairro Patronato.",
});

export const meta: MetaFunction = () => ({
  ...seoMeta,
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export default function Oescritorio() {
  return (
    <section>
      <Navbar navbar={true} />
      <CarouselWithDots slides={slideEscritório} texto={""} escritorio={true} />
    </section>
  );
}
