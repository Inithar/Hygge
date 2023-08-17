import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useWindowSize } from "../../hooks/useWindowSize";

import { TextField } from "../TextField/TextField";
import { Button } from "../Button";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Form, StyledSection } from "./Newsletter.styled";

import { breakpoints } from "../../constants/breakpoints";
import { newsletterSectionData } from "../../data/shared";

export type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email("Email address is incorrect"),
});

export const Newsletter = () => {
  const { width } = useWindowSize();

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
    <StyledSection>
      <SectionTitle
        title={newsletterSectionData.sectionTitle}
        subtitle={newsletterSectionData.sectionSubTitle}
        align="center"
      />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          label="email"
          labelHidden
          error={errors.email?.message}
          dark={width < breakpoints.md}
          inputProps={{
            ...register("email"),
            placeholder: "Your Email",
            type: "email",
          }}
        />

        <Button>Sign up</Button>
      </Form>
    </StyledSection>
  );
};
