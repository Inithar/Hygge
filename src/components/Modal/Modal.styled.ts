import styled from "styled-components";
import { media, rgba } from "../../styles/helpers";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => rgba(theme.colors.basic.black, 0.3)};
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

export const StyledModal = styled.div<{ maxWidth?: string }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.6rem 2.8rem;
  width: calc(100% - 2 * 2.4rem);
  max-width: ${({ maxWidth }) => maxWidth ?? "60rem"};
  max-height: 75vh;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.basic.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  ${media("xs")} {
    padding: 3.2rem 4rem;
  }

  ${media("sm")} {
    width: calc(100% - 2 * 4rem);
  }
`;

export const ModalHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.6rem;
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.lg};

  & > button {
    display: grid;
    place-items: center;
    background-color: transparent;
    border: none;
  }

  ${media("xs")} {
    font-size: ${({ theme }) => theme.fontSizes.xl};

    & > button > img {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Divider = styled.div`
  margin-block: 2.4rem;
  height: 0.1rem;
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.basic.black, 0.1)};

  ${media("xs")} {
    margin-block: 2.4rem;
  }
`;
