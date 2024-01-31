import { useState } from "react";
import { useEditItem } from "./useEditItem";
import toast from "react-hot-toast";

import SubTypeBubbles from "../../ui/SubTypeBubbles";
import InputType from "../../ui/InputType";
import Button from "../../ui/Button";
import Form from "../../ui/Form";

function EditClothesForm({ garment, type, onCloseModal }) {
  const { id: itemId, image, subtype: itemSubtypes } = garment;
  const [newSubtypes, setNewSubtypes] = useState([...itemSubtypes]);
  const [typeInput, setTypeInput] = useState("");
  const { editItem, isEditing } = useEditItem(type);

  function handleRemoveType(val) {
    setNewSubtypes((newSubtypes) =>
      newSubtypes.filter((subType) => subType !== val),
    );
  }

  function handleTypeInput(e) {
    setTypeInput(e.target.value);
  }

  function handleAdd() {
    if (!typeInput) return;

    if (newSubtypes.includes(typeInput)) {
      toast.dismiss();
      toast.success("Type already exists.");
      setTypeInput("");
      return;
    }

    setNewSubtypes((subTypes) => [...subTypes, typeInput]);
    setTypeInput("");
  }

  function handleSubmit() {
    if (itemSubtypes === newSubtypes) return;

    editItem(
      { itemId, newSubtypes },
      {
        onSuccess: () => {
          onCloseModal();
        },
      },
    );
  }

  return (
    <Form isLoading={isEditing} formTitle="Edit item">
      <div className="w-72 md:ml-4 md:flex md:flex-col">
        <div className="md:flex">
          <img src={image} alt="item image" className="image-size" />

          <h2 className="mb-2 mt-2 text-base font-bold text-color-dark-blue">
            Type:
            <span className="font-light italic text-slate-400">
              {" (Click the type to remove)"}
            </span>
          </h2>

          <SubTypeBubbles
            subTypes={newSubtypes}
            handleRemoveType={handleRemoveType}
          />

          <div className="my-2">
            <h2 className="mb-1 mt-1 flex gap-x-1 border-t border-color-light-blue pt-1 text-base font-bold text-color-dark-blue">
              Add type:
            </h2>
            <InputType
              typeInput={typeInput}
              onChange={handleTypeInput}
              onClick={handleAdd}
            />
          </div>

          <Button type="submit" onClick={handleSubmit} disabled={isEditing}>
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default EditClothesForm;
