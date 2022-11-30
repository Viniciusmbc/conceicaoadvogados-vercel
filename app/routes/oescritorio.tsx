import CarouselWithDots from "~/components/Carousel/CarouselWithDots";
import Navbar from "~/components/Layout/Navbar/Navbar";

export default function NossosEscritorios() {
  const slide: { imagem: any; texto: string | React.ReactElement }[] = [
    {
      imagem:
        "https://images.pixieset.com/88114635/41139d2ae5e747d83d097b5ee804ce8d-xxlarge.jpg",
      texto:
        "Nossos escritórios estão localizados em dois Endereços em Santa Maria",
    },
    {
      imagem:
        "https://images.pixieset.com/88114635/dd9dcd8d67171d03009a21dc70206c07-xxlarge.jpg",
      texto: "Rua André Marques, 718, centro.",
    },
    {
      imagem:
        "https://images.pixieset.com/88114635/9f6be9abf0708b0ef133fb7bb86fb1c2-xxlarge.jpg",
      texto: "Av. Walter Jobim, 987, Patronato.",
    },
  ];

  return (
    <section>
      <Navbar navbar={true} />

      <CarouselWithDots slides={slide} texto={""} escritorio={true} />
    </section>
  );
}
