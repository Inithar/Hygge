import { Dispatch, SetStateAction, createContext, useState } from "react";
import { GrHomeRounded as Home } from "react-icons/gr";

import { useUser } from "../../../hooks/api/useUser";
import { useUserAddresses } from "../../../hooks/api/useUserAddresses";

import { Modal } from "../../../components/Modal/Modal";
import { Button } from "../../../components/Button";
import { Text } from "../../../components/Text";
import { Spinner } from "../../../components/Spinner";
import { Wrapper } from "../Wrapper/Wrapper";
import { CreateUpdateAddressModalWindow } from "../../../components/CreateUpdateAddressModalWindow/CreateUpdateAddressModalWindow";
import { DeleteAddressModal } from "./DeleteAddressModal/DeleteAddressModal";
import { Address } from "./Address/Address";
import { Error } from "../../../components/Error/Error";
import { Container, NoSavedAddresses, SpinnerBox } from "./Addresses.styled";

import { Address as AddressType } from "../../../types/collection";

type AddressesContextType = {
  addressToUpdate: AddressType | null;
  addressToDelete: AddressType | null;
  setAddressToUpdate: Dispatch<SetStateAction<AddressType | null>>;
  setAddressToDelete: Dispatch<SetStateAction<AddressType | null>>;
};

export const AddressesContext = createContext<AddressesContextType | undefined>(undefined);

export const Addresses = () => {
  const { user } = useUser();
  const { addresses, isLoading, error } = useUserAddresses(user!.id);

  const [addressToUpdate, setAddressToUpdate] = useState<AddressType | null>(null);
  const [addressToDelete, setAddressToDelete] = useState<AddressType | null>(null);

  const value = {
    addressToUpdate,
    addressToDelete,
    setAddressToUpdate,
    setAddressToDelete,
  };

  if (error) {
    return <Error />;
  }

  return (
    <Wrapper title="Addresses">
      <AddressesContext.Provider value={value}>
        <Modal>
          <Modal.Open opens="address">
            <Button small onClick={() => setAddressToUpdate(null)}>
              Add Address
            </Button>
          </Modal.Open>

          <Container>
            {isLoading ? (
              <SpinnerBox>
                <Spinner size="md" />
              </SpinnerBox>
            ) : addresses?.length ? (
              addresses.map((address) => <Address key={address.id} {...address} />)
            ) : (
              <NoSavedAddresses>
                <Home />
                <Text>You have no saved addresses.</Text>
              </NoSavedAddresses>
            )}
          </Container>

          <CreateUpdateAddressModalWindow addressToUpdate={addressToUpdate} />
          <DeleteAddressModal />
        </Modal>
      </AddressesContext.Provider>
    </Wrapper>
  );
};
