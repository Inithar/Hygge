import { css } from "styled-components";

export const visuallyHidden = css`
  position: absolute;
  top: 0;
  margin: -1px;
  width: 0.1rem;
  height: 0.1rem;
  border: 0;
  padding: 0;
  overflow: hidden;
`;
