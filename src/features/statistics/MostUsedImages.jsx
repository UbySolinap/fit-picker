import { FaStar } from "react-icons/fa";

function MostUsedImages({ images }) {
  return (
    <div className="mb-8 flex h-96 flex-wrap items-center justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="relative duration-200 hover:scale-110">
          <img
            src={image.image}
            alt={image.image}
            className="max-h-44 w-44 object-contain lg:w-40 xl:w-44"
          />
          <div className="absolute bottom-2 right-1 rounded-md bg-color-light-brown px-1">
            <p className="flex items-center gap-1 text-sm font-semibold italic text-white">
              {image.timesWorn} <FaStar />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MostUsedImages;
