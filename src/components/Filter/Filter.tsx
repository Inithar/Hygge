import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { StyledFilter, FilterButton } from "./Filter.styled";

type FilterProps = {
  filterField: string;
  options: {
    label: string;
    value: string;
  }[];
};

export const Filter = ({ filterField, options }: FilterProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField);

  useEffect(() => {
    if (!currentFilter) {
      searchParams.set(filterField, options[0].value);
      setSearchParams(searchParams);
    }
  }, [currentFilter, filterField, searchParams, setSearchParams, options]);

  function handleClick(value: string) {
    searchParams.set(filterField, value);

    if (searchParams.get("page")) {
      searchParams.set("page", "1");
    }

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={crypto.randomUUID()}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
};
