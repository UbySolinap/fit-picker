import Button from "./Button";

function ConfirmationModal({ type, onClick, onCloseModal, disabled }) {
  let paragraph;
  let header;

  if (type === "delete") {
    paragraph =
      "Are you sure you want to delete this item permanently? This action cannot be undone.";
    header = "Deleting Item";
  }

  if (type === "clear") {
    paragraph = "Are you sure you want to clear you clothes selection?";
    header = "Clear Selection";
  }

  return (
    <div className="px-6 py-5 text-sm md:text-base">
      <h1 className="border-b border-color-dark-blue text-lg font-bold italic text-color-dark-blue">
        {header}
      </h1>
      <p className="mb-3 mt-2 w-72 md:w-80">{paragraph}</p>

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
