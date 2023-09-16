import styled from "styled-components";
import { media } from "../../../styles/helpers";

export const Container = styled.div`
  padding: 2.4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  & > h3 {
    margin-bottom: 3.2rem;
  }

  ${media("xs")} {
    padding: 4rem;

    & > h3 {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    }
  }

  ${media("sm")} {
    padding: 5.6rem;
  }
`;
