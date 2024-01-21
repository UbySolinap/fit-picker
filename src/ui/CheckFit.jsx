import { PiArrowBendUpRightBold } from "react-icons/pi";

import Button from "./Button";

function CheckFit({ open, isEmpty }) {
  return (
    <li className="utilities-list">
      <Button
        className={`utilities-button ${open ? "w-3/4 px-2" : "w-[90%] px-1"} ${isEmpty && "opacity-50"}`}
        disabled={isEmpty}
      >
        <PiArrowBendUpRightBold className="utilities-icon" />
        <span className={`sidebar-text ${open ? "" : "hidden"}`}>
          Check Fit
        </span>
      </Button>
    </li>
  );
}

export default CheckFit;
