import { ReactNode } from 'react';
import { StyledBadgeProps, StyledBadge } from "./Badge.styled";

type BadgeProps = StyledBadgeProps & {
  children: ReactNode;
};

export const Badge = ({ children, ...props }: BadgeProps) => (
  <StyledBadge {...props}>
    <span>{children}</span>
  </StyledBadge>
);
