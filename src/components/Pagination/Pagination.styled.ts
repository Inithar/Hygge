import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  ${media("xs")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  & > span {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 3.2rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background-color: transparent;
  border: none;

  & > svg {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  }

  & > span {
    line-height: 1;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
