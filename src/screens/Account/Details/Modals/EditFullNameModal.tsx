import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useUser } from "../../../../hooks/api/useUser";
import { useModal } from "../../../../hooks/context/useModal";
import { useUpdateCurrentUser } from "../../../../hooks/api/useUpdateCurrentUser";

import { TextField } from "../../../../components/TextField/TextField";
import { Modal } from "../../../../components/Modal/Modal";
import { Button } from "../../../../components/Button";
import { Buttons, Form } from "../Details.styled";

type FormValues = z.infer<typeof FormSchema>;

const FormSchema = z.object({
  name: z.string().min(1, { message: "Your name is required" }),
  surname: z.string().min(1, { message: "Your surname is required" }),
});

export const EditFullNameModal = () => {
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

  function onSubmit(data: FormValues) {
    updateCurrentUser(
      { fieldsToUpdate: data },
      {
        onSuccess: () => {
          closeModal();
          reset();
        },
      }
    );
  }

  return (
    <Modal.Window name="full-name" header="Edit your full name" onClose={reset}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="name"
          label="Name"
          error={errors.name?.message}
          inputProps={{ ...register("name"), defaultValue: user?.user_metadata.name }}
        />

        <TextField
          id="surname"
          label="Surname"
          error={errors.surname?.message}
          inputProps={{ ...register("surname"), defaultValue: user?.user_metadata.surname }}
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
