function Select({ options, onChange, value, type }) {
  const base =
    "border-2 border-color-dark-blue px-1 font-bold py-1 text-color-dark-blue ";

  const styles = {
    filter: base + "rounded-md text-sm md:text-lg lg:py-2 ",
    selection: base + "rounded-sm ",
  };

  return (
    <select className={styles[type]} onChange={onChange} value={value}>
      {options.map((option) => (
        <option
          key={option}
          value={option}
          className="font-bold text-color-dark-blue"
        >
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
