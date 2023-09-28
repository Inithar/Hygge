import styled from "styled-components";

import { media } from "../../../styles/helpers";

export const Form = styled.form`
  & > button {
    margin-top: 4.8rem;
  }

  ${media("sm")} {
    & > button {
      margin-top: 5.6rem;
    }
  }
`;
