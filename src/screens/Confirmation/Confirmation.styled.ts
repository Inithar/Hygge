import styled from "styled-components";
import { Section } from "../../components/Section";
import { media } from "../../styles/helpers";

export const StyledSection = styled(Section)`
  margin-inline: auto;
  max-width: 90rem;
`;

export const Description = styled.div`
  display: grid;
  gap: 1.6rem;

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  ${media("sm")} {
    & > p {
      font-size: ${({ theme }) => theme.fontSizes.md};
    }
  }
`;

export const Container = styled.div`
  margin-top: 5.6rem;
`;

export const SpinnerWrapper = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.basic.white};
  z-index: 99999;
`;
