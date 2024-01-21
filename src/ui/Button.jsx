function Button({ className, children, type, onClick, disabled }) {
  const styles = {
    pick: "border-2 text-white bg-green-600 border-green-600 px-2 py-1 rounded-xl font-semibold italic hover:scale-110 duration-100 text-xs md:text-base",
    delete:
      "p-1 font-semibold text-red-600 italic hover:scale-150 duration-100 text-sm md:text-base",
    remove:
      "border-2 text-white bg-red-600 border-red-600 px-2 py-1 rounded-xl font-semibold italic hover:scale-110 duration-100 text-xs md:text-base",
    lock: "px-2 py-1.5 md:py-2 text-xl md:text-lg lg:text-2xl border-2 border-color-dark-blue rounded-md bg-color-dark-blue text-white hover:scale-110 duration-100 hover:bg-white hover:text-color-dark-blue",
    unlock:
      "px-2 py-1.5 md:py-2 text-xl md:text-lg lg:text-2xl border-2 rounded-md border-color-dark-blue text-color-dark-blue hover:scale-110 duration-100 hover:bg-color-dark-blue hover:text-white",
    prev: "absolute left-4 top-64 z-10 text-3xl text-color-dark-gray hover:scale-125 duration-100",
    next: "absolute right-4 top-64 z-10 text-3xl text-color-dark-gray hover:scale-125 duration-100",
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
