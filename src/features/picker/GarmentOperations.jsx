import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./pickerSlice";
import { useDeleteItem } from "./useDeleteItem";
import { addActivity } from "../../services/apiActivities";

import Button from "../../ui/Button";
import GarmentType from "../../ui/GarmentType";
import GarmentUtilityButtons from "./GarmentUtilityButtons";

function GarmentOperations({ garment, selected }) {
  const { id: itemId, type, subtype, image } = garment;
  const { isDeleting, deleteItem } = useDeleteItem(type);
  const dispatch = useDispatch();

  function handleDeleteItem() {
    const newActivity = { status: "Deleted", clothesImages: [image] };

    addActivity(newActivity);

    deleteItem(itemId);
  }

  return (
    <div className="w-full border-t p-1 px-1.5 xl:px-3">
      <div className="flex-between">
        <h2 className="text-sm italic text-neutral-400 md:text-base">Type:</h2>
        <GarmentUtilityButtons
          garment={garment}
          onClick={handleDeleteItem}
          disabled={isDeleting}
        />
      </div>

      {subtype.length === 0 ? (
        <span className="text-xs font-semibold italic text-neutral-400 sm:text-sm">
          No type to show.
        </span>
      ) : (
        <GarmentType subTypes={subtype} />
      )}

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
      </div>
    </div>
  );
}

export default GarmentOperations;
