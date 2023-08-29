import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useLogin } from "../../hooks/useLogin";

import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { TextField } from "../../components/TextField/TextField";
import { Button, LinkButton } from "../../components/Button";
import { Buttons, Form, StyledLink } from "./Login.styled";

type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  });

  const { login, isLoading } = useLogin();

  function onSubmit(data: FormValues) {
    login(data);
  }

  return (
    <Section>
      <SectionTitle title="Login to Your Account" subtitle="Login" margin />

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

        <Buttons>
          <Button disabled={isLoading}>Login</Button>
          <LinkButton to="/register" variation="secondary">
            Create Account
          </LinkButton>
          <StyledLink to="/">Forgot Password?</StyledLink>
        </Buttons>
      </Form>
    </Section>
  );
};
