import { FormEvent } from "react";

import { Icon } from "../Icon/Icon";
import { Form } from "./Search.styled";

export const Search = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="search">Search</label>
        <input id="search" placeholder="Search" />
      </div>

      <div>
        <Icon src="/icons/search.svg" iconSize="md" />
      </div>
    </Form>
  );
};
