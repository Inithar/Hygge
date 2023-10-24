import { ChangeEvent } from "react";
import { CiSquarePlus as Plus } from "react-icons/ci";

import { useUserAddresses } from "../../../hooks/api/useUserAddresses";
import { useCheckout } from "../../../hooks/context/useCheckout";
import { useUser } from "../../../hooks/api/useUser";

import { CreateUpdateAddressModalWindow } from "../../../components/CreateUpdateAddressModalWindow/CreateUpdateAddressModalWindow";
import { Modal } from "../../../components/Modal/Modal";
import { Text } from "../../../components/Text";
import { Spinner } from "../../../components/Spinner";
import { FormStepWrapper } from "../FormStepWrapper/FormStepWrapper";
import {
  Container,
  Input,
  RadioTile,
  RadioTileGroup,
  NewAddressButton,
  StyledButton,
  SpinnerWrapper,
} from "./Shipping.styled";

export const Shipping = () => {
  const { user } = useUser();
  const { addresses, isLoading } = useUserAddresses(user!.id);

  const { orderData, setOrderData, next } = useCheckout();

  function onAddressChange(e: ChangeEvent<HTMLInputElement>) {
    setOrderData((prev) => ({ ...prev, address: parseInt(e.target.value) }));
  }

  return (
    <FormStepWrapper heading="Shipping Details">
      <Text>Select existing address or add new one</Text>

      {isLoading ? (
        <SpinnerWrapper>
          <Spinner size="lg" />
        </SpinnerWrapper>
      ) : (
        <>
          <RadioTileGroup>
            {addresses?.map(({ id, street, houseNumber, flatNumber, postcode, city, country }) => (
              <Container key={id}>
                <Input
                  id={id.toString()}
                  type="radio"
                  name="address"
                  value={id}
                  onChange={onAddressChange}
                  checked={id === orderData.address}
                />

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
                <Plus />
              </NewAddressButton>
            </Modal.Open>

            <CreateUpdateAddressModalWindow />
          </Modal>

          <StyledButton block disabled={!orderData.address} onClick={next}>
            Continue
          </StyledButton>
        </>
      )}
    </FormStepWrapper>
  );
};
