import { StyledBadgeProps, StyledBadge } from "./Badge.styled";

type BadgeProps = StyledBadgeProps & {
  children: string;
};

export const Badge = ({ children, ...props }: BadgeProps) => (
  <StyledBadge {...props}>
    <span>{children}</span>
  </StyledBadge>
);
