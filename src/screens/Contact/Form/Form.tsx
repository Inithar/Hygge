import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { Select } from "../../../components/Select/Select";
import { SectionTitle } from "../../../components/SectionTitle/SectionTitle";
import { TextField } from "../../../components/TextField/TextField";
import { Button } from "../../../components/Button";
import { TextareaField } from "../../../components/TextareaFiled/TextareaField";
import { StyledForm, StyledSection } from "./Form.styled";

import { formSectionData } from "../../../data/contact";

export type FormValues = z.infer<typeof FormSchema>;

const {
  sectionTitle,
  sectionSubtitle,
  form: { fullName, email, subjectOptions, message, buttonText },
} = formSectionData;

const FormSchema = z.object({
  fullName: z.string().min(3, { message: fullName.error }),
  email: z.string().min(1, { message: email.error.required }).email(email.error.incorrect),
  subject: z.string(),
  message: z.string().min(1, { message: message.error }),
});

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  });

  useEffect(() => setValue("subject", subjectOptions[0].value), [setValue]);

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <StyledSection>
      <SectionTitle title={sectionTitle} subtitle={sectionSubtitle} margin />

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="fullName"
          label={fullName.label}
          error={errors.fullName?.message}
          inputProps={{ ...register("fullName"), placeholder: fullName.placeholder }}
        />

        <TextField
          id="email"
          label={email.label}
          error={errors.email?.message}
          inputProps={{ ...register("email"), placeholder: email.placeholder }}
        />

        <Select
          options={subjectOptions}
          label="Subject"
          selected={watch("subject")}
          onChange={(value) => setValue("subject", value)}
        />

        <TextareaField
          id="message"
          label={message.label}
          error={errors.message?.message}
          textareaProps={{
            ...register("message"),
            placeholder: message.placeholder,
            rows: 5,
          }}
        />

        <Button>{buttonText}</Button>
      </StyledForm>
    </StyledSection>
  );
};
