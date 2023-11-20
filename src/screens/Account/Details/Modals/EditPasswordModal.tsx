import * as z from "zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useModal } from "../../../../hooks/context/useModal";
import { useUpdateCurrentUser } from "../../../../hooks/api/useUpdateCurrentUser";

import { TextField } from "../../../../components/TextField/TextField";
import { Modal } from "../../../../components/Modal/Modal";
import { Button } from "../../../../components/Button";
import { Buttons, Form } from "../Details.styled";

type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z
  .object({
    currentPassword: z.string().min(1, { message: "Current password is required" }),
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

export const EditPasswordModal = () => {
  const { closeModal } = useModal();
  const { updateCurrentUser, isUpdating } = useUpdateCurrentUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  });

  function onSubmit({ currentPassword, password }: FormValues) {
    updateCurrentUser(
      { fieldsToUpdate: { password }, currentPassword },
      {
        onSuccess: () => {
          toast.success("Password successfully changed");
          closeModal();
          reset();
        },
      }
    );
  }

  return (
    <Modal.Window name="password" header="Edit your password" onClose={reset}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="currentPassword"
          label="Current Password"
          error={errors.currentPassword?.message}
          inputProps={{ ...register("currentPassword"), type: "password" }}
        />

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

        <Buttons>
          <Button disabled={isUpdating}>Save Changes</Button>
          <Button type="button" variation="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </Buttons>
      </Form>
    </Modal.Window>
  );
};
