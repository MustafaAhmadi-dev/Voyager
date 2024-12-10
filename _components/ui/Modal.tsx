"use client";

import { useOutsideClick } from "@/_lib/hooks/useoOutsideClick";
import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

type ModalContextCValue = {
  openName: string;
  open: (openName: string) => void;
  close: () => void;
};
const ModalContext = createContext({} as ModalContextCValue);

type ModalProps = {
  children: ReactNode;
};
function Modal({ children }: ModalProps) {
  const [openName, setOpenName] = useState("");

  function open(opanName: string) {
    setOpenName(opanName);
  }

  function close() {
    setOpenName("");
  }

  return (
    <ModalContext.Provider value={{ open, close, openName }}>
      {children}
    </ModalContext.Provider>
  );
}

type OpenProps = {
  children: ReactNode;
  opens: string;
};
function Open({ children, opens: openWindowName }: OpenProps) {
  const { open } = useContext(ModalContext);

  return (
    <div className="w-max" onClick={() => open(openWindowName)}>
      {children}
    </div>
  );
}

type WindowProps = {
  children: ReactElement;
  name: string;
  scroll?: boolean;
};
function Window({ children, name }: WindowProps) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div
      className="fixed top-0 left-0 h-dvh w-full backdrop-blur-sm z-50 transition-all"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <div
        className="fixed top-1/2 left-1/2 bg-gray-50 dark:bg-gray-800 rounded-lg py-12 px-0 sm:px-16 transition-all -translate-x-1/2 -translate-y-1/2 h-full sm:h-auto overflow-y-scroll sm:overflow-hidden"
        ref={ref}
      >
        <button
          onClick={close}
          className="bg-none border-none p-2 rounded-sm translate-x-3 transition-all absolute top-5 right-8 hover:bg-gray-200"
        >
          <HiXMark className="w-10 h-10 text-gray-600 dark:fill-slate-300 fill-gray-600 stroke-gray-600" />
        </button>

        <div>{cloneElement(children)}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
