import styled, { css } from "styled-components";
import { BorderRadius, skeletonAnimation } from "../styles/helpers";

type SkeletonProps = {
  width?: string;
  height?: string;
  borderRadius?: BorderRadius;
};

export const Skeleton = styled.div<SkeletonProps>`
  ${({ theme, width, height, borderRadius }) => css`
    width: ${width};
    height: ${height};
    border-radius: ${borderRadius ? theme.borderRadius[borderRadius] : "0.2rem"};

    ${skeletonAnimation}
  `}
`;
