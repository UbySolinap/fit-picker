import { format } from "date-fns";
import { useDeleteActivity } from "./useDeleteActivity";

import { FiDelete } from "react-icons/fi";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ConfirmationModal from "../../ui/ConfirmationModal";
import ActivityPreviewModal from "./ActivityPreviewModal";
import ActivityStatus from "../../ui/ActivityStatus";

function Activity({ data }) {
  const { isDeleting, deleteActivity } = useDeleteActivity();

  const { id, date, clothesImages, status } = data;

  const formattedDate = format(new Date(date.slice(0, 10)), "MM/dd/yyyy");

  return (
    <Modal>
      <Modal.Open opens="activity-preview">
        <div className="grid cursor-pointer grid-cols-[1fr_2fr_1fr_0.1fr] justify-items-center border-b py-1 text-color-dark-blue duration-100 hover:scale-105 hover:bg-color-light-gray hover:text-white">
          <div className="flex items-center font-bold ">{formattedDate}</div>

          <div className="flex gap-1 md:gap-2 xl:gap-4">
            {clothesImages.map((image) => (
              <img
                src={image}
                key={image}
                alt="item image"
                className="h-10 w-10"
              />
            ))}
          </div>

          <div className="ml-4 flex items-center justify-between md:ml-6 lg:ml-3 xl:ml-1">
            <ActivityStatus status={status} />
          </div>

          <Modal>
            <Modal.Open opens="activity-delete-confirmation">
              <Button type="delete">
                <FiDelete className="mr-3" />
              </Button>
            </Modal.Open>
            <Modal.Window name="activity-delete-confirmation">
              <ConfirmationModal
                type="deleteActivity"
                onClick={() => deleteActivity(id)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Modal>
        </div>
      </Modal.Open>

      <Modal.Window name="activity-preview">
        <ActivityPreviewModal data={data} />
      </Modal.Window>
    </Modal>
  );
}

export default Activity;
