import styled from "styled-components";
import { media } from "../../../styles/helpers";
import { Section } from "../../../components/Section";

export const StyledSection = styled(Section)`
  & > div > h2 {
    max-width: 50.4rem;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 5.6rem;

  ${media("sm")} {
    gap: 6.4rem;
  }

  ${media("md")} {
    grid-template-columns: 1fr 1fr;
  }

  ${media("xl")} {
    gap: 7.2rem 9.6rem;
  }
`;

export const Method = styled.div`
  & > h3 {
    margin-bottom: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }

  & > p {
    font-size: ${({ theme }) => theme.fontSizes.md};

    a {
      font-family: ${({ theme }) => theme.fontFamilies.montserrat.semiBold};
      text-decoration: underline;
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;
