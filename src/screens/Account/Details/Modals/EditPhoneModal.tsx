import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useModal } from "../../../../hooks/context/useModal";
import { useUser } from "../../../../hooks/api/useUser";
import { useUpdateCurrentUser } from "../../../../hooks/api/useUpdateCurrentUser";

import { TextField } from "../../../../components/TextField/TextField";
import { Modal } from "../../../../components/Modal/Modal";
import { Button } from "../../../../components/Button";
import { Buttons, Form } from "../Details.styled";

type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  phone: z
    .string()
    .min(8, { message: "Phone number has to have at least 8 digits" })
    .max(15, { message: "Phone number has to have max 15 digits" }),
  currentPassword: z.string().min(1, { message: "Current password is required" }),
});

export const EditPhoneModal = () => {
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

  function onSubmit({ currentPassword, phone }: FormValues) {
    updateCurrentUser(
      { fieldsToUpdate: { phone }, currentPassword },
      {
        onSuccess: () => {
          closeModal();
          reset();
        },
      }
    );
  }

  return (
    <Modal.Window name="phone" header="Edit your phone number" onClose={reset}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="phone"
          label="Phone Number"
          error={errors.phone?.message}
          inputProps={{ ...register("phone"), defaultValue: user?.user_metadata.phone }}
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
