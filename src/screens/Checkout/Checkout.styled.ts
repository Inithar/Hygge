import { css, styled } from "styled-components";
import { media } from "../../styles/helpers";

type LineProps = {
  disabled: boolean;
};

export const Container = styled.div`
  display: grid;
  gap: 5.6rem;
  margin-inline: auto;
  max-width: 68.8rem;

  ${media("sm")} {
    gap: 6.4rem;
  }

  ${media("lg")} {
    align-items: start;
    grid-template-columns: 1fr minmax(auto, 55.2rem);
    gap: 7.2rem 4.8rem;
    max-width: unset;

    & > div:nth-child(2) {
      grid-column: 1/2;
      grid-row: 2/3;
    }

    & > div:nth-child(3) {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }

  ${media("xl")} {
    column-gap: 9.6rem;
  }
`;

export const Steps = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr auto;
  align-items: center;
  gap: 0.4rem;
  margin-inline: auto;
  width: 100%;
  max-width: 60rem;

  ${media("lg")} {
    max-width: unset;
  }
`;

export const Circle = styled.button`
  display: grid;
  place-items: center;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;

  ${({ theme: { colors, fontFamilies, fontSizes } }) => css`
    background-color: ${colors.primary};
    font-size: ${fontSizes.sm};
    color: ${colors.text.light};
    font-family: ${fontFamilies.montserrat.semiBold};
    border: 0.2rem solid ${colors.primary};

    &:disabled {
      color: ${colors.text.dark};
      background-color: transparent;
      border: 0.2rem solid ${colors.accent.one};
      cursor: not-allowed;
    }
  `}

  ${media("xs")} {
    width: 4.8rem;
    height: 4.8rem;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const Line = styled.div<LineProps>`
  height: 0.2rem;
  background-color: ${({ theme: { colors }, disabled }) => (disabled ? colors.accent.one : colors.primary)};
  border-radius: 0.8rem;
`;
