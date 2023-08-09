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
`;
