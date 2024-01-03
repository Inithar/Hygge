import styled from "styled-components";
import { media } from "../../styles/helpers";

export const ProductsContainer = styled.div`
  display: grid;
  row-gap: 5.6rem;
  margin-bottom: 5.6rem;

  ${media("xs")} {
    gap: 6.4rem 5.6rem;
    grid-template-columns: repeat(2, 1fr);
  }

  ${media("sm")} {
    margin-bottom: 6.4rem;
  }

  ${media("md")} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media("xl")} {
    gap: 7.2rem 4.8rem;
    margin-bottom: 7.2rem;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Message = styled.p`
  margin-top: 3.2rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  ${media("xs")} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;
