import ActivitiesHeader from "./ActivitiesHeader";
import ActivitiesRow from "./ActivitiesRow";

function ActivitiesTable() {
  return (
    <div className="rounded-md border border-color-light-brown text-xs">
      <ActivitiesHeader />
      <ActivitiesRow />
    </div>
  );
}

export default ActivitiesTable;
