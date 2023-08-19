import styled from "styled-components";
import { media } from "../../../styles/helpers";

export const Container = styled.div`
  picture,
  img {
    width: 100%;
  }

  img {
    display: block;
    margin-inline: auto;
    max-width: 39rem;
  }

  ${media("xs")} {
    img {
      max-width: none;
    }
  }
`;
