import { PiArrowBendUpRightBold } from "react-icons/pi";

import Button from "./Button";
import Modal from "./Modal";
import PickClothesForm from "../features/picker/PickClothesForm";

function CheckFit({ open, isEmpty, onClose }) {
  return (
    <li className="utilities-list">
      <Modal>
        <Modal.Open opens="pick-clothes-form" onClose={onClose}>
          <Button
            className={`utilities-button ${open ? "w-3/4 px-2" : "w-[90%] px-1"} ${isEmpty && "opacity-50"}`}
            disabled={isEmpty}
          >
            <PiArrowBendUpRightBold className="utilities-icon" />
            <span className={`sidebar-text ${open ? "" : "hidden"}`}>
              Check Fit
            </span>
          </Button>
        </Modal.Open>
        <Modal.Window name="pick-clothes-form">
          <PickClothesForm />
        </Modal.Window>
      </Modal>
    </li>
  );
}

export default CheckFit;
