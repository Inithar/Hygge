import styled from "styled-components";
import { media } from "../../../../styles/helpers";

export const StyledAddress = styled.div`
  display: grid;
  gap: 2.4rem;
  padding: 2.4rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  ${media("xs")} {
    grid-template-columns: 1fr auto;
    align-items: center;
  }
`;

export const Details = styled.div`
  & > p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    overflow-wrap: anywhere;
    text-transform: capitalize;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;

  ${media("xs")} {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  ${media("sm")} {
    & > button {
      min-width: 15rem;
    }
  }

  ${media("lg")} {
    grid-template-columns: 1fr 1fr;
  }
`;
