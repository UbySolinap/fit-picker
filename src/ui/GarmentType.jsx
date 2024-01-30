function GarmentType({ subTypes }) {
  return (
    <div className="flex flex-wrap">
      {subTypes.map((garmentType) => (
        <p
          key={garmentType}
          className="mr-1.5 mt-1 rounded-md bg-color-dark-blue px-1 py-1 text-xs font-semibold italic text-white duration-100 hover:scale-110 sm:px-2 md:text-base"
        >
          {garmentType}
        </p>
      ))}
    </div>
  );
}

export default GarmentType;
