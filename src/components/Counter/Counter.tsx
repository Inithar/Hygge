import { ChangeEvent } from "react";
import { Icon } from "../Icon/Icon";
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
        <Icon src="/icons/arrow-prev.svg" alt="previous arrow icon" />
      </button>
      <input value={value} size={value.toString().length} onChange={handleInputChange} />
      <button onClick={handleIncrement} aria-label="increment">
        <Icon src="/icons/arrow-next.svg" alt="next arrow icon" />
      </button>
    </StyledCounter>
  );
};
