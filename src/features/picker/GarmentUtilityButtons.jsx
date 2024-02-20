import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import InfoModal from "../../ui/InfoModal";
import ConfirmationModal from "../../ui/ConfirmationModal";
import EditClothesForm from "./EditClothesForm";

function GarmentUtilityButtons({ garment, onClick, disabled }) {
  return (
    <div className="space-x-4 pr-2">
      <Modal>
        <Modal.Open opens="garment-information">
          <Button type="info">
            <BsInfoCircleFill />
          </Button>
        </Modal.Open>
        <Modal.Window name="garment-information">
          <InfoModal garment={garment} />
        </Modal.Window>
      </Modal>

      <Modal>
        <Modal.Open opens="edit-item-form">
          <Button type="edit">
            <FaRegEdit />
          </Button>
        </Modal.Open>
        <Modal.Window name="edit-item-form">
          <EditClothesForm garment={garment} type={garment.type} />
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
            onClick={onClick}
            disabled={disabled}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default GarmentUtilityButtons;
