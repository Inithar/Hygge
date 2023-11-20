import { styled } from "styled-components";
import { media, rgba } from "../../../styles/helpers";

export const CategoryName = styled.p`
  margin-bottom: 2.4rem;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const DetailsContainer = styled.div`
  display: grid;
  gap: 3.2rem;
`;

export const Divider = styled.div`
  margin-block: 3.2rem;
  height: 0.1rem;
  width: 100%;
  background-color: ${({ theme }) => rgba(theme.colors.basic.black, 0.1)};
`;

export const Form = styled.form`
  display: grid;
  gap: 1.6rem;

  ${media("xs")} {
    gap: 2.4rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-top: 1.6rem;

  ${media("xs")} {
    flex-direction: row-reverse;
    justify-content: end;
  }
`;
