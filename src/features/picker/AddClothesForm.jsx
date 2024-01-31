import toast from "react-hot-toast";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAddItem } from "./useAddItem";

import Button from "../../ui/Button";
import Select from "../../ui/Select";
import GarmentType from "../../ui/GarmentType";
import ImageAdd from "../../ui/ImageAdd";
import InputType from "../../ui/InputType";
import Form from "../../ui/Form";

function AddClothesForm({ type, onCloseModal }) {
  const [image, setImage] = useState("");
  const [subTypes, setSubTypes] = useState([]);
  const [typeInput, setTypeInput] = useState("");
  const { isAdding, addItem } = useAddItem(type);

  const subTypesOptions = useSelector((state) => state.picker[type].subTypes);

  const options = ["--------", ...subTypesOptions];

  function handleImage(e) {
    // This will create a URL that will pertain on the uploaded image
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  }

  function handleSelect(e) {
    if (e.target.value === "--------") return;

    if (subTypes.includes(e.target.value)) {
      toast.dismiss();
      toast.success("Type already exists.");
      return;
    }

    setSubTypes((subTypes) => [...subTypes, e.target.value]);
  }

  function handleTypeInput(e) {
    setTypeInput(e.target.value);
  }

  function handleAdd() {
    if (!typeInput) return;

    if (subTypes.includes(typeInput)) {
      toast.dismiss();
      toast.success("Type already exists.");
      setTypeInput("");
      return;
    }

    setSubTypes((subTypes) => [...subTypes, typeInput]);
    setTypeInput("");
  }

  function handleSubmit() {
    if (!image) return;

    const newItem = { type, image, subtype: subTypes, timesWorn: 0 };

    addItem(
      { ...newItem },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      },
    );

    // addItem(newItem); // This will add the new item to the supabase.
  }

  return (
    <Form isLoading={isAdding} formTitle="Add item">
      <div className="w-min md:ml-4 md:flex md:flex-col">
        <div className="md:flex">
          <img
            src={image ? URL.createObjectURL(image) : "./placeholder-img.png"}
            alt="item image"
            className="image-size"
          />

          <ImageAdd onChange={handleImage} />
          <div className="mb-1 flex gap-x-1 border-t border-color-light-blue pt-1">
            <h2 className="text-base font-bold text-color-dark-blue">
              Add type:
            </h2>
            {subTypes.length !== 0 && (
              <Button type="formButton" onClick={() => setSubTypes([])}>
                Clear
              </Button>
            )}
          </div>

          <GarmentType subTypes={subTypes} />

          <div className="mb-2 flex items-center gap-x-1">
            <p className="font-semibold text-color-dark-blue">Suggestions:</p>
            <Select
              options={options}
              onChange={handleSelect}
              className="rounded-sm border border-color-dark-blue px-1"
            />
          </div>

          <InputType
            typeInput={typeInput}
            onChange={handleTypeInput}
            onClick={handleAdd}
          />

          <Button type="submit" onClick={handleSubmit} disabled={isAdding}>
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default AddClothesForm;
