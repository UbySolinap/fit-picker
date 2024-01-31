import { useSelector } from "react-redux";
import { useClothesPicker } from "./useClothesPicker";
import { useUpdateItemWornCount } from "./useUpdateItemWornCount";

import Form from "../../ui/Form";
import SelectedImages from "../../ui/SelectedImages";
import Button from "../../ui/Button";

function PickClothesForm({ onCloseModal }) {
  const { addActivity, isAdding } = useClothesPicker();
  const { updateItem } = useUpdateItemWornCount();

  const selectedTops = useSelector((state) => state.picker.tops.item);
  const selectedBottoms = useSelector((state) => state.picker.bottoms.item);
  const selectedOuterwear = useSelector((state) => state.picker.outerwear.item);
  const selectedFootwear = useSelector((state) => state.picker.footwear.item);

  const selectedItem = {
    tops: selectedTops,
    bottoms: selectedBottoms,
    outerwear: selectedOuterwear,
    footwear: selectedFootwear,
  };

  const selectedItemArr = Object.entries(selectedItem);

  // For storing selected item's necessary info
  let selectedItemInfo = [];
  for (const item of selectedItemArr) {
    if (Object.keys(item[1]).length !== 0) {
      selectedItemInfo.push({
        id: item[1].id,
        timesWorn: item[1].timesWorn,
        type: item[0],
      });
    }
  }

  function handleSubmit() {
    const newActivity = {
      status: "picked",
      topsImage: selectedTops.image || null,
      bottomsImage: selectedBottoms.image || null,
      outerwearImage: selectedOuterwear.image || null,
      footwearImage: selectedFootwear.image || null,
    };

    // Loop for updating the times worn of an item.
    for (let i = 0; i < selectedItemInfo.length; i++) {
      const newTimesWorn = selectedItemInfo[i].timesWorn + 1;
      const itemId = selectedItemInfo[i].id;
      const type = selectedItemInfo[i].type;
      console.log(type);

      updateItem({ itemId, newTimesWorn });
    }

    addActivity(
      { ...newActivity },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      },
    );
  }

  return (
    <Form formTitle="Go with this clothes?">
      <SelectedImages items={selectedItemArr} />

      <div className="mt-2 flex justify-center gap-x-2 border-t border-color-dark-blue pt-2">
        <Button
          type="formCancel"
          onClick={() => onCloseModal?.()}
          disabled={isAdding}
        >
          TRY ANOTHER
        </Button>
        <Button type="formPick" onClick={handleSubmit} disabled={isAdding}>
          PICK THIS OUTFIT
        </Button>
      </div>
    </Form>
  );
}

export default PickClothesForm;
