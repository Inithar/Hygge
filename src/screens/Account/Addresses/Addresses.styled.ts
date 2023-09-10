import { styled } from "styled-components";
import { media } from "../../../styles/helpers";

export const Container = styled.div`
  display: grid;
  gap: 2.4rem;
  margin-top: 3.2rem;
`;

export const NoSavedAddresses = styled.div`
  display: grid;
  place-items: center;
  gap: 2.4rem;
  margin-top: 1.6rem;

  & > img {
    width: 6rem;
    height: 6rem;
    opacity: 0.6;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.medium};
    opacity: 0.7;
  }

  ${media("xs")} {
    & > img {
      width: 8rem;
      height: 8rem;
    }
  }
`;

export const SpinnerBox = styled.div`
  margin-block: 2rem;
`;
