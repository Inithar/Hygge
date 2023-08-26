import { styled } from "styled-components";
import { Link } from "react-router-dom";

import { media } from "../../styles/helpers";

export const Form = styled.form`
  display: grid;
  gap: 1.6rem;
  margin-inline: auto;
  max-width: 52rem;

  ${media("xs")} {
    gap: 2.4rem;
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Buttons = styled.div`
  display: grid;
  gap: 1.6rem;
  margin-top: 4rem;

  & > a {
    text-align: center;
  }

  ${media("xs")} {
    grid-template-columns: 1fr 1fr;
    gap: 2.4rem;
    margin-top: 2.4rem;
  }
`;
