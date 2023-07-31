import { useEffect } from "react";

export const useDisableBodyScroll = (isHidden: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isHidden ? "hidden" : "visible";
  }, [isHidden]);
};
