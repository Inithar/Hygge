import styled from "styled-components";

import { Link } from "react-router-dom";
import { media, rgba } from "../../../styles/helpers";

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  ${media("xs")} {
    flex-direction: row;
    align-items: start;
    gap: 3.2rem;
  }

  ${media("sm")} {
    position: relative;
    gap: 5.6rem;
    padding: 5.6rem;
  }
`;

export const StyledLink = styled(Link)`
  display: grid;
  place-items: center;
  margin-bottom: 2.4rem;
  width: 12.8rem;
  height: 12.8rem;
  background-color: ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.xs};

  & > img {
    width: auto;
    max-height: 9.6rem;
  }

  ${media("xs")} {
    width: 19.2rem;
    height: 19.2rem;
    margin: 0;
    border-radius: ${({ theme }) => theme.borderRadius.md};

    & > img {
      max-height: 12.8rem;
    }
  }
`;

export const Details = styled.div`
  &,
  & > h3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & > h3 {
    margin-bottom: 1.6rem;
  }

  ${media("xs")} {
    &,
    & > h3 {
      align-items: start;
    }
  }

  ${media("sm")} {
    & > h3 {
      display: inline-block;
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 4rem;

  & > p {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
  }

  ${media("xs")} {
    margin-bottom: 2.4rem;
  }
`;

export const Old = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => rgba(theme.colors.text.dark, 0.24)};
  text-decoration: line-through;

  ${media("sm")} {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Current = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};

  ${media("sm")} {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 2.4rem;

  & > button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem;
    background-color: transparent;
    border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.shadows.md};

    img {
      width: 2rem;
      height: 2rem;
    }
  }

  ${media("sm")} {
    & > button {
      padding: 1.6rem;
      width: 6.4rem;
      height: 6.4rem;

      img {
        width: 2.4rem;
        height: 2.4rem;
      }
    }
  }

  ${media("md")} {
    & > button {
      position: absolute;
      top: 50%;
      right: 5.6rem;
      transform: translateY(-50%);
    }
  }

  ${media("lg")} {
    & > button {
      position: static;
      transform: unset;
    }
  }
`;
