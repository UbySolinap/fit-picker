function Form({ isLoading, formTitle, image, children }) {
  return (
    <div
      className={`px-6 py-5 text-sm md:px-3 md:text-base ${isLoading ? "opacity-50" : ""}`}
    >
      <h1 className="mb-2 border-b border-color-light-blue text-lg font-bold italic text-color-dark-blue">
        {formTitle} item form
      </h1>
      <div className="md:flex">
        <img src={image} alt="item image" className="image-size" />
        {children}
      </div>
    </div>
  );
}

export default Form;
