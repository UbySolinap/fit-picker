import Filter from "../../ui/Filter";
import Lock from "../../ui/Lock";
import AddItem from "../../ui/AddItem";

function ClothesOperation({ type }) {
  return (
    <div className="mx-4 flex flex-col justify-between gap-x-1 border-b-2 border-color-light-gray py-2 sm:mx-2 sm:flex-row">
      <div className="flex space-x-1.5">
        <h1 className="rounded-lg bg-color-dark-gray px-2 py-1 text-lg font-bold text-white md:px-3 md:text-3xl">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
        <Lock type={type} />
        <Filter type={type} />
      </div>

      <AddItem type={type} />
    </div>
  );
}

export default ClothesOperation;
