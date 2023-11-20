import { useUser } from "../../../hooks/api/useUser";

import { Modal } from "../../../components/Modal/Modal";
import { EditFullNameModal } from "./Modals/EditFullNameModal";
import { EditPasswordModal } from "./Modals/EditPasswordModal";
import { EditPhoneModal } from "./Modals/EditPhoneModal";

import { Wrapper } from "../Wrapper/Wrapper";
import { DetailField } from "./DetailField/DetailField";
import { CategoryName, DetailsContainer, Divider } from "./Details.styled";

export const Details = () => {
  const { user } = useUser();

  return (
    <Modal>
      <Wrapper title="Account Details">
        <CategoryName>Personal Details</CategoryName>

        <DetailsContainer>
          <DetailField
            label="Full Name"
            value={`${user?.user_metadata.name} ${user?.user_metadata.surname}`}
            modalName="full-name"
          />

          <DetailField label="Phone Number" value={user?.user_metadata.phone} modalName="phone" />
        </DetailsContainer>

        <Divider />

        <CategoryName>Login Details</CategoryName>

        <DetailsContainer>
          <DetailField label="Email Address" value={user?.email} />
          <DetailField label="Password" value="**********" modalName="password" />
        </DetailsContainer>
      </Wrapper>

      <EditFullNameModal />
      <EditPhoneModal />
      <EditPasswordModal />
    </Modal>
  );
};
