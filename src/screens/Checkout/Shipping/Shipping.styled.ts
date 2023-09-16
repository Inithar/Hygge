import styled from "styled-components";
import { media } from "../../../styles/helpers";
import { Button } from "../../../components/Button";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const RadioTileGroup = styled.div`
  display: grid;
  gap: 2.4rem;
  margin-top: 3.2rem;
`;

export const Input = styled.input`
  position: absolute;
  margin: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  opacity: 0;
  cursor: pointer;

  &:checked + div {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible + div {
    outline: 0.2rem solid ${({ theme }) => theme.colors.secondary};
  }
`;

export const RadioTile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 2.4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: border-color 0.3s ease;

  & > label > p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    overflow-wrap: anywhere;
    text-transform: capitalize;
    text-align: center;
  }

  ${media("xs")} {
    & > label > p {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`;

export const NewAddressButton = styled.button`
  margin-top: 2.4rem;
  background-color: transparent;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  height: 13.3rem;
  width: 100%;

  & > img {
    width: 4rem;
    height: 4rem;
    opacity: 0.4;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 3.2rem;
`;
