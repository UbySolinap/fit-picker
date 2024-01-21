import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useClothes } from "./useClothes";
import { addItem } from "./pickerSlice";

import { FaRepeat } from "react-icons/fa6";

import Button from "../../ui/Button";

// Function to select a random item from the given clothes
function pickRandomItem(clothes, itemType) {
  const filteredClothes = clothes.filter((item) => item.type === itemType);
  const randomItem =
    filteredClothes[Math.floor(Math.random() * filteredClothes.length)];

  return randomItem;
}

function RandomizeClothes({ open }) {
  const { clothes, error } = useClothes();

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
      const randomItem = pickRandomItem(clothes, "tops");
      dispatch(addItem(randomItem));
    }
    if (!isBottomsLocked) {
      const randomItem = pickRandomItem(clothes, "bottoms");
      dispatch(addItem(randomItem));
    }
    if (!isOuterwearLocked) {
      const randomItem = pickRandomItem(clothes, "outerwear");
      dispatch(addItem(randomItem));
    }
    if (!isFootwearLocked) {
      const randomItem = pickRandomItem(clothes, "footwear");
      dispatch(addItem(randomItem));
    }

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
