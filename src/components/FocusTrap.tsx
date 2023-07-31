import { ReactNode } from "react";
import ReactFocusTrap from "focus-trap-react";

import { useWindowSize } from "../hooks/useWindowSize";

import { breakpoints, Breakpoint } from "../constants/breakpoints";

type FocusTrapProps = {
  breakpoint?: Breakpoint;
  children: ReactNode;
  active: boolean;
};

export const FocusTrap = ({ breakpoint, children, active }: FocusTrapProps) => {
  const { width } = useWindowSize();

  if (breakpoint) {
    return width < breakpoints[breakpoint] ? (
      <ReactFocusTrap active={active}>{children}</ReactFocusTrap>
    ) : (
      <>{children}</>
    );
  }

  return <ReactFocusTrap active={active}>{children}</ReactFocusTrap>;
};
