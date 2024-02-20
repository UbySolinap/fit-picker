import { useSelector } from "react-redux";
import Types from "./Types";

function TypesDiv() {
  const tops = useSelector((state) => state.picker.tops.subTypes);
  const bottoms = useSelector((state) => state.picker.bottoms.subTypes);
  const outerwear = useSelector((state) => state.picker.outerwear.subTypes);
  const footwear = useSelector((state) => state.picker.footwear.subTypes);

  return (
    <div className="mb-5 lg:mb-0">
      <Types type="Tops" subtypes={tops} />
      <Types type="Bottoms" subtypes={bottoms} />
      <Types type="Outerwear" subtypes={outerwear} />
      <Types type="Footwear" subtypes={footwear} />
    </div>
  );
}

export default TypesDiv;
