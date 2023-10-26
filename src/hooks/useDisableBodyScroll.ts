import { useEffect } from "react";

export const useDisableBodyScroll = (isHidden: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isHidden ? "hidden" : "visible";
    document.body.style.paddingRight = isHidden ? "1.7rem" : "0rem";
  }, [isHidden]);
};
