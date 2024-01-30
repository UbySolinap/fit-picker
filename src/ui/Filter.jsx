import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Filter({ type }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const subTypeOptions = useSelector((state) => state.picker[type].subTypes);

  function handleChange(e) {
    searchParams.set(type, e.target.value);
    setSearchParams(searchParams);
  }

  const options = ["All", ...subTypeOptions];

  const filterValue = searchParams.get(type);

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={filterValue ? filterValue : ""}
      className="rounded-md border-2 border-color-dark-blue px-1 py-1.5 text-sm md:text-lg lg:py-2"
    />
  );
}

export default Filter;
