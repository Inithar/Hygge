import styled, { css } from "styled-components";

import { AlignOption } from "./SectionTitle";
import { media } from "../../styles/helpers";

export const StyledSectionTitle = styled.div<{ align: AlignOption; margin?: boolean }>`
  text-align: ${({ align }) => align};

  & > p {
    margin-bottom: 0.6rem;
    font-style: italic;
  }

  ${({ margin }) =>
    margin &&
    css`
      & > h2 {
        margin-bottom: 5.6rem;

        ${media("sm")} {
          margin-bottom: 6.4rem;
        }

        ${media("xl")} {
          margin-bottom: 7.2rem;
        }
      }
    `}
`;
