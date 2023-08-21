import { RefCallback, TextareaHTMLAttributes } from "react";
import { StyledTextAreaFiled } from "./TextareaField.styled";

type Textarea = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  ref?: RefCallback<HTMLTextAreaElement>;
};

type TextareaProps = {
  id: string;
  label: string;
  error?: string;
  textareaProps?: Textarea;
};

export const TextareaField = ({ id, label, error, textareaProps }: TextareaProps) => {
  return (
    <StyledTextAreaFiled isError={Boolean(error)}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...(textareaProps ?? {})} />
      <p>{error}</p>
    </StyledTextAreaFiled>
  );
};
