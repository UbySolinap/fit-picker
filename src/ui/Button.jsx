function Button({ className, children, type, onClick, disabled }) {
  const styles = {
    pick: "border-2 text-white bg-green-600 border-green-600 px-2 py-1 rounded-xl font-semibold italic hover:scale-110 duration-100 text-xs md:text-base",
    delete:
      "py-1 pr-2 font-semibold text-red-600 italic hover:scale-150 duration-100 text-sm md:text-base",
    edit: "py-1 pr-2 font-semibold text-color-dark-blue italic hover:scale-150 duration-100 text-sm md:text-base",
    remove:
      "border-2 text-white bg-red-600 border-red-600 px-2 py-1 rounded-xl font-semibold italic hover:scale-110 duration-100 text-xs md:text-base",
    lock: "px-2 py-1.5 md:py-2 text-xl lg:text-2xl border-2 border-color-dark-blue rounded-md bg-color-dark-blue text-white hover:scale-110 duration-100 hover:bg-white hover:text-color-dark-blue",
    unlock:
      "px-2 py-1.5 md:py-2 text-xl lg:text-2xl border-2 rounded-md border-color-dark-blue text-color-dark-blue hover:scale-110 duration-100 hover:bg-color-dark-blue hover:text-white",
    add: "flex items-center border-color-light-blue border-2 py-1 px-2 rounded-md bg-color-light-blue text-white font-bold hover:scale-110 duration-100 md:text-2xl hover:bg-white hover:text-color-light-blue mt-2 sm:mt-0 w-28 md:w-40",
    formButton:
      "border-2 px-1.5 border-color-light-brown rounded-lg bg-color-light-brown text-white font-semibold hover:scale-110 duration-100 hover:text-color-light-brown hover:bg-white",
    submit:
      "border-2 px-1.5 py-1 border-color-light-blue rounded-lg bg-color-light-blue text-white font-semibold hover:scale-110 duration-100 hover:text-color-light-blue hover:bg-white mt-2 md:py-1 md:absolute md:right-3 md:bottom-6",
    modalClose:
      "absolute right-6 md:right-3 top-5 text-color-dark-blue text-lg md:text-2xl hover:scale-125 md:hover:scale-110 duration-100",
    formPick:
      "hover:scale-110 font-bold duration-100 hover:text-color-light-blue hover:bg-white border-2 px-2 py-2 border-color-light-blue rounded-lg bg-color-light-blue text-white",
    formCancel:
      "hover:scale-110 font-bold duration-100 hover:text-red-500 hover:bg-white border-2 px-2 py-2 border-red-500 rounded-lg bg-red-500 text-white",
  };

  return (
    <button
      className={className ? className : styles[type]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
