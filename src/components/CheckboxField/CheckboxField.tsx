import { InputHTMLAttributes, ReactNode, RefCallback } from "react";

import { StyledCheckboxField } from "./CheckboxField.styled";

type Input = InputHTMLAttributes<HTMLInputElement> & {
  ref?: RefCallback<HTMLInputElement>;
};

type CheckboxFieldProps = {
  id: string;
  label: string | ReactNode;
  inputProps?: Input;
  error?: boolean;
};

export const CheckboxField = ({ id, label, inputProps, error }: CheckboxFieldProps) => (
  <StyledCheckboxField error={error}>
    <input {...inputProps} id={id} type="checkbox" />
    <label htmlFor={id}>{label}</label>
  </StyledCheckboxField>
);
