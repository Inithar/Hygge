import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Form = styled.form`
  margin-inline: auto;
  max-width: 52rem;

  & > p {
    margin-bottom: 4.8rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.medium};
  }

  & > button {
    margin-top: 3.2rem;
  }

  ${media("sm")} {
    max-width: 57rem;

    & > p {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`;
