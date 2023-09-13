import { useContext } from "react";

import { useModal } from "../../../../hooks/context/useModal";
import { useDeleteAddress } from "../../../../hooks/useDeleteAddress";

import { AddressesContext } from "../Addresses";

import { Modal } from "../../../../components/Modal/Modal";
import { Text } from "../../../../components/Text";
import { Button } from "../../../../components/Button";
import { Buttons, Container } from "./DeleteAddressModal.styled";

export const DeleteAddressModal = () => {
  const { closeModal } = useModal();
  const { deleteAddress, isDeleting } = useDeleteAddress();

  const { addressToDelete } = useContext(AddressesContext)!;

  if (!addressToDelete) {
    return;
  }

  const { street, houseNumber, flatNumber, city, postcode, country } = addressToDelete;

  function handleDelete() {
    deleteAddress(addressToDelete!.id, { onSuccess: closeModal });
  }

  return (
    <Modal.Window header="Delete address" name="delete-address">
      <Container>
        <div>
          <Text>Are you sure you want to delete this address:</Text>

          <Text>
            {street} {houseNumber} {flatNumber && `/ ${flatNumber}`}
          </Text>
          <Text>
            {city}, {postcode}
          </Text>
          <Text>{country}</Text>
        </div>

        <Buttons>
          <Button small type="button" variation="danger" disabled={isDeleting} onClick={handleDelete}>
            Delete
          </Button>

          <Button small type="button" variation="secondary" onClick={closeModal}>
            Cancel
          </Button>
        </Buttons>
      </Container>
    </Modal.Window>
  );
};
