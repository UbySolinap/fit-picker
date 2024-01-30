import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./pickerSlice";
import toast from "react-hot-toast";

import { FaRepeat } from "react-icons/fa6";

import Button from "../../ui/Button";
import { useClothesType } from "./useClothesType";

// Function to select a random item from the given clothes
function pickRandomItem(clothes) {
  const randomItem = clothes[Math.floor(Math.random() * clothes.length)];

  return randomItem;
}

function RandomizeClothes({ open, onClose }) {
  const { clothes: topsClothes } = useClothesType("tops");
  const { clothes: bottomsClothes } = useClothesType("bottoms");
  const { clothes: outerWearClothes } = useClothesType("outerwear");
  const { clothes: footWearClothes } = useClothesType("footwear");

  const isTopsLocked = useSelector((state) => state.picker.tops.isLocked);
  const isBottomsLocked = useSelector((state) => state.picker.bottoms.isLocked);
  const isOuterwearLocked = useSelector(
    (state) => state.picker.outerwear.isLocked,
  );
  const isFootwearLocked = useSelector(
    (state) => state.picker.footwear.isLocked,
  );

  const dispatch = useDispatch();

  function handleRandomize() {
    if (!isTopsLocked) {
      const randomItem = pickRandomItem(topsClothes);
      dispatch(addItem(randomItem));
    }
    if (!isBottomsLocked) {
      const randomItem = pickRandomItem(bottomsClothes);
      dispatch(addItem(randomItem));
    }
    if (!isOuterwearLocked) {
      const randomItem = pickRandomItem(outerWearClothes);
      dispatch(addItem(randomItem));
    }
    if (!isFootwearLocked) {
      const randomItem = pickRandomItem(footWearClothes);
      dispatch(addItem(randomItem));
    }
    onClose();
    toast.dismiss();
    toast.success("🔀 Randomized clothes selection.");
  }

  return (
    <li className="utilities-list">
      <Button
        className={`utilities-button ${open ? "w-3/4 px-2" : "w-[90%] px-1"}`}
        onClick={handleRandomize}
      >
        <FaRepeat className="utilities-icon" />
        <span className={`sidebar-text ${open ? "" : "hidden"}`}>
          Randomize
        </span>
      </Button>
    </li>
  );
}

export default RandomizeClothes;
