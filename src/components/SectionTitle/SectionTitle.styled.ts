import styled from "styled-components";
import { AlignOption } from "./SectionTitle";

export const StyledSectionTitle = styled.div<{ align: AlignOption }>`
  text-align: ${({ align }) => align};

  & > p {
    margin-bottom: 0.6rem;
    font-style: italic;
  }
`;
