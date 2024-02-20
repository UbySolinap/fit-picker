import { useActivities } from "./useActivities";

import Activity from "./Activity";
import Spinner from "../../ui/Spinner";

function ActivitiesRow() {
  const { activities, isLoading } = useActivities();

  if (isLoading) return <Spinner />;

  return (
    <div className="activities h-96 overflow-x-hidden overflow-y-scroll font-semibold lg:h-[40rem]">
      {activities.map((activity) => (
        <Activity key={activity.id} data={activity} />
      ))}
    </div>
  );
}

export default ActivitiesRow;
