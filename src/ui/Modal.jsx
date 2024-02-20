import { createPortal } from "react-dom";
import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { FaRegWindowClose } from "react-icons/fa";

import Button from "./Button";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName, onClose }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => {
      if (opensWindowName === "pick-clothes-form") onClose();

      open(opensWindowName);
    },
  }); // Cloned the button so that the onclick prop can be passed
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useRef();

  // useEffect to handle the close modal when clicked outside
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) close();
      }

      document.addEventListener("click", handleClick, true); // "true" will make the event happen in capturing phase not in bubbling phase.

      return () => document.removeEventListener("click", handleClick, true);
    },
    [close],
  );

  // Use effect to handle close modal on "esc" key press
  useEffect(
    function () {
      function escKeyPress(e) {
        if (e.key === "Escape") close();
      }

      document.addEventListener("keyup", escKeyPress, true);

      return () => document.removeEventListener("keyup", escKeyPress, true);
    },
    [close],
  );

  if (name !== openName) return null;

  return createPortal(
    <div
      ref={ref}
      className="fixed left-1/2 top-1/2 z-50 w-max -translate-x-1/2 -translate-y-1/2 rounded-md border bg-white shadow-lg"
    >
      <Button type="modalClose" onClick={close}>
        <FaRegWindowClose />
      </Button>
      <div>{cloneElement(children, { onCloseModal: close })}</div>
    </div>,
    document.body,
  ); // createPortal to render this modal as a direct child of body element. It lives outside the DOM structure of the application
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
