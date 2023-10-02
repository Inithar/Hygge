import styled, { css } from "styled-components";
import { media, rgba } from "../../styles/helpers";

type DetailProps = {
  smallFontSize?: boolean;
};

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

export const Detail = styled.div<DetailProps>`
  ${({ theme: { fontFamilies, fontSizes }, smallFontSize }) => css`
    & > p {
      font-family: ${fontFamilies.montserrat.bold};
    }

    & > p,
    & > div > p {
      text-align: center;
      overflow-wrap: anywhere;
    }

    ${media("sm")} {
      & > p,
      & > div > p {
        font-size: ${smallFontSize ? fontSizes.md : fontSizes.lg};
      }
    }
  `}
`;

export const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.basic.black, 0.15)};
  margin-block: 1.6rem;
`;
