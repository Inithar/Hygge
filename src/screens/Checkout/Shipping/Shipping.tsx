import { ChangeEvent } from "react";

import { useUserAddresses } from "../../../hooks/api/useUserAddresses";
import { useCheckoutForm } from "../../../hooks/context/useCheckoutForm";
import { useUser } from "../../../hooks/api/useUser";

import { CreateUpdateAddressModalWindow } from "../../../components/CreateUpdateAddressModalWindow/CreateUpdateAddressModalWindow";
import { Modal } from "../../../components/Modal/Modal";
import { Text } from "../../../components/Text";
import { FormStepWrapper } from "../FormStepWrapper/FormStepWrapper";
import { Container, Input, RadioTile, RadioTileGroup, NewAddressButton, StyledButton } from "./Shipping.styled";

export const Shipping = () => {
  const { user } = useUser();
  const { addresses, isLoading } = useUserAddresses(user!.id);

  const { checkoutData, setCheckoutData } = useCheckoutForm();

  function onAddressChange(e: ChangeEvent<HTMLInputElement>) {
    setCheckoutData((prev) => ({ ...prev, addressId: parseInt(e.target.value) }));
  }

  return (
    <FormStepWrapper heading="Shipping Details">
      <Text>Select existing address or add new one</Text>

      <RadioTileGroup>
        {addresses?.map(({ id, street, houseNumber, flatNumber, postcode, city, country }) => (
          <Container key={id}>
            <Input id={id.toString()} type="radio" name="address" value={id} onChange={onAddressChange} />
            <RadioTile>
              <label htmlFor={id.toString()}>
                <Text>
                  {street} {houseNumber} / {flatNumber}
                </Text>
                <Text>
                  {postcode}, {city}
                </Text>
                <Text>{country}</Text>
              </label>
            </RadioTile>
          </Container>
        ))}
      </RadioTileGroup>

      <Modal>
        <Modal.Open opens="address">
          <NewAddressButton aria-label="Create new address">
            <img src="/icons/plus-square.svg" />
          </NewAddressButton>
        </Modal.Open>

        <CreateUpdateAddressModalWindow />
      </Modal>

      <StyledButton block disabled={!checkoutData.addressId}>
        Continue
      </StyledButton>
    </FormStepWrapper>
  );
};
