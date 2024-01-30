import { FaRegImage } from "react-icons/fa6";

function ImageAdd({ onChange }) {
  return (
    <div className="my-2">
      <h2 className="mb-1 flex items-center text-base font-bold text-color-dark-blue">
        <FaRegImage className="mr-1" /> Upload a photo:
      </h2>
      <input
        id="image"
        accept="image/*"
        name="image"
        type="file"
        onChange={onChange}
        className="py-1 text-color-dark-blue file:cursor-pointer file:rounded-md file:border-color-light-brown file:bg-color-light-brown file:px-2 file:py-1 file:font-semibold file:text-white hover:file:border-2 hover:file:bg-white hover:file:text-color-light-brown"
      />
    </div>
  );
}

export default ImageAdd;
