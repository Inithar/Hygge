import styled, { css } from "styled-components";

import { AlignOption } from "./Feature";

type StyledFeatureProps = {
  align: AlignOption;
};

type ContainerProps = {
  align: AlignOption;
};

export const StyledFeature = styled.div<StyledFeatureProps>`
  display: flex;
  gap: 3.2rem;

  ${({ align }) => css`
    flex-direction: ${align === "start" ? "row" : "column"};
    align-items: ${align};
  `}
`;

export const Container = styled.div<ContainerProps>`
  text-align: ${({ align }) => align};

  & > h4 {
    margin-bottom: 1.6rem;
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.accent.one};
  border-radius: 50%;

  & > img {
    max-width: unset;
    width: 3.2rem;
    height: 3.2rem;
  }
`;
