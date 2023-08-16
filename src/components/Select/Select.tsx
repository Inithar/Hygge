import { useState, MouseEvent } from "react";
import { Body, Container, Head, Option } from "./Select.styled";

export type SelectOption = {
  label: string;
  value: string;
};

type MultipleSelectProps = {
  multiple: true;
  selected: string[];
  onChange: (value: string[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  selected?: string;
  onChange: (value: string | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
  placeholder: string;
} & (SingleSelectProps | MultipleSelectProps);

export const Select = ({ multiple, selected, options, placeholder, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function isOptionSelected(option: SelectOption) {
    return multiple ? selected.includes(option.value) : selected === option.value;
  }

  function selectOption(option: SelectOption) {
    if (multiple) {
      onChange(isOptionSelected(option) ? selected.filter((o) => o !== option.value) : [...selected, option.value]);
    } else {
      if (!isOptionSelected(option)) {
        onChange(option.value);
      }
    }
  }

  function handleOptionClick(e: MouseEvent, option: SelectOption) {
    e.stopPropagation();
    selectOption(option);

    if (!multiple) {
      setIsOpen(false);
    }
  }

  return (
    <Container onClick={() => setIsOpen((prev) => !prev)} onBlur={() => setIsOpen(false)} tabIndex={0}>
      <Head isBodyOpen={isOpen}>
        <span>{multiple ? placeholder : options.find((o) => isOptionSelected(o))?.label ?? placeholder}</span>
        <img src="/icons/arrow-down.svg" alt="arrow icon" />
      </Head>

      <Body isOpen={isOpen}>
        {options.map((option) => (
          <Option
            isSelected={isOptionSelected(option)}
            onClick={(e) => handleOptionClick(e, option)}
            key={option.value}
          >
            <span>{option.label}</span>
            <img src="/icons/checkmark.svg" alt="checkmark icon" />
          </Option>
        ))}
      </Body>
    </Container>
  );
};
