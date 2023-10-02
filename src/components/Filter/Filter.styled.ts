import styled, { css } from "styled-components";
import { media } from "../../styles/helpers";

type FilterButtonProps = {
  active: boolean;
};

export const StyledFilter = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  padding: 1.6rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.basic.white};
    border: 0.1rem solid ${theme.colors.accent.one};
    border-radius: ${theme.borderRadius.sm};
    box-shadow: ${theme.shadows.sm};
  `}

  ${media("xs")} {
    flex-direction: row;
    gap: 0.8rem;
    width: auto;
    padding: 0.8rem;
  }
`;

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 0.44rem 1.6rem;
  border: none;
  transition: background-color 0.3s, color 0.3s;

  ${({ theme: { colors, borderRadius, fontSizes, fontFamilies }, active }) => css`
    font-family: ${fontFamilies.montserrat.semiBold};
    font-size: ${fontSizes.sm};
    color: ${active ? colors.text.light : colors.text.dark};
    background-color: ${active ? colors.primary : colors.basic.white};
    border-radius: ${borderRadius.sm};

    &:hover:not(:disabled) {
      background-color: ${colors.primary};
      color: ${colors.basic.white};
    }
  `}
`;
