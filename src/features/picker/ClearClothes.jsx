import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearList } from "./pickerSlice";

import { IoMdRemoveCircleOutline } from "react-icons/io";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmationModal from "../../ui/ConfirmationModal";

function ClearClothes({ open, isEmpty, onClose }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  function handleClear() {
    // Clears the clothes selection
    dispatch(clearList());

    // Clears all filter values
    searchParams.set("tops", "All");
    searchParams.set("bottoms", "All");
    searchParams.set("outerwear", "All");
    searchParams.set("footwear", "All");
    setSearchParams(searchParams);

    onClose();
    toast.dismiss();
    toast.success("⭕ Clothes selection cleared.");
  }

  return (
    <li className="utilities-list">
      <Modal>
        <Modal.Open opens="clear-confirmation">
          <Button
            className={`utilities-button ${open ? "w-3/4 px-2" : "w-[90%] px-1"} ${isEmpty && "opacity-50"}`}
          >
            <IoMdRemoveCircleOutline className="utilities-icon" />
            <span className={`sidebar-text ${open ? "" : "hidden"}`}>
              Clear
            </span>
          </Button>
        </Modal.Open>
        <Modal.Window name="clear-confirmation">
          <ConfirmationModal
            onClick={handleClear}
            disabled={isEmpty}
            type="clear"
          />
        </Modal.Window>
      </Modal>
    </li>
  );
}

export default ClearClothes;
