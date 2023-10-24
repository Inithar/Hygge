import { useState, MouseEvent, useRef } from "react";
import { MdOutlineKeyboardArrowDown as ArrowDown } from "react-icons/md";
import { FiCheck as Checked} from "react-icons/fi";

import { Body, Container, Head, Label, Option } from "./Select.styled";

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
  onChange: (value: string) => void;
};

type SelectProps = {
  options: SelectOption[];
  placeholder?: string;
  label?: string;
} & (SingleSelectProps | MultipleSelectProps);

export const Select = ({ multiple, selected, options, placeholder, label, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

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
    <div>
      {label && <Label onClick={() => selectRef.current?.focus()}>{label}</Label>}

      <Container
        ref={selectRef}
        isBodyOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setIsOpen(false)}
        tabIndex={0}
      >
        <Head>
          <span>{multiple ? placeholder : options.find((o) => isOptionSelected(o))?.label ?? placeholder}</span>
          <ArrowDown />
        </Head>

        <Body>
          {options.map((option) => (
            <Option
              isSelected={isOptionSelected(option)}
              onClick={(e) => handleOptionClick(e, option)}
              key={option.value}
            >
              <span>{option.label}</span>
              <Checked />
            </Option>
          ))}
        </Body>
      </Container>
    </div>
  );
};
