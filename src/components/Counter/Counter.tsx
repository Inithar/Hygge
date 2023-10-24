import { ChangeEvent } from "react";
import { MdOutlineKeyboardArrowRight as ArrowNext, MdOutlineKeyboardArrowLeft as ArrowPrev } from "react-icons/md";

import { StyledCounter } from "./Counter.styled";

type CounterProps = {
  value: number;
  max?: number;
  min?: number;
  onChange: (value: number) => void;
};

export const Counter = ({ value, max, min, onChange }: CounterProps) => {
  function handleIncrement() {
    if (max) {
      if (value < max) onChange(value + 1);
    } else {
      onChange(value + 1);
    }
  }

  function handleDecrement() {
    if (min) {
      if (value > min) onChange(value - 1);
    } else {
      onChange(value - 1);
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);

    if (isNaN(value)) return;
    if (max && value > max) return onChange(max);
    if (min && value < min) return onChange(min);

    onChange(value);
  }

  return (
    <StyledCounter>
      <button onClick={handleDecrement} aria-label="decrement">
        <ArrowPrev />
      </button>
      <input value={value} size={value.toString().length} onChange={handleInputChange} />
      <button onClick={handleIncrement} aria-label="increment">
        <ArrowNext />
      </button>
    </StyledCounter>
  );
};
