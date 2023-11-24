import * as z from "zod";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUser } from "../../../../hooks/api/useUser";
import { useModal } from "../../../../hooks/context/useModal";
import { useUpdateCurrentUser } from "../../../../hooks/api/useUpdateCurrentUser";

import { TextField } from "../../../../components/TextField/TextField";
import { Modal } from "../../../../components/Modal/Modal";
import { Button } from "../../../../components/Button";
import { Buttons, Form } from "../Details.styled";

type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  currentPassword: z.string().min(1, { message: "Current password is required" }),
  email: z.string().min(1, { message: "Email address is required" }).email("Email address is incorrect"),
});

export const EditEmailModal = () => {
  const { user } = useUser();
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

  function onSubmit({ currentPassword, email }: FormValues) {
    updateCurrentUser(
      { fieldsToUpdate: { email }, currentPassword },
      {
        onSuccess: () => {
          toast.success("The verification email has been sent to current email");
          closeModal();
          reset();
        },
      }
    );
  }

  return (
    <Modal.Window name="email" header="Edit your password" onClose={reset}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          label="Email address"
          error={errors.email?.message}
          inputProps={{ ...register("email"), type: "email", defaultValue: user?.email }}
        />

        <TextField
          id="currentPassword"
          label="Current Password"
          error={errors.currentPassword?.message}
          inputProps={{ ...register("currentPassword"), type: "password" }}
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
