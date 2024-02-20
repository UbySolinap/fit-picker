import { useSelector } from "react-redux";

import Filter from "../../ui/Filter";
import Lock from "../../ui/Lock";
import AddItem from "../../ui/AddItem";

function ClothesOperation({ type }) {
  const subTypeOptions = useSelector((state) => state.picker[type].subTypes);
  const options = ["All", ...subTypeOptions];

  return (
    <div className="mx-4 gap-x-1 border-b-2 border-color-light-gray py-2 sm:mx-2 ">
      <div className="flex space-x-1.5">
        <AddItem type={type} />
        <Filter type={type} options={options} />
        <Lock type={type} />
      </div>
    </div>
  );
}

export default ClothesOperation;
