import { GrPrevious } from "react-icons/gr";

function PrevArrow({ onClick, type }) {
  const base =
    "absolute z-10 text-3xl text-color-dark-gray duration-100 hover:scale-125 ";

  const styles = {
    main: base + "left-4 top-48",
    statistics: base + "left-1 top-96",
  };

  return (
    <div onClick={onClick} className={styles[type]}>
      <GrPrevious />
    </div>
  );
}

export default PrevArrow;
