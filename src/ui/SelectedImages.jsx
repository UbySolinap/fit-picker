function SelectedImages({ items, type }) {
  const styles = {
    picked: "m-2 h-44 w-44 object-contain md:m-3 md:h-52 md:w-52",
    preview: "m-2 h-36 w-36 object-contain md:h-44 md:w-44",
  };

  return (
    <div className="flex flex-wrap items-center justify-center">
      {items.map((image) => (
        <img
          src={image}
          alt="Selected img"
          key={image}
          className={styles[type]}
        />
      ))}
    </div>
  );
}

export default SelectedImages;
