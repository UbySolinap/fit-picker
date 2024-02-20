import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useAddActivity } from "./useAddActivity";
import { useUpdateItemWornCount } from "./useUpdateItemWornCount";

import Form from "../../ui/Form";
import SelectedImages from "../../ui/SelectedImages";
import Button from "../../ui/Button";

function PickClothesForm({ onCloseModal }) {
  const { addActivity, isAdding } = useAddActivity();
  const { updateItem } = useUpdateItemWornCount();

  const selectedTops = useSelector((state) => state.picker.tops.item);
  const selectedBottoms = useSelector((state) => state.picker.bottoms.item);
  const selectedOuterwear = useSelector((state) => state.picker.outerwear.item);
  const selectedFootwear = useSelector((state) => state.picker.footwear.item);

  const selectedItems = {
    tops: selectedTops,
    bottoms: selectedBottoms,
    outerwear: selectedOuterwear,
    footwear: selectedFootwear,
  };

  const selectedItemsInfos = Object.values(selectedItems);

  const SelectedItemsImages = [];
  for (const item of selectedItemsInfos) {
    if (Object.values(item).length !== 0) {
      SelectedItemsImages.push(item.image);
    }
  }

  function handleSubmit() {
    const newActivity = {
      status: "Picked",
      clothesImages: SelectedItemsImages,
    };

    for (let i = 0; i < selectedItemsInfos.length; i++) {
      if (Object.values(selectedItemsInfos[i]).length !== 0) {
        const newTimesWorn = selectedItemsInfos[i].timesWorn + 1;
        const itemId = selectedItemsInfos[i].id;

        updateItem({ itemId, newTimesWorn });
      }
    }

    addActivity(
      { ...newActivity },
      {
        onSuccess: () => {
          toast.success(
            "🧥 Fit picked, go out and show your style to the world!",
          );
          onCloseModal?.();
        },
      },
    );
  }

  return (
    <Form formTitle="Go with this clothes?">
      <div className="w-96 md:w-[30rem]">
        <SelectedImages items={SelectedItemsImages} type="picked" />
      </div>

      <div className="mt-2 flex justify-center gap-x-2 border-t border-color-dark-blue pt-2">
        <Button
          type="formCancel"
          onClick={() => onCloseModal?.()}
          disabled={isAdding}
        >
          Try another
        </Button>
        <Button type="formPick" onClick={handleSubmit} disabled={isAdding}>
          Pick this outfit
        </Button>
      </div>
    </Form>
  );
}

export default PickClothesForm;
