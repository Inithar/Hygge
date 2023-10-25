import { BREAKPOINTS, Breakpoint } from "../constants/breakpoints";

type PictureProps = {
  src: string;
  alt: string;
  sources?: {
    srcSet: string;
    breakpoint: Breakpoint;
  }[];
};

export const Picture = ({ src, alt, sources }: PictureProps) => (
  <picture>
    {sources &&
      sources.map(({ breakpoint, srcSet }) => (
        <source media={`(min-width: ${BREAKPOINTS[breakpoint]}px)`} srcSet={srcSet} key={crypto.randomUUID()} />
      ))}
    <img src={src} alt={alt} />
  </picture>
);
