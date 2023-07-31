import { Picture } from "../Picture";
import { StyledLink, StyledLinkProps } from "./Logo.styled";

type LogoProps = StyledLinkProps;

export const Logo = ({ size }: LogoProps) => (
  <StyledLink to="/" size={size}>
    <Picture
      src="/images/logo-mobile.png"
      alt="Company Logo"
      sources={[{ srcSet: "/images/logo-desktop.png", breakpoint: "xs" }]}
    />
  </StyledLink>
);
