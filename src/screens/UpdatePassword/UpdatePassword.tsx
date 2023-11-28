import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useWindowSize } from "../../hooks/useWindowSize";
import { useUpdateCurrentUser } from "../../hooks/api/useUpdateCurrentUser";

import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField/TextField";
import { Section } from "../../components/Section";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { Form } from "./UpdatePassword.styled";

import { BREAKPOINTS } from "../../constants/breakpoints";

type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z
  .object({
    password: z
      .string()
      .min(8, "Must be at least 8 characters in length")
      .regex(new RegExp(".*[A-Z].*"), "Must contain one uppercase letter")
      .regex(new RegExp(".*[a-z].*"), "Must contain one lowercase letter")
      .regex(new RegExp(".*\\d.*"), "Must contain one number")
      .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), "Must contain one special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

export const UpdatePassword = () => {
  const { width } = useWindowSize();
  const { updateCurrentUser, isUpdating } = useUpdateCurrentUser();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  });

  function onSubmit({ password }: FormValues) {
    updateCurrentUser(
      { fieldsToUpdate: { password } },
      {
        onSuccess: () => {
          toast.success("Password successfully changed");
          navigate("/account/home");
          reset();
        },
      }
    );
  }

  return (
    <Section>
      <SectionTitle
        title="Recover Your Password"
        subtitle="Forgot Password"
        align={width < BREAKPOINTS.xs ? "center" : "start"}
      />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="password"
          label="New Password"
          error={errors.password?.message}
          inputProps={{ ...register("password"), type: "password" }}
        />

        <TextField
          id="confirmPassword"
          label="Confirm Password"
          error={errors.confirmPassword?.message}
          inputProps={{ ...register("confirmPassword"), type: "password" }}
        />

        <Button disabled={isUpdating}>Change Password</Button>
      </Form>
    </Section>
  );
};
