import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useSendRecoverPasswordEmail } from "../../hooks/api/useSendRecoverPasswordEmail";
import { useWindowSize } from "../../hooks/useWindowSize";

import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Text } from "../../components/Text";
import { SectionTitle } from "../../components/SectionTitle/SectionTitle";
import { TextField } from "../../components/TextField/TextField";
import { Form } from "./Recover.styled";

import { BREAKPOINTS } from "../../constants/breakpoints";

type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email("Email address is incorrect"),
});

export const Recover = () => {
  const { width } = useWindowSize();
  const { sendRecoverPasswordEmail, isSending } = useSendRecoverPasswordEmail();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  });

  function onSubmit(data: FormValues) {
    sendRecoverPasswordEmail(data.email);
  }

  return (
    <Section>
      <SectionTitle
        title="Recover Your Password"
        subtitle="Forgot Password"
        align={width < BREAKPOINTS.xs ? "center" : "start"}
        margin
      />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text>You will receive an email to recover your password</Text>

        <TextField
          id="email"
          label="Email Address"
          labelHidden
          error={errors.email?.message}
          inputProps={{ ...register("email"), placeholder: "johnsmith@gmail.com", type: "email" }}
        />

        <Button block disabled={isSending}>
          Send
        </Button>
      </Form>
    </Section>
  );
};
