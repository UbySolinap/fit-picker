function Select({ options, onChange, value, className }) {
  return (
    <select className={className} onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Select;
