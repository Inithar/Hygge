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

import { subjectOptions } from "../../../data/contact";

export type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  fullName: z.string().min(3, { message: "Full name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email("Email address is incorrect"),
  subject: z.string(),
  message: z.string().min(1, { message: "Message is required" }),
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
      <SectionTitle title="Please fill out the contact form" subtitle="Reach Out to Us" margin />

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="fullName"
          label="Full Name"
          error={errors.fullName?.message}
          inputProps={{ ...register("fullName"), placeholder: "John Smith" }}
        />

        <TextField
          id="email"
          label="Email Address"
          error={errors.email?.message}
          inputProps={{ ...register("email"), placeholder: "johnsmith@gmail.com" }}
        />

        <Select
          options={subjectOptions}
          label="Subject"
          selected={watch("subject")}
          onChange={(value) => setValue("subject", value)}
        />

        <TextareaField
          id="message"
          label="Message"
          error={errors.message?.message}
          textareaProps={{
            ...register("message"),
            placeholder: "Hi, I am just wondering where can I find your refund policy?",
            rows: 5,
          }}
        />

        <Button>Send</Button>
      </StyledForm>
    </StyledSection>
  );
};
