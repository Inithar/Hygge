import { Tag, DeleteButton } from "./SelectTag.styled";

type SelectTagProps = {
  value: string;
  onDelete: () => void;
};

export const SelectTag = ({ value, onDelete }: SelectTagProps) => (
  <Tag>
    <span>{value}</span>
    <DeleteButton onClick={onDelete} type="button" aria-label="Delete filter">
      &times;
    </DeleteButton>
  </Tag>
);
