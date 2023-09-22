import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Form = styled.form`
  display: grid;
  gap: 2.8rem 1.6rem;

  ${media("xs")} {
    row-gap: 3.6rem;
    grid-template-columns: repeat(8, 1fr);

    & > div {
      &:nth-child(1) {
        grid-column: 1 / -1;
      }

      &:nth-child(2) {
        grid-column: 1 / 5;
      }

      &:nth-child(3) {
        grid-column: 5 / 9;
      }

      &:nth-child(4) {
        grid-column: 1 / 6;
      }

      &:nth-child(5) {
        grid-column: 6 / 9;
      }

      &:nth-child(6) {
        grid-column: 1 / -1;
      }

      &:nth-child(7) {
        grid-column: 4 / 9;
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 1.6rem;

  ${media("xs")} {
    flex-direction: row-reverse;
    justify-content: end;

    & > button {
      min-width: 17rem;
    }
  }
`;
