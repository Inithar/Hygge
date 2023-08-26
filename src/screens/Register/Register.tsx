import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { TextField } from "../../components/TextField/TextField";
import { Button, LinkButton } from "../../components/Button";
import { CheckboxField } from "../../components/CheckboxField/CheckboxField";
import { Buttons, Form, StyledLink } from "./Register.styled";

type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z
  .object({
    email: z.string().min(1, { message: "Email address is required" }).email("Email address is incorrect"),
    password: z
      .string()
      .min(8, "Must be at least 8 characters in length")
      .regex(new RegExp(".*[A-Z].*"), "Must contain one uppercase letter")
      .regex(new RegExp(".*[a-z].*"), "Must contain one lowercase letter")
      .regex(new RegExp(".*\\d.*"), "Must contain one number")
      .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "Must contain one special character"),
    confirmPassword: z.string(),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <Section>
      <SectionTitle title="Create Account" subtitle="Sign Up" margin />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          label="Email Address"
          error={errors.email?.message}
          inputProps={{ ...register("email"), placeholder: "johnsmith@gmail.com", type: "email" }}
        />

        <TextField
          id="password"
          label="Password"
          error={errors.password?.message}
          inputProps={{ ...register("password"), placeholder: "************", type: "password" }}
        />

        <TextField
          id="confirmPassword"
          label="Confirm Password"
          error={errors.confirmPassword?.message}
          inputProps={{ ...register("confirmPassword"), placeholder: "************", type: "password" }}
        />

        <CheckboxField
          id="terms"
          error={Boolean(errors.terms?.message)}
          inputProps={{ ...register("terms") }}
          label={
            <>
              I have read and agree to{" "}
              <StyledLink to={"/terms-and-conditions"} target="_blank">
                terms & conditions
              </StyledLink>
            </>
          }
        />

        <Buttons>
          <Button>Create Account</Button>
          <LinkButton to="/login" variation="secondary">
            Login
          </LinkButton>
        </Buttons>
      </Form>
    </Section>
  );
};
