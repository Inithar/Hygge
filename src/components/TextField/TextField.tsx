import { InputHTMLAttributes, RefCallback } from "react";

import { StyledTextFiled } from "./TextField.styled";

type Input = InputHTMLAttributes<HTMLInputElement> & {
  ref?: RefCallback<HTMLInputElement>;
  type?: "text" | "email" | "number" | "password" | "tel";
};

type TextFiledProps = {
  id: string;
  label: string;
  error?: string;
  inputProps?: Input;
  dark?: boolean;
  labelHidden?: boolean;
};

export const TextField = ({ id, label, error, inputProps, dark = false, labelHidden = false }: TextFiledProps) => (
  <StyledTextFiled isDark={dark} isLabelHidden={labelHidden} isError={Boolean(error)}>
    <label htmlFor={id}>{label}</label>
    <input {...inputProps} id={id} />
    {error && <p>{error}</p>}
  </StyledTextFiled>
);
