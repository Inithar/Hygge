import styled from "styled-components";
import { media } from "../../../../styles/helpers";

export const Container = styled.div`
  & > div > p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    &:first-child {
      margin-bottom: 2.4rem;
      font-size: ${({ theme }) => theme.fontSizes.md};
      font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
  margin-top: 3.2rem;

  ${media("xs")} {
    flex-direction: row-reverse;
    gap: 2.4rem;

    & > button {
      min-width: 20rem;
    }
  }
`;
