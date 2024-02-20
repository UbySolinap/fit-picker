import toast from "react-hot-toast";
import { supabaseUrl } from "../../services/supabase";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAddItem } from "./useAddItem";
import { useAddActivity } from "./useAddActivity";

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
  const { addActivity } = useAddActivity();

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

  const handleAdd = useCallback(() => {
    if (!typeInput) return;

    if (subTypes.includes(typeInput)) {
      toast.dismiss();
      toast.success("Type already exists.");
      setTypeInput("");
      return;
    }

    setSubTypes((subTypes) => [...subTypes, typeInput]);
    setTypeInput("");
  }, [typeInput, subTypes]);

  function handleSubmit() {
    if (!image) return;

    // Generate a random image name
    const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
    const imagePath = `${supabaseUrl}/storage/v1/object/public/garment-images/${imageName}`;

    const newItem = { type, image, subtype: subTypes, timesWorn: 0 };

    const newActivity = { status: "Added", clothesImages: [imagePath] };

    addActivity(newActivity);

    addItem(
      { newItem, imageName, imagePath },
      {
        onSuccess: () => {
          onCloseModal?.();
        },
      },
    );
  }

  // useEffect for handling "enter" key press to add subtypes.
  useEffect(
    function () {
      function enterKeyPress(e) {
        if (e.key === "Enter") handleAdd();
      }

      document.addEventListener("keyup", enterKeyPress, true);

      return () => document.removeEventListener("keyup", enterKeyPress, true);
    },
    [handleAdd],
  );

  return (
    <Form isLoading={isAdding} formTitle="Add item">
      <div className="md:flex">
        <img
          src={image ? URL.createObjectURL(image) : "./placeholder-img.png"}
          alt="item image"
          className="image-size"
        />
        <div className="w-min">
          <ImageAdd onChange={handleImage} type="add-photo" />

          <div className="flex gap-x-1 border-t border-color-light-blue pb-1 pt-2">
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

          <div className="flex items-center gap-x-1 py-2">
            <p className="font-bold text-color-dark-blue">Suggestions:</p>
            <Select
              options={options}
              onChange={handleSelect}
              type="selection"
            />
          </div>

          <InputType
            typeInput={typeInput}
            onChange={handleTypeInput}
            onClick={handleAdd}
          />
        </div>

        <Button type="submit" onClick={handleSubmit} disabled={isAdding}>
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default AddClothesForm;
