import { GrPrevious } from "react-icons/gr";

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute left-4 top-48 z-10 text-3xl text-color-dark-gray duration-100 hover:scale-125"
    >
      <GrPrevious />
    </div>
  );
}

export default PrevArrow;
