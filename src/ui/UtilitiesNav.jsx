import { useSelector } from "react-redux";
import { getEmpty } from "../features/picker/pickerSlice";

import ClearClothes from "../features/picker/ClearClothes";
import RandomizeClothes from "../features/picker/RandomizeClothes";
import CheckFit from "./CheckFit";

function UtilitiesNav({ open, onClose }) {
  const isEmpty = useSelector(getEmpty);

  return (
    <ul className="mt-3 space-y-3">
      <RandomizeClothes open={open} onClose={onClose} />
      <ClearClothes open={open} isEmpty={isEmpty} onClose={onClose} />
      <CheckFit open={open} isEmpty={isEmpty} onClose={onClose} />
    </ul>
  );
}

export default UtilitiesNav;
