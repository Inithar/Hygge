import { useContext } from "react";
import { ModalContext } from "../../components/Modal/Modal";

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("Modal context was used outside of the modal provider");
  }

  return { openModal: context.open, closeModal: context.close };
};
