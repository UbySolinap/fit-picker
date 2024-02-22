import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Filter({ type, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(e) {
    searchParams.set(type, e.target.value);
    setSearchParams(searchParams);
  }

  const filterValue = searchParams.get(type);

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={filterValue ? filterValue : ""}
      type="filter"
    />
  );
}

export default Filter;
