import GarmentOperations from "./GarmentOperations";

function Garment({ garment, selected }) {
  const { image } = garment;

  return (
    <div
      className={`mt-2 items-center  ${selected ? "border-4 border-color-dark-blue shadow-xl shadow-color-dark-blue" : "border-2 border-color-light-brown"} mx-12 rounded-lg sm:mx-2`}
    >
      <div className="flex h-72 items-center justify-center md:h-80">
        <img src={image} alt="garment image" className="image-size" />
      </div>

      <GarmentOperations garment={garment} selected={selected} />
    </div>
  );
}

export default Garment;
