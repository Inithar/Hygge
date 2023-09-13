import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useSignup } from "../../hooks/api/useSignup";

import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { TextField } from "../../components/TextField/TextField";
import { Button, LinkButton } from "../../components/Button";
import { CheckboxField } from "../../components/CheckboxField/CheckboxField";
import { Buttons, Form, StyledLink } from "./Register.styled";

export type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z
  .object({
    name: z.string().min(1, { message: "Your name is required" }),
    surname: z.string().min(1, { message: "Your surname is required" }),
    email: z.string().min(1, { message: "Email address is required" }).email("Email address is incorrect"),
    phone: z.string(),
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
  const { signup, isLoading } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  });

  function onSubmit(data: FormValues) {
    signup(data);
  }

  return (
    <Section>
      <SectionTitle title="Create Account" subtitle="Sign Up" margin />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="name"
          label="Name"
          error={errors.name?.message}
          inputProps={{ ...register("name"), placeholder: "Simon" }}
        />

        <TextField
          id="surname"
          label="Surname"
          error={errors.surname?.message}
          inputProps={{ ...register("surname"), placeholder: "Smith" }}
        />

        <TextField
          id="phone"
          label="Phone Number"
          error={errors.phone?.message}
          inputProps={{ ...register("phone"), placeholder: "762-123-123" }}
        />

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
          <Button disabled={isLoading}>Create Account</Button>
          <LinkButton to="/login" variation="secondary">
            Login
          </LinkButton>
        </Buttons>
      </Form>
    </Section>
  );
};
