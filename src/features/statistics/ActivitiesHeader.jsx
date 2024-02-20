function ActivitiesHeader() {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr_0.1fr] justify-items-center border-b bg-color-light-brown py-2 font-bold text-white">
      <div>Date</div>
      <div>Clothes</div>
      <div className="pr-3 md:pr-0 lg:pr-5">Status</div>
    </div>
  );
}

export default ActivitiesHeader;
