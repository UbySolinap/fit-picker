import GarmentType from "../../ui/GarmentType";

function Types({ type, subtypes }) {
  return (
    <div className="mb-3 flex flex-col items-center">
      <h1 className="mb-1 justify-center border-b-2 border-color-dark-gray text-xl font-bold italic text-color-dark-gray">
        {type}
      </h1>
      <GarmentType subTypes={subtypes} type="statistics" />
    </div>
  );
}

export default Types;
