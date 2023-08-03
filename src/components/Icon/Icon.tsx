import { IconBox, IconBoxProps } from "./Icon.styled";

export type IconProps = IconBoxProps & {
  src: string;
  alt?: string;
};

export const Icon = ({ src, alt, ...iconBoxProps }: IconProps) => (
  <IconBox {...iconBoxProps}>
    <img src={src} alt={alt ?? "Icon"} />
  </IconBox>
);
