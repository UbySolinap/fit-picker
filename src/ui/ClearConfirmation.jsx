import Button from "./Button";
import ModalHeader from "./ModalHeader";

function ConfirmationModal({ onClick, onCloseModal, disabled }) {
  return (
    <div className="px-6 py-5 text-sm md:text-base">
      <ModalHeader type="warning">Deleting All Activities</ModalHeader>
      <p className="mb-3 mt-2 w-72 md:w-80">
        <span className="font-semibold text-red-500">WARNING:</span> You are in
        the process of deleting all of your activity history. Once confirmed,
        there is no reclaiming of your history. Do you really want to proceed?
      </p>

      <div className="flex justify-end space-x-1">
        <Button onClick={onCloseModal} disabled={disabled} type="pick">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onClick();
            onCloseModal();
          }}
          disabled={disabled}
          type="remove"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
