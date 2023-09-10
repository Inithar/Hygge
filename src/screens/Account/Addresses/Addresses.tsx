import { Dispatch, SetStateAction, createContext, useState } from "react";

import { useUser } from "../../../hooks/useUser";
import { useUserAddresses } from "../../../hooks/useUserAddresses";

import { Modal } from "../../../components/Modal/Modal";
import { Button } from "../../../components/Button";
import { Text } from "../../../components/Text";
import { Spinner } from "../../../components/Spinner";
import { Wrapper } from "../Wrapper/Wrapper";
import { CreateEditAddressModal } from "./CreateEditAddressModal/CreateEditAddressModal";
import { DeleteAddressModal } from "./DeleteAddressModal/DeleteAddressModal";
import { Address } from "./Address/Address";
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
  const { addresses, isLoading } = useUserAddresses(user!.id);

  const [addressToUpdate, setAddressToUpdate] = useState<AddressType | null>(null);
  const [addressToDelete, setAddressToDelete] = useState<AddressType | null>(null);

  const value = {
    addressToUpdate,
    addressToDelete,
    setAddressToUpdate,
    setAddressToDelete,
  };

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
                <img src="/icons/home.svg" alt="home icon" />
                <Text>You have no saved addresses.</Text>
              </NoSavedAddresses>
            )}
          </Container>

          <CreateEditAddressModal />
          <DeleteAddressModal />
        </Modal>
      </AddressesContext.Provider>
    </Wrapper>
  );
};
