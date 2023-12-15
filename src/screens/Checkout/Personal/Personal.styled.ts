import { styled } from "styled-components";

export const Form = styled.form`
  display: grid;
  gap: 2.4rem;

  & > button {
    margin-top: 3.2rem;
  }

  & > div > input::-webkit-outer-spin-button,
  & > div > input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
