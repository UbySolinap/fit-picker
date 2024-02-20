import { GrNext } from "react-icons/gr";

function NextArrow({ onClick, type }) {
  const base =
    "absolute z-10 text-3xl text-color-dark-gray duration-100 hover:scale-125 ";

  const styles = {
    main: base + "right-4 top-48",
    statistics: base + "right-1 top-96",
  };

  return (
    <div onClick={onClick} className={styles[type]}>
      <GrNext />
    </div>
  );
}

export default NextArrow;
