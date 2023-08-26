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

export const Buttons = styled.div`
  display: grid;
  gap: 2.4rem;

  & > a {
    text-align: center;
  }

  ${media("xs")} {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 0;

    & > button:first-of-type {
      grid-column: 1 / -1;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${media("sm")} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
