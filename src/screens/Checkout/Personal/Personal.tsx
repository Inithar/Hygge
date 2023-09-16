import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useCheckoutForm } from "../../../hooks/context/useCheckoutForm";

import { Button } from "../../../components/Button";
import { TextField } from "../../../components/TextField/TextField";
import { FormStepWrapper } from "../FormStepWrapper/FormStepWrapper";
import { Form } from "./Personal.styled";

export type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  name: z.string().min(1, { message: "Your name is required" }),
  surname: z.string().min(1, { message: "Your surname is required" }),
  phone: z.string(),
});

export const Personal = () => {
  const { next, setCheckoutData } = useCheckoutForm();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
    mode: "onChange",
  });

  function onSubmit(data: FormValues) {
    setCheckoutData((prev) => ({ ...prev, ...data }));
    next();
  }

  return (
    <FormStepWrapper heading="Personal Information">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="name"
          label="Name"
          error={errors.name?.message}
          inputProps={{ ...register("name"), placeholder: "John" }}
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
          inputProps={{ ...register("phone"), placeholder: "657-232-123" }}
        />

        <Button disabled={!isValid}>Continue</Button>
      </Form>
    </FormStepWrapper>
  );
};
