function GarmentType({ subTypes, type }) {
  if (!subTypes) return;

  return (
    <div
      className={`flex flex-wrap ${type === "statistics" || type === "tooltip" ? "justify-center" : ""}`}
    >
      {subTypes.map((garmentType) => (
        <p
          key={garmentType}
          className="mr-1.5 mt-1 rounded-md bg-color-dark-blue px-1 py-1 text-xs font-semibold italic text-white duration-100 hover:scale-110 sm:px-2 lg:text-sm"
        >
          {garmentType}
        </p>
      ))}
    </div>
  );
}

export default GarmentType;
