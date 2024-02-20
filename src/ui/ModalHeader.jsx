function ModalHeader({ children, type }) {
  return (
    <h1
      className={`mb-2 border-b border-color-light-blue text-lg font-bold italic ${type === "warning" ? "text-red-500" : "text-color-dark-blue"} `}
    >
      {children}
    </h1>
  );
}

export default ModalHeader;
