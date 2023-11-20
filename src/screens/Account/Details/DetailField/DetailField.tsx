import { Modal } from "../../../../components/Modal/Modal";
import { Box } from "./DetailField.styled";

type DetailFieldProps = {
  label: string;
  value?: string;
  modalName?: string;
};

export const DetailField = ({ label, value = "Not provided", modalName }: DetailFieldProps) => (
  <Box>
    <div>
      <p>{label}</p>
      <p>{value}</p>
    </div>

    {modalName && (
      <Modal.Open opens={modalName}>
        <button>Edit</button>
      </Modal.Open>
    )}
  </Box>
);
