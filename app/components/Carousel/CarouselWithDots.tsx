// React hooks
import React, { useCallback, useEffect, useRef, useState } from "react";

// Buttons
import useEmblaCarousel from "embla-carousel-react";
import { DotButton } from "./CarouselButtons";

// Embla Carouselimport Autoplay,
import Autoplay, {
  AutoplayOptionsType,
  AutoplayType,
} from "embla-carousel-autoplay";

import { BlurrableImage } from "../Image/blurrable.image";
import { getImageBuilder, getImgProps } from "../Image/ImgProps";

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
            {slides.map(
              ({ src, srcset, texto }: any, index: React.Key | number) => (
                <div className=" relative -z-40 min-w-full " key={index}>
                  <figure className="relative -z-30 h-screen">
                    <img
                      width="1920"
                      height="1080"
                      className=" w-full min-w-screen h-screen absolute -z-50"
                      src={`${src}`}
                      srcSet={srcset.map((src: string) => `${src}`)}
                      sizes="100vw"
                      alt={`Imagem de ${texto}`}
                    />
                    <figcaption
                      className={` border  border-r-black z-50 flex h-full w-full items-center justify-center pb-3 text-3xl md:text-5xl font-extrabold  ${
                        escritorio
                          ? " text-white text-center max-w-[60vw] border-none mx-auto leading-relaxed"
                          : "text-[#f8f8f8]"
                      } `}
                    >
                      {texto}
                    </figcaption>
                  </figure>
                </div>
              )
            )}
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
