import { useAddresses } from "../../../../hooks/context/useAddresses";

import { Modal } from "../../../../components/Modal/Modal";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { StyledAddress, Details, Buttons } from "./Address.styled";

import { Address as AddressType } from "../../../../types/collection";

export const Address = (address: AddressType) => {
  const { id, street, house_number, flat_number, city, postcode, country } = address;

  const { setAddressToDelete, setAddressToUpdate } = useAddresses();

  return (
    <StyledAddress key={id}>
      <Details>
        <Text>
          {street} {house_number} {flat_number && `/ ${flat_number}`}
        </Text>
        <Text>
          {city}, {postcode}
        </Text>
        <Text>{country}</Text>
      </Details>

      <Buttons>
        <Modal.Open opens="address">
          <Button small variation="secondary" onClick={() => setAddressToUpdate(address)}>
            Edit
          </Button>
        </Modal.Open>

        <Modal.Open opens="delete-address">
          <Button small variation="danger" onClick={() => setAddressToDelete(address)}>
            Delete
          </Button>
        </Modal.Open>
      </Buttons>
    </StyledAddress>
  );
};
