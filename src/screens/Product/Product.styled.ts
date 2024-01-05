import styled from "styled-components";

export const Loader = styled.div`
  position: fixed;
  top: 8rem;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accent.one};
  z-index: 9999999;
`;
