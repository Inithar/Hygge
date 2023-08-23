import { styled } from "styled-components";

import { media } from "../../../styles/helpers";

export const StyledReceipt = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  & > a {
    text-align: center;
  }

  ${media("sm")} {
    & > h3 {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
  }

  ${media("sm")} {
    padding: 5.6rem;

    & > a {
      width: fit-content;
    }
  }

  ${media("lg")} {
    padding-bottom: 7.2rem;

    & > a {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 4rem;
  margin-block: 4rem 5.6rem;

  ${media("sm")} {
    grid-template-columns: 1fr 1fr;
    gap: 4.8rem 9.6rem;
  }

  ${media("lg")} {
    margin-block: 4.8rem 7.2rem;
    grid-template-columns: auto;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  &:last-child > p {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
  }

  ${media("sm")} {
    & > p {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    }
  }
`;
