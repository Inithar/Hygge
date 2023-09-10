import { styled } from "styled-components";
import { media } from "../../../styles/helpers";

export const StyledWrapper = styled.div`
  margin-inline: auto;
  padding: 2.4rem;
  max-width: 73rem;
  width: 100%;
  border: 0.2rem solid ${({ theme }) => theme.colors.accent.one};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  ${media("xs")} {
    padding: 3.2rem;
  }

  ${media("md")} {
    max-width: unset;
  }
`;

export const Title = styled.p`
  margin-bottom: 2.4rem;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
  text-transform: uppercase;
`;
