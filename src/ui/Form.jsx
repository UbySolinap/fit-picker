function Form({ isLoading, formTitle, children }) {
  return (
    <div
      className={`px-6 py-5 text-sm md:px-3 md:text-base ${isLoading ? "opacity-50" : ""}`}
    >
      <h1 className="mb-2 border-b border-color-light-blue text-lg font-bold italic text-color-dark-blue">
        {formTitle}
      </h1>
      {children}
    </div>
  );
}

export default Form;
