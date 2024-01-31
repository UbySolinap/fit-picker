function SelectedImages({ items }) {
  // For storing selected item images
  let selectedItemImages = [];
  for (const item of items) {
    if (Object.keys(item[1]).length !== 0) {
      selectedItemImages.push(item[1].image);
    }
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      {selectedItemImages.map((image) => (
        <img
          src={image}
          alt="Selected img"
          key={image}
          className="h-48 w-52 object-contain md:h-60 md:w-64"
        />
      ))}
    </div>
  );
}

export default SelectedImages;
