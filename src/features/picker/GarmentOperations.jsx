import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./pickerSlice";
import { useDeleteItem } from "./useDeleteItem";

import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

import Button from "../../ui/Button";
import GarmentType from "../../ui/GarmentType";
import Modal from "../../ui/Modal";
import ConfirmationModal from "../../ui/ConfirmationModal";
import EditClothesForm from "./EditClothesForm";

function GarmentOperations({ garment, selected }) {
  const { id: itemId, type, timesWorn, subtype } = garment;
  const { isDeleting, deleteItem } = useDeleteItem(type);
  const dispatch = useDispatch();

  return (
    <div className="w-full border-t p-1 px-1.5 xl:px-3">
      <div className="flex-between">
        <h2 className="text-sm italic text-neutral-400 md:text-base">Type:</h2>
        <div className="space-x-1">
          <Modal>
            <Modal.Open opens="edit-item-form">
              <Button type="edit">
                <FaRegEdit />
              </Button>
            </Modal.Open>
            <Modal.Window name="edit-item-form">
              <EditClothesForm garment={garment} type={type} />
            </Modal.Window>
          </Modal>

          <Modal>
            <Modal.Open opens="delete-confirmation">
              <Button type="delete">
                <FaRegTrashAlt />
              </Button>
            </Modal.Open>
            <Modal.Window name="delete-confirmation">
              <ConfirmationModal
                type="delete"
                onClick={() => deleteItem(itemId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Modal>
        </div>
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
        <p className="pr-2 text-xs font-semibold italic text-color-dark-gray duration-100 hover:scale-125 sm:text-sm">
          {timesWorn ? (
            <span className="hover:text-green-600">{timesWorn}x worn</span>
          ) : (
            <span className="hover:text-black">Not yet worn</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default GarmentOperations;
