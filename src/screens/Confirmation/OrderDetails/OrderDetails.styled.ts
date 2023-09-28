import styled from "styled-components";
import { media, rgba } from "../../../styles/helpers";

export const Container = styled.div`
  display: grid;
  gap: 4rem;
  margin-top: 5.6rem;

  ${media("xs")} {
    grid-template-columns: 1fr 1fr;
    margin-top: 6.4rem;
  }

  ${media("sm")} {
    gap: 5.6rem;
  }
`;

export const Detail = styled.div`
  & > p {
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.bold};
  }

  & > p,
  & > div > p {
    text-align: center;
  }

  ${media("sm")} {
    & > p,
    & > div > p {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`;

export const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.basic.black, 0.15)};
  margin-block: 1.6rem;
`;
