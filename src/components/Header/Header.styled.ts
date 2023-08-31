import { css, styled } from "styled-components";
import { media } from "../../styles/helpers";

type BurgerProps = { isActive: boolean };
type ContainerProps = { isActive: boolean };
type WrapperProps = { scrollPosition: number };

export const Wrapper = styled.div<WrapperProps>`
  position: sticky;
  top: 0;
  z-index: 999;

  ${({ theme, scrollPosition }) =>
    scrollPosition > 50 &&
    css`
      background-color: ${theme.colors.basic.white};
      box-shadow: ${theme.shadows.lg};
      transition: background-color 0.3s, box-shadow 0.3s;
    `}
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 2.4rem;
  margin: 0 auto 5.6rem;
  padding-inline: 2.4rem;
  max-width: 134.4rem;
  height: 8rem;

  ${media("sm")} {
    padding-inline: 4rem;
    margin-bottom: 6.4rem;
  }

  ${media("md")} {
    padding-inline: 4.8rem;
    grid-template-columns: auto 1fr auto;
  }

  ${media("lg")} {
    margin-bottom: 9.6rem;
  }
`;

export const Container = styled.div<ContainerProps>`
  position: fixed;
  inset: 8rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.6rem;
  padding: 6.4rem 3.2rem 3.2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.basic.white};
  transform: ${({ isActive }) => (isActive ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.7s;
  overflow: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media("md")} {
    position: static;
    transform: none;
    padding: 0;
  }
`;

export const Navigation = styled.nav`
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  a:link,
  a:visited {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    transition: color 0.3s;
  }

  a:hover,
  a:active,
  a.active:link,
  a.active:visited {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${media("md")} {
    & > ul {
      flex-direction: row;
    }

    a:link,
    a:visited {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }

  ${media("lg")} {
    gap: 3.2rem;
  }
`;

export const Icons = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2.4rem;

  & > a,
  & > div {
    height: 2.4rem;
    width: 2.4rem;
  }

  & > div > a:hover + div {
    display: block;
  }

  & > div > a {
    position: relative;
  }
`;

export const Dot = styled.div`
  position: absolute;
  top: -1.2rem;
  right: -0.8rem;
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${({ theme }) => theme.colors.tertiary.two};
  border: 0.2rem solid ${({ theme }) => theme.colors.basic.white};
  border-radius: 50%;
`;

export const CartContainer = styled.div`
  display: none;
  position: absolute;
  top: 2.2rem;
  right: 0;
  padding-top: 3.6rem;

  & > div {
    padding: 2.4rem;
    width: 48.8rem;
  }

  &:hover {
    display: block;
  }
`;

export const Burger = styled.button<BurgerProps>`
  position: relative;
  display: block;
  padding: 1rem;
  width: 2.8rem;
  font-size: 0;
  color: ${({ theme }) => theme.colors.basic.black};
  background-color: transparent;
  border: none;
  border-top: 0.25rem solid ${({ theme }) => theme.colors.basic.black};
  border-bottom: 0.25rem solid ${({ theme }) => theme.colors.basic.black};
  transition: border-color 0.3s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 100%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.basic.black};
    transform: translate(-50%, -50%);
    transition: transform 0.3s;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border-color: transparent;

      &:before {
        transform: translate(-50%, -50%) rotate(45deg);
      }

      &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    `}

  ${media("md")} {
    display: none;
  }
`;
