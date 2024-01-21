import { useDispatch } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { addItem, removeItem } from "./pickerSlice";

import Button from "../../ui/Button";
import GarmentType from "../../ui/GarmentType";

function Garment({ garment, selected }) {
  const { image, type, timesWorn, subtype } = garment;
  const dispatch = useDispatch();

  return (
    <div
      className={`mt-2 flex flex-col items-center ${selected ? "border-4 border-green-400 shadow-lg shadow-green-500" : "border-2 border-color-light-brown"} mx-12 rounded-lg sm:mx-2`}
    >
      <div className="flex h-72 items-center justify-center md:h-80">
        <img
          src={image}
          alt="garment image"
          className="h-64 w-72 object-contain md:h-72 md:w-80"
        />
      </div>
      <div className="w-full border-t p-1 px-1.5 xl:px-3">
        <div className="flex-between">
          <h2 className="text-sm italic text-neutral-400 md:text-base">
            Type:
          </h2>
          <Button type="delete">
            <FaRegTrashAlt />
          </Button>
        </div>
        <div className="flex-between">
          <div className="flex space-x-1">
            {subtype.map((garmentType) => (
              <GarmentType garmentType={garmentType} key={garmentType} />
            ))}
          </div>
        </div>
        <div className="flex-between pb-1 pt-2">
          {selected ? (
            <Button onClick={() => dispatch(removeItem(type))} type="remove">
              Remove
            </Button>
          ) : (
            <Button onClick={() => dispatch(addItem(garment))} type="pick">
              Pick this!
            </Button>
          )}
          <h1 className="text-xs italic text-neutral-400 sm:text-sm">
            {timesWorn ? `${timesWorn}x worn` : "Not yet worn"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Garment;
