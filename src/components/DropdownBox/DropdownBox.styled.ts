import { styled } from "styled-components";

import { Text } from "../Text";
import { media } from "../../styles/helpers";

export const StyledDropdownBox = styled.div`
  overflow: hidden;
  transition: height 0.2s linear;

  & > h4 {
    padding: 0.5rem;
    font-family: MontserratSemiBold;
  }
`;

export const Button = styled.button<{ isOpen: boolean }>`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2.4rem;
  width: 100%;
  text-align: start;
  background-color: transparent;
  border: none;

  & > div {
    border-color: ${({ theme }) => theme.colors.accent.one};

    svg {
      transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
      transition: transform 0.3s;
    }
  }

  ${media("sm")} {
    gap: 4rem;
  }

  ${media("md")} {
    gap: 11.5rem;
  }

  ${media("lg")} {
    gap: 4.8rem;
  }
`;

// 1 rem = 10px
export const Content = styled(Text)<{ height: number }>`
  margin-top: 1.1rem;
  height: ${({ height }) => `${height / 10}rem`};
  transition: height 0.2s linear;

  ${media("sm")} {
    margin-right: 8.8rem;
  }

  ${media("md")} {
    margin-right: 12rem;
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const ArrowIconBox = styled.div`
  display: inline-flex;
  padding: 0.8rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.basic.black};
  border-radius: 50%;

  & > svg {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }

  ${media("xs")} {
    padding: 1.2rem;
  }
`;
