import styled from "styled-components";
import { Link } from "react-router-dom";

import { media } from "../../../styles/helpers";

export const Container = styled.div`
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

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  font-size: ${({ theme }) => theme.fontSizes.md};

  & > img {
    width: 2.2rem;
    height: 2.2rem;
  }

  & > span {
    line-height: 1;
  }
`;

export const SpinnerContainer = styled(Container)`
  display: grid;
  place-items: center;
  height: 50rem;
`;
