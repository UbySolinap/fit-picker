import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearList } from "./pickerSlice";

import { IoMdRemoveCircleOutline } from "react-icons/io";

import Button from "../../ui/Button";

function ClearClothes({ open, isEmpty }) {
  const dispatch = useDispatch();

  return (
    <li className="utilities-list">
      <Button
        className={`utilities-button ${open ? "w-3/4 px-2" : "w-[90%] px-1"} ${isEmpty && "opacity-50"}`}
        onClick={() => {
          dispatch(clearList());
          toast.dismiss();
          toast.success("⭕ Clothes selection cleared.");
        }}
        disabled={isEmpty}
      >
        <IoMdRemoveCircleOutline className="utilities-icon" />
        <span className={`sidebar-text ${open ? "" : "hidden"}`}>Clear</span>
      </Button>
    </li>
  );
}

export default ClearClothes;
