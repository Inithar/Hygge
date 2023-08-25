import { styled } from "styled-components";
import { media } from "../../styles/helpers";
import { Text } from "../Text";

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

    img {
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
