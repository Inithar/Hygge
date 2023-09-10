import { ReactNode } from "react";
import { StyledWrapper, Title } from "./Wrapper.styled";

type WrapperProps = {
  title: string;
  children: ReactNode;
};

export const Wrapper = ({ title, children }: WrapperProps) => (
  <StyledWrapper>
    <Title>{title}</Title>
    <div>{children}</div>
  </StyledWrapper>
);
