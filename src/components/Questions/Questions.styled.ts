import { styled } from "styled-components";
import { media } from "../../styles/helpers";

export const Container = styled.div`
  & > div:not(:last-child) {
    margin-bottom: 5.6rem;

    ${media("sm")} {
      margin-bottom: 6.4rem;
    }

    ${media("xl")} {
      margin-bottom: 7.2rem;
    }
  }
`;

export const QuestionsContainer = styled.div`
  display: grid;
  gap: 3.5rem;
  margin-top: 3.5rem;

  ${media("sm")} {
    gap: 4.3rem;
    margin-top: 4.3rem;
  }

  ${media("lg")} {
    grid-template-columns: 1fr 1fr;
    align-items: start;
    gap: 10.4rem 9.6rem;

    & > div > p {
      margin-right: 9.6rem;
    }
  }
`;
