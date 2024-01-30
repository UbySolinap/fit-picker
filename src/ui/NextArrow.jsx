import { GrNext } from "react-icons/gr";

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-4 top-48 z-10 text-3xl text-color-dark-gray duration-100 hover:scale-125"
    >
      <GrNext />
    </div>
  );
}

export default NextArrow;
