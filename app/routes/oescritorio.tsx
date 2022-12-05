import CarouselWithDots from "~/components/Carousel/CarouselWithDots";
import Navbar from "~/components/Layout/Navbar/Navbar";
import { slideEscritório } from "~/components/utils/slides_escritorio";

export default function NossosEscritorios() {
  return (
    <section>
      <Navbar navbar={true} />
      <CarouselWithDots slides={slideEscritório} texto={""} escritorio={true} />
    </section>
  );
}
