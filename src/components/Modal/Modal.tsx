import { createPortal } from "react-dom";
import {
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";

import { FocusTrap } from "../FocusTrap";
import { Overlay, StyledModal, ModalHeader, Divider } from "./Modal.styled";

type OnWindowCloseType = (() => void) | undefined;

type ModalContextType = {
  openName: string;
  open: (windowName: string) => void;
  close: () => void;
  onWindowClose: Dispatch<SetStateAction<OnWindowCloseType>>;
};

type OpenProps = {
  children: ReactElement;
  opens: string;
};

type WindowProps = {
  children: ReactNode;
  name: string;
  header: string;
  maxWidth?: string;
  onClose?: () => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const Modal = ({ children }: { children: ReactNode }) => {
  const [openName, setOpenName] = useState("");
  const [onWindowClose, setOnWindowClose] = useState<OnWindowCloseType>(undefined);

  function open(windowName: string) {
    setOpenName(windowName);
  }

  function close() {
    setOpenName("");
    onWindowClose?.();
  }

  return (
    <ModalContext.Provider value={{ openName, open, close, onWindowClose: setOnWindowClose }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens: opensWindowName }: OpenProps) => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("Modal.Open was used outside of the modal provider");
  }

  const { open } = context;

  function handleClick() {
    children.props?.onClick?.();
    open(opensWindowName);
  }

  return cloneElement(children, { onClick: handleClick });
};

const Window = ({ children, name, maxWidth, header, onClose }: WindowProps) => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("Modal.Window was used outside of the modal provider");
  }

  const { close, onWindowClose, openName } = context;

  const isWindowOpen = name === openName;
  useDisableBodyScroll(isWindowOpen);

  const ref = useOutsideClick<HTMLDivElement>(close);

  useEffect(() => {
    if (onClose && isWindowOpen) {
      onWindowClose(() => onClose);
    }
  }, [isWindowOpen, onWindowClose, onClose]);

  return isWindowOpen
    ? createPortal(
        <FocusTrap active={isWindowOpen}>
          <Overlay>
            <StyledModal ref={ref} maxWidth={maxWidth}>
              <ModalHeader>
                <p>{header}</p>
                <button type="button" onClick={close} aria-label="Close modal">
                  <img src="/icons/delete.svg" alt="close modal icon" />
                </button>
              </ModalHeader>

              <Divider />

              <div>{children}</div>
            </StyledModal>
          </Overlay>
        </FocusTrap>,
        document.body
      )
    : null;
};

Modal.Open = Open;
Modal.Window = Window;
