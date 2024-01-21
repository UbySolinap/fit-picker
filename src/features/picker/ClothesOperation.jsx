import Lock from "../../ui/Lock";

function ClothesOperation({ type }) {
  return (
    <div className="mx-4 flex items-center gap-x-1 border-b-2 border-color-light-gray py-2 sm:mx-2">
      <h1 className="rounded-lg bg-color-dark-gray px-2 py-1 text-lg font-bold text-white md:text-3xl">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h1>
      <Lock type={type} />
    </div>
  );
}

export default ClothesOperation;
