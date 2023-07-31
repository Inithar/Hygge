import { css, styled } from "styled-components";
import { media } from "../../styles/helpers";

type BurgerProps = { isActive: boolean };
type ContainerProps = { isActive: boolean };

export const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 2.4rem;
  margin-bottom: 5.6rem;
  padding-inline: 2.4rem;
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

  ${media("md")} {
    position: static;
    transform: none;
    padding: 0;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`;

export const Navigation = styled.nav`
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.4rem;
  }

  & > a:link,
  & > a:visited {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    transition: color 0.3s;
  }

  & > a:hover,
  & > a:active,
  & > a.active:link,
  & > a.active:visited {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${media("md")} {
    & > ul {
      flex-direction: row;
    }

    & > a:link,
    & > a:visited {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }

  ${media("lg")} {
    gap: 3.2rem;
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
  border-top: 2.5px solid ${({ theme }) => theme.colors.basic.black};
  border-bottom: 2.5px solid ${({ theme }) => theme.colors.basic.black};
  transition: border-color 0.3s;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 100%;
    height: 2px;
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
