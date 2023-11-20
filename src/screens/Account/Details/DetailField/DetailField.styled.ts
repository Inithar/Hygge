import styled from "styled-components";
import { rgba } from "../../../../styles/helpers";

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;

  div > p {
    font-size: ${({ theme }) => theme.fontSizes.sm};

    &:first-child {
      font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
      text-transform: uppercase;
    }

    &:last-child {
      font-family: ${({ theme }) => theme.fontFamilies.montserrat.medium};
      color: ${({ theme }) => rgba(theme.colors.basic.black, 0.65)};
    }
  }

  & > button {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    text-transform: uppercase;
  }
`;
