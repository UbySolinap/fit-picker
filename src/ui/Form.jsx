import ModalHeader from "./ModalHeader";

function Form({ isLoading, formTitle, children }) {
  return (
    <div
      className={`px-6 py-5 text-sm md:px-3 md:text-base ${isLoading ? "opacity-50" : ""}`}
    >
      <ModalHeader>{formTitle}</ModalHeader>
      {children}
    </div>
  );
}

export default Form;
