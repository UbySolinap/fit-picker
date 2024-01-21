function GarmentType({ garmentType }) {
  return (
    <p className="rounded-md bg-color-dark-blue px-1 py-1 text-xs font-semibold italic text-white duration-100 hover:scale-110 sm:px-2 md:text-base">
      {garmentType}
    </p>
  );
}

export default GarmentType;
