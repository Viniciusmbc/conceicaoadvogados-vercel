import type { TransformerOption } from "@cld-apis/types"
import { buildImageUrl, setConfig } from 'cloudinary-build-url'
import React from "react"

setConfig({
    cloudName: 'deaejawfj',
  })

type ImageBuilder = {
    (transformations?: TransformerOption): string
    alt: string
    id: string
  }
  
export  function getImageBuilder(id: string, alt: string = ''): ImageBuilder {
    function imageBuilder(transformations?: TransformerOption) {
      return buildImageUrl(id, {transformations})
    }
    imageBuilder.alt = alt
    imageBuilder.id = id
    return imageBuilder
  }


export const useSSRLayoutEffect =
  typeof window === 'undefined' ? () => {} : React.useLayoutEffect

type AnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>

export function getImgProps(
    imageBuilder: ImageBuilder,
    {
      widths,
      sizes,
      transformations,
    }: {
      widths: Array<number>
      sizes: Array<string>
      transformations?: TransformerOption
    },
  ) {
    const averageSize = Math.ceil(widths.reduce((a, s) => a + s) / widths.length)
  
    return {
      alt: imageBuilder.alt,
      src: imageBuilder({
        quality: 'auto',
        format: 'auto',
        ...transformations,
        resize: {width: averageSize, ...transformations?.resize},
      }),
      srcSet: widths
        .map(width =>
          [
            imageBuilder({
              quality: 'auto',
              format: 'auto',
              ...transformations,
              resize: {width, ...transformations?.resize},
            }),
            `${width}w`,
          ].join(' '),
        )
        .join(', '),
      sizes: sizes.join(', '),
    }
  }