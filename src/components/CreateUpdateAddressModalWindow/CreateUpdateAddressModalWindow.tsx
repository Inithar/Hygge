import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useUser } from "../../hooks/api/useUser";
import { useCreateAddress } from "../../hooks/api/useCreateAddress";
import { useUpdateAddress } from "../../hooks/api/useUpdateAddress";
import { useModal } from "../../hooks/context/useModal";

import { Modal } from "../Modal/Modal";
import { TextField } from "../TextField/TextField";
import { Button } from "../Button";
import { Buttons, Form } from "./CreateUpdateAddressModalWindow.styled";

import { Address } from "../../types/collection";

type FormValues = z.infer<typeof FormSchema>;
type InputProps = { id: keyof FormValues; label: string };

const FormSchema = z.object({
  postcode: z.string().min(1, { message: "Postcode is required" }),
  houseNumber: z.string().min(1, { message: "House name / number  is required" }),
  flatNumber: z.string(),
  street: z.string().min(1, { message: "Street name is required" }),
  city: z.string().min(1, { message: "City name is required" }),
  country: z
    .string()
    .min(1, { message: "Country is required" })
    .regex(new RegExp("[a-zA-Z]{2,}"), "Country name is incorrect"),
});

const inputs: InputProps[] = [
  { id: "street", label: "Street" },
  { id: "houseNumber", label: "House name / number" },
  { id: "flatNumber", label: "Flat Number" },
  { id: "city", label: "City" },
  { id: "postcode", label: "Postcode" },
  { id: "country", label: "Country" },
];

export const CreateUpdateAddressModalWindow = ({ addressToUpdate }: { addressToUpdate?: Address | null }) => {
  const { user } = useUser();
  const { closeModal } = useModal();

  const { createAddress, isCreating } = useCreateAddress();
  const { updateAddress, isUpdating } = useUpdateAddress();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    shouldFocusError: false,
  });

  function setTextFieldProps({ id, label }: InputProps) {
    const error = errors[id]?.message;

    const inputProps = {
      ...register(id),
      ...(addressToUpdate && addressToUpdate[id] ? { defaultValue: addressToUpdate[id] as string } : {}),
    };

    return { id, label, error, inputProps };
  }

  function handleAddressCreation(data: FormValues) {
    addressToUpdate
      ? updateAddress({ newAddressData: data, id: addressToUpdate.id }, { onSuccess: closeModal })
      : createAddress({ ...data, user_id: user!.id }, { onSuccess: closeModal });
  }

  return (
    <Modal.Window header={`${addressToUpdate ? "Edit" : "Add"} Address`} name="address" onClose={reset}>
      <Form onSubmit={handleSubmit(handleAddressCreation)}>
        {inputs.map(({ id, label }) => (
          <TextField key={id} {...setTextFieldProps({ id, label })} />
        ))}

        <Buttons>
          <Button small disabled={isCreating || isUpdating}>
            {addressToUpdate ? "Edit" : "Create"}
          </Button>
          <Button small type="button" variation="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </Buttons>
      </Form>
    </Modal.Window>
  );
};
