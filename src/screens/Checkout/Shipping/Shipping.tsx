import { CiSquarePlus as Plus } from "react-icons/ci";

import { useUserAddresses } from "../../../hooks/api/useUserAddresses";
import { useCheckout } from "../../../hooks/context/useCheckout";
import { useUser } from "../../../hooks/api/useUser";

import { CreateUpdateAddressModalWindow } from "../../../components/CreateUpdateAddressModalWindow/CreateUpdateAddressModalWindow";
import { Modal } from "../../../components/Modal/Modal";
import { Text } from "../../../components/Text";
import { Spinner } from "../../../components/Spinner";
import { FormStepWrapper } from "../FormStepWrapper/FormStepWrapper";
import { Error } from "../../../components/Error/Error";
import {
  Container,
  Input,
  RadioTile,
  RadioTileGroup,
  NewAddressButton,
  StyledButton,
  SpinnerWrapper,
} from "./Shipping.styled";

import { OrderAddress } from "../../../types/collection";

export const Shipping = () => {
  const { user } = useUser();
  const { addresses, isLoading, error } = useUserAddresses(user!.id);

  const { orderData, setOrderData, next } = useCheckout();

  function onAddressChange(address: Omit<OrderAddress, "created_at">) {
    setOrderData((prev) => ({ ...prev, address }));
  }

  if (error) {
    return <Error />;
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
            {addresses?.map(({ id, street, house_number, flat_number, postcode, city, country }) => (
              <Container key={id}>
                <Input
                  id={id.toString()}
                  type="radio"
                  name="address"
                  onChange={() => onAddressChange({ id, street, house_number, flat_number, postcode, city, country })}
                  checked={id === orderData.address?.id}
                />

                <RadioTile>
                  <label htmlFor={id.toString()}>
                    <Text>
                      {street} {house_number} / {flat_number}
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
