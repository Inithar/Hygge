import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Container = styled.div<{ gap?: string }>`
  position: relative;

  .slick-track {
    & > * {
      margin-right: ${({ gap }) => gap ?? 0};

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .slick-dots {
    position: static;
    display: flex !important;
    justify-content: center;
    gap: 1.6rem;
    margin-top: 3.2rem;

    ${media("sm")} {
      margin-top: 4rem;
    }

    li {
      margin: 0;
      width: unset;
      height: unset;

      button {
        width: 0.8rem;
        height: 0.8rem;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        outline: 0.2rem solid transparent;
        transition: background-color 0.3s, outline-color 0.3s;

        &::before {
          content: unset;
        }

        &:focus-visible {
          background-color: ${({ theme }) => theme.colors.tertiary.two};
          outline-color: ${({ theme }) => theme.colors.tertiary.two};
        }

        &:active {
          background-color: transparent;
          outline-color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    .slick-active button {
      background-color: transparent;
      outline-color: ${({ theme }) => theme.colors.primary};
    }
  }

  .slider-controls {
    position: absolute;
    top: 22rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1.6rem;
    z-index: 100;

    button {
      background-color: transparent;
      border: none;
      border-radius: 50%;
    }
  }
`;
