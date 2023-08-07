import styled from "styled-components";
import { Link } from "react-router-dom";

import { rgba, skeletonAnimation } from "../../../styles/helpers";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
  padding: 2.6rem 1rem;
  width: 12.8rem;
  background-color: ${({ theme }) => theme.colors.accent.one};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background-color 0.3s, border-color 0.5s;

  &:hover,
  &:focus-visible {
    outline: none;
    background-color: ${({ theme }) => rgba(theme.colors.accent.one, 0.24)};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CategorySkeleton = styled.div`
  // override inline styles from react-slick 
  width: 12.8rem !important;
  height: 12.8rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  ${skeletonAnimation}
`;
