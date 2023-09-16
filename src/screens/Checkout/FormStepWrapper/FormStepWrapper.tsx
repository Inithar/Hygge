import { ReactNode } from "react";

import { Heading } from "../../../components/Heading";
import { Container } from "./FormStepWrapper.styled";

type FormStepProps = {
  children: ReactNode;
  heading: string;
};

export const FormStepWrapper = ({ children, heading }: FormStepProps) => (
  <Container>
    <Heading as="h3">{heading}</Heading>

    {children}
  </Container>
);
