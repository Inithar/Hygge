import styled from "styled-components";
import { Link } from "react-router-dom";

export type StyledLinkProps = {
  size?: keyof typeof sizes;
};

const sizes = {
  sm: "3.2rem",
  md: "4.3rem",
};

export const StyledLink = styled(Link)<StyledLinkProps>`
  img {
    display: block;
    width: auto;
    height: ${({ size }) => sizes[size ?? "sm"]};
  }
`;
