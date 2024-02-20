function SectionHeader({ children }) {
  return (
    <div className="mb-4 flex items-center justify-center rounded-md bg-color-light-gray py-2">
      <h1 className="font-serif text-2xl font-bold text-white md:text-3xl">
        {children}
      </h1>
    </div>
  );
}

export default SectionHeader;
