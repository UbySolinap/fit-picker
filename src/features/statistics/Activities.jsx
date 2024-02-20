import { useClearActivity } from "./useClearActivity";

import { PiCalendarBlankBold } from "react-icons/pi";

import ActivitiesTable from "./ActivitiesTable";
import SectionHeader from "../../ui/SectionHeader";
import ActivitiesOperations from "./ActivitiesOperations";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import ClearConfirmation from "../../ui/ClearConfirmation";

function Activities() {
  const { isClearing, clearActivity } = useClearActivity();

  return (
    <div>
      <SectionHeader>Activity History</SectionHeader>
      <ActivitiesOperations />
      <ActivitiesTable />

      <div className="mt-2 flex justify-end">
        <Modal>
          <Modal.Open opens="clear-activity">
            <Button type="clearActivity">
              <p className="flex items-center">
                <PiCalendarBlankBold className="mr-1" /> Clear Activity
              </p>
            </Button>
          </Modal.Open>
          <Modal.Window name="clear-activity">
            <ClearConfirmation disabled={isClearing} onClick={clearActivity} />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Activities;
