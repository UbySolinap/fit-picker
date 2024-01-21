import { useSelector } from "react-redux";

import ClothesSelector from "../features/picker/ClothesSelector";

function Main() {
  const selectedTop = useSelector((state) => state.picker.tops.item.id);
  const selectedBottom = useSelector((state) => state.picker.bottoms.item.id);
  const selectedOuterWear = useSelector(
    (state) => state.picker.outerwear.item.id,
  );
  const SelectedFootWear = useSelector(
    (state) => state.picker.footwear.item.id,
  );

  return (
    <div className="space-y-5 pt-6">
      <ClothesSelector type="tops" selected={selectedTop} />
      <ClothesSelector type="bottoms" selected={selectedBottom} />
      <ClothesSelector type="outerwear" selected={selectedOuterWear} />
      <ClothesSelector type="footwear" selected={SelectedFootWear} />
    </div>
  );
}

export default Main;
