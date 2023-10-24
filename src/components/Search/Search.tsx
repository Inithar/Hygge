import { FormEvent } from "react";
import { FiSearch as SearchIcon } from "react-icons/fi";

import { Form } from "./Search.styled";

export const Search = () => {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="search">Search</label>
        <input id="search" placeholder="Search" />
      </div>
      
      <SearchIcon />
    </Form>
  );
};
