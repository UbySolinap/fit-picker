import Filter from "../../ui/Filter";

function ActivitiesOperations() {
  const options = ["All", "Picked", "Added", "Deleted"];

  return (
    <div className="mb-2 flex">
      <div className="mr-2 flex items-center">
        <p className="mr-2 font-bold text-color-dark-blue">Filter Activity:</p>
        <Filter options={options} type="activity" />
      </div>
    </div>
  );
}

export default ActivitiesOperations;
