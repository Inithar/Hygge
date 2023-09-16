import { styled } from "styled-components";
import { media } from "../../styles/helpers";

export const Container = styled.div`
  display: grid;
  gap: 4rem;
  margin-inline: auto;
  max-width: 68.8rem;

  ${media("sm")} {
    gap: 4.8rem;
  }

  ${media("lg")} {
    align-items: start;
    grid-template-columns: 1fr minmax(auto, 55.2rem);
    max-width: unset;
  }

  ${media("xl")} {
    gap: 9.6rem;
  }
`;
