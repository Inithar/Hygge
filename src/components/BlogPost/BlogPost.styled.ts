import styled from "styled-components";

import { media } from "../../styles/helpers";

export const Image = styled.div`
  position: relative;
  margin-top: 2.4rem;
  padding-bottom: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.borderRadius.lg};

  ${media("xs")} {
    margin-top: 0;
    padding-bottom: 0;
    height: 32rem;
  }

  ${media("md")} {
    height: 27.2rem;
  }

  ${media("lg")} {
    height: 38.4rem;
  }
`;

export const Data = styled.div`
  margin-top: 3.2rem;

  & > p {
    margin-bottom: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }

  ${media("lg")} {
    margin-top: 4rem;
  }
`;

export const Tag = styled.div`
  position: absolute;
  top: -2.4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  ${media("xs")} {
    top: 2.4rem;
    right: -2.4rem;
    left: unset;
    transform: unset;
  }
`;
