// React hooks
import React, { useCallback, useEffect, useRef, useState } from "react";

// Image
import Image, { MimeType } from "remix-image";

// Buttons
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "./CarouselButtons";

// Embla Carouselimport Autoplay,
import Autoplay, {
  AutoplayOptionsType,
  AutoplayType,
} from "embla-carousel-autoplay";

interface CarouselWithButtonsProps {
  slides: any;
  texto: string | React.ReactElement;
  modalidades?: string;
  escritorio?: boolean;
}

const CarouselWithDots = ({ slides, escritorio }: CarouselWithButtonsProps) => {
  const autoplay = useRef(
    Autoplay(
      {
        delay: 3000,
        stopOnInteraction: false,
      },
      (emblaRoot: { parentElement }) => emblaRoot.parentElement
    )
  );
  const [viewportRef, embla] = useEmblaCarousel(
    {
      skipSnaps: false,
      loop: true,
    },
    [autoplay.current]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="relative mx-auto ">
        <div className=" w-full overflow-hidden" ref={viewportRef}>
          <div className=" flex">
            {slides.map(({ imagem, texto }: any, index: React.Key | number) => (
              <div className=" relative -z-40 min-w-full " key={index}>
                <figure
                  className="relative -z-30 h-screen min-w-[100vw] overflow-hidden
                   "
                >
                  <Image
                    loaderUrl="/api/image"
                    alt="Imagem do Escritório do Conceição Advogados"
                    src={imagem}
                    placeholder="blur"
                    options={{
                      contentType: MimeType.JPEG,
                    }}
                    responsive={[
                      {
                        size: {
                          width: 375,
                          height: 667,
                        },
                        maxWidth: 375,
                      },
                      {
                        size: {
                          width: 787,
                          height: 700,
                        },
                        maxWidth: 787,
                      },
                      {
                        size: {
                          width: 1600,
                          height: 1067,
                        },
                        maxWidth: 1600,
                      },
                    ]}
                    dprVariants={[1, 3]}
                    className=" absolute top-0 right-0 bottom-0 left-0 -z-10 h-screen  w-screen contrast-[.35]"
                  />

                  <figcaption
                    className={`z-50 flex h-full w-full items-center justify-center pb-3 text-5xl font-extrabold  ${
                      escritorio ? " text-gray" : "text-[#f8f8f8]"
                    } `}
                  >
                    {texto}
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" relative bottom-[290px] flex flex-col items-center justify-center pt-2">
        <div className=" relative top-60 flex justify-center pt-2 ">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselWithDots;
