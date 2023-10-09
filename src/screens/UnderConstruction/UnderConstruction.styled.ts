import styled from "styled-components";
import { media } from "../../styles/helpers";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 2.4rem;
  height: 100vh;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.text.dark};

  & > h1 {
    margin-top: 3.2rem;
    font-size: ${({ theme }) => theme.fontSizes["xl"]};
    color: ${({ theme }) => theme.colors.text.light};

    span {
      display: block;
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
      color: ${({ theme }) => theme.colors.tertiary.one};
    }
  }

  & > a {
    margin-top: 5.6rem;
  }

  ${media("xs")} {
    & > h1 {
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};

      span {
        font-size: ${({ theme }) => theme.fontSizes["4xl"]};
      }
    }
  }

  ${media("sm")} {
    & > h1 {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};

      span {
        font-size: ${({ theme }) => theme.fontSizes["5xl"]};
      }
    }

    & > a {
      margin-top: 6.4rem;
    }
  }

  ${media("xl")} {
    & > a {
      margin-top: 7.2rem;
    }
  }
`;
