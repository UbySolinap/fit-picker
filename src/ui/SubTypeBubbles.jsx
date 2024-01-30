import Button from "./Button";

function SubTypeBubbles({ subTypes, handleRemoveType }) {
  return (
    <div className="flex flex-wrap">
      {subTypes.map((garmentType) => (
        <Button
          onClick={() => handleRemoveType(garmentType)}
          key={garmentType}
          className="mr-1 mt-1 rounded-full border-2 border-color-dark-blue px-2 py-1 text-sm font-semibold italic text-color-dark-blue duration-100 hover:scale-110 hover:border-red-400 hover:text-red-400 md:text-base"
        >
          {garmentType}
        </Button>
      ))}
    </div>
  );
}

export default SubTypeBubbles;
