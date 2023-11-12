import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useCheckout } from "../../../hooks/context/useCheckout";

import { Button } from "../../../components/Button";
import { TextField } from "../../../components/TextField/TextField";
import { FormStepWrapper } from "../FormStepWrapper/FormStepWrapper";
import { Form } from "./Personal.styled";

export type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  name: z.string().min(1, { message: "Your name is required" }),
  surname: z.string().min(1, { message: "Your surname is required" }),
  email: z.string().min(1, { message: "Email address is required" }).email("Email address is incorrect"),
  phone: z
    .string()
    .min(8, { message: "Phone number has to have at least 8 digits" })
    .max(15, { message: "Phone number has to have max 15 digits" }),
});

export const Personal = () => {
  const {
    next,
    setOrderData,
    orderData: { name, surname, phone, email },
  } = useCheckout();

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
    setOrderData((prev) => ({ ...prev, ...data }));
    next();
  }

  return (
    <FormStepWrapper heading="Personal Information">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="name"
          label="Name"
          error={errors.name?.message}
          inputProps={{ ...register("name"), placeholder: "John", defaultValue: name }}
        />

        <TextField
          id="surname"
          label="Surname"
          error={errors.surname?.message}
          inputProps={{ ...register("surname"), placeholder: "Smith", defaultValue: surname }}
        />

        <TextField
          id="email"
          label="Email Address"
          error={errors.email?.message}
          inputProps={{ ...register("email"), placeholder: "johnsmith@gmail.com", type: "email", defaultValue: email }}
        />

        <TextField
          id="phone"
          label="Phone Number"
          error={errors.phone?.message}
          inputProps={{ ...register("phone"), placeholder: "577243123", defaultValue: phone, type: "number" }}
        />

        <Button disabled={!isValid}>Continue</Button>
      </Form>
    </FormStepWrapper>
  );
};
